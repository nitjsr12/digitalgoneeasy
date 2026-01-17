import { notFound } from "next/navigation"
import Link from "next/link"
import { getBlogPostBySlug, blogPosts } from "@/data/blog-posts"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ShareButtons } from "@/components/share-buttons"
import { ArrowLeft, Calendar, User } from "lucide-react"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) {
    return {}
  }
  return {
    title: `${post.title} | Digitalgoneeasy Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(tag => post.tags.includes(tag))))
    .slice(0, 3)

  // Simple markdown-like content renderer
  const renderContent = (content: string) => {
    const lines = content.split("\n")
    const elements: React.ReactElement[] = []
    let currentParagraph: string[] = []
    let listItems: string[] = []
    let inList = false

    lines.forEach((line, index) => {
      if (line.startsWith("# ")) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-body mb-4">{currentParagraph.join(" ")}</p>)
          currentParagraph = []
        }
        elements.push(<h1 key={`h1-${index}`} className="text-4xl font-bold text-heading mb-6 mt-8">{line.substring(2)}</h1>)
      } else if (line.startsWith("## ")) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-body mb-4">{currentParagraph.join(" ")}</p>)
          currentParagraph = []
        }
        elements.push(<h2 key={`h2-${index}`} className="text-3xl font-bold text-heading mb-4 mt-6">{line.substring(3)}</h2>)
      } else if (line.startsWith("### ")) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-body mb-4">{currentParagraph.join(" ")}</p>)
          currentParagraph = []
        }
        elements.push(<h3 key={`h3-${index}`} className="text-2xl font-bold text-heading mb-3 mt-4">{line.substring(4)}</h3>)
      } else if (line.startsWith("- ")) {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-body mb-4">{currentParagraph.join(" ")}</p>)
          currentParagraph = []
        }
        if (!inList) {
          inList = true
          listItems = []
        }
        listItems.push(line.substring(2))
      } else if (line.trim() === "" && inList) {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc list-inside space-y-2 mb-4 text-body ml-4">
              {listItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )
          listItems = []
          inList = false
        }
      } else if (line.trim() !== "") {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc list-inside space-y-2 mb-4 text-body ml-4">
              {listItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )
          listItems = []
          inList = false
        }
        currentParagraph.push(line)
      } else {
        if (currentParagraph.length > 0) {
          elements.push(<p key={`p-${index}`} className="text-body mb-4">{currentParagraph.join(" ")}</p>)
          currentParagraph = []
        }
      }
    })

    if (inList && listItems.length > 0) {
      elements.push(
        <ul key="ul-final" className="list-disc list-inside space-y-2 mb-4 text-body ml-4">
          {listItems.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )
    }
    if (currentParagraph.length > 0) {
      elements.push(<p key="p-final" className="text-body mb-4">{currentParagraph.join(" ")}</p>)
    }

    return elements
  }

  return (
    <div className="min-h-screen py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-body hover:text-primary mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-semibold text-primary bg-highlight px-4 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-body mb-6">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-muted" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>
            <div className="mb-8">
              <ShareButtons url={`https://digitalgoneeasy.com/blog/${post.slug}`} title={post.title} />
            </div>
          </div>

          <Card>
            <div className="p-8 prose prose-lg max-w-none">
              {renderContent(post.content)}
            </div>
          </Card>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?search=${encodeURIComponent(tag)}`}
                  className="text-sm bg-surface px-4 py-2 rounded-full text-body hover:bg-primary hover:text-white transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-heading mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-xl transition-shadow">
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary bg-highlight px-3 py-1 rounded-full mb-2 inline-block">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-xl font-bold text-heading mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-sm text-body mb-4 line-clamp-3">{relatedPost.excerpt}</p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${relatedPost.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

