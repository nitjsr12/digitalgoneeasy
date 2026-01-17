"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"
import { Check, Search } from "lucide-react"

export default function DigitalProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(products.map(p => p.category)))
  
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4">
            Digital Products @ ₹9
          </h1>
          <p className="text-lg text-body max-w-2xl mx-auto">
            Premium resources to accelerate your growth and master digital marketing
          </p>
        </motion.div>

        {/* Search & Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
              className="rounded-full"
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="rounded-full capitalize"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${product.highlight ? "border-primary border-2" : ""}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-primary bg-highlight px-3 py-1 rounded-full">
                      {formatPrice(product.price)}
                    </span>
                    {product.highlight && (
                      <span className="text-xs font-semibold bg-primary text-white px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 mb-4">
                    {product.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-body">
                        <Check className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {product.industries && (
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-muted mb-2">Industries:</p>
                      <div className="flex flex-wrap gap-2">
                        {product.industries.slice(0, 3).map((industry, idx) => (
                          <span key={idx} className="text-xs bg-surface px-2 py-1 rounded-full text-body">
                            {industry}
                          </span>
                        ))}
                        {product.industries.length > 3 && (
                          <span className="text-xs text-muted">+{product.industries.length - 3} more</span>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="default" className="w-full" asChild>
                    <Link href={`/digital-products/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No products found. Try adjusting your search or filters.</p>
          </div>
        )}

        {/* Kids Education Special Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-primary text-white border-none">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">Kids Education & Entertainment (Special)</h2>
              <p className="text-white/90 mb-4">
                Educational storytelling for schools for subjects like History etc. – untold history 
                of India not taught in schools. Perfect for educators, parents, and content creators 
                who want to make learning engaging and meaningful.
              </p>
              <Button variant="secondary" asChild>
                <Link href="/digital-products/ai-prompts-industry-wise">Explore Kids Education Prompts</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

