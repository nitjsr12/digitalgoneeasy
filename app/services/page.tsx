"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { services } from "@/data/services"
import { Check, ArrowRight, Phone, Mail } from "lucide-react"

const processSteps = [
  {
    title: "Discovery",
    description: "We understand your business goals, target audience, and current challenges through in-depth consultation.",
  },
  {
    title: "Strategy",
    description: "We develop a customized marketing strategy aligned with your objectives and market positioning.",
  },
  {
    title: "Execution",
    description: "Our team implements the strategy with precision, ensuring quality and consistency across all channels.",
  },
  {
    title: "Growth",
    description: "We continuously monitor, optimize, and scale your marketing efforts to drive sustainable growth.",
  },
]

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer comprehensive digital marketing services including Personal Branding, SEO/GEO, Social Media Management, LinkedIn Lead Generation, AI Content Creation, Meta Ads, and AI Agents development.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Results vary by service and industry. SEO typically shows results in 3-6 months, while social media and paid ads can show immediate improvements. We provide regular reporting to track progress.",
  },
  {
    question: "Do you work with small businesses?",
    answer: "Yes! We work with businesses of all sizes, from startups to enterprise companies. Our services are tailored to fit your budget and goals.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Pricing depends on the scope and complexity of your project. We offer both project-based and retainer options. Contact us for a free consultation and custom quote.",
  },
  {
    question: "Do you provide training?",
    answer: "Yes, we offer digital marketing training programs and workshops. Check out our Workshops page for current offerings.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-brand-gradient text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 0%, transparent 50%),
                                radial-gradient(circle at 80% 80%, white 0%, transparent 50%)`,
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block mb-6"
              >
                <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🎯 Professional Services
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Premium Digital Marketing Services
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Transform your digital presence with our comprehensive marketing solutions designed to drive results
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button size="lg" variant="secondary" className="group" asChild>
                  <a href="https://chat.whatsapp.com/I3HAWSd29QzBVIjZ81QH3M" target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2 h-5 w-5" />
                    Book Free Consultation
                  </a>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"
                />
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80"
                    alt="Digital Marketing Services"
                    width={500}
                    height={500}
                    className="rounded-2xl object-cover w-full h-full"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Our Services
            </h2>
            <p className="text-lg text-body">Comprehensive solutions for your digital marketing needs</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-body">
                          <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Our Process
            </h2>
            <p className="text-lg text-body">A proven methodology for delivering results</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring" }}
                whileHover={{ y: -5, scale: 1.05, transition: { duration: 0.3 } }}
                className="relative"
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-0 w-6 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2" />
                )}
                <Card className="h-full text-center group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-16 h-16 rounded-full bg-brand-gradient text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg"
                    >
                      {index + 1}
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-body">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-body">See how we&apos;ve helped businesses grow</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle>Client Success Story {i}</CardTitle>
                  <CardDescription>Industry: Technology | Service: SEO & Content</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-body mb-4">
                    &ldquo;We saw a 300% increase in organic traffic within 6 months. The team&apos;s expertise 
                    and dedication made all the difference.&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="font-semibold text-heading">— Client Name</div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/about">
                        View More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Drive Link Button */}
      <section className="py-12 bg-surface">
        <div className="container mx-auto px-4 text-center">
          {process.env.NEXT_PUBLIC_DRIVE_LINK && (
            <Button size="lg" variant="default" asChild>
              <a href={process.env.NEXT_PUBLIC_DRIVE_LINK} target="_blank" rel="noopener noreferrer">
                Open Drive Link
              </a>
            </Button>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-xl px-6">
                <AccordionTrigger className="text-left font-semibold text-heading">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let&apos;s discuss how we can help you achieve your marketing goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://chat.whatsapp.com/I3HAWSd29QzBVIjZ81QH3M" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <a href="mailto:contact@digitalgoneeasy.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

