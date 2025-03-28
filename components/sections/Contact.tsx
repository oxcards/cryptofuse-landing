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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          {/* Left side - Email contact information */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm w-full max-w-md">
              <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
              
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-blue-500/20 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white/80 text-sm">General Inquiries:</p>
                  <a href="mailto:contacto@cryptofuse.com" className="text-white hover:text-blue-200 transition-colors font-medium">
                    contact@cryptofuse.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-200" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-white/80 text-sm">Support:</p>
                  <a href="mailto:support@cryptofuse.com" className="text-white hover:text-blue-200 transition-colors font-medium">
                    support@cryptofuse.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Text and buttons */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-heading">
              Ready to Accept Crypto Payments?
            </h2>
            <p className="text-xl text-white/80 max-w-xl mb-8">
              Join thousands of businesses already using CryptoFuse to accept cryptocurrency payments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://tally.so/r/wozdex" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="secondary"
                  className="gap-2 bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-white/20"
                >
                  Sign up <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
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
        </div>
      </div>
    </section>
  )
}
