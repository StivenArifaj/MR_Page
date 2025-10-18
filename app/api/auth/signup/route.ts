
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import sgMail from "@sendgrid/mail";

// Set SendGrid API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return new NextResponse("Missing email or password", { status: 400 });
    }

    const exist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (exist) {
      return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Generate a verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpires = new Date(Date.now() + 3600000); // 1 hour from now

    await prisma.user.create({
      data: {
        email,
        name,
        passwordHash: hashedPassword,
        verificationToken,
        verificationTokenExpires,
      },
    });

    // Automatically determine the base URL for the verification link
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NEXT_PUBLIC_URL;

    const verificationLink = `${baseUrl}/verify-email?token=${verificationToken}`;

    const msg = {
        to: email,
        from: process.env.EMAIL_FROM!,
        subject: 'Verify Your Email Address',
        html: `
            <p>Hello ${name},</p>
            <p>Thanks for signing up! Please verify your email by clicking the link below:</p>
            <a href="${verificationLink}">Verify Email</a>
            <p>This link will expire in 1 hour.</p>
        `,
    };

    await sgMail.send(msg);

    return NextResponse.json({ 
        message: "Signup successful. A verification email has been sent."
    });

  } catch (error) {
    console.error('SIGNUP_API_ERROR', error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
