import { NextRequest, NextResponse } from "next/server";

const PERMANENT_REDIRECTS: Record<string, string> = {
  "/tropical-atlantic-food": "/projets/tropical-atlantic-food",
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname in PERMANENT_REDIRECTS) {
    const destination = PERMANENT_REDIRECTS[pathname];
    return NextResponse.redirect(new URL(destination, request.url), {
      status: 301,
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif)$).*)",
  ],
};
