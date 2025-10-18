import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST() {
  const response = new NextResponse(JSON.stringify({ message: "Logged out" }));
  response.cookies.set("token", "", { httpOnly: true, maxAge: 0 });
  return response;
}
