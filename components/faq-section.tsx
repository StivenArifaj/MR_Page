"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Is MoneyRush free?",
      answer:
        "Yes — MoneyRush is completely free for students and parents. Schools pay for classroom licensing which includes teacher dashboards, analytics, and dedicated support.",
    },
    {
      question: "What ages is MoneyRush designed for?",
      answer:
        "MoneyRush is designed for teens aged 12–18. The adaptive learning system adjusts content difficulty based on each user's skill level, making it suitable for varying levels of financial knowledge.",
    },
    {
      question: "Can teachers see student progress?",
      answer:
        "Yes — teacher dashboards and analytics are available for licensed schools. Teachers can track class progress, identify students who need help, and access detailed learning metrics.",
    },
    {
      question: "How does the adaptive learning work?",
      answer:
        "Students take a short onboarding quiz that establishes their baseline financial knowledge. The game then adjusts difficulty, content, and scenarios based on their choices and progress, ensuring optimal learning for each individual.",
    },
    {
      question: "What devices does MoneyRush work on?",
      answer:
        "MoneyRush works on smartphones, tablets, and computers. It's a web-based application that works in any modern browser, so students can access it from any device.",
    },
    {
      question: "How long does it take to complete?",
      answer:
        "MoneyRush is designed as an ongoing learning experience rather than a one-time course. Students can play at their own pace, with typical sessions lasting 10-20 minutes. The full curriculum covers multiple life stages from first job to retirement planning.",
    },
    {
      question: "Do you sell student data?",
      answer:
        "No, we do not sell student data. We take privacy seriously and comply with all educational data protection regulations. School administrators have full control over classroom data management.",
    },
    {
      question: "How do I get started?",
      answer:
        "Students and parents can sign up for free immediately. Schools interested in classroom licenses should request a demo to learn about our pilot program and pricing options.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about MoneyRush</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-base md:text-lg pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
