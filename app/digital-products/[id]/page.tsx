import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShareButton } from "@/components/share-button"
import { getProductById, products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { Check, ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) {
    return {}
  }
  return {
    title: `${product.title} @ ${formatPrice(product.price)} | Digitalgoneeasy`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/digital-products" className="inline-flex items-center text-body hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-primary bg-highlight px-3 py-1 rounded-full">
                    {formatPrice(product.price)}
                  </span>
                  <ShareButton 
                    url={`https://digitalgoneeasy.com/digital-products/${product.id}`}
                    title={product.title}
                    description={product.description}
                  />
                </div>
                <CardTitle className="text-3xl mb-2">{product.title}</CardTitle>
                <CardDescription className="text-lg">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-heading mb-4">What You&apos;ll Get</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-body">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-bold text-heading mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-body">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Industries (if applicable) */}
                {product.industries && (
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-4">Industries Covered</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.industries.map((industry, idx) => (
                        <span
                          key={idx}
                          className="bg-surface px-4 py-2 rounded-xl text-body border border-border"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Sample Output */}
                {product.sampleOutput && (
                  <div>
                    <h3 className="text-xl font-bold text-heading mb-4">Sample Output</h3>
                    <div className="bg-surface p-6 rounded-xl border border-border">
                      <p className="text-body">{product.sampleOutput}</p>
                    </div>
                  </div>
                )}

                {/* Special Note for Kids Education */}
                {product.id === "ai-prompts-industry-wise" && (
                  <Card className="bg-primary text-white border-none">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-2">Special: Kids Education & Entertainment</h4>
                      <p className="text-white/90">
                        Educational storytelling for schools for subjects like History etc. &ndash; untold history 
                        of India not taught in schools. Perfect for educators and content creators.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Buy CTA */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">{formatPrice(product.price)}</CardTitle>
                <CardDescription>One-time purchase</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="gradient" size="lg" className="w-full" asChild>
                  <a href={process.env.NEXT_PUBLIC_DRIVE_LINK || "#"} target="_blank" rel="noopener noreferrer">
                    Buy Now @ ₹9
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://chat.whatsapp.com/I3HAWSd29QzBVIjZ81QH3M" target="_blank" rel="noopener noreferrer">
                    Ask on WhatsApp
                  </a>
                </Button>
                <div className="pt-4 border-t border-border">
                  <ul className="space-y-2 text-sm text-body">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Instant Access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Lifetime Updates</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-primary mr-2 mt-0.5" />
                      <span>Support Included</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

