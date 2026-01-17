import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react"

const footerLinks = {
  products: [
    { label: "AI Workshop", href: "/digital-products" },
    { label: "AI Prompts", href: "/digital-products" },
    { label: "Hooks Bundle", href: "/digital-products" },
    { label: "Business Setup", href: "/digital-products" },
  ],
  services: [
    { label: "Personal Branding", href: "/services" },
    { label: "SEO Services", href: "/services" },
    { label: "LinkedIn Lead Gen", href: "/services" },
    { label: "AI Content", href: "/services" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Marketing Newsletter", href: "/marketing-newsletter" },
    { label: "Daily News Analysis", href: "/daily-news-analysis" },
    { label: "Rank Us", href: "/rank-us" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Workshops", href: "https://academy.digitalgoneeasy.com/web/courses", external: true },
    { label: "Community", href: "https://academy.digitalgoneeasy.com/web/lite/store/68b0e1fcbc402042f062b9f4", external: true },
  ],
}

export function Footer() {
  return (
    <footer className="bg-darkbg text-white mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Digitalgoneeasy</h3>
            <p className="text-gray-300 mb-4">
              Transform your digital skills with AI-powered workshops and premium digital products.
              Join thousands of professionals who are 10Xing their growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={`${link.label}-${index}`}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Digitalgoneeasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

