Research question: What are recent (last 48 hours) OpenClaw platform news, releases, security incidents, enterprise adoption, and community sentiment/use-cases?

Subtopics:
1. Platform news & releases (expect: release notes, changelogs, company blog posts, dated within last 48 hours)
2. Security incidents & enterprise adoption (expect: reports, advisories, company announcements)
3. Community sentiment & showcases (expect: social posts, Reddit/Discord threads, tweets/X posts showing use cases)

Expected outputs:
- For each subtopic: 3-5 web_searches, summary of key facts, source URLs, publication dates
- A cumulative_findings.md update if new insights are found
- A daily report in daily_reports/YYYY-MM-DD.md

Synthesis plan:
- Execute Task 1 (Platform news, releases, security incidents, enterprise adoption) with 3-5 web_search calls and web_fetch on promising URLs
- Execute Task 2 (Community sentiment + Use cases) with 3-5 web_search calls and web_fetch on promising URLs
- Filter findings against existing cumulative_findings.md and last 7 daily reports
- Write outputs to working_directory: cumulative_findings.md, last_check.json, and daily_reports/YYYY-MM-DD.md
- Deliver final Telegram-markdown report as stdout per skill format
