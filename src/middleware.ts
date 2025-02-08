import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const token = req.cookies.get("next-auth.session-token")?.value;
  const protectedRoutes = ["/dashboard", "/profile", "/settings"];
  const isProtectedRoute = protectedRoutes.some(route => req.nextUrl.pathname.startsWith(route));

  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/settings/:path*"],
};
