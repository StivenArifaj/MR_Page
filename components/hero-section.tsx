"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, TrendingUp, Brain, ArrowRight, GraduationCap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { scrollToNewsletter } from '@/lib/utils'

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-accent" />
              Built by students & educators • Piloted in classrooms
            </Badge>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance">
                MoneyRush — <span className="gradient-text">Learn money by living it</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                A gamified life simulator where every money decision teaches a skill — free for students.
              </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
    asChild
  >
    <Link href="/signup">
      Get started — it&apos;s free
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
  
  <Button
    size="lg"
    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
    onClick={scrollToNewsletter}
  >
    <GraduationCap className="mr-2 h-4 w-4" />
    Request School Demo
  </Button>
</div>
            {/* Micro-benefits */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Play a life</p>
                  <p className="text-xs text-muted-foreground">Jobs, bills, emergencies, milestones</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Adaptive learning</p>
                  <p className="text-xs text-muted-foreground">Content adjusts to each user</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">AI Virtual Advisor</p>
                  <p className="text-xs text-muted-foreground">In-game mentor explains choices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Mockup */}
          <div className="relative lg:pl-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto max-w-sm lg:max-w-md animate-float">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />

              {/* Phone mockup */}
              <div className="relative rounded-[2.5rem] border-8 border-foreground/10 shadow-2xl overflow-hidden bg-background">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-07%20200115-f0cBBQXapdyWQqN1ScUv9GyqqtBj5G.png"
                  alt="MoneyRush app showing financial city with Bank, Shop, School, and Savings locations"
                  width={400}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-accent shadow-lg flex items-center justify-center animate-coin-bounce">
                <span className="text-2xl">💰</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-success shadow-lg flex items-center justify-center"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-xl">📈</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
