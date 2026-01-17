# Digitalgoneeasy Website

A premium, fast, conversion-focused website for Digitalgoneeasy built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✅ Next.js 14 App Router
- ✅ TypeScript
- ✅ Tailwind CSS with custom brand colors
- ✅ Framer Motion animations
- ✅ shadcn/ui components
- ✅ React Hook Form + Zod validation
- ✅ Fully responsive (mobile-first)
- ✅ SEO optimized (metadata, sitemap, robots.txt)
- ✅ Blog system with categories and search
- ✅ Premium UI/UX design

## Getting Started

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_DRIVE_LINK=PASTE_DRIVE_LINK_HERE
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── blog/              # Blog pages
│   ├── digital-products/  # Product pages
│   ├── services/          # Services page
│   └── ...
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── ...
├── data/                 # Data files (products, blog posts, services)
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Pages

- **Home** (`/`) - Hero section, product highlights, services preview
- **Digital Products** (`/digital-products`) - Product listing with filters
- **Services** (`/services`) - Service offerings and process
- **Blog** (`/blog`) - Blog listing with search and categories
- **Marketing Newsletter** (`/marketing-newsletter`) - Newsletter subscription
- **Daily News Analysis** (`/daily-news-analysis`) - News and trends
- **Rank Us** (`/rank-us`) - SEO hub page
- **About** (`/about`) - Company information and reviews
- **Contact** (`/contact`) - Contact form and information

## Brand Colors

The website uses a custom color palette defined in `app/globals.css`:

- Primary Green: `#267558`
- Mint Green: `#8ED4B8`
- Premium Brown: `#443325`
- Highlight Light: `#ECFFD5`

## Deployment

The site is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## License

© 2025 Digitalgoneeasy. All rights reserved.

