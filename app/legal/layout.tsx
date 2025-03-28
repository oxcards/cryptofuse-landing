import type React from "react"
import { Button } from "@/components/ui/button"
import { CryptoFuseLogo } from "@/components/cryptofuse-logo"
import Link from "next/link"

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Simple header */}
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 md:px-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <CryptoFuseLogo className="h-6 w-6" />
              <span className="font-bold">CryptoFuse</span>
            </Link>
            <Button asChild variant="outline" size="sm">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar layout */}
      <div className="flex-1 container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-2 sticky top-8">
              <h3 className="font-medium mb-4">Legal Documents</h3>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="/legal/privacy-policy"
                  className="text-sm hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/legal/terms-of-service"
                  className="text-sm hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/legal/cookie-policy"
                  className="text-sm hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="/legal/compliance"
                  className="text-sm hover:text-primary transition-colors px-3 py-2 rounded-md hover:bg-muted"
                >
                  Compliance
                </Link>
              </nav>
            </div>
          </div>
          <div className="md:col-span-3">
            <div className="prose max-w-none dark:prose-invert">{children}</div>
          </div>
        </div>
      </div>

      {/* Simple footer */}
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} CryptoFuse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

