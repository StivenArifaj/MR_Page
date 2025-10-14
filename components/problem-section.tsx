"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, TrendingDown, Smartphone } from "lucide-react"

export function ProblemSection() {
  const stats = [
    {
      icon: AlertCircle,
      stat: "1 in 3",
      label: "Adults lack financial literacy worldwide",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: TrendingDown,
      stat: "<50%",
      label: "Teenagers are financially literate",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      icon: Smartphone,
      stat: "100%",
      label: "Teens prefer gamified, hands-on learning",
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Why Money Literacy Matters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Schools still use outdated lessons while teens are ready for modern, engaging financial education
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((item, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8 text-center space-y-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl ${item.bgColor} flex items-center justify-center transition-transform group-hover:scale-110`}
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div className="space-y-2">
                  <p className={`text-4xl md:text-5xl font-bold ${item.color}`}>{item.stat}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{item.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
