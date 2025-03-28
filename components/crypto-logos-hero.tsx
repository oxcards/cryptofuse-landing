import type React from "react"

interface CryptoLogosHeroProps {
  className?: string
}

export const CryptoLogosHero: React.FC<CryptoLogosHeroProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Elements */}
      <circle cx="250" cy="200" r="150" fill="url(#hero_gradient_crypto)" opacity="0.05" />
      <circle cx="250" cy="200" r="100" fill="url(#hero_gradient_crypto)" opacity="0.08" />

      {/* Bitcoin */}
      <g transform="translate(250, 120)">
        <circle cx="0" cy="0" r="40" fill="#F7931A" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="35" stroke="#F7931A" strokeWidth="2" fill="none" />
        <path d="M0 -20L-12 0H12L0 20L-12 0H12Z" fill="#F7931A" />
        <path d="M-8 -8L-15 -15M8 -8L15 -15M-8 8L-15 15M8 8L15 15" stroke="#F7931A" strokeWidth="1.5" />
      </g>

      {/* Ethereum */}
      <g transform="translate(170, 200)">
        <circle cx="0" cy="0" r="35" fill="#627EEA" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="30" stroke="#627EEA" strokeWidth="2" fill="none" />
        <path d="M0 -15L-10 0L0 15L10 0Z" fill="#627EEA" />
        <path d="M0 -15L0 15" stroke="#627EEA" strokeWidth="1.5" />
      </g>

      {/* Litecoin */}
      <g transform="translate(330, 200)">
        <circle cx="0" cy="0" r="35" fill="#345D9D" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="30" stroke="#345D9D" strokeWidth="2" fill="none" />
        <path d="M0 -12L-8 8H8L0 -12ZM-8 8L0 15L8 8" stroke="#345D9D" strokeWidth="2" fill="none" />
      </g>

      {/* Ripple */}
      <g transform="translate(250, 280)">
        <circle cx="0" cy="0" r="35" fill="#23292F" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="30" stroke="#23292F" strokeWidth="2" fill="none" />
        <circle cx="-10" cy="0" r="4" fill="#23292F" />
        <circle cx="10" cy="0" r="4" fill="#23292F" />
        <circle cx="0" cy="-10" r="4" fill="#23292F" />
        <circle cx="0" cy="10" r="4" fill="#23292F" />
        <path d="M-10 0L0 -10M0 -10L10 0M10 0L0 10M0 10L-10 0" stroke="#23292F" strokeWidth="1.5" />
      </g>

      {/* Cardano */}
      <g transform="translate(170, 120)">
        <circle cx="0" cy="0" r="25" fill="#0033AD" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="20" stroke="#0033AD" strokeWidth="2" fill="none" />
        <circle cx="0" cy="0" r="5" fill="#0033AD" />
        <circle cx="0" cy="-12" r="3" fill="#0033AD" />
        <circle cx="11" cy="-5" r="3" fill="#0033AD" />
        <circle cx="7" cy="10" r="3" fill="#0033AD" />
        <circle cx="-7" cy="10" r="3" fill="#0033AD" />
        <circle cx="-11" cy="-5" r="3" fill="#0033AD" />
      </g>

      {/* Solana */}
      <g transform="translate(330, 120)">
        <circle cx="0" cy="0" r="25" fill="#14F195" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="20" stroke="#14F195" strokeWidth="2" fill="none" />
        <path d="M-10 -5H10L-10 5H10" stroke="#14F195" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Polkadot */}
      <g transform="translate(170, 280)">
        <circle cx="0" cy="0" r="25" fill="#E6007A" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="20" stroke="#E6007A" strokeWidth="2" fill="none" />
        <circle cx="0" cy="0" r="5" fill="#E6007A" />
        <circle cx="0" cy="-12" r="3" fill="#E6007A" />
        <circle cx="12" cy="0" r="3" fill="#E6007A" />
        <circle cx="0" cy="12" r="3" fill="#E6007A" />
        <circle cx="-12" cy="0" r="3" fill="#E6007A" />
      </g>

      {/* Binance Coin */}
      <g transform="translate(330, 280)">
        <circle cx="0" cy="0" r="25" fill="#F3BA2F" fillOpacity="0.1" />
        <circle cx="0" cy="0" r="20" stroke="#F3BA2F" strokeWidth="2" fill="none" />
        <path d="M0 -8L-8 0L0 8L8 0L0 -8Z" fill="#F3BA2F" />
        <path d="M-8 0L0 -8L8 0L0 8L-8 0Z" stroke="#F3BA2F" strokeWidth="1.5" fill="none" />
      </g>

      {/* Connection Lines */}
      <path d="M250 120L170 120" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M250 120L330 120" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M250 120L170 200" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M250 120L330 200" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M250 120L250 280" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M170 200L170 280" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M330 200L330 280" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M170 200L250 280" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M330 200L250 280" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M170 280L250 280" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M250 280L330 280" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Definitions */}
      <defs>
        <linearGradient id="hero_gradient_crypto" x1="100" y1="50" x2="400" y2="350" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>

        <linearGradient id="line_gradient" x1="150" y1="100" x2="350" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" opacity="0.2" />
          <stop offset="1" stopColor="#8B5CF6" opacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

