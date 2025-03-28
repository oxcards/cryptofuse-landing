import type React from "react"

interface EnhancedLogoProps {
  className?: string
}

export const EnhancedLogo: React.FC<EnhancedLogoProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#logo_gradient)" />
      <path
        d="M32 16C25.373 16 20 21.373 20 28V36C20 42.627 25.373 48 32 48C38.627 48 44 42.627 44 36V28C44 21.373 38.627 16 32 16Z"
        fill="white"
        fillOpacity="0.2"
      />
      <path
        d="M32 20C27.582 20 24 23.582 24 28V36C24 40.418 27.582 44 32 44C36.418 44 40 40.418 40 36V28C40 23.582 36.418 20 32 20Z"
        stroke="white"
        strokeWidth="2"
      />
      <path d="M32 26L26 32H30V38H26L32 44L38 38H34V32H38L32 26Z" fill="white" />
      <circle cx="24" cy="24" r="2" fill="white" fillOpacity="0.6" />
      <circle cx="40" cy="40" r="2" fill="white" fillOpacity="0.6" />
      <defs>
        <linearGradient id="logo_gradient" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1E40AF" />
        </linearGradient>
      </defs>
    </svg>
  )
}

