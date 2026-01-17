"use client"

import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin } from "lucide-react"

interface ShareButtonsProps {
  url: string
  title: string
}

export function ShareButtons({ url, title }: ShareButtonsProps) {
  return (
    <div className="flex gap-3">
      <Button variant="outline" size="sm" asChild>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4 mr-2" />
          Share
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4 mr-2" />
          Tweet
        </a>
      </Button>
      <Button variant="outline" size="sm" asChild>
        <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4 mr-2" />
          Share
        </a>
      </Button>
    </div>
  )
}

