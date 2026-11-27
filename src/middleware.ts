import { NextRequest, NextResponse } from 'next/server'

const STATIC_ASSET = /\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|mjs|map|woff2?|ttf)$/i

function equalSecret(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let difference = 0
  for (let i = 0; i < a.length; i++) difference |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return difference === 0
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  if (pathname.startsWith('/_next/') || STATIC_ASSET.test(pathname)) return NextResponse.next()

  const user = process.env.BENTOBOARD_AUTH_USER
  const password = process.env.BENTOBOARD_AUTH_PASSWORD
  if (!user || !password) return NextResponse.next()

  const header = request.headers.get('authorization') || ''
  const [scheme, encoded, ...rest] = header.split(' ')
  if (scheme?.toLowerCase() === 'basic' && encoded && rest.length === 0) {
    try {
      const decoded = new TextDecoder().decode(Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0)))
      const separator = decoded.indexOf(':')
      if (separator >= 0
        && equalSecret(decoded.slice(0, separator), user)
        && equalSecret(decoded.slice(separator + 1), password)) {
        return NextResponse.next()
      }
    } catch {
      // Malformed Basic credentials get the same 401 as wrong credentials.
    }
  }

  return new NextResponse('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="BentoBoard", charset="UTF-8"' },
  })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|mjs|map|woff2?|ttf)$).*)'],
}
