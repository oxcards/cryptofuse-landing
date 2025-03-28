import React from 'react';

export function QuickStart() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
      
      <div className="bg-gray-100 p-4 rounded-md">
        <pre className="text-sm text-gray-800">
          <code>
{`// Import the components you need
import { 
  CryptoToken,   // For cryptocurrency tokens
  CryptoWallet,  // For crypto wallets
  CryptoExchange, // For exchanges
  CryptoNetwork  // For blockchain networks
} from '@/components/crypto';

// Use in your component
function MyComponent() {
  return (
    <div className="flex gap-4">
      {/* Cryptocurrency token icons */}
      <CryptoToken token="btc" size={64} variant="branded" />
      
      {/* Wallet icons */}
      <CryptoWallet id="metamask" size={64} variant="branded" />
      
      {/* Exchange icons */}
      <CryptoExchange id="binance" size={64} variant="branded" />
      
      {/* Network icons */}
      <CryptoNetwork network="ethereum" size={64} variant="branded" />
    </div>
  );
}`}
          </code>
        </pre>
      </div>
    </section>
  );
}
