import type React from "react"

interface IntegrationIllustrationProps {
  className?: string
}

export const IntegrationIllustration: React.FC<IntegrationIllustrationProps> = ({ className }) => {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="80" y="60" width="240" height="180" rx="12" fill="#F9FAFB" stroke="#E5E7EB" strokeWidth="2" />
      <rect x="100" y="80" width="200" height="30" rx="6" fill="#F3F4F6" />
      <rect x="110" y="90" width="120" height="10" rx="2" fill="#D1D5DB" />
      <rect x="100" y="120" width="200" height="100" rx="6" fill="#F3F4F6" />
      <circle cx="140" cy="150" r="20" fill="url(#integration_gradient)" opacity="0.2" />
      <path d="M140 140L132 148H138V156H132L140 164L148 156H142V148H148L140 140Z" fill="url(#integration_gradient)" />
      <rect x="170" y="135" width="100" height="10" rx="2" fill="#D1D5DB" />
      <rect x="170" y="155" width="80" height="10" rx="2" fill="#D1D5DB" />
      <rect x="170" y="175" width="60" height="10" rx="2" fill="#D1D5DB" />
      <defs>
        <linearGradient id="integration_gradient" x1="120" y1="130" x2="160" y2="170" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

