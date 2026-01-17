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
         
        </motion.div>
      )}
    </AnimatePresence>
  )
}

