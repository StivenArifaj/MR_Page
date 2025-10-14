"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Users, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { scrollToNewsletter } from '@/lib/utils'

export function BusinessModelSection() {
  return (
    <section id="for-schools" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">How we scale</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Free to students and parents. Revenue from annual school licenses and sponsorships/partnerships with banks
              & fintechs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-success/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-success" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Students & Parents</h3>
                  <p className="text-3xl font-bold text-success mb-2">FREE</p>
                  <p className="text-sm text-muted-foreground">Full access to all features</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Schools</h3>
                  <p className="text-3xl font-bold text-primary mb-2">Contact</p>
                  <p className="text-sm text-muted-foreground">Annual licenses with teacher dashboards</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Partners</h3>
                  <p className="text-3xl font-bold text-accent mb-2">Custom</p>
                  <p className="text-sm text-muted-foreground">Banks & fintechs sponsor content</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-primary/50 bg-primary/5">
            <CardContent className="p-8 text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3">Ready to bring MoneyRush to your school?</h3>
                <p className="text-muted-foreground">
                  Join our pilot program and get early access with special pricing
                </p>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90 group" asChild
                  onClick={scrollToNewsletter}>
                <Link href="#newsletter" className="flex items-center">
                  Request a school demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
