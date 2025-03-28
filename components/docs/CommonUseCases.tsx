import React from 'react';

export function CommonUseCases() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Common Use Cases</h2>
      <p className="mb-4">For each icon type, here are the most common use cases:</p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Token Icons</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// For Bitcoin
<CryptoToken token="btc" size={64} />

// For Ethereum
<CryptoToken token="eth" size={64} />

// For USDT (Tether)
<CryptoToken token="usdt" size={64} />

// For Solana
<CryptoToken token="sol" size={64} />`}
              </code>
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Wallet Icons</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// For MetaMask
<CryptoWallet id="metamask" size={64} />

// For Phantom
<CryptoWallet id="phantom" size={64} />

// For Coinbase Wallet
<CryptoWallet id="coinbase" size={64} />

// For Trust Wallet
<CryptoWallet id="trust-wallet" size={64} />`}
              </code>
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Exchange Icons</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// For Binance
<CryptoExchange id="binance" size={64} />

// For Coinbase
<CryptoExchange id="coinbase" size={64} />

// For Kraken
<CryptoExchange id="kraken" size={64} />

// For Bybit
<CryptoExchange id="bybit" size={64} />`}
              </code>
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-2">Network Icons</h3>
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// For Ethereum
<CryptoNetwork network="ethereum" size={64} />

// For Solana
<CryptoNetwork network="solana" size={64} />

// For Polygon
<CryptoNetwork network="polygon" size={64} />

// For Avalanche
<CryptoNetwork network="avalanche" size={64} />`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
