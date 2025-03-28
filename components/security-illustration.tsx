import type React from "react"

interface SecurityIllustrationProps {
  className?: string
}

export const SecurityIllustration: React.FC<SecurityIllustrationProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M200 70L120 100V160C120 204.183 155.817 240 200 240C244.183 240 280 204.183 280 160V100L200 70Z"
        fill="url(#security_gradient)"
        opacity="0.1"
      />
      <path
        d="M200 80L130 106.667V160C130 198.66 161.34 230 200 230C238.66 230 270 198.66 270 160V106.667L200 80Z"
        stroke="url(#security_gradient)"
        strokeWidth="4"
        fill="none"
      />
      <circle cx="200" cy="160" r="40" fill="url(#security_gradient)" opacity="0.2" />
      <path d="M200 140L185 155H195V170H185L200 185L215 170H205V155H215L200 140Z" fill="url(#security_gradient)" />
      <circle cx="170" cy="130" r="8" fill="url(#security_gradient)" opacity="0.6" />
      <circle cx="230" cy="190" r="8" fill="url(#security_gradient)" opacity="0.6" />
      <circle cx="160" cy="190" r="5" fill="url(#security_gradient)" opacity="0.4" />
      <circle cx="240" cy="130" r="5" fill="url(#security_gradient)" opacity="0.4" />
      <defs>
        <linearGradient id="security_gradient" x1="120" y1="70" x2="280" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

