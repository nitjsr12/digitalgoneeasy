"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Workshops", href: "https://academy.digitalgoneeasy.com/web/courses", external: true },
  { label: "Live Sessions", href: "https://chat.whatsapp.com/I3HAWSd29QzBVIjZ81QH3M", external: true },
  { label: "Community", href: "https://academy.digitalgoneeasy.com/web/lite/store/68b0e1fcbc402042f062b9f4", external: true },
  { label: "Digital Products", href: "/digital-products" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Marketing Newsletter", href: "/marketing-newsletter" },
  { label: "Daily News Analysis", href: "/daily-news-analysis" },
  { label: "Rank Us", href: "/rank-us" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            Digitalgoneeasy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 8).map((item) => {
              const isActive = pathname === item.href
              if (item.external) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                      isActive
                        ? "bg-primary text-white"
                        : "text-body hover:bg-surface"
                    )}
                  >
                    {item.label}
                  </a>
                )
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-body hover:bg-surface"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="ml-2 relative">
              <Button variant="default" size="sm" asChild>
                <Link href="/digital-products">Get @ ₹9</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-surface"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                if (item.external) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "block px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                        isActive
                          ? "bg-primary text-white"
                          : "text-body hover:bg-surface"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium rounded-xl transition-colors",
                      isActive
                        ? "bg-primary text-white"
                        : "text-body hover:bg-surface"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Button variant="default" className="w-full mt-4" asChild>
                <Link href="/digital-products">Get @ ₹9</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

