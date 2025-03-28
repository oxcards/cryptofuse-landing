"use client"

import { useState, useEffect } from "react"
import {
  Header,
  Hero,
  Features,
  Currencies,
  HowItWorks,
  Faq,
  Contact,
  Footer
} from "@/components/sections"

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Currencies />
        <HowItWorks />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
