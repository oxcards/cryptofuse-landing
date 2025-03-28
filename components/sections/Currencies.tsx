"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CurrencyModal } from "@/components/currency-modal"
import { CurrencyCard } from "@/components/currency-card"

export const Currencies = () => {
  const [currencyModalOpen, setCurrencyModalOpen] = useState(false)

  // 2025 trending cryptocurrencies for each category
  const popularCryptos = [
    { symbol: "BTC", name: "Bitcoin", color: "bg-amber-50" },
    { symbol: "ETH", name: "Ethereum", color: "bg-purple-50" },
    { symbol: "SOL", name: "Solana", color: "bg-emerald-50" },
    { symbol: "SUI", name: "Sui", color: "bg-blue-50" },
    { symbol: "SEI", name: "Sei", color: "bg-indigo-50" },
    { symbol: "INJ", name: "Injective", color: "bg-orange-50" },
  ]

  const stablecoins2025 = [
    { symbol: "USDT", name: "Tether", color: "bg-green-50" },
    { symbol: "USDC", name: "USD Coin", color: "bg-blue-50" },
    { symbol: "PYUSD", name: "PayPal USD", color: "bg-sky-50" },
    { symbol: "EURT", name: "Euro Tether", color: "bg-indigo-50" },
  ]

  const defiTokens2025 = [
    { symbol: "GMX", name: "GMX", color: "bg-blue-50" },
    { symbol: "STG", name: "Stargate", color: "bg-purple-50" },
    { symbol: "STRK", name: "Starknet", color: "bg-pink-50" },
    { symbol: "PENDLE", name: "Pendle", color: "bg-cyan-50" },
    { symbol: "WOO", name: "WOO", color: "bg-emerald-50" },
    { symbol: "JMPT", name: "JumpTask", color: "bg-orange-50" },
  ]

  // Networks with improved animation
  const networks2025 = [
    { symbol: "ETH", name: "Ethereum", color: "bg-blue-50" },
    { symbol: "SOL", name: "Solana", color: "bg-purple-50" },
    { symbol: "MATIC", name: "Polygon", color: "bg-indigo-50" },
    { symbol: "AVAX", name: "Avalanche", color: "bg-red-50" },
    { symbol: "OP", name: "Optimism", color: "bg-red-50" },
    { symbol: "BASE", name: "Base", color: "bg-teal-50" },
    { symbol: "SUI", name: "Sui", color: "bg-cyan-50" },
    { symbol: "BNB", name: "BNB Chain", color: "bg-yellow-50" }
  ]

  return (
    <section
      id="currencies"
      className="py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900/10 dark:to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-100 dark:bg-blue-800/20 rounded-2xl rotate-12 blur-lg"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-sky-100 dark:bg-sky-800/20 rounded-2xl -rotate-12 blur-xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-md"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 mb-5">
            <span className="mr-2 text-xl">💰</span> Currencies
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-gray-900 dark:text-white">Supported Cryptocurrencies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Accept payments in all major cryptocurrencies with automatic conversion to your preferred currency.
          </p>
        </div>
        <div className="mt-8">
          <Tabs defaultValue="popular" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8 p-1 bg-muted">
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="stablecoins">Stablecoins</TabsTrigger>
              <TabsTrigger value="defi">DeFi Tokens</TabsTrigger>
              <TabsTrigger value="networks">Networks</TabsTrigger>
            </TabsList>
            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {popularCryptos.map((currency, i) => (
                  <CurrencyCard key={i} symbol={currency.symbol} name={currency.name} color={currency.color} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="stablecoins" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {stablecoins2025.map((currency, i) => (
                  <CurrencyCard key={i} symbol={currency.symbol} name={currency.name} color={currency.color} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="defi" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {defiTokens2025.map((currency, i) => (
                  <CurrencyCard key={i} symbol={currency.symbol} name={currency.name} color={currency.color} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="networks" className="mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Using CurrencyCard for networks for consistent animation behavior */}
                {networks2025.map((network, i) => (
                  <CurrencyCard key={i} symbol={network.symbol} name={network.name} color={network.color} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="bg-white dark:bg-gray-800 border-blue-500/20 hover:bg-blue-500/5 text-blue-600 dark:text-blue-400 shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-blue-500/10"
            onClick={() => setCurrencyModalOpen(true)}
          >
            View All Supported Currencies
          </Button>
        </div>
      </div>

      {/* Currency Modal */}
      <CurrencyModal open={currencyModalOpen} onOpenChange={setCurrencyModalOpen} />
    </section>
  )
}
