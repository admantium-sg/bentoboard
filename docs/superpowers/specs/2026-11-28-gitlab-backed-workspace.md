# GitLab-backed workspace: spec

Date: 2026-11-28
Status: proposed, not implemented
Supersedes: nothing yet
Companion plan: to be written at `docs/superpowers/plans/2026-11-28-gitlab-backed-workspace.md`

The audit behind this spec ran against the branch that bundles the research content
(pull request 21). The numbers quoted below, such as the 1433 documents and the 1.1 MB
list response, come from that tree. Land pull request 21 before starting Phase 1.

## Problem

BentoBoard treats a local directory as its workspace. It reads and writes files in that
directory with plain filesystem calls. There is no history, no copy on another machine, and
no record of who changed what. Two people or an agent and a person can overwrite each
other's edits without either noticing.

The fix is to make the workspace a GitLab repository. The app clones the repository on
startup, treats the clone as the workspace, turns every atomic change into one git commit,
and pushes the accumulated commits to GitLab every five minutes.

This spec decides the design and says what happens to each open audit finding under it.

## Goals

- The files the app operates on live in a GitLab project.
- The app loads that project on startup using credentials and project settings from the
  environment.
- Each atomic change made through the app becomes exactly one git commit.
- Commits accumulate locally and all of them are pushed to GitLab every five minutes.
- Nothing the app writes is lost, and nothing the app does destroys work it did not write.

## Non-goals

- The app never creates merge requests, issues, or comments.
- The app talks to GitLab over git only. It calls no GitLab REST endpoint.
- No Git LFS, no submodules, no multi-branch workflows, no webhooks.
- The app runs as a long-lived Node process. It does not run on a serverless platform.
- The app does not become a git client for humans. It has no branch picker and no log view.

## Environment and configuration

The app reads these variables at startup and refuses to start when a required one is
missing.

| Variable | Required | Default | Meaning |
| --- | --- | --- | --- |
| `BENTOBOARD_GITLAB_URL` | no | `https://gitlab.com` | GitLab base URL, for self-hosted instances |
| `BENTOBOARD_GITLAB_PROJECT` | yes in GitLab mode | none | Project path such as `group/project` |
| `BENTOBOARD_GITLAB_TOKEN` | yes in GitLab mode | none | Personal or project access token with `write_repository` |
| `BENTOBOARD_GITLAB_BRANCH` | no | `main` | Branch the app reads and writes |
| `BENTOBOARD_GITLAB_USERNAME` | no | `oauth2` | Username sent with the token for git over HTTPS |
| `BENTOBOARD_STATE_DIR` | no | `$HOME/.bentoboard` | Root for the clone and for app-private state |
| `BENTOBOARD_PUSH_INTERVAL_MS` | no | `300000` | Seconds between push cycles. Five minutes by default |
| `BENTOBOARD_WORKSPACE_FOLDER` | no | none | Local directory used instead of GitLab mode |
| `BENTOBOARD_AUTH_USER` | yes when GitLab mode is on | none | Basic auth user for the app itself |
| `BENTOBOARD_AUTH_PASSWORD` | yes when GitLab mode is on | none | Basic auth password for the app itself |

Rules:

- GitLab mode is on when `BENTOBOARD_GITLAB_PROJECT` is set. Otherwise the app uses
  `BENTOBOARD_WORKSPACE_FOLDER` as a plain local directory and never runs git.
- The project value is a path, not a numeric id. The clone URL is
  `BENTOBOARD_GITLAB_URL/<project>.git`.
- The token never appears in the clone URL, in the repository config, in the process
  argument list, in a log line, or in any file inside the repository.
- The state directory holds the clone at `state/repo` and app-private state at
  `state/state`.

## The credential mechanism

GitLab accepts a personal or project access token as the password for git over HTTPS. The
app supplies the token through `GIT_ASKPASS`:

1. At startup the app writes `state/state/askpass.sh`, mode `0700`, containing a script
   that prints the value of `BENTOBOARD_GITLAB_TOKEN` for a password prompt and the value
   of `BENTOBOARD_GITLAB_USERNAME` for a username prompt.
2. Every git invocation runs with `GIT_ASKPASS` pointing at that script and
   `GIT_TERMINAL_PROMPT=0`.
3. The clone URL stays credential-free, so nothing in `.git/config` or in `git remote -v`
   leaks the token.

The app runs git through `node:child_process.execFile` with an argument array and never
through a shell, so a project path or branch name cannot inject a command. The project path
must match `^[A-Za-z0-9._/-]+$` and must not contain `..`. The branch must match
`^[A-Za-z0-9._/-]+$`.

## Runtime shape

### Startup

Startup runs once, before the server accepts requests, from the `register()` hook in
`src/instrumentation.ts`.

1. Read and validate the environment. On a missing or malformed required variable, log the
   variable name and exit non-zero. Never fall back to a default workspace.
2. Resolve the state directory and create it.
3. If `state/repo` is not a git clone, clone the project into it. Use `--single-branch` for
   the configured branch.
4. If `state/repo` already exists, run `git fetch origin <branch>`.
5. Reconcile the working tree with the remote. See "Startup reconciliation".
6. Write the managed `.gitignore` block into the clone. See "Repository hygiene".
7. Start the push loop. See "The push loop".

Startup is blocking. A slow clone delays the first request, which is the correct trade: the
app has no workspace to serve until the clone lands.

### Steady state

The app serves reads from the clone. Every route that mutates files commits its change
before it answers. The push loop runs on its own timer.

### Shutdown

On `SIGTERM` the app finishes the in-flight commit queue, then pushes the pending commits
once, then exits. A push failure at shutdown does not block exit; the commits stay in the
clone and the next startup pushes them.

## The commit model

An atomic change is one user action. It touches one or more files and produces exactly one
commit that contains every file it touched and nothing else.

Rules:

- Each mutating route computes the set of paths it changed and hands that set to the commit
  queue with a message.
- The commit stages exactly those paths with `git add -- <paths>`. It never runs
  `git add -A` and never stages the whole tree.
- The commit runs with `git -c user.name=... -c user.email=...` so the app never writes to
  the repository config of the user's project. The name defaults to `BentoBoard` and the
  address to `bentoboard@localhost`; both come from `BENTOBOARD_GIT_AUTHOR_NAME` and
  `BENTOBOARD_GIT_AUTHOR_EMAIL`.
- Commit messages read `<action>: <summary>`. Examples: `kanban: move DASH-019 to
  in-review`, `docs: update research/llm-papers-arxiv/findings.md`, `fs: delete
  openclaw-usecases/tmp/2026-11-28`.
- A commit that touches nothing is skipped. A read-only route never commits.
- The queue serializes commits. One commit runs at a time in the process, so two
  simultaneous requests cannot fight over the git index lock and cannot interleave their
  file sets.

### What counts as atomic

| Route | Change | Commit |
| --- | --- | --- |
| `POST /api/fs/write` | Write one file | One commit, one path |
| `POST /api/fs/create` | Create one file | One commit, one path |
| `POST /api/fs/mkdir` | Create one directory | One commit, one path |
| `POST /api/fs/delete` | Delete one file or directory | One commit, one path |
| `POST /api/docs/<path>` | Write one document | One commit, one path |
| `POST /api/kanban/tickets` | Create one ticket file | One commit, one path |
| `POST /api/kanban/ticket/<id>/content` | Rewrite one ticket file | One commit, one path |
| `POST /api/kanban/ticket/<id>/phase` | Move one ticket file and rewrite it | One commit, two paths |

The phase move stops being a copy-then-delete. The app renames the file, then rewrites its
content, then commits both paths as one unit. A crash between the rename and the commit
leaves a dirty tree, and startup reconciliation recovers it.

### Failure during a change

If the filesystem part of a change fails halfway, the app restores the affected paths from
`HEAD` before answering with an error, so the next commit cannot pick up half a change.
The restore uses `git checkout -- <paths>`. It runs only on paths the failing request
itself touched, so it never discards work the app did not write.

## The push loop

Every `BENTOBOARD_PUSH_INTERVAL_MS` the app runs one cycle. The default is five minutes.

Each cycle runs these steps in order.

1. Commit residual changes. Any path in the working tree that the app did not commit
   becomes one commit titled `workspace: external changes`. This captures writes from the
   AI agent and from any other tool that touches the clone. Paths matching the ignore
   rules are skipped.
2. Fetch. `git fetch origin <branch>`.
3. Reconcile. If the remote branch is ahead of the local branch:
   - With no local unpushed commits, fast-forward with `git reset --hard origin/<branch>`.
   - With local unpushed commits, rebase them onto `origin/<branch>` with
     `git rebase origin/<branch>`.
   - If the rebase conflicts, abort the rebase with `git rebase --abort`, keep the local
     commits, and record the conflict. The app never force-pushes and never drops a local
     commit.
4. Push. `git push origin HEAD:refs/heads/<branch>`. One push carries every commit that
   the branch holds, so a five-minute window with forty actions is one push of forty
   commits.
5. Record the result and the time for the status endpoint.

The loop keeps running after a failed cycle. A network failure costs one cycle and the
commits stay in the clone. A conflict costs cycles until a person resolves it, and the
app reports the conflict rather than hiding it.

The loop runs in the server process. It starts from the `register()` hook and guards itself
with a `globalThis` flag so a dev-mode reload does not start a second timer.

### Durability window

Commits are durable on the server's disk from the moment they are made. They reach GitLab
up to five minutes later. If the server's disk is lost inside that window, those commits
are gone. Five minutes is the accepted exposure.

### Status

`GET /api/git/status` returns the branch, the number of commits ahead of the remote, the
time of the last successful push, the result of the last push, and any unresolved conflict.
The sidebar shows it.

## Startup reconciliation

The clone may be in any state when the app starts.

| State at startup | Action |
| --- | --- |
| Clean tree, up to date with remote | Nothing |
| Clean tree, remote ahead | `git reset --hard origin/<branch>` |
| Dirty tree, no local commits | Commit the dirty paths as `recovery: changes from previous session`, then reconcile |
| Dirty tree, local commits present | Commit the dirty paths as `recovery: changes from previous session`, then rebase onto the remote |
| Rebase conflicts | Abort the rebase, keep the local commits, report the conflict, keep serving reads |

Startup never discards a change. A dirty tree is a crash artifact or an agent write, and
both are worth keeping.

## Repository hygiene

The app writes one managed block into the clone's `.gitignore`:

```
# BentoBoard app artifacts
*.bentoboard-tmp
.leave-db.jsonl
```

The app merges that block. It never rewrites or removes other rules.

App scratch files use the suffix `.bentoboard-tmp` and live next to their target so a
rename onto the target stays on one filesystem. The app writes the leave tracker database
in the state directory, not in the repository, so it needs no ignore rule; the rule above
stays for safety.

Symlinks in the repository are allowed on the way in and never followed on the way out.
The path guard keeps rejecting paths that leave the clone, and delete removes a symlink
itself rather than the directory it points at.

The app never commits:

- The GitLab token, in any form.
- Files under `.git`.
- Anything matching the ignore rules.
- Anything outside the clone.

## Workspace layout and the data model

The repository decides the layout. The app reads it.

### Documents

The app no longer hardcodes the folder names `research`, `inbox` and `drafts`. It lists
documents grouped by their top-level folder and each page shows the folders that exist.
The bundled content in this repository does not use those names, so the hardcoded names are
why the Research, Drafts and Inbox pages show nothing today.

`GET /api/docs/list` reads the file list from the git index with `git ls-files -s`, which
gives path, mode and blob id in one call. It returns metadata only. A preview arrives when
the client opens a document, which removes the 1.1 MB response that the same route returns
today.

### Tickets

A ticket id is `ACRONYM-NUMBER` and the number restarts at 1 in every project. Two
projects in one repository therefore both own `DASH-001`, and the ticket lookup scans every
project, so the app can open and save the wrong file.

The fix is to scope a ticket to its project. The key becomes `<project>/<id>`, the route
becomes `/api/kanban/ticket/<project>/<id>`, and the client store keys tickets the same
way.

Ticket numbering is deterministic. The acronym comes from the project slug, and the
number is the highest number across every phase of that project plus one. A name that
already exists returns 409 instead of a 500.

### File listings

`GET /api/fs/ls` and `GET /api/fs/browse` are two implementations of the same listing.
They become one route, backed by the git index, with the browse-only fields kept as
optional query parameters.

### Leaving the workspace

`/workspace` has no index route, so the breadcrumb and the editor back button lead to a
404. The app gets a workspace index page that lists the clone root.

## Finding disposition

Every finding from the 2026-11-28 audit, and what happens to it under this design.

### Must fix

| # | Finding | Disposition | Phase |
| --- | --- | --- | --- |
| 1 | Inbox "New File" always fails with 400 | Fix. The document route accepts a create without a hash when the file does not exist | 4 |
| 2 | Research, Drafts and Inbox show nothing | Redesigned. Pages follow the folders that exist in the repository | 4 |
| 3 | Ticket ids collide across projects | Fix. Ticket keys become `<project>/<id>` | 4 |
| 4 | Deleting a symlink deletes its target | Fix. Delete never follows a symlink | 4 |
| 5 | `/workspace` returns 404 | Fix. Add a workspace index page | 4 |
| 6 | Phase move is copy-then-delete | Redesigned. Rename plus one commit | 2 |

### Should fix

| # | Finding | Disposition | Phase |
| --- | --- | --- | --- |
| 7 | File size limit measured three ways | Fix. One limit constant, measured in bytes | 4 |
| 8 | Document list returns 1.1 MB | Redesigned. List from the git index, no previews | 4 |
| 9 | Leave tracker rescans everything, database grows forever | Redesigned. Database in the state directory, compacted, scan limited to the visible folder | 4 |
| 10 | Tasks counted two different ways | Fix. The stats route reuses the ticket parser | 4 |
| 11 | Ticket acronym and number arbitrary | Fix. Deterministic numbering, 409 on collision | 4 |
| 12 | `next start` does not match the standalone build | Fix. Start `node .next/standalone/server.js`. The push loop needs a long-lived process | 1, 5 |
| 13 | Project names with `_` or `.` rejected | Fix. Git-safe path rule | 4 |
| 14 | A third of the code is unused | Fix. Delete the unused routes, exports and store fields | 5 |
| 15 | `findTicketFile` and the phase-history writer copied | Fix. One module, including a git-aware listing | 4 |
| 16 | Two directory listing routes | Fix. One route | 4 |
| 17 | Without the env var, two installs share `/tmp/workspace` | Removed. The workspace is the clone, and there is no shared fallback | 1 |
| 18 | The app is open to the network without credentials | Fix. GitLab mode requires basic auth, and startup fails without it | 1 |
| 19 | The write routes are the least tested | Fix. Tests run against a local bare repository | 2, 3, 4 |

### Nice to have

| # | Finding | Disposition | Phase |
| --- | --- | --- | --- |
| 20 | Stub pages and a fake upload button | Fix. Delete the dead ends | 5 |
| 21 | Lint warnings | Fix | 5 |
| 22 | Editor does not encode the file path | Fix | 4 |
| 23 | No desktop link to Inbox, Drafts or Research | Fix. Add them to the sidebar | 5 |
| 24 | 46 MB of research content tracked in this repository | Fix. Move the content to the GitLab project, keep a small sample here, stop shipping content in the build output | 5 |
| 25 | Unused `extension` field, two session locations | Fix | 5 |

### New findings this design creates

| # | Finding | Disposition | Phase |
| --- | --- | --- | --- |
| N1 | The remote branch moves under the app | Rebase local commits, never force-push, never drop a commit, report the conflict | 3 |
| N2 | The agent and other tools write to the clone | Commit residual changes each cycle | 2, 3 |
| N3 | The token leaks through config, argv or logs | `GIT_ASKPASS` script, no shell, redacted logs | 1 |
| N4 | A crash leaves a dirty tree | Startup commits the residue as a recovery commit | 1, 3 |
| N5 | The push loop needs a long-lived process | `instrumentation.ts` with a `globalThis` guard. No serverless deployment | 1, 3 |
| N6 | A clone delays the first request | Clone before serving. Measure the clone time on the target project | 1 |
| N7 | Commits reach GitLab up to five minutes late | Accepted. Local commits survive a restart | 3 |
| N8 | One commit per action fills the log | Decided. Keep one commit per action. GitLab handles the volume, and the history is the point | 2 |

## Module layout

New files:

| File | Responsibility |
| --- | --- |
| `src/lib/gitlab/config.ts` | Read and validate the environment. Returns a typed config. Server only |
| `src/lib/gitlab/repo.ts` | Clone, fetch, commit, push, rebase. Wraps `execFile` with the askpass environment |
| `src/lib/gitlab/queue.ts` | Serialize commits. One in-flight commit at a time |
| `src/lib/gitlab/sync.ts` | The push loop, startup reconciliation and the status snapshot |
| `src/instrumentation.ts` | `register()` hook. Prepares the workspace and starts the loop |

Changed files:

| File | Change |
| --- | --- |
| `src/lib/workspace.ts` | The workspace root is the clone. The `content/research` and `/tmp/workspace` fallbacks go away |
| `src/app/api/fs/write/route.ts` | Commit after the write |
| `src/app/api/fs/create/route.ts` | Commit after the write |
| `src/app/api/fs/mkdir/route.ts` | Commit after the write |
| `src/app/api/fs/delete/route.ts` | Commit after the delete, and never follow a symlink |
| `src/app/api/docs/[...path]/route.ts` | Commit after the write, and accept a create without a hash |
| `src/app/api/docs/list/route.ts` | List from the git index, metadata only |
| `src/app/api/kanban/tickets/route.ts` | Commit after the write, and use deterministic numbering |
| `src/app/api/kanban/ticket/[id]/route.ts` | Becomes `[project]/[id]` |
| `src/app/api/kanban/ticket/[id]/content/route.ts` | Becomes `[project]/[id]`, and commits |
| `src/app/api/kanban/ticket/[id]/phase/route.ts` | Becomes `[project]/[id]`, renames instead of copying, and commits |
| `src/lib/leave-tracker.ts` | Database in the state directory, compacted, scan limited to the visible folder |
| `src/lib/store.ts` | Ticket keys become `<project>/<id>`, and the unused fields go away |
| `src/middleware.ts` | Require basic auth in GitLab mode |
| `src/app/(app)/workspace/page.tsx` | New. Lists the clone root |
| `next.config.ts` | Stop shipping `content/research` in the build output |
| `package.json` | `start` runs the standalone server, and a `git:status` script reports the queue |

Deleted files:

| File | Reason |
| --- | --- |
| `src/app/api/fs/watch/route.ts` | The git index replaces mtime polling |
| `src/app/api/fs/move/route.ts` | No caller. The phase move renames in place |
| `src/app/api/kanban/sessions/route.ts` | No caller. The projects route reads the sessions folder directly |
| `content/research/**` | 46 MB and 1438 files that belong in the GitLab project |

New dependency: none. The app shells out to `git`, which version 2.47.3 provides on the
machine this spec was written on. Confirm the version on the deployment host before
Phase 1 starts.

## Test strategy

Tests never reach GitLab. Each test creates a bare repository in a temporary directory,
clones it, and points the app at the local path. The GitLab URL, the project path and the
branch come from the environment, so a `file://` remote exercises the same code.

The tests cover:

- A write produces exactly one commit that contains exactly the written path.
- A phase move produces one commit with two paths.
- A push cycle pushes every buffered commit to the bare repository in one push.
- A remote commit made between cycles is rebased, and the local commits survive.
- A conflicting remote change aborts the rebase, keeps the local commits and reports the
  conflict.
- Residual dirty paths become a commit at the next cycle.
- The token does not appear in the clone URL, in the repository config, in the process
  arguments or in any log line.
- Startup with a dirty tree commits the residue instead of discarding it.

The existing boundary tests, which use a plain temporary directory, stay as they are. They
exercise the local mode.

## Phased rollout

| Phase | Work | Acceptance check |
| --- | --- | --- |
| 1 | GitLab config, repository wrapper, clone at startup, `GIT_ASKPASS`, workspace root, auth required in GitLab mode, standalone start script | The app starts against a local bare repository, serves reads, and the token appears in no config file |
| 2 | Commit queue, commit after every mutating route, residual commits, restore on failure | Every mutating route leaves exactly one commit with the right paths |
| 3 | Push loop, rebase policy, conflict reporting, `GET /api/git/status`, sidebar status | A cycle pushes all buffered commits, and a conflicting remote leaves the local commits intact |
| 4 | The surviving audit findings 1 to 5, 7 to 11, 13, 15, 16, 19, 22 | Each finding has a test that fails before the fix and passes after |
| 5 | Cleanup 14, 20, 21, 23, 24, 25, and the start script from finding 12 | `npm run lint`, `npm run typecheck`, `npm run test:run` and `npm run build` pass, and `npm audit --audit-level=high` reports nothing |
| 6 | README, `.env.example`, the runbook for the operator | A person who has never seen the app can clone, configure and run it from the README |

## Decisions taken

Where the design offered more than one answer, this is the answer and the reason.

- **Keep local mode.** The `BENTOBOARD_WORKSPACE_FOLDER` path stays, so tests and local
  development need no git server. GitLab mode turns on when the project variable is set.
- **Project path, not numeric id.** A path gives the clone URL directly and needs no
  GitLab API call.
- **One commit per action, never squashed.** The history is the reason for the design.
  Squashing per flush window would hide who changed what.
- **The app commits everything dirty.** The agent's writes would otherwise be lost on the
  next fast-forward, and a dirty tree would block the rebase.
- **Rebase, never force-push.** A force-push can delete a colleague's commit.
- **Recover, never discard.** A dirty tree at startup holds either a crash artifact or
  someone's work.
- **One limit constant for file size.** Measured in bytes, because that is what the
  repository stores.
- **No serverless deployment.** The push loop needs a process that stays up.

## Risks

| Risk | Mitigation |
| --- | --- |
| The token leaks | Askpass script, no shell, redacted logs, and a test that greps the config and the argument list |
| A five-minute window loses work on disk failure | The window is the accepted exposure. Shorter intervals push more often at the cost of more pushes |
| A rebase conflict stalls the loop | The app reports it in the status endpoint and in the sidebar, and keeps the commits |
| Commit volume grows the repository | One commit per action is the intent. The repository history is the audit trail |
| The clone slows startup | Clone before serving. Measure the clone time on the real project and report it |
| Two app instances share one project | Both rebase and both push. The second one to push rebases first. Two instances writing the same files conflict, and the app reports it |

## Not decided here

- Whether to offer a manual "push now" button. The five-minute window is short enough that
  the button is optional.
- Whether to prune history in the GitLab project.
- Whether to keep the leave tracker at all. It is the one feature with no counterpart in
  git, because git already records what changed.
