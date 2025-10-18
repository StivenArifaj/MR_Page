
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcrypt'
import { createToken } from '@/lib/jwt'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 })
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user || !user.passwordHash) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash)

    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 })
    }
    
    if (!user.isEmailVerified) {
        return NextResponse.json({ message: 'Please verify your email before logging in.' }, { status: 403 })
    }

    const token = createToken({ userId: user.id })

    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    })

    return NextResponse.json({ message: 'Login successful' }, { status: 200 })

  } catch (error) {
    console.error('[LOGIN_API]', error)
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
  }
}
