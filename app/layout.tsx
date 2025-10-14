import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Chatbot } from '@/components/ui/Chatbot'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "MoneyRush — Gamified Financial Literacy for Teens",
  description:
    "MoneyRush is a free gamified simulator that teaches teens to earn, save and invest — adopted by schools. Request a demo for classrooms.",
  keywords: ["financial literacy", "teens", "education", "gamification", "money management", "schools"],
  authors: [{ name: "MoneyRush" }],
  openGraph: {
    title: "MoneyRush — Learn money by living it",
    description: "A gamified life simulator where every money decision teaches a skill — free for students.",
    type: "website",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200115-f0cBBQXapdyWQqN1ScUv9GyqqtBj5G.png",
        width: 1200,
        height: 630,
        alt: "MoneyRush App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MoneyRush — Gamified Financial Literacy for Teens",
    description: "A gamified life simulator where every money decision teaches a skill — free for students.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200115-f0cBBQXapdyWQqN1ScUv9GyqqtBj5G.png",
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
    generator: 'v0.app'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Chatbot />
        </ThemeProvider>
      </body>
    </html>
  )
}
