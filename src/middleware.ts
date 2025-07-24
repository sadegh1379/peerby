import { ROUTS_DASHBOARD, ROUTS_HOME } from '@enums/routs';
import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

const privateRoutes = [ROUTS_DASHBOARD.BASE];

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  const isProtectedRoute = privateRoutes.includes(pathname as ROUTS_DASHBOARD);

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL(ROUTS_HOME.HOME, req.url));
  }

  if (pathname === ROUTS_HOME.BASE) {
    return NextResponse.redirect(new URL(ROUTS_HOME.HOME, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*']
};
