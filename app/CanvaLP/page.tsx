"use client"

import { useEffect, useMemo, useState } from "react"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

const CTA_LINK = "https://tagmango.com/web/checkout/69c0f7b1f23bf41609d94447"

type FaqItem = { q: string; a: string }

export default function CanvaLPPage() {
  const [scrolled, setScrolled] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const faqItems: FaqItem[] = useMemo(
    () => [
      {
        q: "Do I need any prior design experience to join?",
        a: "Not at all! This course is designed for absolute beginners. We start from scratch and build up skills progressively. If you can use a smartphone, you can do Canva design.",
      },
      {
        q: "Will I get session recordings if I miss a live class?",
        a: "Yes! All live sessions will be recorded and shared with enrolled students. You can watch at your convenience within the course access period.",
      },
      {
        q: "Can I earn money after completing this course?",
        a: "Absolutely! Many of our students have started freelancing on Fiverr, Upwork, and Instagram after this course. Day 9 specifically covers how to monetise your Canva skills.",
      },
      {
        q: "Is Canva Pro access really included?",
        a: "Yes, every enrolled student gets access to Canva Pro tools during the course duration — part of our bonus value stack included in the ₹899 price.",
      },
      {
        q: "What device do I need for this course?",
        a: "Any laptop, desktop, or tablet with a browser and internet connection is sufficient. Canva works on all modern browsers — no software installation required.",
      },
      {
        q: "Will I receive a certificate after completing the course?",
        a: "Yes! Upon completing all 10 sessions and the final project, you'll receive a digital Certificate of Completion shareable on LinkedIn and with clients.",
      },
    ],
    [],
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const primaryBtn =
    "inline-flex items-center justify-center gap-1 font-semibold border-none cursor-pointer rounded-full transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] whitespace-nowrap letter-[0.3px]"
  const primaryBtnLg = "px-[40px] py-[18px] text-[1.05rem] shadow-[0_4px_18px_rgba(168,85,247,.35)]"
  const primaryBtnMd = "px-[32px] py-[14px] text-[.95rem] shadow-[0_4px_18px_rgba(168,85,247,.35)]"
  const primaryBtnSm = "px-[20px] py-[10px] text-[.85rem] shadow-[0_4px_18px_rgba(168,85,247,.35)]"
  const primaryBtnPrimary =
    "bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] text-white hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(168,85,247,.45)]"

  const whiteBtn =
    "inline-flex items-center justify-center font-semibold rounded-full border-none transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] whitespace-nowrap shadow-[0_2px_8px_rgba(139,92,246,.10)] hover:-translate-y-[2px] hover:shadow-[0_6px_24px_rgba(139,92,246,.15)]"
  const whiteBtnMd = "px-[28px] py-[12px] text-[.9rem] text-[#8b5cf6] bg-white"

  const courseEmbedSrc =
    "https://www.youtube.com/embed/VIDEO_ID?rel=0&modestbranding=1&showinfo=0"

  const headerClasses = cn(
    "sticky top-0 z-50 bg-[rgba(255,255,255,.88)] backdrop-blur-[16px] border-b border-[rgba(200,180,255,.2)] transition-shadow duration-300",
    scrolled ? "shadow-[0_4px_20px_rgba(100,50,200,.10)]" : "shadow-none",
  )

  return (
    <div className={poppins.className}>
      {/* HEADER (from your original landing page) */}
      <header className={headerClasses}>
        <div className="mx-auto max-w-[1200px] px-[24px] flex items-center justify-between pt-[14px] pb-[14px]">
          <div className="flex items-center gap-[8px] font-bold text-[1.15rem] text-[#1a0933]">
            <span className="text-[1.4rem] bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
              ✦
            </span>
            <span>CanvaMasterclass</span>
          </div>
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(primaryBtn, primaryBtnSm, primaryBtnPrimary)}
          >
            Register Now →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        className="bg-[linear-gradient(160deg,#faf5ff_0%,#fef3fb_60%,#fff_100%)] overflow-hidden pt-[100px] pb-0"
        id="hero"
      >
        <div className="mx-auto max-w-[1200px] px-[24px] grid lg:grid-cols-2 grid-cols-1 gap-[64px] items-center pb-[64px]">
          <div>
            <div className="inline-flex items-center gap-[6px] bg-[linear-gradient(120deg,#f3eeff,#fce8f3)] border border-[rgba(168,85,247,.2)] text-[#8b5cf6] text-[.8rem] font-semibold px-[18px] py-[7px] rounded-full mb-[24px]">
              🎨 Live Cohort • Starts 1st April
            </div>
            <h1 className="text-[2.8rem] font-extrabold leading-[1.2] text-[#1a0933] mb-[20px]">
              Become a Professional
              <br />
              <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                Canva Designer
              </span>
              <br />
              in Just{" "}
              <span className="relative text-[#8b5cf6]">
                <span className="text-[#8b5cf6]">10 Days</span>
              </span>
            </h1>
            <p className="text-[1.05rem] text-[#6b7280] max-w-[480px] mb-[28px]">
              Even If You&apos;re a Complete Beginner. Learn Canva and AI tools step
              by step and start creating high-quality designs for social media,
              business, or freelancing.
            </p>
            <div className="flex flex-wrap gap-[12px] mb-[32px]">
              <span className="text-[.82rem] font-medium text-[#4b5563] bg-white border border-[rgba(168,85,247,.2)] px-[14px] py-[6px] rounded-full shadow-[0_2px_8px_rgba(139,92,246,.10)]">
                ✅ 100+ Students Trained
              </span>
              <span className="text-[.82rem] font-medium text-[#4b5563] bg-white border border-[rgba(168,85,247,.2)] px-[14px] py-[6px] rounded-full shadow-[0_2px_8px_rgba(139,92,246,.10)]">
                ✅ Beginner Friendly
              </span>
              <span className="text-[.82rem] font-medium text-[#4b5563] bg-white border border-[rgba(168,85,247,.2)] px-[14px] py-[6px] rounded-full shadow-[0_2px_8px_rgba(139,92,246,.10)]">
                ✅ No Prior Experience Needed
              </span>
            </div>

            <div className="flex items-center gap-[20px] flex-wrap">
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(primaryBtn, primaryBtnMd, primaryBtnPrimary)}
              >
                Register Now →
              </a>
              <p className="text-[.88rem] text-[#6b7280] font-medium">
                Only ₹899 · Limited Seats
              </p>
            </div>
          </div>

          <div className="px-0">
            <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(139,92,246,.20)] bg-[#1a0933]">
              <iframe
                title="Canva Design Masterclass – Course Preview"
                src={courseEmbedSrc}
                className="absolute inset-0 w-full h-full border-none rounded-[24px]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="grid gap-[16px] sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_1.4fr]">
            <div className="bg-white rounded-[16px] p-[20px] shadow-[0_2px_8px_rgba(139,92,246,.10)] border border-[rgba(168,85,247,.1)] text-center transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_24px_rgba(139,92,246,.15)]">
              <div className="text-[1.5rem] mb-[8px]">📅</div>
              <div className="text-[.72rem] text-[#6b7280] font-medium uppercase tracking-[.6px] mb-[4px]">
                Start Date
              </div>
              <div className="text-[.9rem] font-bold text-[#1a0933]">1st April 2025</div>
            </div>

            <div className="bg-white rounded-[16px] p-[20px] shadow-[0_2px_8px_rgba(139,92,246,.10)] border border-[rgba(168,85,247,.1)] text-center transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_24px_rgba(139,92,246,.15)]">
              <div className="text-[1.5rem] mb-[8px]">🕕</div>
              <div className="text-[.72rem] text-[#6b7280] font-medium uppercase tracking-[.6px] mb-[4px]">
                Time
              </div>
              <div className="text-[.9rem] font-bold text-[#1a0933]">6:00 PM – 7:00 PM</div>
            </div>

            <div className="bg-white rounded-[16px] p-[20px] shadow-[0_2px_8px_rgba(139,92,246,.10)] border border-[rgba(168,85,247,.1)] text-center transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_24px_rgba(139,92,246,.15)]">
              <div className="text-[1.5rem] mb-[8px]">📆</div>
              <div className="text-[.72rem] text-[#6b7280] font-medium uppercase tracking-[.6px] mb-[4px]">
                Duration
              </div>
              <div className="text-[.9rem] font-bold text-[#1a0933]">10 Days</div>
            </div>

            <div className="bg-white rounded-[16px] p-[20px] shadow-[0_2px_8px_rgba(139,92,246,.10)] border border-[rgba(168,85,247,.1)] text-center transition-transform duration-300 hover:-translate-y-[3px] hover:shadow-[0_6px_24px_rgba(139,92,246,.15)]">
              <div className="text-[1.5rem] mb-[8px]">🎁</div>
              <div className="text-[.72rem] text-[#6b7280] font-medium uppercase tracking-[.6px] mb-[4px]">
                Bonus
              </div>
              <div className="text-[.9rem] font-bold text-[#1a0933]">Free Canva Pro Access</div>
            </div>

            <div className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] rounded-[16px] p-[20px] border-none text-center shadow-[0_2px_8px_rgba(139,92,246,.10)] sm:col-span-2 lg:col-span-1">
              <div className="text-[.72rem] text-[rgba(255,255,255,.8)] font-medium uppercase tracking-[.6px] mb-[6px]">
                Join Now for Just
              </div>
              <div className="text-[1.8rem] font-extrabold text-white my-[8px] mb-[16px]">
                ₹899
              </div>
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(whiteBtn, whiteBtnMd)}
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU WILL LEARN */}
      <section className="py-[80px] bg-[#faf8ff]" id="learn">
        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="text-center mb-[56px]">
            <div className="inline-flex items-center gap-[6px] bg-[rgba(168,85,247,.1)] text-[#8b5cf6] text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
              📚 Curriculum
            </div>
            <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-[#1a0933] mb-[12px]">
              What You Will{" "}
              <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                Learn
              </span>
            </h2>
            <p className="text-[1rem] text-[#6b7280] max-w-[540px] mx-auto">
              Master every aspect of Canva design from scratch — practical, hands-on, and job-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {[
              {
                icon: "🎨",
                title: "Complete Canva Mastery",
                body: "Navigate every tool and feature in Canva with confidence. From basics to advanced workflows.",
              },
              {
                icon: "✨",
                title: "Design Like a Pro",
                body: "Apply color theory, typography, and layout principles to create stunning visuals like a professional designer.",
              },
              {
                icon: "🤖",
                title: "Canva AI Tools",
                body: "Leverage Canva's AI-powered features — Magic Write, Magic Design, Text to Image, and more.",
              },
              {
                icon: "📱",
                title: "Social Media Design Skills",
                body: "Create scroll-stopping posts, reels covers, stories, and carousels for Instagram, YouTube & LinkedIn.",
              },
              {
                icon: "🏷️",
                title: "Logo & Brand Kit Creation",
                body: "Build complete brand identities — logos, colour palettes, fonts, and brand guidelines in Canva.",
              },
              {
                icon: "🎬",
                title: "Video Editing in Canva",
                body: "Edit short-form videos, add animations, transitions, and produce polished content without complex tools.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-[16px] p-[28px] border border-[rgba(168,85,247,.12)] shadow-[0_2px_8px_rgba(139,92,246,.10)] flex flex-col gap-[10px] transition-transform duration-300 hover:-translate-y-[4px] hover:shadow-[0_6px_24px_rgba(139,92,246,.15)] hover:border-[rgba(168,85,247,.3)]"
              >
                <div className="text-[1.8rem] w-[52px] h-[52px] flex items-center justify-center bg-[linear-gradient(135deg,#f3eeff,#fce8f3)] rounded-[12px] mb-[4px]">
                  {c.icon}
                </div>
                <h3 className="text-[1rem] font-bold text-[#1a0933]">{c.title}</h3>
                <p className="text-[.88rem] text-[#6b7280] leading-[1.6]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-[80px] bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)]" id="who">
        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="text-center mb-[56px]">
            <div className="inline-flex items-center gap-[6px] bg-[rgba(168,85,247,.1)] text-[#8b5cf6] text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
              👥 Audience
            </div>
            <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-[#1a0933] mb-[12px]">
              Who Is This{" "}
              <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                For?
              </span>
            </h2>
            <p className="text-[1rem] text-[rgba(255,255,255,.7)] max-w-[540px] mx-auto">
              This course is designed for anyone who wants to build real design skills without any prior experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {[
              { emoji: "🎓", title: "Students", body: "Add a valuable skill to your resume and stand out in the job market with professional design abilities." },
              { emoji: "💼", title: "Freelancers", body: "Offer design services to clients and charge premium rates for social media, branding, and content creation." },
              { emoji: "📸", title: "Content Creators", body: "Design your own thumbnails, posts, and brand visuals without hiring a designer. Level up your content game." },
              { emoji: "🏢", title: "Business Owners", body: "Create your own marketing materials, social posts, and brand assets — saving money and staying consistent." },
              { emoji: "🌱", title: "Beginners", body: "Zero experience? Perfect. This course starts from absolute basics and takes you to professional-level design." },
            ].map((c) => (
              <div
                key={c.title}
                className="bg-white rounded-[16px] p-[28px_24px] text-center shadow-[0_2px_8px_rgba(139,92,246,.10)] border border-[rgba(168,85,247,.1)] transition-transform duration-300 hover:-translate-y-[4px] hover:shadow-[0_6px_24px_rgba(139,92,246,.15)]"
              >
                <div className="text-[2.2rem] mb-[12px]">{c.emoji}</div>
                <h3 className="text-[1rem] font-bold text-[#1a0933] mb-[8px]">{c.title}</h3>
                <p className="text-[.85rem] text-[#6b7280] leading-[1.6]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-[80px] bg-[#faf8ff]" id="curriculum">
        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="text-center mb-[56px]">
            <div className="inline-flex items-center gap-[6px] bg-[rgba(168,85,247,.1)] text-[#8b5cf6] text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
              🗓️ Day by Day Plan
            </div>
            <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-[#1a0933] mb-[12px]">
              Course{" "}
              <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                Curriculum
              </span>
            </h2>
            <p className="text-[1rem] text-[#6b7280] max-w-[540px] mx-auto">
              10 structured sessions — progressive, practical, and results-driven.
            </p>
          </div>

          <div className="max-w-[760px] mx-auto flex flex-col">
            {[
              ["Day 1", "Introduction to Canva & Interface Overview", "Set up your Canva account, explore the dashboard, and understand the core tools used in every design."],
              ["Day 2", "Design Fundamentals — Colors, Typography & Layout", "Learn the visual principles that separate amateur designs from professional ones."],
              ["Day 3", "Social Media Post Design", "Create Instagram posts, stories, and carousels using pre-built and custom templates."],
              ["Day 4", "Logo & Brand Identity Design", "Build a complete brand kit — logo, colour palette, fonts — all inside Canva."],
              ["Day 5", "YouTube Thumbnail & Channel Art", "Design click-worthy thumbnails and professional channel banners for YouTube."],
              ["Day 6", "Presentation & Pitch Deck Design", "Create stunning slide decks and presentations that impress clients and teams."],
              ["Day 7", "Canva AI Tools — Magic Write, Magic Design & More", "Explore and use Canva's AI suite to speed up your workflow and generate stunning designs effortlessly."],
              ["Day 8", "Video Editing in Canva", "Edit short reels, add transitions, music, and animations for engaging video content."],
              ["Day 9", "Freelancing with Canva — earning real income", "How to find design clients, price your services, and deliver projects professionally."],
              ["Day 10", "Final Project + Live Review + Certification", "Complete a real-world design project, get live feedback, and receive your course certificate."],
            ].map(([day, title, body], i, arr) => (
              <div key={day} className="grid grid-cols-[100px_1fr] gap-[24px] relative items-stretch pb-[4px]">
                <div className="flex justify-center">
                  <div className="text-[.78rem] font-bold tracking-[.6px] text-[#8b5cf6] bg-[linear-gradient(135deg,#f3eeff,#fce8f3)] rounded-[12px] w-[76px] h-[36px] flex items-center justify-center border border-[rgba(168,85,247,.2)] mt-[10px] relative z-[1]">
                    {day}
                  </div>
                </div>
                <div
                  className="bg-white rounded-[16px] p-[20px_24px] mb-[12px] shadow-[0_2px_8px_rgba(139,92,246,.10)] border border-[rgba(168,85,247,.08)] transition-transform duration-300 hover:translate-x-[4px] hover:shadow-[0_6px_24px_rgba(139,92,246,.15)]"
                >
                  <h3 className="text-[.95rem] font-bold text-[#1a0933] mb-[6px]">{title}</h3>
                  <p className="text-[.85rem] text-[#6b7280] leading-[1.55]">{body}</p>
                </div>
                {i !== arr.length - 1 ? (
                  <div className="absolute left-[49px] top-[16px] bottom-[-4px] w-[2px] bg-[linear-gradient(to_bottom,#c9b3f9,transparent)] -z-0" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE STACK */}
      <section className="py-[80px] bg-[#1a0933]" id="value">
        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="text-center mb-[56px]">
            <div className="inline-flex items-center gap-[6px] bg-[rgba(255,255,255,.15)] text-white text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
              💎 Value
            </div>
            <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-white mb-[12px]">
              What You{" "}
              <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                Get
              </span>
            </h2>
            <p className="text-[1rem] text-[rgba(255,255,255,.7)] max-w-[540px] mx-auto">
              Everything you need to go from zero to professional designer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[16px] mb-[40px]">
            {[
              ["📹", "Live 10 Days Training", "Interactive live sessions each day with Q&A and real-time feedback from the instructor.", "₹2,000"],
              ["⭐", "Canva Pro Access", "Premium Canva tools, fonts, elements, and stock photos — completely free for you.", "₹1,200"],
              ["🛠️", "Practical Learning", "Every session is project-based. No boring theory — just hands-on real-world design work.", "₹800"],
              ["🗂️", "Real Projects Portfolio", "Build 10+ finished design projects to showcase to clients and employers.", "₹600"],
              ["♾️", "Lifetime Skill", "What you learn here will pay dividends for years — a skill that never goes out of demand.", "₹400"],
            ].map(([icon, title, body, strike]) => (
              <div
                key={title}
                className="bg-[rgba(255,255,255,.06)] border border-[rgba(255,255,255,.1)] rounded-[16px] p-[20px_24px] transition-transform duration-300 hover:bg-[rgba(255,255,255,.1)] hover:translate-x-[4px] flex items-center gap-[16px] sm:flex-row flex-col sm:items-center"
              >
                <div className="text-[1.6rem] w-[48px] h-[48px] flex items-center justify-center bg-[rgba(168,85,247,.2)] rounded-[12px] shrink-0">
                  {icon}
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-[.95rem] font-bold text-white mb-[4px]">{title}</h3>
                  <p className="text-[.82rem] text-[rgba(255,255,255,.6)] leading-[1.5]">{body}</p>
                </div>
                <div className="text-[.88rem] font-semibold text-[rgba(255,255,255,.5)] whitespace-nowrap line-through mt-[6px] sm:mt-0">
                  {strike}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-[40px] px-0 bg-[rgba(255,255,255,.06)] border border-[rgba(168,85,247,.3)] rounded-[32px]">
            <div className="text-[.85rem] text-[rgba(255,255,255,.6)] mb-[4px]">Total Value</div>
            <div className="text-[1.5rem] font-bold text-[rgba(255,255,255,.5)] line-through mb-[16px]">
              ₹5,000+
            </div>
            <div className="w-[48px] h-[2px] bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] mx-auto mb-[16px] rounded-[4px]" />
            <div className="text-[.85rem] font-semibold text-[rgba(255,255,255,.7)] mb-[6px]">Today&apos;s Price</div>
            <div className="text-[3rem] font-extrabold bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent mb-[24px]">
              ₹899
            </div>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(primaryBtn, primaryBtnLg, primaryBtnPrimary)}
            >
              Register Now at ₹899 →
            </a>
          </div>
        </div>
      </section>

      {/* WHY THIS COURSE */}
      <section className="py-[80px] bg-[#faf8ff]" id="why">
        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            <div>
              <div className="inline-flex items-center gap-[6px] bg-[rgba(168,85,247,.1)] text-[#8b5cf6] text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
                🌟 Why Us
              </div>
              <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-[#1a0933]">
                Why{" "}
                <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                  This Course?
                </span>
              </h2>

              <ul className="flex flex-col gap-[20px] mt-[28px]">
                {[
                  ["No Boring Theory", "100% practical learning. Every concept is immediately applied to a real design project."],
                  ["Practical Learning", "You'll have a finished design portfolio in your hands on Day 10."],
                  ["Beginner-Friendly", "Designed for complete beginners with zero design or technical background."],
                  ["Real-World Skills", "Learn exactly what clients and employers are looking for in a Canva designer today."],
                  ["Live Interaction", "Ask questions, get feedback, and learn in a community — not alone from a recording."],
                ].map(([strong, p]) => (
                  <li key={strong} className="flex gap-[16px] items-start">
                    <span className="w-[28px] h-[28px] bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] rounded-full inline-flex items-center justify-center text-white text-[.8rem] font-bold shadow-[0_2px_8px_rgba(168,85,247,.35)] mt-[2px]">
                      ✓
                    </span>
                    <div>
                      <strong className="block text-[.95rem] font-bold text-[#1a0933] mb-[2px]">
                        {strong}
                      </strong>
                      <p className="text-[.85rem] text-[#6b7280] leading-[1.5]">{p}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[32px] p-[40px_32px] shadow-[0_12px_40px_rgba(139,92,246,.20)] border border-[rgba(168,85,247,.12)] flex flex-col">
              {[
                ["100+", "Students Trained"],
                ["10", "Live Day Sessions"],
                ["10+", "Projects Built"],
                ["⭐ 4.9", "Average Rating"],
              ].map(([num, label], i) => (
                <div key={label} className="text-center py-[24px]">
                  <div className="text-[2rem] font-extrabold bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent mb-[4px]">
                    {num}
                  </div>
                  <div className="text-[.8rem] text-[#6b7280] font-medium">{label}</div>
                  {i !== 3 ? <div className="h-[1px] bg-[rgba(168,85,247,.1)] mt-[24px]" /> : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="py-[80px] bg-[linear-gradient(135deg,#2a1048_0%,#1a0933_100%)]" id="certificate">
        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[64px] items-center">
            <div>
              <div className="inline-flex items-center gap-[6px] bg-[rgba(168,85,247,.1)] text-white text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
                🏆 Recognition
              </div>
              <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-white mb-[12px]">
                Get{" "}
                <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                  Certified
                </span>
              </h2>
              <p className="text-[1rem] text-[#6b7280] mb-[24px] leading-[1.7]">
                Upon completing all 10 sessions and the final project, you&apos;ll receive an official{" "}
                <strong>Course Completion Certificate</strong> — shareable on LinkedIn, your portfolio, and to clients.
              </p>

              <ul className="flex flex-col gap-[10px] mb-[32px]">
                {[
                  "✅ Verifiable digital certificate",
                  "✅ Add to LinkedIn profile",
                  "✅ Share with freelance clients",
                  "✅ Recognized course credential",
                ].map((t) => (
                  <li key={t} className="text-[.9rem] text-[#1a0933] font-medium">
                    <span className="text-white">{t}</span>
                  </li>
                ))}
              </ul>

              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(primaryBtn, primaryBtnMd, primaryBtnPrimary)}
              >
                Get Certified →
              </a>
            </div>

            <div className="bg-white border-[2px] border-[rgba(168,85,247,.2)] rounded-[24px] p-[40px] text-center shadow-[0_12px_40px_rgba(139,92,246,.20)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(243,238,255,.5)_0%,rgba(252,232,243,.5)_100%)]" />
              <div className="relative z-[1]">
                <div className="text-[1.1rem] font-extrabold bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent mb-[12px] uppercase tracking-[1px]">
                  Certificate of Completion
                </div>
                <div className="w-full h-[2px] bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] mb-[20px] rounded-[2px]" />
                <div className="text-[1.6rem] font-bold text-[#1a0933] italic mb-[8px]">
                  Your Name Here
                </div>
                <div className="w-[60%] h-[1px] bg-[rgba(168,85,247,.3)] mx-auto mb-[16px]" />
                <p className="text-[.82rem] text-[#6b7280] mb-[4px]">has successfully completed the</p>
                <p className="text-[1rem] font-bold text-[#8b5cf6] mb-[4px] mt-[8px]">Canva Design Masterclass</p>
                <p className="text-[.82rem] text-[#6b7280] mb-[4px]">10-Day Live Training Program</p>
                <div className="mt-[24px] font-bold bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                  ✦ CanvaMasterclass
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="py-[80px] bg-[#faf8ff]" id="bonus">
        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="text-center mb-[56px]">
            <div className="inline-flex items-center gap-[6px] bg-[rgba(168,85,247,.1)] text-[#8b5cf6] text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
              🎁 Bonuses
            </div>
            <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-[#1a0933] mb-[12px]">
              Exclusive{" "}
              <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                Bonuses
              </span>{" "}
              Included
            </h2>
            <p className="text-[1rem] text-[#6b7280] max-w-[540px] mx-auto">
              When you join today, you unlock these premium additions — completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {[
              ["⭐", "Canva Pro Access", "Unlock Canva's premium library — over 100M+ images, premium templates, fonts, and brand features.", "Worth ₹1,200"],
              ["📂", "Exclusive Template Pack", "Get 50+ premium, ready-to-use templates — social media, logos, presentations, and business designs.", "Worth ₹800"],
              ["📚", "Design Resource Kit", "Curated colour palettes, font pairings, icon packs, and image sources — your designer's toolbox.", "Worth ₹500"],
              ["▶️", "Session Recordings", "Can't attend a session live? All recordings will be shared so you never miss a lesson.", "Worth ₹1,000"],
            ].map(([icon, title, body, val]) => (
              <div
                key={title}
                className="bg-white rounded-[16px] p-[28px_20px] text-center shadow-[0_2px_8px_rgba(139,92,246,.10)] border border-[rgba(168,85,247,.12)] transition-transform duration-300 hover:-translate-y-[4px] hover:shadow-[0_12px_40px_rgba(139,92,246,.20)] hover:border-[rgba(168,85,247,.3)] flex flex-col gap-[10px] items-center"
              >
                <div className="text-[1.8rem] w-[56px] h-[56px] flex items-center justify-center bg-[linear-gradient(135deg,#f3eeff,#fce8f3)] rounded-[12px]">
                  {icon}
                </div>
                <h3 className="text-[.95rem] font-bold text-[#1a0933]">{title}</h3>
                <p className="text-[.82rem] text-[#6b7280] leading-[1.55]">{body}</p>
                <div className="inline-flex items-center justify-center px-[14px] py-[5px] bg-[linear-gradient(120deg,#f3eeff,#fce8f3)] border border-[rgba(168,85,247,.2)] rounded-full text-[.75rem] font-semibold text-[#8b5cf6] mt-auto">
                  {val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[80px] bg-[linear-gradient(135deg,#2a1048_0%,#1a0933_100%)]" id="testimonials">
        <div className="mx-auto max-w-[1200px] px-[24px]">
          <div className="text-center mb-[56px]">
            <div className="inline-flex items-center gap-[6px] bg-[rgba(168,85,247,.1)] text-white text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
              ⭐ Success Stories
            </div>
            <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-white mb-[12px]">
              What Our{" "}
              <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                Students Say
              </span>
            </h2>
            <p className="text-[1rem] text-[rgba(255,255,255,.7)] max-w-[540px] mx-auto">
              Real results from real people who joined the Canva Design Masterclass.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {[
              ["Priya Sharma", "Content Creator, Delhi", "P", "★★★★★", "I had zero design experience before this course. By Day 5 I was already making posts for my Instagram page that people loved. Best ₹899 I've ever spent!"],
              ["Rahul Verma", "Freelance Designer, Mumbai", "R", "★★★★★", "Started freelancing on Fiverr after completing Day 9. Got my first client within a week. The instructor genuinely cares and the live sessions are so interactive."],
              ["Ankita Joshi", "Boutique Owner, Pune", "A", "★★★★★", "As a business owner, I was spending ₹5,000/month on a designer. Now I create all my own marketing material. This course paid for itself on Day 1!"],
              ["Karan Mehta", "YouTuber, Bangalore", "K", "★★★★★", "The Canva AI tools session blew my mind. I'm now 10x faster at creating content and my YouTube channel growth has been amazing since applying what I learned."],
              ["Sneha Kulkarni", "Final Year Student, Hyderabad", "S", "★★★★★", "I was skeptical about an online course but this was different — live sessions, real projects, and actual feedback. My resume now has a skill that got me a job interview!"],
              ["Vikram Nair", "Digital Marketer, Chennai", "V", "★★★★★", "The certificate is a great touch. I shared it on LinkedIn and got 3 DMs from brands looking for social media designers. The course more than delivers!"],
              ["Meera Iyer", "Home Baker & Creator, Kochi", "M", "★★★★★", "The Canva Pro access bonus alone is worth it. The instructor broke everything down so clearly — even my mom watched the recordings and started making designs!"],
              ["Dev Agarwal", "Startup Founder, Jaipur", "D", "★★★★★", "10 days, 10 real projects, and a certificate — exactly what was promised. I built a complete brand kit for my startup using skills from just Day 4. Highly recommend!"],
              ["Neha Patel", "Freelance Creator, Ahmedabad", "N", "★★★★★", "I enrolled on a whim and ended up loving every session. The community WhatsApp group kept me accountable. I'm now charging ₹8,000 per project as a freelancer."],
              ["Tanvi Desai", "Instagram Creator, Surat", "T", "★★★★★", "The video editing module changed my content game completely. My Reels now get 3x more reach and I owe it all to the practical skills I picked up in just 10 days."],
            ].map(([name, role, avatar, stars, text]) => (
              <div
                key={name}
                className="bg-white rounded-[16px] p-[28px_24px] border border-[rgba(168,85,247,.1)] shadow-[0_2px_8px_rgba(139,92,246,.10)] flex flex-col gap-[16px] transition-transform duration-300 hover:-translate-y-[5px] hover:shadow-[0_12px_40px_rgba(139,92,246,.20)] hover:border-[rgba(168,85,247,.25)]"
              >
                <div className="text-[#f59e0b] text-[1rem] tracking-[2px]">{stars}</div>
                <p className="text-[.88rem] text-[#6b7280] leading-[1.7] italic flex-1">{text}</p>
                <div className="flex items-center gap-[12px] pt-[12px] border-t border-[rgba(168,85,247,.08)]">
                  <div className="w-[40px] h-[40px] min-w-[40px] rounded-full bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] text-white text-[.9rem] font-bold flex items-center justify-center shadow-[0_2px_8px_rgba(168,85,247,.3)]">
                    {avatar}
                  </div>
                  <div>
                    <div className="text-[.88rem] font-bold text-[#1a0933]">{name}</div>
                    <div className="text-[.75rem] text-[#6b7280] mt-[1px]">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-[56px] bg-[linear-gradient(135deg,#2a1048_0%,#1a0933_100%)]" id="join">
        <div className="mx-auto max-w-[1200px] px-[24px] text-center">
          <div className="inline-flex items-center gap-[6px] bg-[rgba(255,255,255,.15)] text-white text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
            🚀 Final Step
          </div>
          <h2 className="text-[2.6rem] font-extrabold leading-[1.2] text-white mb-[16px]">
            Start Your Design Journey{" "}
            <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          <p className="text-[1rem] text-[rgba(255,255,255,.7)] max-w-[480px] mx-auto mb-[32px]">
            In just 10 days, go from beginner to confident designer — live, practical, and beginner-friendly.
          </p>

          <div className="inline-flex flex-col items-center gap-[4px] mb-[32px]">
            <div className="text-[.85rem] text-[rgba(255,255,255,.5)] line-through">
              Total Value ₹5,000+
            </div>
            <div className="text-[3.2rem] font-extrabold bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
              ₹899
            </div>
            <div className="text-[.82rem] text-[rgba(255,255,255,.6)]">
              ⚡ Only a few seats left — Starts 1st April
            </div>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(primaryBtn, "px-[48px] py-[18px] text-[1.05rem]", primaryBtnPrimary)}
            >
              Register Now at ₹899 →
            </a>
            <p className="mt-[20px] text-[.82rem] text-[rgba(255,255,255,.5)]">
              🔒 Secure Payment · Certificate Included · Canva Pro Bonus
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[80px] bg-[#faf8ff]" id="faq">
        <div className="mx-auto max-w-[760px] px-[24px]">
          <div className="text-center mb-[56px]">
            <div className="inline-flex items-center gap-[6px] bg-[rgba(168,85,247,.1)] text-[#8b5cf6] text-[.78rem] font-semibold tracking-[.8px] uppercase px-[16px] py-[6px] rounded-full mb-[16px]">
              ❓ FAQ
            </div>
            <h2 className="text-[2.2rem] font-extrabold leading-[1.25] text-[#1a0933] mb-[12px]">
              Frequently Asked{" "}
              <span className="bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="flex flex-col gap-[10px]">
            {faqItems.map((item, i) => {
              const isOpen = openFaqIndex === i
              return (
                <div
                  key={item.q}
                  className={cn(
                    "bg-white border border-[rgba(168,85,247,.12)] rounded-[16px] overflow-hidden shadow-[0_2px_8px_rgba(139,92,246,.10)] transition-shadow duration-300",
                    isOpen ? "shadow-[0_6px_24px_rgba(139,92,246,.15)] border-[rgba(168,85,247,.3)]" : "",
                  )}
                >
                  <button
                    className="w-full bg-transparent border-none cursor-pointer flex items-center justify-between gap-[16px] px-[24px] py-[20px] text-[.95rem] font-semibold text-[#1a0933] text-left transition-colors"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span
                      className={cn(
                        "flex-shrink-0 w-[28px] h-[28px] rounded-full bg-[linear-gradient(135deg,#f3eeff,#fce8f3)] flex items-center justify-center text-[1.2rem] text-[#8b5cf6] transition-transform duration-300",
                        isOpen ? "rotate-[45deg] bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] text-white" : "",
                      )}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-[max-height,padding] duration-400 ease-out",
                      isOpen ? "max-h-[220px] px-[24px] pb-[20px]" : "max-h-0 px-[24px] pb-0",
                    )}
                  >
                    <p className="text-[.88rem] text-[#6b7280] leading-[1.65]">{item.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FOOTER (from your original landing page) */}
      <footer className="bg-[#1a0933] py-[48px]">
        <div className="mx-auto max-w-[1200px] px-[24px] text-center flex flex-col items-center gap-[16px]">
          <div className="text-[#fff] flex items-center gap-[8px] font-bold">
            <span className="text-[1.4rem] bg-[linear-gradient(135deg,#c084fc_0%,#e879b0_100%)] bg-clip-text text-transparent">
              ✦
            </span>
            <span>CanvaMasterclass</span>
          </div>
          <p className="text-[.9rem] text-[rgba(255,255,255,.55)] italic max-w-[400px]">
            &quot;Built for people serious about learning real skills.&quot;
          </p>
          <div className="flex gap-[24px] flex-wrap justify-center">
            <a href="#learn" className="text-[.85rem] text-[rgba(255,255,255,.5)] font-medium hover:text-[rgba(255,255,255,.9)] transition-colors">
              Curriculum
            </a>
            <a href="#bonus" className="text-[.85rem] text-[rgba(255,255,255,.5)] font-medium hover:text-[rgba(255,255,255,.9)] transition-colors">
              Bonuses
            </a>
            <a href="#testimonials" className="text-[.85rem] text-[rgba(255,255,255,.5)] font-medium hover:text-[rgba(255,255,255,.9)] transition-colors">
              Reviews
            </a>
            <a href="#faq" className="text-[.85rem] text-[rgba(255,255,255,.5)] font-medium hover:text-[rgba(255,255,255,.9)] transition-colors">
              FAQ
            </a>
            <a
              href={CTA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[.85rem] text-[rgba(255,255,255,.5)] font-medium hover:text-[rgba(255,255,255,.9)] transition-colors"
            >
              Register
            </a>
          </div>
          <div className="w-full border-t border-[rgba(255,255,255,.08)] pt-[20px]">
            <p className="text-[.78rem] text-[rgba(255,255,255,.35)]">
              © 2025 CanvaMasterclass. All rights reserved. Starts 1st April · 6 PM – 7 PM · ₹899
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

