// Blog Content System
// Loads markdown files with frontmatter and auto-generates SEO

import { localBusinessSchema, breadcrumbSchema, articleSchema } from '../app/shared/schemas';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO format: 2026-05-20
  category: string;
  keywords: string[];
  image?: string;
  content: string;
  author?: string;
  readingTime?: number;
}

export interface BlogSEO {
  title: string;
  description: string;
  canonical: string;
  schema: unknown[];
}

// Generate SEO config from blog post frontmatter
export function generateBlogSEO(post: BlogPost): BlogSEO {
  return {
    title: `${post.title} | Ustaad Blog`,
    description: post.description,
    canonical: `/blog/${post.slug}`,
    schema: [
      localBusinessSchema,
      breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Blog", url: "/blogs" },
        { name: post.title, url: `/blog/${post.slug}` }
      ]),
      articleSchema({
        title: post.title,
        description: post.description,
        url: `https://ustaad.ae/blog/${post.slug}`,
        datePublished: post.date,
        author: post.author || "Ustaad",
        image: post.image
      })
    ]
  };
}

// Parse frontmatter from markdown content
export function parseFrontmatter(content: string): { data: Partial<BlogPost>; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return { data: {}, body: content };
  }

  const frontmatter = match[1];
  const body = match[2].trim();

  const data: Partial<BlogPost> = {};
  
  // Parse key: value pairs
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value = line.slice(colonIndex + 1).trim();
      
      // Handle arrays (keywords: ["a", "b"])
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value.replace(/'/g, '"'));
        } catch {
          // Keep as string if JSON parse fails
        }
      }
      
      // Remove quotes from strings
      if (typeof value === 'string' && value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      
      (data as Record<string, unknown>)[key] = value;
    }
  });

  return { data, body };
}

// Calculate reading time (average 200 words per minute)
export function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

// Blog posts registry - in production, load from /content/blog/ directory
export const BLOG_POSTS: BlogPost[] = [
  // Example structure - actual posts loaded from markdown files at build time
];

// Get blog post by slug
export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(post => post.slug === slug);
}

// Get all blog posts sorted by date
export function getAllBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
