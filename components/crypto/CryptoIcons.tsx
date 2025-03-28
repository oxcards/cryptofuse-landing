import React from 'react';
import {
  // Using direct imports from the library as requested
  TokenBTC,
  TokenETH,
  TokenSOL,
  TokenAVAX,
  TokenMATIC,
  TokenBNB,
  TokenDOT,
  TokenADA,
  TokenSUI,
  TokenARB,
  TokenOP,
  TokenNEAR,
  TokenATOM,
  TokenXRP,
  TokenTRX,
  TokenDOGE,
  TokenSHIB,
  TokenLTC,
  TokenFIL,
  TokenXMR,
  TokenTON,
  TokenXTZ,
  TokenZEC,
  TokenSEI,
  TokenINJ,
  TokenJMPT,
  TokenRNDR,
  TokenXLM,
  TokenEOS,
  TokenICP,
  TokenHBAR,
  TokenALICE,
  TokenAPT,
  TokenAXS,
  TokenCELO,
  TokenEGLD,
  TokenETC,
  TokenFLOW,
  TokenKLAY,
  TokenMANA,
  TokenONE,
  TokenROSE,
  TokenRUNE,
  TokenSAND,
  TokenCHZ,
  TokenGALA,
  TokenENJ,
  TokenTHETA,
  TokenVET,
  TokenZIL,
  TokenKSM,
  TokenFTM,
  
  // Stablecoins
  TokenUSDT,
  TokenUSDC,
  TokenDAI,
  TokenLUSD,
  TokenFRAX,
  TokenPYUSD,
  TokenLUNA,
  TokenTUSD,
  TokenEURT,
  TokenGUSD,
  TokenUSDD,
  TokenOUSD,
  TokenCUSD,
  
  // DeFi tokens
  TokenUNI,
  TokenMKR,
  TokenLINK,
  TokenCRV,
  TokenDYDX,
  TokenYFI,
  TokenSNX,
  TokenCOMP,
  TokenAURA,
  TokenSUSHI,
  TokenGMX,
  TokenPENDLE,
  TokenRAI,
  TokenRPL,
  TokenKNC,
  TokenMAV,
  TokenALGO,
  TokenVELO,
  Token1INCH,
  TokenLDO,
  TokenWOO,
  TokenQNT,
  TokenIMX,
  TokenSTRK,
  TokenAPE,
  TokenSTG,
  TokenDPX,
  TokenKAVA,
  TokenINST,
  TokenHFT,
  TokenAGIX,
  TokenREN,
  TokenBZRX,
  TokenORN,
  TokenAAVE,
} from '@web3icons/react';

// Size props
type Size = number | string;

interface CryptoIconProps {
  token: string;
  size?: Size;
  className?: string;
}

// Improved token components mapping for better performance
const tokenComponents: Record<string, React.ElementType> = {
  // Major cryptocurrencies
  btc: TokenBTC,
  eth: TokenETH,
  sol: TokenSOL,
  avax: TokenAVAX,
  matic: TokenMATIC,
  bnb: TokenBNB,
  dot: TokenDOT,
  ada: TokenADA,
  sui: TokenSUI,
  arb: TokenARB,
  op: TokenOP,
  near: TokenNEAR,
  atom: TokenATOM,
  xrp: TokenXRP,
  trx: TokenTRX,
  doge: TokenDOGE,
  shib: TokenSHIB,
  ltc: TokenLTC,
  fil: TokenFIL,
  xmr: TokenXMR,
  ton: TokenTON,
  xtz: TokenXTZ,
  zec: TokenZEC,
  sei: TokenSEI,
  inj: TokenINJ,
  jmpt: TokenJMPT,
  rndr: TokenRNDR,
  xlm: TokenXLM,
  eos: TokenEOS,
  icp: TokenICP,
  hbar: TokenHBAR,
  alice: TokenALICE,
  apt: TokenAPT,
  axs: TokenAXS,
  celo: TokenCELO,
  egld: TokenEGLD,
  etc: TokenETC,
  flow: TokenFLOW,
  klay: TokenKLAY,
  mana: TokenMANA,
  one: TokenONE,
  rose: TokenROSE,
  rune: TokenRUNE,
  sand: TokenSAND,
  chz: TokenCHZ,
  gala: TokenGALA,
  enj: TokenENJ,
  theta: TokenTHETA,
  vet: TokenVET,
  zil: TokenZIL,
  ksm: TokenKSM,
  ftm: TokenFTM,
  
  // Stablecoins
  usdt: TokenUSDT,
  usdc: TokenUSDC,
  dai: TokenDAI,
  lusd: TokenLUSD,
  frax: TokenFRAX,
  pyusd: TokenPYUSD,
  luna: TokenLUNA,
  tusd: TokenTUSD,
  eurt: TokenEURT,
  gusd: TokenGUSD,
  usdd: TokenUSDD,
  ousd: TokenOUSD,
  cusd: TokenCUSD,
  
  // DeFi tokens
  uni: TokenUNI,
  aave: TokenAAVE,
  mkr: TokenMKR,
  link: TokenLINK,
  crv: TokenCRV,
  dydx: TokenDYDX,
  yfi: TokenYFI,
  snx: TokenSNX,
  comp: TokenCOMP,
  aura: TokenAURA,
  sushi: TokenSUSHI,
  gmx: TokenGMX,
  pendle: TokenPENDLE,
  rai: TokenRAI,
  rpl: TokenRPL,
  knc: TokenKNC,
  mav: TokenMAV,
  algo: TokenALGO,
  velo: TokenVELO,
  '1inch': Token1INCH,
  ldo: TokenLDO,
  woo: TokenWOO,
  qnt: TokenQNT,
  imx: TokenIMX,
  strk: TokenSTRK,
  ape: TokenAPE,
  stg: TokenSTG,
  dpx: TokenDPX,
  kava: TokenKAVA,
  inst: TokenINST,
  hft: TokenHFT,
  agix: TokenAGIX,
  ren: TokenREN,
  bzrx: TokenBZRX,
  orn: TokenORN,
  // Base token is not included in the library, but is used in the UI
  base: TokenETH, // Using ETH icon as a fallback for Base
};

// Function to map token symbols to their respective components with proper size
export const CryptoIcon: React.FC<CryptoIconProps> = ({ token, size = 64, className = '' }) => {
  // Standardize token name to lowercase
  const normalizedToken = token.toLowerCase();
  
  // Get the component for the given token
  const TokenComponent = tokenComponents[normalizedToken];
  
  // If no matching component is found, return a placeholder
  if (!TokenComponent) {
    return (
      <div 
        className={`flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white ${className}`} 
        style={{ width: size, height: size, fontSize: Number(size) / 3 }}
      >
        {normalizedToken.slice(0, 3).toUpperCase()}
      </div>
    );
  }
  
  // Return the token component with the specified size and animation support
  return <TokenComponent size={size} className={`${className} transition-all duration-300`} />;
};

// Export all token symbols for use in other components
export const getAllTokenSymbols = () => {
  return Object.keys(tokenComponents);
};

// Group tokens by category
export const tokenCategories = {
  major: [
    'btc', 'eth', 'sol', 'avax', 'matic', 'bnb', 'dot', 'ada', 'sui', 'arb', 'op', 'near', 'atom',
    'xrp', 'trx', 'doge', 'shib', 'ltc'
  ],
  stablecoins: [
    'usdt', 'usdc', 'dai', 'busd', 'lusd', 'frax', 'pyusd', 'tusd', 'eurt', 'gusd', 'pax'
  ],
  defi: [
    'uni', 'aave', 'mkr', 'link', 'crv', 'dydx', 'yfi', 'snx', 'comp', 'aura', 'bal', 'sushi',
    'gmx', 'pendle', 'rai', 'rpl', 'knc', 'mav', 'syn', 'velo', '1inch', 'ldo'
  ],
  trending2025: [
    'sei', 'inj', 'jmpt', 'rndr', 'woo', 'qnt', 'imx', 'strk', 'ape', 'stg', 'fil'
  ],
  gaming: [
    'sand', 'mana', 'axs', 'gala', 'enj', 'ape'
  ]
};

// A component to display a grid of popular crypto icons with direct icon animation
export const PopularCryptoIcons: React.FC<{ size?: Size }> = ({ size = 48 }) => {
  const popularTokens = [
    'btc', 'eth', 'sol', 'usdt', 'usdc', 'bnb', 'avax', 'matic', 'dai', 'link'
  ];
  
  return (
    <div className="grid grid-cols-5 gap-4">
      {popularTokens.map((token) => (
        <div key={token} className="flex flex-col items-center group cursor-pointer">
          <CryptoIcon 
            token={token} 
            size={size} 
            className="transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
          />
          <span className="mt-2 text-sm font-medium group-hover:text-blue-600 transition-colors">{token.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

// A component specifically for stablecoins with direct icon animation
export const StablecoinIcons: React.FC<{ size?: Size }> = ({ size = 48 }) => {
  const stablecoins = tokenCategories.stablecoins.slice(0, 8);
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {stablecoins.map((token) => (
        <div key={token} className="flex flex-col items-center group cursor-pointer">
          <CryptoIcon 
            token={token} 
            size={size} 
            className="transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
          />
          <span className="mt-2 text-sm font-medium group-hover:text-blue-600 transition-colors">{token.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

// A component specifically for DeFi tokens with direct icon animation
export const DefiIcons: React.FC<{ size?: Size }> = ({ size = 48 }) => {
  const defiTokens = tokenCategories.defi.slice(0, 10);
  
  return (
    <div className="grid grid-cols-5 gap-4">
      {defiTokens.map((token) => (
        <div key={token} className="flex flex-col items-center group cursor-pointer">
          <CryptoIcon 
            token={token} 
            size={size} 
            className="transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
          />
          <span className="mt-2 text-sm font-medium group-hover:text-blue-600 transition-colors">{token.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

// New component for trending tokens in 2025 with direct icon animation
export const TrendingIcons2025: React.FC<{ size?: Size }> = ({ size = 48 }) => {
  return (
    <div className="grid grid-cols-6 gap-4">
      {tokenCategories.trending2025.map((token) => (
        <div key={token} className="flex flex-col items-center group cursor-pointer">
          <CryptoIcon 
            token={token} 
            size={size} 
            className="transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
          />
          <span className="mt-2 text-sm font-medium group-hover:text-blue-600 transition-colors">{token.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
};

// A component to display all supported tokens with search and filter functionality
export const AllSupportedTokens: React.FC<{ size?: Size, searchTerm?: string }> = ({ 
  size = 40, 
  searchTerm = '' 
}) => {
  const [filter, setFilter] = React.useState(searchTerm);
  const [categoryFilter, setCategoryFilter] = React.useState('all');
  const tokens = getAllTokenSymbols();
  
  const filteredTokens = React.useMemo(() => {
    let result = tokens;
    
    // Apply text search filter
    if (filter) {
      result = result.filter(token => token.toLowerCase().includes(filter.toLowerCase()));
    }
    
    // Apply category filter
    if (categoryFilter !== 'all') {
      const categoryTokens = tokenCategories[categoryFilter as keyof typeof tokenCategories] || [];
      result = result.filter(token => categoryTokens.includes(token));
    }
    
    return result;
  }, [filter, tokens, categoryFilter]);
  
  return (
    <div className="w-full">
      <div className="mb-6 space-y-4">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search tokens..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setCategoryFilter('all')} 
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryFilter === 'all' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setCategoryFilter('major')} 
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryFilter === 'major' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Major
          </button>
          <button 
            onClick={() => setCategoryFilter('stablecoins')} 
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryFilter === 'stablecoins' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Stablecoins
          </button>
          <button 
            onClick={() => setCategoryFilter('defi')} 
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryFilter === 'defi' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            DeFi
          </button>
          <button 
            onClick={() => setCategoryFilter('trending2025')} 
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryFilter === 'trending2025' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Trending 2025
          </button>
          <button 
            onClick={() => setCategoryFilter('gaming')} 
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryFilter === 'gaming' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Gaming
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {filteredTokens.map((token) => (
          <div key={token} className="flex flex-col items-center hover:bg-gray-50 border border-transparent hover:border-gray-200 rounded-xl transition-colors cursor-pointer p-3 group">
            <CryptoIcon 
              token={token} 
              size={size} 
              className="transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg" 
            />
            <span className="mt-2 text-sm font-medium group-hover:text-blue-600 transition-colors">{token.toUpperCase()}</span>
          </div>
        ))}
      </div>
      
      {filteredTokens.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-xl">No tokens found matching "{filter}"</p>
          <p className="mt-2">Try adjusting your search or category filter</p>
        </div>
      )}
    </div>
  );
};
