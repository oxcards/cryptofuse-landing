"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CryptoFuseLogo } from "@/components/cryptofuse-logo"
import { ThemeToggle } from "@/components/theme-toggle"

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-4 px-4 md:px-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <CryptoFuseLogo className="h-9 w-9 text-blue-600 transition-transform group-hover:scale-110" />
            <span className="font-heading font-bold text-xl text-blue-600 group-hover:text-blue-700 transition-colors">CryptoFuse</span>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              {[
                { name: "Features", href: "#features" },
                { name: "Currencies", href: "#currencies" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "FAQ", href: "#faq" },
              ].map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="px-4 hover:bg-blue-500/5 transition-colors text-gray-800 dark:text-gray-200 hover:text-blue-600"
                  onClick={() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })}
                >
                  {item.name}
                </Button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button
                size="sm"
                variant="outline"
                className="px-4 border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/5 text-blue-600"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact
              </Button>
              <Button
                size="sm"
                className="px-4 shadow-md hover:shadow-lg transition-shadow bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              className={`p-2 rounded-md relative z-20 ${
                scrolled ? "text-gray-800 dark:text-gray-200" : "text-gray-800 dark:text-gray-200"
              } hover:bg-white/10`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
    </header>
  )
}

interface MobileMenuProps {
  setMobileMenuOpen: (open: boolean) => void
}

const MobileMenu = ({ setMobileMenuOpen }: MobileMenuProps) => {
  return (
    <div className="fixed inset-0 z-10 bg-white dark:bg-gray-950 md:hidden">
      <div className="container mx-auto px-4 py-16 h-full flex flex-col">
        <div className="space-y-6 flex-1 flex flex-col justify-center">
          {[
            { name: "Features", href: "#features" },
            { name: "Currencies", href: "#currencies" },
            { name: "How It Works", href: "#how-it-works" },
            { name: "FAQ", href: "#faq" },
          ].map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 py-3 px-4 text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900"
              onClick={(e) => {
                e.preventDefault()
                setMobileMenuOpen(false)
                setTimeout(() => {
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
                }, 300)
              }}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CryptoFuseLogo className="h-6 w-6 text-blue-600" />
              {item.name}
            </Link>
          ))}
        </div>
        <div className="pt-6 space-y-4">
          <Button
            variant="outline"
            className="w-full justify-center h-12 text-base border-blue-500/20 text-blue-600 hover:bg-blue-500/5 dark:text-blue-400 dark:border-blue-500/40"
            onClick={() => {
              setMobileMenuOpen(false)
              setTimeout(() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }, 300)
            }}
          >
            Contact
          </Button>
          <Button
            className="w-full justify-center h-12 text-base bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              setMobileMenuOpen(false)
              setTimeout(() => {
                document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" })
              }, 300)
            }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
