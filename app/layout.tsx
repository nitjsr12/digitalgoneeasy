import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AdminBanner } from "@/components/admin-banner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digitalgoneeasy - AI Workshop, Digital Products & Marketing Resources",
  description: "Join our 3+ Hours AI Workshop + Certificate + 3 Freebies worth ₹10,500 for only ₹9. Get digital products, learn AI tools, ChatGPT, Excel with AI, and Marketing with AI.",
  keywords: "AI Workshop, Digital Marketing, ChatGPT, Excel with AI, Marketing with AI, Digital Products, Personal Branding, SEO Services",
  openGraph: {
    title: "Digitalgoneeasy - AI Workshop & Digital Products",
    description: "Transform your digital skills with AI-powered workshops and premium digital products starting at ₹9",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalgoneeasy - AI Workshop & Digital Products",
    description: "Transform your digital skills with AI-powered workshops and premium digital products starting at ₹9",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminBanner />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

