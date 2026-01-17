export interface Product {
  id: string
  title: string
  description: string
  price: number
  category: string
  features: string[]
  benefits: string[]
  sampleOutput?: string
  industries?: string[]
  highlight?: boolean
}

export const products: Product[] = [
  {
    id: "ai-workshop",
    title: "AI Workshop + Certificate + 3 Freebies",
    description: "3+ Hours of comprehensive AI training covering ChatGPT, Excel with AI, and Marketing with AI. Includes certificate and 3 premium freebies worth ₹10,500.",
    price: 9,
    category: "workshop",
    features: [
      "3+ Hours of Live AI Training",
      "Official Certificate of Completion",
      "3 Premium Freebies (worth ₹10,500)",
      "Lifetime Access to Recordings",
      "Community Access",
    ],
    benefits: [
      "Master AI tools for business growth",
      "Learn ChatGPT for content creation",
      "Excel automation with AI",
      "Marketing strategies using AI",
      "Get certified and boost your profile",
    ],
    highlight: true,
  },
  {
    id: "ai-prompts-industry-wise",
    title: "AI Prompts: Industry Wise",
    description: "Comprehensive collection of industry-specific AI prompts for Wedding, Parties, Real Estate, HORECA, EdTech, Animation, Kids Education, Religion & Faith, and Special Days.",
    price: 9,
    category: "prompts",
    features: [
      "100+ Industry-Specific Prompts",
      "Wedding & Parties Templates",
      "Real Estate Marketing Prompts",
      "HORECA Industry Prompts",
      "EdTech & Education Prompts",
      "Animation & Creative Prompts",
      "Kids Education & Entertainment (Special)",
      "Religion, Faith & Astrology Prompts",
      "Special Day Based Marketing Prompts",
    ],
    benefits: [
      "Save hours of prompt engineering",
      "Industry-tested and proven prompts",
      "Ready-to-use templates",
      "Increase AI output quality",
      "Boost marketing efficiency",
    ],
    industries: [
      "Wedding | Parties",
      "Real Estate",
      "HORECA",
      "EDTECH",
      "ANIMATION",
      "Kids Education & Entertainment (SPECIAL)",
      "Religion, Faith & Astrology",
      "Special Day Based marketing prompts",
    ],
  },
  {
    id: "100-hooks-bundle",
    title: "100 Hooks Bundle",
    description: "A powerful collection of 100 proven social media hooks that grab attention, increase engagement, and boost your content performance.",
    price: 9,
    category: "content",
    features: [
      "100 Proven Social Media Hooks",
      "Multiple Formats (Questions, Statements, Stories)",
      "Industry-Specific Hooks",
      "Engagement-Boosting Templates",
      "Easy-to-Use Format",
    ],
    benefits: [
      "Increase social media engagement",
      "Save time on content creation",
      "Boost reach and impressions",
      "Copy-paste ready templates",
      "Proven to work across industries",
    ],
  },
  {
    id: "setup-online-business",
    title: "Setup Online Business 3+ Hours",
    description: "Complete step-by-step guide to setting up your online business from scratch. 3+ hours of detailed training covering all aspects of online entrepreneurship.",
    price: 9,
    category: "course",
    features: [
      "3+ Hours Comprehensive Training",
      "Step-by-Step Business Setup Guide",
      "Domain & Hosting Setup",
      "E-commerce Platform Integration",
      "Payment Gateway Setup",
      "Marketing & Growth Strategies",
    ],
    benefits: [
      "Start your online business quickly",
      "Avoid costly mistakes",
      "Learn from real-world examples",
      "Get templates and resources",
      "Build a profitable online business",
    ],
  },
  {
    id: "deepak-tella-video",
    title: "Deepak's Tella Video",
    description: "Complete video production guide using Tella. Learn how Deepak creates professional videos with AI-powered tools. Includes final output demo.",
    price: 9,
    category: "course",
    features: [
      "Complete Tella Video Guide",
      "AI-Powered Video Creation",
      "Professional Video Templates",
      "Final Output Demo Section",
      "Step-by-Step Tutorial",
      "Export & Distribution Guide",
    ],
    benefits: [
      "Create professional videos easily",
      "Save time with AI automation",
      "Learn industry best practices",
      "See real output examples",
      "Scale your video production",
    ],
    sampleOutput: "Professional video output with AI-powered editing, transitions, and branding.",
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category)
}

