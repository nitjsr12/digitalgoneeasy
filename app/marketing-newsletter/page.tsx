"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Mail, Calendar } from "lucide-react"

const ticklesFormat = [
  {
    letter: "T",
    title: "Trends",
    description: "Latest marketing trends and industry movements shaping the digital landscape",
  },
  {
    letter: "I",
    title: "Insights",
    description: "Deep insights and strategic thinking from industry experts",
  },
  {
    letter: "C",
    title: "Case Studies",
    description: "Real-world success stories and lessons learned from actual campaigns",
  },
  {
    letter: "K",
    title: "Key Takeaways",
    description: "Actionable takeaways you can implement immediately",
  },
  {
    letter: "L",
    title: "Learnings",
    description: "Practical learnings from experiments, tests, and implementations",
  },
  {
    letter: "E",
    title: "Examples",
    description: "Concrete examples of effective marketing strategies and tactics",
  },
  {
    letter: "S",
    title: "Special Days",
    description: "Marketing opportunities around special days and events",
  },
]

export default function MarketingNewsletterPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle subscription logic here
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Marketing Tickles
          </h1>
          <p className="text-xl text-body mb-2">
            Thrice-a-week dose of fresh marketing sparks
          </p>
          <div className="flex items-center justify-center gap-2 text-muted">
            <Calendar className="h-5 w-5" />
            <span>Published Tue/Thu/Sat</span>
          </div>
        </motion.div>

        {/* Subscribe Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="border-primary border-2">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Mail className="h-6 w-6 text-primary" />
                Subscribe to Marketing Tickles
              </CardTitle>
              <CardDescription>
                Get the latest marketing insights delivered directly to your inbox, three times a week.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button type="submit" variant="default" size="lg">
                  Subscribe
                </Button>
              </form>
              {submitted && (
                <p className="mt-4 text-green-600 font-medium">Thank you for subscribing! Check your email for confirmation.</p>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* T.I.C.K.L.E.S Format */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-heading mb-8 text-center">What&apos;s Inside Each Issue</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ticklesFormat.map((item, index) => (
              <Card key={item.letter} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                    {item.letter}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-body">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Why Subscribe?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  "Stay ahead with the latest marketing trends and insights",
                  "Get actionable strategies you can implement immediately",
                  "Learn from real-world case studies and examples",
                  "Never miss important marketing opportunities",
                  "Join a community of marketing professionals",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-body">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* Archive Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-heading mb-8 text-center">Recent Issues</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-heading mb-2">
                        Marketing Tickles #{i} - {new Date(Date.now() - i * 2 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </h3>
                      <p className="text-body">Trends, insights, case studies, and more...</p>
                    </div>
                    <Button variant="outline">View Issue</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

