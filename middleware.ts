import { NextRequest, NextResponse } from 'next/server'
import { TOKEN } from './common/constants/cookie-keys'

export function middleware(request: NextRequest) {
  const token = request.cookies.get(TOKEN)?.value

  if (
    request.nextUrl.pathname.startsWith('/login') ||
    request.nextUrl.pathname.startsWith('/signup')
  ) {
    if (token) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/create-release')) {
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }
  console.log(token)
}

export const config = {
  matcher: ['/login', '/signup', '/create-release'],
}
