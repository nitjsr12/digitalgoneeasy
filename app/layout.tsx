import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { SiteChrome } from "@/components/site-chrome"

const FB_PIXEL_ID = "2146659069485723"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Digitalgoneeasy - AI Workshop, Digital Products & Marketing Resources",
  description: "Join our 3+ Hours AI Workshop + Certificate + 3 Freebies worth ₹10,500 for only ₹9. Get digital products, learn AI tools, ChatGPT, Excel with AI, and Marketing with AI.",
  keywords: "AI Workshop, Digital Marketing, ChatGPT, Excel with AI, Marketing with AI, Digital Products, Personal Branding, SEO Services",
  openGraph: {
    title: "Digitalgoneeasy - AI Workshop & Digital Products",
    description: "Transform your digital skills with AI-powered workshops and premium digital products starting at ₹9",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digitalgoneeasy - AI Workshop & Digital Products",
    description: "Transform your digital skills with AI-powered workshops and premium digital products starting at ₹9",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* Facebook Pixel noscript fallback — must be a plain <img> */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  )
}

