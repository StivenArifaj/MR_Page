"use client"

import { useForm, ValidationError } from '@formspree/react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const [state, handleSubmit] = useForm("xnngobbb") // Replace with your form ID
  
  const footerLinks = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#for-schools" },
      { label: "FAQ", href: "#faq" },
    ],
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "For Schools", href: "#for-schools" },
      { label: "For Parents", href: "#parents" },
      { label: "Help Center", href: "#help" },
      { label: "Community", href: "#community" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Cookie Policy", href: "#cookies" },
      { label: "Data Protection", href: "#data" },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section - Newsletter */}
        <div id="newsletter" className="mb-12 pb-12 border-b border-border">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Stay updated</h3>
            <p className="text-muted-foreground">
              Get the latest news about MoneyRush features, educational resources, and financial literacy tips
            </p>
            {state.succeeded ? (
              <p className="text-green-600 font-medium">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  className="flex-1" 
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <Button 
                  type="submit" 
                  className="bg-primary hover:bg-primary/90"
                  disabled={state.submitting}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  {state.submitting ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Tagline */}
            <div className="text-center md:text-left">
              <Link href="/" className="inline-flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-xl font-bold">
                  Money<span className="text-primary">Rush</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground italic">To Learn. To Earn. To Return.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Button key={social.label} variant="ghost" size="icon" className="rounded-full" asChild>
                  <Link href={social.href} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </Link>
                </Button>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MoneyRush. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
