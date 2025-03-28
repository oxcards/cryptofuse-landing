"use client"

import Link from "next/link"
import { ChevronLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function SignupSuccess() {
  // Optional: Track conversion or other analytics
  // useEffect(() => {
  //   // You could add analytics tracking here
  //   // Example: tracking a conversion event
  //   try {
  //     if (typeof window !== "undefined" && window.gtag) {
  //       window.gtag("event", "conversion", {
  //         send_to: "CONVERSION_ID", // replace with your actual conversion ID
  //         event_category: "signup",
  //         event_label: "form_completion",
  //       })
  //     }
  //   } catch (error) {
  //     console.error("Analytics error:", error)
  //   }
  // }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-4 md:px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-800/20 rounded-bl-[100px] blur-md"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-900/20 rounded-tr-[100px] blur-lg"></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-cyan-900/10 rounded-full blur-xl opacity-60"></div>
      </div>
      
      <div className="max-w-md w-full mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <div className="h-20 w-20 rounded-full bg-blue-500/10 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-blue-500" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-3 font-heading text-blue-900 dark:text-blue-100">
          Form Received!
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8">
          Thank you for your interest in CryptoFuse. We've successfully received your form submission.
        </p>
        
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Our team has been notified and we're reviewing the information you provided.
          </p>
          
          <div className="bg-blue-500/5 dark:bg-blue-500/10 rounded-lg p-4 border border-blue-500/10">
            <p className="text-sm text-muted-foreground">
              <strong>What's next?</strong> One of our representatives will contact you directly to discuss your needs and how CryptoFuse can best serve your business.
            </p>
          </div>
          
          <div className="pt-6">
            <Link href="/">
              <Button className="gap-2">
                <ChevronLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
