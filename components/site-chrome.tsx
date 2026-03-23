"use client"

import { usePathname } from "next/navigation"
import { AdminBanner } from "@/components/admin-banner"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

type SiteChromeProps = {
  children: React.ReactNode
}

export function SiteChrome({ children }: SiteChromeProps) {
  const pathname = usePathname()
  const hideMainChrome = pathname === "/CanvaLP"

  return (
    <>
      {!hideMainChrome ? <AdminBanner /> : null}
      {!hideMainChrome ? <Navbar /> : null}
      <main className="min-h-screen">{children}</main>
      {!hideMainChrome ? <Footer /> : null}
    </>
  )
}

