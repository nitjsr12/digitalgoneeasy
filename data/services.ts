export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const services: Service[] = [
  {
    id: "personal-branding",
    title: "Personal Branding",
    description: "Build a powerful personal brand that attracts opportunities and establishes you as a thought leader in your industry.",
    features: [
      "Brand Strategy & Positioning",
      "Visual Identity Design",
      "Content Strategy",
      "Social Media Optimization",
      "Thought Leadership Development",
    ],
    icon: "👤",
  },
  {
    id: "personal-branding-images",
    title: "Personal Branding Images",
    description: "Professional personal branding images that make you stand out on social media and professional platforms.",
    features: [
      "Professional Photography",
      "LinkedIn Headshots",
      "Social Media Banners",
      "Branded Image Templates",
      "Consistent Visual Identity",
    ],
    icon: "📸",
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Comprehensive social media management and strategy to grow your presence and engage your audience.",
    features: [
      "Content Creation & Calendar",
      "Community Management",
      "Platform Optimization",
      "Analytics & Reporting",
      "Engagement Strategies",
    ],
    icon: "📱",
  },
  {
    id: "linkedin-lead-generation",
    title: "LinkedIn Lead Generation",
    description: "Generate high-quality leads through strategic LinkedIn marketing and automation.",
    features: [
      "LinkedIn Strategy",
      "Lead Magnets",
      "Automated Outreach",
      "Connection Building",
      "Conversion Optimization",
    ],
    icon: "💼",
  },
  {
    id: "ai-content",
    title: "AI Content",
    description: "Leverage AI tools to create high-quality, engaging content at scale.",
    features: [
      "AI Content Strategy",
      "Content Automation",
      "Copywriting with AI",
      "Video Scripts & Stories",
      "Content Optimization",
    ],
    icon: "🤖",
  },
  {
    id: "seo-geo",
    title: "SEO/GEO Services",
    description: "Comprehensive SEO services including Local SEO, On-Page, Off-Page, Outsourced, and Technical SEO.",
    features: [
      "Local SEO (GEO)",
      "On-Page SEO Optimization",
      "Off-Page SEO & Link Building",
      "Outsourced SEO Management",
      "Technical SEO Audit & Fix",
    ],
    icon: "🔍",
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    description: "Run high-converting Meta (Facebook & Instagram) ad campaigns that drive results.",
    features: [
      "Campaign Strategy",
      "Ad Creative Development",
      "Audience Targeting",
      "A/B Testing",
      "Performance Optimization",
    ],
    icon: "📢",
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    description: "Custom AI agents and automation solutions to streamline your business operations.",
    features: [
      "Custom AI Agent Development",
      "Workflow Automation",
      "Chatbot Integration",
      "AI-Powered Analytics",
      "Process Optimization",
    ],
    icon: "⚡",
  },
]

export function getServiceById(id: string): Service | undefined {
  return services.find(s => s.id === id)
}

