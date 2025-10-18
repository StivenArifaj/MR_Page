
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const { token } = await req.json()

    if (!token) {
      return NextResponse.json({ message: 'Token is required.' }, { status: 400 })
    }

    const user = await prisma.user.findFirst({
      where: {
        verificationToken: token,
        verificationTokenExpires: {
          gt: new Date(), // Check if the token has not expired
        },
      },
    })

    if (!user) {
      return NextResponse.json({ message: 'Invalid or expired verification token.' }, { status: 400 })
    }

    await prisma.user.update({
      where: { id: user.id },
      data: {
        isEmailVerified: true,
        verificationToken: null, // Clear the token so it can't be used again
        verificationTokenExpires: null,
      },
    })

    return NextResponse.json({ message: 'Email verified successfully. You can now log in.' }, { status: 200 })

  } catch (error) {
    console.error('[VERIFY_EMAIL_API]', error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
