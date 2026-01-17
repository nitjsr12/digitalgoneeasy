"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Search, Users, BookOpen, Mail, TrendingUp } from "lucide-react"

const seoSections = [
  {
    keyword: "Digital Marketing Training",
    description: "Comprehensive digital marketing training programs designed to equip professionals with cutting-edge skills in AI-powered marketing, SEO, social media, and more.",
    links: [
      { label: "View Workshops", href: "https://academy.digitalgoneeasy.com/web/courses" },
      { label: "Read Blog Posts", href: "/blog?category=Marketing+with+AI" },
      { label: "Learn More", href: "/about" },
    ],
  },
  {
    keyword: "AI Workshop India",
    description: "Join India's leading AI workshop covering ChatGPT, Excel with AI, Marketing with AI, and AI tools. Get certified and access premium resources for just ₹9.",
    links: [
      { label: "Enroll Now @ ₹9", href: "/digital-products/ai-workshop" },
      { label: "Read AI Blog Posts", href: "/blog?category=AI+Tools" },
      { label: "View Services", href: "/services" },
    ],
  },
  {
    keyword: "Personal Branding Services",
    description: "Professional personal branding services to help you build a powerful online presence, establish thought leadership, and attract opportunities.",
    links: [
      { label: "Explore Services", href: "/services" },
      { label: "Read Case Studies", href: "/about" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    keyword: "LinkedIn Lead Generation",
    description: "Expert LinkedIn lead generation services to help B2B companies generate high-quality leads, build connections, and convert prospects into customers.",
    links: [
      { label: "Learn More", href: "/services" },
      { label: "View Blog Posts", href: "/blog?category=Marketing+with+AI" },
      { label: "Get Started", href: "/contact" },
    ],
  },
  {
    keyword: "SEO Services India",
    description: "Comprehensive SEO services in India including Local SEO (GEO), On-Page SEO, Off-Page SEO, Technical SEO, and outsourced SEO management.",
    links: [
      { label: "SEO Services", href: "/services" },
      { label: "Rank Us Page", href: "/rank-us" },
      { label: "Contact for Quote", href: "/contact" },
    ],
  },
  {
    keyword: "AI Content Creation",
    description: "Leverage AI tools for content creation at scale. Learn how to use ChatGPT, AI writing tools, and automation to create high-quality content efficiently.",
    links: [
      { label: "AI Content Service", href: "/services" },
      { label: "Read ChatGPT Blog", href: "/blog?category=ChatGPT" },
      { label: "Get AI Prompts", href: "/digital-products/ai-prompts-industry-wise" },
    ],
  },
  {
    keyword: "Marketing Newsletter",
    description: "Subscribe to Marketing Tickles - a thrice-a-week newsletter delivering fresh marketing insights, trends, case studies, and actionable strategies.",
    links: [
      { label: "Subscribe Now", href: "/marketing-newsletter" },
      { label: "View Archive", href: "/marketing-newsletter" },
      { label: "Read Blog", href: "/blog" },
    ],
  },
  {
    keyword: "Digital Marketing for Housewives",
    description: "Discover how digital marketing offers flexible, rewarding career opportunities for women returning to work after a career break. Learn from expert guidance and success stories.",
    links: [
      { label: "Read Career Guide", href: "/blog/digital-marketing-career-women-after-break" },
      { label: "View Hindi Blog", href: "/blog/digital-marketing-hindi-blog-2025" },
      { label: "Join Training", href: "/digital-products" },
    ],
  },
]

export default function RankUsPage() {
  return (
    <div className="min-h-screen py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            SEO Hub - Rank Us
          </h1>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Comprehensive resources for digital marketing, AI training, and professional services in India
          </p>
        </motion.div>

        <div className="space-y-8">
          {seoSections.map((section, index) => (
            <motion.div
              key={section.keyword}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="h-5 w-5 text-primary" />
                    <CardTitle className="text-2xl text-heading">{section.keyword}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <Button key={link.label} variant="outline" size="sm" asChild>
                        <Link href={link.href}>
                          {link.label}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <Card className="bg-brand-gradient text-white border-none">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <BookOpen className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Training Programs</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Comprehensive training in AI, digital marketing, and professional skills
                  </p>
                  <Button variant="secondary" size="sm" asChild>
                    <Link href="/digital-products">View Courses</Link>
                  </Button>
                </div>
                <div>
                  <TrendingUp className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Expert Services</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Professional services for personal branding, SEO, and lead generation
                  </p>
                  <Button variant="secondary" size="sm" asChild>
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
                <div>
                  <Users className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Community</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Join our community and connect with like-minded professionals
                  </p>
                  <Button variant="secondary" size="sm" asChild>
                    <a href="https://academy.digitalgoneeasy.com/web/lite/store/68b0e1fcbc402042f062b9f4" target="_blank" rel="noopener noreferrer">
                      Join Community
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

