import type React from "react"

interface ModernHeroIllustrationProps {
  className?: string
}

export const ModernHeroIllustration: React.FC<ModernHeroIllustrationProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Elements */}
      <circle cx="250" cy="200" r="150" fill="url(#hero_gradient_2025)" opacity="0.05" />
      <circle cx="250" cy="200" r="100" fill="url(#hero_gradient_2025)" opacity="0.08" />

      {/* 3D Platform */}
      <ellipse cx="250" cy="280" rx="120" ry="30" fill="#E2E8F0" />
      <ellipse cx="250" cy="280" rx="100" ry="25" fill="#F8FAFC" />

      {/* Main Card Element */}
      <g filter="url(#card_shadow)">
        <rect x="150" y="120" width="200" height="140" rx="16" fill="white" />
        <rect x="150" y="120" width="200" height="140" rx="16" stroke="url(#card_stroke)" strokeWidth="1.5" />
      </g>

      {/* Card Elements */}
      <rect x="170" y="140" width="80" height="10" rx="5" fill="#E2E8F0" />
      <rect x="170" y="160" width="120" height="10" rx="5" fill="#E2E8F0" />
      <rect x="170" y="180" width="60" height="10" rx="5" fill="#E2E8F0" />

      <rect x="170" y="210" width="40" height="30" rx="6" fill="url(#button_gradient)" />
      <rect x="220" y="210" width="40" height="30" rx="6" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />

      {/* Floating Crypto Icons */}
      <g transform="translate(320, 150) rotate(15)">
        <circle cx="0" cy="0" r="25" fill="url(#bitcoin_gradient)" />
        <path d="M0 -15L-9 0H9L0 15L-9 0H9Z" fill="white" />
      </g>

      <g transform="translate(180, 90) rotate(-10)">
        <circle cx="0" cy="0" r="20" fill="url(#eth_gradient)" />
        <path d="M0 -10L-8 0L0 10L8 0Z" fill="white" />
      </g>

      <g transform="translate(350, 220) rotate(25)">
        <circle cx="0" cy="0" r="15" fill="url(#alt_gradient)" />
        <rect x="-7" y="-7" width="14" height="14" rx="2" fill="white" />
      </g>

      {/* Floating Particles */}
      <circle cx="150" cy="100" r="4" fill="url(#hero_gradient_2025)" opacity="0.6" />
      <circle cx="370" cy="120" r="3" fill="url(#hero_gradient_2025)" opacity="0.6" />
      <circle cx="130" cy="220" r="5" fill="url(#hero_gradient_2025)" opacity="0.6" />
      <circle cx="380" cy="260" r="4" fill="url(#hero_gradient_2025)" opacity="0.6" />
      <circle cx="300" cy="80" r="3" fill="url(#hero_gradient_2025)" opacity="0.6" />

      {/* Connection Lines */}
      <path d="M180 90L250 200" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M320 150L250 200" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M350 220L250 200" stroke="url(#line_gradient)" strokeWidth="1" strokeDasharray="4 4" />

      {/* Definitions */}
      <defs>
        <linearGradient id="hero_gradient_2025" x1="100" y1="50" x2="400" y2="350" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="0.5" stopColor="#8B5CF6" />
          <stop offset="1" stopColor="#EC4899" />
        </linearGradient>

        <linearGradient id="card_stroke" x1="150" y1="120" x2="350" y2="260" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E2E8F0" />
          <stop offset="1" stopColor="#94A3B8" />
        </linearGradient>

        <linearGradient id="button_gradient" x1="170" y1="210" x2="210" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>

        <linearGradient id="bitcoin_gradient" x1="-25" y1="-25" x2="25" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F59E0B" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>

        <linearGradient id="eth_gradient" x1="-20" y1="-20" x2="20" y2="20" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="1" stopColor="#4F46E5" />
        </linearGradient>

        <linearGradient id="alt_gradient" x1="-15" y1="-15" x2="15" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>

        <linearGradient id="line_gradient" x1="150" y1="100" x2="350" y2="300" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" opacity="0.2" />
          <stop offset="1" stopColor="#8B5CF6" opacity="0.6" />
        </linearGradient>

        <filter
          id="card_shadow"
          x="145"
          y="115"
          width="210"
          height="155"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

