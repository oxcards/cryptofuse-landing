"use client"

import { Shield, Globe, Zap } from "lucide-react"

export const Features = () => {
  return (
    <section id="features" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 dark:bg-blue-800/20 rounded-bl-[100px] blur-md"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100 dark:bg-sky-900/20 rounded-tr-[100px] blur-lg"></div>
        <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-cyan-50 dark:bg-cyan-900/10 rounded-full blur-xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 mb-5">
            <span className="mr-2 text-xl">🚀</span> Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Why Choose CryptoFuse</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our payment gateway offers the best features for businesses looking to accept cryptocurrency payments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="h-6 w-6 text-blue-600" />}
            title="Lightning Fast"
            description="Process transactions in seconds with our optimized payment infrastructure."
            bgPosition="top-right"
            bgShape="rounded-bl-[50px]"
            bgColor="bg-blue-100"
            darkBgColor="dark:bg-blue-800/20"
          />

          <FeatureCard
            icon={<Shield className="h-6 w-6 text-blue-500" />}
            title="Highly Secure"
            description="Enterprise-grade security with multi-signature wallets and cold storage."
            bgPosition="bottom-left"
            bgShape="rounded-tr-[60px]"
            bgColor="bg-sky-100"
            darkBgColor="dark:bg-sky-900/20"
          />

          <FeatureCard
            icon={<Globe className="h-6 w-6 text-blue-700" />}
            title="Global Reach"
            description="Accept payments from customers anywhere in the world without borders."
            bgPosition="center-right"
            bgShape="rounded-l-[70px]"
            bgColor="bg-cyan-100"
            darkBgColor="dark:bg-cyan-900/20"
          />
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  bgPosition: "top-right" | "bottom-left" | "center-right"
  bgShape: string
  bgColor: string
  darkBgColor: string
}

const FeatureCard = ({ icon, title, description, bgPosition, bgShape, bgColor, darkBgColor }: FeatureCardProps) => {
  const positionClasses = {
    "top-right": "top-0 right-0 -mr-10 -mt-10",
    "bottom-left": "bottom-0 left-0 -ml-16 -mb-16",
    "center-right": "top-1/2 right-0 -mr-16 -mt-16",
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
      <div
        className={`absolute ${positionClasses[bgPosition]} w-32 h-32 ${bgColor} ${darkBgColor} ${bgShape} transition-transform group-hover:scale-110 group-hover:blur-sm duration-500`}
      ></div>
      <div className="relative z-10">
        <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110">{icon}</div>
        <h3 className="text-xl font-bold mb-3 font-heading text-blue-900 dark:text-blue-100">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
