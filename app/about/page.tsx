"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Star, Users, Award, Target } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    rating: 5,
    comment: "Digitalgoneeasy transformed my understanding of AI in marketing. The workshop was comprehensive and the resources are invaluable.",
  },
  {
    name: "Rahul Patel",
    role: "Business Owner",
    rating: 5,
    comment: "The digital marketing training helped me grow my business significantly. Highly recommend their services!",
  },
  {
    name: "Anita Desai",
    role: "Freelancer",
    rating: 5,
    comment: "After a career break, Digitalgoneeasy helped me re-enter the workforce with confidence. The training is top-notch.",
  },
  {
    name: "Vikram Singh",
    role: "Entrepreneur",
    rating: 5,
    comment: "Best investment I've made. The AI tools training and digital products have revolutionized my workflow.",
  },
]

const trainingFeatures = [
  "3+ Hours Comprehensive Training",
  "Official Certificate of Completion",
  "Access to Premium Resources",
  "Lifetime Community Access",
  "Regular Updates & New Content",
  "Expert Support & Guidance",
]

export default function AboutPage() {
  const driveLink = process.env.NEXT_PUBLIC_DRIVE_LINK

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-soft-gradient">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">
              About Digitalgoneeasy
            </h1>
            <p className="text-xl text-body mb-8">
              Empowering professionals and businesses to 10X their growth through AI-powered digital marketing, 
              comprehensive training, and premium resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {driveLink && (
                <Button size="lg" variant="default" asChild>
                  <a href={driveLink} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    Download Pitch Deck
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Digitalgoneeasy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Why Digitalgoneeasy?
            </h2>
            <p className="text-lg text-body max-w-2xl mx-auto">
              We&apos;re on a mission to democratize AI-powered digital marketing education and make premium resources 
              accessible to everyone.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Accessible Excellence",
                description: "Premium quality training and resources at accessible prices, starting from just ₹9.",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Expert-Led Training",
                description: "Learn from industry experts with years of experience in AI, digital marketing, and business growth.",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Community Driven",
                description: "Join a thriving community of professionals, entrepreneurs, and learners supporting each other's growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <CardHeader>
                    <div className="text-primary mx-auto mb-4">{item.icon}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Training */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
                Digital Marketing Training
              </h2>
              <p className="text-lg text-body">
                Comprehensive training programs designed to equip you with cutting-edge digital marketing skills
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">What You&apos;ll Learn</CardTitle>
                <CardDescription>
                  Our training programs cover all aspects of modern digital marketing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    "AI Tools for Marketing",
                    "ChatGPT for Content Creation",
                    "Excel Automation with AI",
                    "SEO & Local SEO",
                    "Social Media Marketing",
                    "LinkedIn Lead Generation",
                    "Personal Branding",
                    "Meta Ads & Paid Marketing",
                  ].map((topic) => (
                    <div key={topic} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-body">{topic}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-highlight p-6 rounded-xl mb-6">
                  <h3 className="font-bold text-heading mb-4">Training Features:</h3>
                  <ul className="space-y-2">
                    {trainingFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                        <span className="text-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="default" size="lg" className="w-full sm:w-auto" asChild>
                  <a href="https://academy.digitalgoneeasy.com/web/courses" target="_blank" rel="noopener noreferrer">
                    Explore Training Programs
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-body">Real feedback from professionals who transformed their careers</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <CardDescription>{review.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body">&ldquo;{review.comment}&rdquo;</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          {driveLink && (
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <a href={driveLink} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download Reviews PDF
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to 10X Your Growth?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of professionals who are transforming their careers and businesses with Digitalgoneeasy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/digital-products">Get Started @ ₹9</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

