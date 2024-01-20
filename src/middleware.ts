import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PUBLIC_PATH = ['/', '/login', '/register'];

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value || '';
  const path = request.nextUrl.pathname
  const isPublicPath = PUBLIC_PATH.includes(path);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/property', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}