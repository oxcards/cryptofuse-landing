"use client"

import { ArrowRight, CheckCircle, Code, CreditCard, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-800/20 rounded-br-[100px] blur-lg"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-100 dark:bg-sky-800/20 rounded-tl-[100px] blur-md"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-100 dark:bg-cyan-900/20 rounded-3xl rotate-45 blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 mb-5">
            <span className="mr-2 text-xl">🔄</span> Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">How CryptoFuse Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start accepting cryptocurrency payments in just three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StepCard
            stepNumber={1}
            title="Sign Up"
            description="Create your CryptoFuse account in minutes. No complex verification process required to get started."
            icon={<CreditCard className="h-6 w-6 text-brand-blue" />}
            bgPosition="top-right"
          />

          <StepCard
            stepNumber={2}
            title="Integrate API"
            description="Connect our simple API to your website or app with just a few lines of code. No technical expertise needed."
            icon={<Code className="h-6 w-6 text-brand-blue" />}
            bgPosition="bottom-left"
          />

          <StepCard
            stepNumber={3}
            title="Accept Payments"
            description="Start receiving crypto payments instantly. Monitor transactions in real-time through your dashboard."
            icon={<BarChart3 className="h-6 w-6 text-brand-blue" />}
            bgPosition="top-center"
          />
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-sky-100 dark:from-blue-800/20 dark:to-sky-800/20 rounded-bl-[100px] -mr-10 -mt-10 blur-md"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-50 to-cyan-100 dark:from-blue-900/10 dark:to-cyan-900/20 rounded-tr-[100px] -ml-10 -mb-10 blur-lg"></div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 font-heading">Developer-Friendly API</h3>
              <p className="text-muted-foreground mb-6">
                Our RESTful API is designed to be simple yet powerful. Integrate cryptocurrency payments with just a
                few lines of code.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Comprehensive documentation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>SDK support for popular languages</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Webhooks for real-time notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-blue-500/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <span>Sandbox environment for testing</span>
                </div>
              </div>

              <div className="mt-8">
                <Button
                  className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40"
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 font-mono text-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center gap-2 mb-2 text-slate-500 dark:text-slate-400">
                <div className="flex gap-1">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <span>Example API Request</span>
              </div>
              <pre className="text-xs md:text-sm overflow-x-auto p-2 bg-slate-800 rounded-md">
                <code>
                  <span className="text-slate-400">// Create a payment request</span>
                  <br />
                  <span className="text-purple-400">const</span> <span className="text-blue-300">response</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-300">fetch</span><span className="text-white">(</span><span className="text-green-300">'https://api.cryptofuse.io/v1/payment'</span><span className="text-white">,</span>
                  <br />
                  <span className="text-white">{'{'}</span>
                  <br />
                  <span className="text-white">  method: </span><span className="text-green-300">'POST'</span><span className="text-white">,</span>
                  <br />
                  <span className="text-white">  headers: </span><span className="text-white">{'{'}</span>
                  <br />
                  <span className="text-white">    </span><span className="text-green-300">'Content-Type'</span><span className="text-white">: </span><span className="text-green-300">'application/json'</span><span className="text-white">,</span>
                  <br />
                  <span className="text-white">    </span><span className="text-green-300">'Authorization'</span><span className="text-white">: </span><span className="text-green-300">'Bearer YOUR_API_KEY'</span>
                  <br />
                  <span className="text-white">  {'}'}</span><span className="text-white">,</span>
                  <br />
                  <span className="text-white">  body: </span><span className="text-yellow-300">JSON.stringify</span><span className="text-white">(</span><span className="text-white">{'{'}</span>
                  <br />
                  <span className="text-white">    amount: </span><span className="text-orange-300">100</span><span className="text-white">,</span>
                  <br />
                  <span className="text-white">    currency: </span><span className="text-green-300">'USD'</span><span className="text-white">,</span>
                  <br />
                  <span className="text-white">    crypto: </span><span className="text-green-300">'BTC'</span><span className="text-white">,</span>
                  <br />
                  <span className="text-white">    redirect_url: </span><span className="text-green-300">'https://yourstore.com/success'</span>
                  <br />
                  <span className="text-white">  {'}'}</span><span className="text-white">)</span>
                  <br />
                  <span className="text-white">{'}'}</span><span className="text-white">);</span>
                  <br />
                  <br />
                  <span className="text-purple-400">const</span> <span className="text-white">{'{'}</span> <span className="text-blue-300">payment_url</span><span className="text-white">, </span><span className="text-blue-300">payment_id</span> <span className="text-white">{'}'}</span> <span className="text-white">= </span><span className="text-purple-400">await</span> <span className="text-blue-300">response</span><span className="text-yellow-300">.json</span><span className="text-white">();</span>
                  <br />
                  <span className="text-slate-400">// Redirect customer to payment_url</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all duration-300 hover:shadow-blue-500/40"
            onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Started Now <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

interface StepCardProps {
  stepNumber: number
  title: string
  description: string
  icon: React.ReactNode
  bgPosition: "top-right" | "bottom-left" | "top-center"
}

const StepCard = ({ stepNumber, title, description, icon, bgPosition }: StepCardProps) => {
  const positionClasses = {
    "top-right": "top-0 right-0 w-32 h-32 rounded-bl-[50px] -mr-10 -mt-10",
    "bottom-left": "bottom-0 left-0 w-40 h-40 rounded-tr-[60px] -ml-16 -mb-16",
    "top-center": "top-1/2 right-0 w-36 h-36 rounded-l-[70px] -mr-16 -mt-16",
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
      <div
        className={`absolute ${positionClasses[bgPosition]} bg-blue-50 dark:bg-blue-900/20 transition-transform group-hover:scale-110`}
      ></div>
      <div className="relative z-10">
        <div className="flex items-center justify-center mb-6">
          <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-2xl font-bold text-brand-blue">
            {stepNumber}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-center font-heading">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
        <div className="mt-6 flex justify-center">
          <div className="h-12 w-12 rounded-lg bg-brand-blue/10 flex items-center justify-center">{icon}</div>
        </div>
      </div>
    </div>
  )
}
