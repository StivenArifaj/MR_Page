"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Cookie } from "lucide-react"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 animate-fade-in-up md:left-auto md:right-4 md:max-w-md">
      <Card className="border-2 shadow-2xl">
        <CardContent className="p-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-accent" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-foreground">Cookie Consent</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to improve your experience and analyze site usage. We do not sell student data.{" "}
                <Button variant="link" className="p-0 h-auto text-sm" asChild>
                  <a href="#privacy">Learn more</a>
                </Button>
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button onClick={acceptCookies} className="flex-1 bg-primary hover:bg-primary/90">
              Accept all cookies
            </Button>
            <Button onClick={declineCookies} variant="outline" className="flex-1 bg-transparent">
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
