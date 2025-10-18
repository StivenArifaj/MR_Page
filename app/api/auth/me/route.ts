
import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function GET(req: NextRequest) {
    const token = cookies().get('token')?.value

  if (!token) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const decoded = verifyToken(token) as { userId: string };

    if (!decoded) {
        return new NextResponse("Invalid token", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return new NextResponse("Invalid token", { status: 401 });
  }
}
