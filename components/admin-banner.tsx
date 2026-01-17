"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export function AdminBanner() {
  const [isDismissed, setIsDismissed] = useState(false)
  const pathname = usePathname()
  
  const shouldShow = !isDismissed && (pathname === "/" || pathname === "/rank-us")

  useEffect(() => {
    const dismissed = localStorage.getItem("admin-banner-dismissed")
    if (dismissed === "true") {
      setIsDismissed(true)
    }
  }, [])

  const handleDismiss = () => {
    setIsDismissed(true)
    localStorage.setItem("admin-banner-dismissed", "true")
  }

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="sticky top-0 z-50 bg-premium text-white py-2 px-4"
        >
          <div className="container mx-auto flex items-center justify-between">
            <p className="text-sm font-medium">Very important Mansi — Need attention</p>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDismiss}
              className="h-6 w-6 text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

