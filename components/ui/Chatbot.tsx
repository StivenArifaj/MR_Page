'use client'

import { useEffect } from 'react'

export function Chatbot() {
  useEffect(() => {
    // Standard Chatbase embed script
    window.chatbase = window.chatbase || function(...args: any[]) {
        (window.chatbase!.q = window.chatbase!.q || []).push(args)
    };

    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = 'h8ALvz3ayeQd1ZVP1DkCa'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return null
}