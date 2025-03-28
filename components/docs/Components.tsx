import React from 'react';

export function Components() {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Components</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-3">1. Cryptocurrency Token Icons</h3>
          <p className="mb-2">Use <code>CryptoToken</code> for cryptocurrency token icons:</p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// By token symbol
<CryptoToken token="btc" size={64} variant="branded" />

// By network and address
<CryptoToken network="ethereum" address="0xdac17f958d2ee523a2206206994597c13d831ec7" size={64} variant="branded" />

// By network and token name
<CryptoToken network="avalanche" address="0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7" size={64} variant="branded" />`}
              </code>
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">2. Wallet Icons</h3>
          <p className="mb-2">Use <code>CryptoWallet</code> for wallet icons:</p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// By wallet ID
<CryptoWallet id="coinbase" size={64} variant="branded" />

// By wallet name
<CryptoWallet name="coinbase wallet" size={64} variant="branded" />`}
              </code>
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">3. Exchange Icons</h3>
          <p className="mb-2">Use <code>CryptoExchange</code> for exchange icons:</p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// By exchange ID
<CryptoExchange id="binance" size={64} variant="branded" />

// By exchange name
<CryptoExchange name="coinbase exchange" size={64} variant="branded" />`}
              </code>
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">4. Network Icons</h3>
          <p className="mb-2">Use <code>CryptoNetwork</code> for blockchain network icons:</p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// By network ID
<CryptoNetwork network="polygon-zkevm" size={64} variant="branded" />

// By network name
<CryptoNetwork id="Polygon zkEVM" size={64} variant="branded" />`}
              </code>
            </pre>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">5. Icon Grids</h3>
          <p className="mb-2">For displaying collections of icons, use these pre-configured grid components:</p>
          
          <div className="bg-gray-100 p-4 rounded-md">
            <pre className="text-sm text-gray-800">
              <code>
{`// Popular cryptocurrencies
<PopularCryptoIcons size={64} variant="branded" />

// Stablecoins
<StablecoinIcons size={64} variant="branded" />

// DeFi tokens
<DefiIcons size={64} variant="branded" />

// Networks (Removed due to compatibility issues)

// Wallets
<WalletIcons size={64} variant="branded" />

// Exchanges
<ExchangeIcons size={64} variant="branded" />`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
