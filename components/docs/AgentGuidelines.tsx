import React from 'react';

export function AgentGuidelines() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Instructions for AI Agents</h2>
      <p className="mb-4">When working with this codebase, AI agents should follow these guidelines:</p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">1. Component Selection</h3>
          <p className="mb-2">Choose the appropriate component based on the type of icon needed:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>CryptoToken</code> - For cryptocurrency tokens (BTC, ETH, etc.)</li>
            <li><code>CryptoWallet</code> - For wallet apps (MetaMask, Phantom, etc.)</li>
            <li><code>CryptoExchange</code> - For exchanges (Binance, Coinbase, etc.)</li>
            <li><code>CryptoNetwork</code> - For blockchain networks (Ethereum, Solana, etc.)</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">2. Parameter Format</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Token symbols should always be lowercase: <code>token="btc"</code> not <code>token="BTC"</code></li>
            <li>IDs should be lowercase and hyphenated: <code>id="trust-wallet"</code> not <code>id="Trust Wallet"</code></li>
            <li>Names can be regular case: <code>name="Trust Wallet"</code> is acceptable</li>
            <li>Network names are lowercase and hyphenated: <code>network="polygon-zkevm"</code> not <code>network="Polygon zkEVM"</code></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">3. Required vs Optional Parameters</h3>
          <p className="mb-2">Every component has a specific set of required parameters:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><code>CryptoToken</code>: Either <code>token</code> OR (<code>network</code> AND <code>address</code>)</li>
            <li><code>CryptoWallet</code>: Either <code>id</code> OR <code>name</code> (prefer <code>id</code> when available)</li>
            <li><code>CryptoExchange</code>: Either <code>id</code> OR <code>name</code> (prefer <code>id</code> when available)</li>
            <li><code>CryptoNetwork</code>: Either <code>network</code> OR <code>id</code> (prefer <code>network</code> when available)</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">4. Popular Lists for 2025</h3>
          <p className="mb-2">Use these pre-defined lists when suggesting icons for specific categories:</p>
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// Import the lists
import { 
  popularTokens, 
  popularStablecoins, 
  popularDefiTokens,
  popularNetworks,
  popularWallets,
  popularExchanges
} from '@/components/crypto';

// Example: Mapping through popular networks
{popularNetworks.map(network => (
  <CryptoNetwork key={network} network={network} size={64} />
))}`}
              </code>
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">5. Error Handling</h3>
          <p className="mb-2">The components automatically provide a fallback interface if an icon is not found:</p>
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// If "unknown-token" doesn't exist in the library, a placeholder will be shown
<CryptoToken token="unknown-token" size={64} />`}
              </code>
            </pre>
          </div>
          <p className="mt-2">No additional error handling is required, but do recommend using tokens from the pre-defined lists for best results.</p>
        </div>
      </div>
    </section>
  );
}
