"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-br-[200px] blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-300/10 rounded-tl-[200px] blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-3xl rotate-45 blur-md"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-cyan-300/10 rounded-full blur-xl animate-ping" style={{ animationDuration: "4s" }}></div>
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-blue-300/10 rounded-lg blur-lg animate-ping" style={{ animationDuration: "6s" }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
          Ready to Accept Crypto Payments?
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
          Join thousands of businesses already using CryptoFuse to accept cryptocurrency payments.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-white/20"
            onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10"
            onClick={() => (window.location.href = "mailto:contact@cryptofuse.com")}
          >
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  )
}
