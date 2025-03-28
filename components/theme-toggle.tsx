"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted before accessing theme
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center text-gray-400">
        <Sun className="h-5 w-5" />
      </div>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-9 h-9 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === 'light' && <Sun className="h-5 w-5 text-amber-500" />}
      {theme === 'dark' && <Moon className="h-5 w-5 text-blue-400" />}
      {theme !== 'light' && theme !== 'dark' && (
        theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches 
          ? <Moon className="h-5 w-5 text-blue-400" />
          : <Sun className="h-5 w-5 text-amber-500" />
      )}
    </button>
  )
}
