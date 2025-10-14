"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, BarChart3, Bot, Globe, Users } from "lucide-react"

export function DetailedFeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Virtual life events & realism",
      description: "Experience promotions, emergencies, and real-world financial scenarios",
      badge: "Engaging",
    },
    {
      icon: Target,
      title: "Personalization & adaptive difficulty",
      description: "Content adjusts to your skill level for optimal learning",
      badge: "Smart",
    },
    {
      icon: BarChart3,
      title: "Feedback dashboards",
      description: "Visual graphs for budgets, debt, and financial progress",
      badge: "Insightful",
    },
    {
      icon: Bot,
      title: "Customizable virtual advisor",
      description: "AI mentor provides personalized guidance and tips",
      badge: "AI-Powered",
    },
    {
      icon: Globe,
      title: "Localization",
      description: "Currency and cost of living settings for your region",
      badge: "Global",
    },
    {
      icon: Users,
      title: "Social & classroom modes",
      description: "Team challenges and collaborative learning experiences",
      badge: "Coming Soon",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Built for learning and engagement</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every feature designed to make financial literacy fun, effective, and memorable
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
