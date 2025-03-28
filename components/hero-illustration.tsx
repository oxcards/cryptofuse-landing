import type React from "react"

interface HeroIllustrationProps {
  className?: string
}

export const HeroIllustration: React.FC<HeroIllustrationProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="100" y="50" width="200" height="200" rx="16" fill="url(#hero_gradient)" opacity="0.1" />
      <rect x="120" y="70" width="160" height="160" rx="12" stroke="url(#hero_gradient)" strokeWidth="4" fill="none" />
      <circle cx="200" cy="150" r="50" fill="url(#hero_gradient)" opacity="0.2" />
      <path d="M200 120L180 140H195V160H180L200 180L220 160H205V140H220L200 120Z" fill="url(#hero_gradient)" />
      <circle cx="160" cy="110" r="10" fill="url(#hero_gradient)" opacity="0.6" />
      <circle cx="240" cy="190" r="10" fill="url(#hero_gradient)" opacity="0.6" />
      <circle cx="150" cy="190" r="6" fill="url(#hero_gradient)" opacity="0.4" />
      <circle cx="250" cy="110" r="6" fill="url(#hero_gradient)" opacity="0.4" />
      <defs>
        <linearGradient id="hero_gradient" x1="100" y1="50" x2="300" y2="250" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

