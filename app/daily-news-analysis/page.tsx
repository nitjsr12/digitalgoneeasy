"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Calendar, MessageSquare, Mail } from "lucide-react"

const trendingTopics = [
  {
    title: "AI Tools Revolutionizing Marketing in 2025",
    category: "Technology",
    summary: "Latest AI tools are transforming how marketers create content and engage audiences.",
    date: "2025-01-15",
  },
  {
    title: "Digital Marketing Trends for Small Businesses",
    category: "Marketing",
    summary: "Key trends that small businesses should focus on in the coming year.",
    date: "2025-01-14",
  },
  {
    title: "ChatGPT Integration in Business Workflows",
    category: "AI",
    summary: "How companies are leveraging ChatGPT to streamline operations and boost productivity.",
    date: "2025-01-13",
  },
  {
    title: "SEO Best Practices for 2025",
    category: "SEO",
    summary: "Updated SEO strategies that align with current search engine algorithms.",
    date: "2025-01-12",
  },
  {
    title: "Social Media Marketing for B2B Companies",
    category: "Social Media",
    summary: "Effective strategies for B2B companies to engage on social media platforms.",
    date: "2025-01-11",
  },
]

const newsArticles = [
  {
    id: 1,
    title: "Breaking: New AI Content Creation Tools Launched",
    summary: "Major tech companies have released new AI-powered content creation tools that promise to revolutionize digital marketing.",
    date: "2025-01-15",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Marketing Budget Allocations in 2025",
    summary: "A comprehensive study reveals how companies are allocating their marketing budgets across different channels.",
    date: "2025-01-14",
    category: "Marketing",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Impact of AI on Digital Marketing Jobs",
    summary: "Analysis of how AI is reshaping digital marketing roles and creating new opportunities.",
    date: "2025-01-13",
    category: "Career",
    readTime: "6 min read",
  },
]

export default function DailyNewsAnalysisPage() {
  const [selectedDate, setSelectedDate] = useState<string>("")

  // Generate date options for the last 30 days
  const dateOptions = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - i)
    return date.toISOString().split("T")[0]
  })

  const filteredArticles = selectedDate
    ? newsArticles.filter(article => article.date === selectedDate)
    : newsArticles

  return (
    <div className="min-h-screen py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Daily News Analysis
          </h1>
          <p className="text-xl text-body max-w-2xl mx-auto">
            Stay updated with the latest marketing trends, AI developments, and digital industry insights
          </p>
        </motion.div>

        {/* Date Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted" />
                  <label htmlFor="date-filter" className="font-medium text-heading">
                    Filter by Date:
                  </label>
                </div>
                <select
                  id="date-filter"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="flex-1 md:max-w-xs px-4 py-2 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">All Dates</option>
                  {dateOptions.map((date) => (
                    <option key={date} value={date}>
                      {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold text-heading">Trending Topics</h2>
              </div>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-semibold text-primary bg-highlight px-3 py-1 rounded-full">
                          {topic.category}
                        </span>
                        <span className="text-xs text-muted">{topic.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-heading mb-2">{topic.title}</h3>
                      <p className="text-body text-sm">{topic.summary}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* News Articles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-heading mb-4">Latest News</h2>
              <div className="space-y-4">
                {filteredArticles.map((article) => (
                  <Card key={article.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-primary bg-highlight px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center gap-4 text-xs text-muted">
                          <span>{article.date}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{article.summary}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Summary Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-heading mb-4">Quick Insights</h2>
              <div className="space-y-4">
                <Card className="bg-primary text-white border-none">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">AI Adoption Rate</h3>
                    <p className="text-white/90 text-sm">
                      78% of marketers are now using AI tools in their daily workflow.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-heading">Content Marketing</h3>
                    <p className="text-body text-sm">
                      Video content continues to dominate with 85% engagement rate.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-heading">SEO Trends</h3>
                    <p className="text-body text-sm">
                      Voice search optimization is now critical for local businesses.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-brand-gradient text-white border-none">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="h-8 w-8 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Get Daily Analysis</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Receive daily news analysis directly on WhatsApp and via newsletter
                  </p>
                  <div className="space-y-2">
                    <Button variant="secondary" className="w-full" asChild>
                      <a href="https://chat.whatsapp.com/I3HAWSd29QzBVIjZ81QH3M" target="_blank" rel="noopener noreferrer">
                        WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                      <a href="/marketing-newsletter">
                        <Mail className="mr-2 h-4 w-4" />
                        Newsletter
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

