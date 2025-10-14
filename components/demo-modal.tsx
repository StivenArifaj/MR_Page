"use client"

import { scrollToNewsletter } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function DemoModal() {
  return (
    <Button 
      onClick={scrollToNewsletter}
      size="lg" 
      className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 group"
    >
      <GraduationCap className="mr-2 h-5 w-5" />
      Request School Demo
    </Button>
  )
}
