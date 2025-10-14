"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ClipboardCheck, RefreshCw, Trophy, ArrowRight } from "lucide-react"

export function JourneySection() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "Onboarding",
      description: "Quick quiz sets your starting level",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: RefreshCw,
      title: "Core loop",
      description: "Earn → Decide → See results → Learn",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Trophy,
      title: "Milestones & progression",
      description: "Level up: college, career, buying a house, starting a business",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Your MoneyRush journey</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection arrows for desktop */}
            <div className="hidden md:block absolute top-1/4 left-1/3 right-1/3 h-0.5 bg-border">
              <ArrowRight className="absolute -right-2 -top-3 w-6 h-6 text-muted-foreground" />
            </div>
            <div className="hidden md:block absolute top-1/4 left-2/3 right-0 h-0.5 bg-border">
              <ArrowRight className="absolute -right-2 -top-3 w-6 h-6 text-muted-foreground" />
            </div>

            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg relative"
              >
                <CardContent className="p-8 text-center space-y-6">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${step.bgColor} flex items-center justify-center`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
