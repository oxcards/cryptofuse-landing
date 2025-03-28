import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CurrencyCard } from "@/components/currency-card"

interface CurrencyModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Define all currencies in categories - updated for 2025
const allCurrencies = {
  popular: [
    { symbol: "BTC", name: "Bitcoin", color: "bg-amber-50" },
    { symbol: "ETH", name: "Ethereum", color: "bg-purple-50" },
    { symbol: "SOL", name: "Solana", color: "bg-emerald-50" },
    { symbol: "SUI", name: "Sui", color: "bg-blue-50" },
    { symbol: "SEI", name: "Sei", color: "bg-indigo-50" },
    { symbol: "INJ", name: "Injective", color: "bg-orange-50" },
    { symbol: "AVAX", name: "Avalanche", color: "bg-red-50" },
    { symbol: "MATIC", name: "Polygon", color: "bg-cyan-50" },
    { symbol: "ARB", name: "Arbitrum", color: "bg-pink-50" },
    { symbol: "OP", name: "Optimism", color: "bg-red-50" },
    { symbol: "NEAR", name: "NEAR Protocol", color: "bg-teal-50" },
    { symbol: "ATOM", name: "Cosmos", color: "bg-violet-50" },
  ],
  stablecoins: [
    { symbol: "USDT", name: "Tether", color: "bg-green-50" },
    { symbol: "USDC", name: "USD Coin", color: "bg-blue-50" },
    { symbol: "DAI", name: "Dai", color: "bg-amber-50" },
    { symbol: "PYUSD", name: "PayPal USD", color: "bg-sky-50" },
    { symbol: "EURT", name: "Euro Tether", color: "bg-indigo-50" },
    { symbol: "TUSD", name: "TrueUSD", color: "bg-teal-50" },
    { symbol: "FRAX", name: "Frax", color: "bg-orange-50" },
    { symbol: "LUSD", name: "Liquity USD", color: "bg-violet-50" },
  ],
  defi: [
    { symbol: "GMX", name: "GMX", color: "bg-blue-50" },
    { symbol: "STG", name: "Stargate", color: "bg-purple-50" },
    { symbol: "STRK", name: "Starknet", color: "bg-pink-50" },
    { symbol: "PENDLE", name: "Pendle", color: "bg-cyan-50" },
    { symbol: "WOO", name: "WOO", color: "bg-emerald-50" },
    { symbol: "JMPT", name: "JumpTask", color: "bg-orange-50" },
    { symbol: "UNI", name: "Uniswap", color: "bg-pink-50" },
    { symbol: "AAVE", name: "Aave", color: "bg-purple-50" },
    { symbol: "MKR", name: "Maker", color: "bg-cyan-50" },
    { symbol: "CRV", name: "Curve", color: "bg-blue-50" },
    { symbol: "DYDX", name: "dYdX", color: "bg-indigo-50" },
    { symbol: "SUSHI", name: "SushiSwap", color: "bg-orange-50" },
  ],

}

export function CurrencyModal({ open, onOpenChange }: CurrencyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto dark:bg-gray-900 dark:border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold dark:text-white">All Supported Cryptocurrencies</DialogTitle>
          <DialogDescription className="dark:text-gray-300">
            CryptoFuse supports a wide range of cryptocurrencies for your payment needs.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-8 py-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Popular Cryptocurrencies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allCurrencies.popular.map((currency, i) => (
                <CurrencyCard key={i} symbol={currency.symbol} name={currency.name} color={currency.color} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Stablecoins</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allCurrencies.stablecoins.map((currency, i) => (
                <CurrencyCard key={i} symbol={currency.symbol} name={currency.name} color={currency.color} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 dark:text-white">DeFi Tokens</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {allCurrencies.defi.map((currency, i) => (
                <CurrencyCard key={i} symbol={currency.symbol} name={currency.name} color={currency.color} />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
