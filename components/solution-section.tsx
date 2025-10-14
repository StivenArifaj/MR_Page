"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2, Brain, MessageSquare } from "lucide-react"

export function SolutionSection() {
  const features = [
    {
      icon: Gamepad2,
      title: "Life Simulator",
      description:
        "Manage a virtual life: pick jobs, pay bills, buy assets, face emergencies, and learn through outcomes.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Short onboarding quiz sets a baseline; the game adapts to your skill level and choices.",
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: MessageSquare,
      title: "Virtual Advisor & Feedback",
      description:
        "AI mentor gives real-time tips and simple analytics showing progress (savings, net worth, happiness).",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            How MoneyRush teaches — the short version
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <CardContent className="p-8 space-y-6">
                <div
                  className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3`}
                >
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
