import React from 'react';
import { TokenIcon, WalletIcon, NetworkIcon, ExchangeIcon } from '@web3icons/react';

// Basic types
type Size = number | string;

// Token icon component
interface TokenIconProps {
  token?: string;
  network?: string;
  address?: string;
  size?: Size;
  className?: string;
}

export function CryptoToken({ 
  token, 
  network, 
  address, 
  size = 64, 
  className = '' 
}: TokenIconProps) {
  // Defensive check to ensure token is available
  if (!token && !network) {
    // Fallback to placeholder when no token info is available
    return (
      <div 
        className={`flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white ${className}`} 
        style={{ width: size, height: size, fontSize: Number(size) / 3 }}
      >
        {token ? token.slice(0, 3).toUpperCase() : 'TOK'}
      </div>
    );
  }
  
  if (token) {
    return (
      <TokenIcon 
        symbol={token.toLowerCase()}
        size={size}
        className={className}
      />
    );
  }
  
  if (network && address) {
    return (
      <TokenIcon 
        address={address}
        network={network.toLowerCase()}
        size={size}
        className={className}
      />
    );
  }
  
  // Default fallback
  return null;
}

// Wallet icon component
interface WalletIconProps {
  id?: string;
  name?: string;
  size?: Size;
  className?: string;
}

export function CryptoWallet({ 
  id, 
  name, 
  size = 64, 
  className = '' 
}: WalletIconProps) {
  if (id) {
    return (
      <WalletIcon 
        id={id.toLowerCase()} 
        size={size}
        className={className}
      />
    );
  }
  
  if (name) {
    return (
      <WalletIcon 
        name={name} 
        size={size}
        className={className}
      />
    );
  }
  
  // Default fallback
  return null;
}

// Network icon component
interface NetworkIconProps {
  network?: string;
  id?: string;
  size?: Size;
  className?: string;
}

export function CryptoNetwork({ 
  network, 
  id, 
  size = 64, 
  className = '' 
}: NetworkIconProps) {
  if (network) {
    return (
      <NetworkIcon 
        name={network.toLowerCase()} 
        size={size}
        className={className}
      />
    );
  }
  
  if (id) {
    return (
      <NetworkIcon 
        id={id} 
        size={size}
        className={className}
      />
    );
  }
  
  // Default fallback
  return null;
}

// Exchange icon component
interface ExchangeIconProps {
  id?: string;
  name?: string;
  size?: Size;
  className?: string;
}

export function CryptoExchange({ 
  id, 
  name, 
  size = 64, 
  className = '' 
}: ExchangeIconProps) {
  if (id) {
    return (
      <ExchangeIcon 
        id={id.toLowerCase()} 
        size={size}
        className={className}
      />
    );
  }
  
  if (name) {
    return (
      <ExchangeIcon 
        name={name} 
        size={size}
        className={className}
      />
    );
  }
  
  // Default fallback
  return null;
}

// Popular token lists (commonly used in the app)
export const popularTokens = [
  'btc', 'eth', 'sol', 'avax', 'sui', 'sei', 'near', 'inj'
];

export const popularStablecoins = [
  'usdt', 'usdc', 'pyusd', 'eurt', 'dai', 'frax', 'lusd'
];

export const popularDefiTokens = [
  'gmx', 'pendle', 'stg', 'woo', 'dydx', 'velo', 'jmpt'
];

export const popularWallets = [
  'metamask', 'phantom', 'coinbase', 'trust-wallet', 'rainbow', 'ledger'
];

export const popularNetworks = [
  'ethereum', 'solana', 'polygon', 'avalanche', 'base', 'optimism'
];

export const popularExchanges = [
  'binance', 'coinbase', 'kraken', 'kucoin', 'bybit', 'okx'
];

// Icon grid components - we're keeping these simple since not all are used
type IconGridProps = {
  size?: Size;
};

export function PopularCryptoIcons({ size = 48 }: IconGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {popularTokens.map(token => (
        <div key={token} className="flex flex-col items-center group cursor-pointer">
          <CryptoToken token={token} size={size} className="transition-all duration-300 group-hover:scale-110" />
          <span className="mt-2 text-sm font-medium group-hover:text-blue-600 transition-colors">{token.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

export function StablecoinIcons({ size = 48 }: IconGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {popularStablecoins.map(token => (
        <div key={token} className="flex flex-col items-center group cursor-pointer">
          <CryptoToken token={token} size={size} className="transition-all duration-300 group-hover:scale-110" />
          <span className="mt-2 text-sm font-medium group-hover:text-blue-600 transition-colors">{token.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

export function DefiIcons({ size = 48 }: IconGridProps) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {popularDefiTokens.map(token => (
        <div key={token} className="flex flex-col items-center group cursor-pointer">
          <CryptoToken token={token} size={size} className="transition-all duration-300 group-hover:scale-110" />
          <span className="mt-2 text-sm font-medium group-hover:text-blue-600 transition-colors">{token.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

// CryptoIcon for backward compatibility
export function CryptoIcon({ token, size = 64, className = '' }: { token: string; size?: number; className?: string }) {
  return <CryptoToken token={token} size={size} className={className} />;
}

// Simple utility types to help with categorization
export const iconTypes = {
  token: 'token',
  wallet: 'wallet',
  exchange: 'exchange',
  network: 'network'
};
