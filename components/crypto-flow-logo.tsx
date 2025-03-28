import type React from "react"

interface CryptoFlowLogoProps {
  className?: string
}

export const CryptoFlowLogo: React.FC<CryptoFlowLogoProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="8" y="8" width="48" height="48" rx="24" fill="url(#paint0_linear)" />
      <path d="M32 20L24 28H30V36H24L32 44L40 36H34V28H40L32 20Z" fill="white" />
      <defs>
        <linearGradient id="paint0_linear" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

