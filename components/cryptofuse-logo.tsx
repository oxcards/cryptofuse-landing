"use client"

import React from "react"
import { useTheme } from "next-themes"

interface CryptoFuseLogoProps {
  className?: string
}

export function CryptoFuseLogo({ className }: CryptoFuseLogoProps) {
  const { theme } = useTheme() || { theme: 'light' }
  
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect 
        x="8" 
        y="8" 
        width="48" 
        height="48" 
        rx="12" 
        fill={theme === 'dark' ? "#3B82F6" : "#1E40AF"} 
      />
      <path
        d="M24 18C24 18 18 24 18 32C18 40 24 46 32 46C40 46 46 40 46 32H38C38 36 35 38 32 38C29 38 26 36 26 32C26 28 29 26 32 26H46C46 18 40 18 32 18H24Z"
        fill="white"
      />
    </svg>
  )
}
