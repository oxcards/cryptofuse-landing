"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CryptoSystemHero } from "@/components/crypto-system-hero"
import Link from "next/link"

export const Hero = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white dark:from-blue-900/20 dark:to-background -z-10"></div>

      {/* Animated geometric background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 dark:bg-blue-800/30 rounded-3xl -rotate-12 opacity-30 animate-float blur-2xl"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-sky-100 dark:bg-sky-900/30 rounded-3xl rotate-12 opacity-30 animate-float blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 right-1/4 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-2xl rotate-45 opacity-20 animate-float blur-md"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-32 h-32 bg-cyan-100 dark:bg-cyan-900/20 rounded-2xl -rotate-15 opacity-20 animate-float blur-lg"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full opacity-20 animate-pulse blur-3xl"
        ></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            {mounted && (
              <>
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500/10 text-blue-600 mb-4 animate-fade-in">
                  <span className="mr-1">✨</span> Next-Gen Crypto Payments
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 font-heading animate-slide-left delay-100">
                  Accept Crypto Payments <span className="text-blue-600">Seamlessly</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 animate-slide-left delay-200">
                  Integrate cryptocurrency payments into your business with our secure, fast, and easy-to-use
                  payment gateway. Join the future of finance today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-left delay-300">
                    <Button
                      size="lg"
                      className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-shadow"
                      onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Get Started <ArrowRight className="h-4 w-4" />
                    </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500/20 hover:bg-blue-500/5 text-blue-600 hover:text-blue-700"
                    onClick={() => document.querySelector("#how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    How It Works
                  </Button>
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center relative">
            {mounted && (
              <>
                <div className="absolute -z-10 w-72 h-72 bg-blue-500/10 rounded-3xl rotate-12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-scale-in"></div>
                <div className="w-full h-[400px] relative z-10 animate-scale-in delay-200">
                  <CryptoSystemHero className="w-full h-full" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
