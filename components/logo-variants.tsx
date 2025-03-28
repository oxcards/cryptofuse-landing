import type React from "react"

interface LogoProps {
  className?: string
  variant?: 'default' | 'light' | 'dark' | 'outline' | 'gradient' | 'monochrome'
}

export function CryptoFuseLogoVariant({ className, variant = 'default' }: LogoProps) {
  switch (variant) {
    case 'light':
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="8" y="8" width="48" height="48" rx="12" fill="#DBEAFE" />
          <path
            d="M24 18C24 18 18 24 18 32C18 40 24 46 32 46C40 46 46 40 46 32H38C38 36 35 38 32 38C29 38 26 36 26 32C26 28 29 26 32 26H46C46 18 40 18 32 18H24Z"
            fill="#1E40AF"
          />
        </svg>
      )
    case 'dark':
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="8" y="8" width="48" height="48" rx="12" fill="#0F172A" />
          <path
            d="M24 18C24 18 18 24 18 32C18 40 24 46 32 46C40 46 46 40 46 32H38C38 36 35 38 32 38C29 38 26 36 26 32C26 28 29 26 32 26H46C46 18 40 18 32 18H24Z"
            fill="#60A5FA"
          />
        </svg>
      )
    case 'outline':
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="8.5" y="8.5" width="47" height="47" rx="11.5" stroke="#1E40AF" strokeWidth="1" />
          <path
            d="M24 18C24 18 18 24 18 32C18 40 24 46 32 46C40 46 46 40 46 32H38C38 36 35 38 32 38C29 38 26 36 26 32C26 28 29 26 32 26H46C46 18 40 18 32 18H24Z"
            stroke="#1E40AF"
            strokeWidth="1.5"
          />
        </svg>
      )
    case 'gradient':
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="8" y="8" width="48" height="48" rx="12" fill="url(#gradient_blue)" />
          <path
            d="M24 18C24 18 18 24 18 32C18 40 24 46 32 46C40 46 46 40 46 32H38C38 36 35 38 32 38C29 38 26 36 26 32C26 28 29 26 32 26H46C46 18 40 18 32 18H24Z"
            fill="white"
          />
          <defs>
            <linearGradient id="gradient_blue" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#1E40AF" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'monochrome':
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="8" y="8" width="48" height="48" rx="12" fill="#F1F5F9" />
          <path
            d="M24 18C24 18 18 24 18 32C18 40 24 46 32 46C40 46 46 40 46 32H38C38 36 35 38 32 38C29 38 26 36 26 32C26 28 29 26 32 26H46C46 18 40 18 32 18H24Z"
            fill="#64748B"
          />
        </svg>
      )
    case 'default':
    default:
      return (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
          <rect x="8" y="8" width="48" height="48" rx="12" fill="#1E40AF" />
          <path
            d="M24 18C24 18 18 24 18 32C18 40 24 46 32 46C40 46 46 40 46 32H38C38 36 35 38 32 38C29 38 26 36 26 32C26 28 29 26 32 26H46C46 18 40 18 32 18H24Z"
            fill="white"
          />
        </svg>
      )
  }
}
