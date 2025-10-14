'use client'

import { useEffect } from 'react'

export function Chatbot() {
  useEffect(() => {
    // Initialize chatbase
    const initChatbase = () => {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args: any[]) => {
          if (!window.chatbase.q) {
            window.chatbase.q = []
          }
          window.chatbase.q.push(args)
        }
        
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q
            }
            return (...params: any[]) => target(prop, ...params)
          }
        })
      }
    }

    // Load chatbase script
    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = 'h8ALvz3ayeQd1ZVP1DkCa'
    script.async = true
    document.body.appendChild(script)

    initChatbase()

    return () => {
      // Cleanup
      document.body.removeChild(script)
    }
  }, [])

  return null
}