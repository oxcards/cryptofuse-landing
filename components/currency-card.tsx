import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CryptoToken } from "@/components/crypto"

interface CurrencyCardProps {
  symbol: string
  name: string
  color?: string
}

// List of tokens that need special treatment in light mode due to their light colors
const lightColoredTokens = ['arb', 'eurt', 'frax', 'dydx', 'pendle', 'arbitrum'];

export function CurrencyCard({ 
  symbol, 
  name, 
  color = "bg-blue-50"
}: CurrencyCardProps) {
  const lowerSymbol = symbol.toLowerCase();
  const needsBackground = lightColoredTokens.includes(lowerSymbol);
  
  return (
    <Card
      className={`overflow-hidden border-none shadow-sm hover:shadow-md transition-all ${color} dark:bg-gray-800 group cursor-pointer`}
    >
      <CardHeader className="p-4 flex flex-col items-center text-center">
        <div className={`p-3 rounded-full shadow-sm mb-2 border border-gray-200 dark:border-gray-600 
          ${needsBackground ? 'bg-gradient-to-br from-gray-100 to-gray-200 dark:bg-gray-700' : 'bg-white dark:bg-gray-700'}`}>
          {/* Directly applying animations to the icon without a wrapper div */}
          <CryptoToken 
            token={lowerSymbol} 
            size={42} 
            className="transition-all duration-300 group-hover:scale-125" 
          />
        </div>
        <CardTitle className="text-base group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 transition-colors">{name}</CardTitle>
        <Badge variant="outline" className="mt-1 bg-white/50 dark:bg-gray-600 dark:text-white group-hover:bg-blue-100 dark:group-hover:bg-blue-900/60 transition-colors">
          {symbol}
        </Badge>
      </CardHeader>
    </Card>
  )
}
