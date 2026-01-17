import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitalgoneeasy.com' // Update with your actual domain
  
  const routes = [
    '',
    '/digital-products',
    '/services',
    '/blog',
    '/marketing-newsletter',
    '/daily-news-analysis',
    '/rank-us',
    '/about',
    '/contact',
  ]

  const blogPosts = [
    '/blog/10-essential-ai-tools-marketer-2025',
    '/blog/mastering-chatgpt-complete-guide-content-creators',
    '/blog/excel-with-ai-automate-spreadsheets',
    '/blog/marketing-with-ai-complete-strategy-guide',
    '/blog/digital-marketing-hindi-blog-2025',
    '/blog/digital-marketing-career-women-after-break',
  ]

  const products = [
    '/digital-products/ai-workshop',
    '/digital-products/ai-prompts-industry-wise',
    '/digital-products/100-hooks-bundle',
    '/digital-products/setup-online-business',
    '/digital-products/deepak-tella-video',
  ]

  const allRoutes = [
    ...routes.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...blogPosts.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...products.map(route => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]

  return allRoutes
}

