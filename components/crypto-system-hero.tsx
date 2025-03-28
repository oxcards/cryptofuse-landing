"use client"

import type React from "react"
import { useTheme } from "next-themes"
import { CryptoFuseLogoSolid } from "@/components/cryptofuse-logo-solid"
import { CryptoToken } from "@/components/crypto"

interface CryptoSystemHeroProps {
  className?: string
}

export function CryptoSystemHero({ className }: CryptoSystemHeroProps) {
  const { theme } = useTheme() || { theme: 'light' }
  
  return (
    <div className={`relative ${className}`}>
      {/* Orbital System with Central Logo */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        {/* Orbit Paths */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border border-blue-200 dark:border-blue-600/60 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full border border-blue-300 dark:border-blue-500/60 opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] rounded-full border border-blue-400 dark:border-blue-400/60 opacity-30"></div>
        
        {/* Central Logo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 md:w-44 md:h-44 z-10">
          <div className="rounded-full w-full h-full flex items-center justify-center shadow-xl bg-gradient-to-br from-blue-500 to-blue-700 pulse-glow">
            <div className="w-[80%] h-[80%] bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
              <CryptoFuseLogoSolid 
                className="w-[85%] h-[85%]" 
                primaryColor="#FFFFFF" 
                backgroundColor={theme === 'dark' ? "#3B82F6" : "#1E40AF"}
                forceColors={true}
              />
            </div>
          </div>
        </div>

        {/* Orbiting Crypto Icons */}
        {/* Bitcoin - Outer Orbit */}
        <div className="absolute top-1/2 left-1/2 w-[90%] h-[90%] animate-orbit-smooth z-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-500 p-3 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1.5">
              <CryptoToken token="btc" size={36} />
            </div>
          </div>
        </div>

        {/* Ethereum - Outer Orbit */}
        <div className="absolute top-1/2 left-1/2 w-[90%] h-[90%] animate-orbit-smooth z-20" style={{ animationDelay: "-8s" }}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-purple-600 p-3 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1.5">
              <CryptoToken token="eth" size={36} />
            </div>
          </div>
        </div>

        {/* Solana - Middle Orbit */}
        <div className="absolute top-1/2 left-1/2 w-[70%] h-[70%] animate-orbit-smooth z-20" style={{ animationDelay: "-5s" }}>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-teal-500 p-3 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1">
              <CryptoToken token="sol" size={28} />
            </div>
          </div>
        </div>

        {/* AVAX - Middle Orbit */}
        <div className="absolute top-1/2 left-1/2 w-[70%] h-[70%] animate-orbit-smooth z-20" style={{ animationDelay: "-12s" }}>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 p-3 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-full p-1">
              <CryptoToken token="avax" size={28} />
            </div>
          </div>
        </div>

        {/* USDT - Inner Orbit */}
        <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] animate-orbit-smooth z-20">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 p-2 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
              <CryptoToken token="usdt" size={24} />
            </div>
          </div>
        </div>

        {/* USDC - Inner Orbit */}
        <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] animate-orbit-smooth z-20" style={{ animationDelay: "-4s" }}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 p-2 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
              <CryptoToken token="usdc" size={24} />
            </div>
          </div>
        </div>

        {/* MATIC - Inner Orbit */}
        <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] animate-orbit-smooth z-20" style={{ animationDelay: "-8s" }}>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 bg-indigo-500 p-2 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
              <CryptoToken token="matic" size={24} />
            </div>
          </div>
        </div>

        {/* DAI - Inner Orbit */}
        <div className="absolute top-1/2 left-1/2 w-[50%] h-[50%] animate-orbit-smooth z-20" style={{ animationDelay: "-2s" }}>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 p-2 rounded-full shadow-md flex items-center justify-center">
            <div className="bg-white dark:bg-gray-800 rounded-full p-0.5">
              <CryptoToken token="dai" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-700/10 dark:from-blue-800/20 dark:to-blue-600/20 rounded-3xl"
        style={{ zIndex: 0 }}
      ></div>
    </div>
  )
}
