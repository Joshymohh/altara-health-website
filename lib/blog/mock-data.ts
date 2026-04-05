import type { BlogPost, RelatedPostItem } from "./types"

const SAMPLE_MARKDOWN = `Design is more than aesthetics. It is the silent language that guides users through an experience.

## Understanding the Foundations

Every great design starts with a deep understanding of the problem it aims to solve.

> "Good design is not about making things beautiful. It is about making things work beautifully for the people who use them."

## The Role of White Space

White space is one of the most powerful tools in a designer's toolkit.

### Benefits of generous spacing

- **Improved readability** — Content becomes easier to scan.
- **Visual hierarchy** — Spacing reinforces importance.
- **Perceived quality** — Generous white space signals confidence.

Learn more about [our approach to care](https://altarahealth.com).

![Placeholder illustration](/placeholder.svg?height=400&width=800)`

const LONGEVITY_MARKDOWN = `Longevity science continues to evolve. This article explores practical steps you can discuss with your clinician.

## Cellular health

Small daily habits compound over decades.

## What to watch next

See our video content for more context on peptide therapies.`

const WEIGHT_MARKDOWN = `Weight management is a journey. This overview covers evidence-based options patients ask about most often.

## GLP-1 therapies

Always follow your prescriber's guidance.

## Resources

- [Tirzepatide information](/tirzepatide)`

const STUB = "Educational overview. Always consult your clinician."

/** Local fallback posts when TinaCMS is not configured or slug not in Tina. */
export const MOCK_POSTS: Record<string, BlogPost> = {
  "sample-post": {
    slug: "sample-post",
    featured: true,
    title:
      "The Art of Mindful Design: How Intentional Choices Shape Better Digital Experiences",
    date: "February 12, 2026",
    dateIso: "2026-02-12",
    category: "Design & Creativity",
    author: {
      name: "Elena Marchetti",
      bio: "Design Director & Writer. Exploring the intersection of technology, art, and human experience.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt:
      "A short introduction to mindful design in digital products—placeholder for TinaCMS excerpt.",
    content: SAMPLE_MARKDOWN,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: "Mindful Design: Intentional Digital Experiences | Altara Health",
    seoDescription:
      "Explore how intentional design choices shape better digital experiences. Insights from Altara Health.",
    readTime: "8 min read",
  },
  "nad-longevity-basics": {
    slug: "nad-longevity-basics",
    title: "NAD+ and Longevity: What the Research Suggests Today",
    date: "January 20, 2026",
    dateIso: "2026-01-20",
    category: "Longevity",
    author: {
      name: "Altara Clinical Team",
      bio: "Clinical education team focused on peptide therapies and patient care.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "A high-level look at NAD+ and why longevity conversations often start here.",
    content: LONGEVITY_MARKDOWN,
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: "NAD+ and Longevity: Research Overview | Altara Health",
    seoDescription:
      "Learn about NAD+ in the context of longevity and wellness—educational content from Altara Health.",
    readTime: "6 min read",
  },
  "weight-loss-glp1-overview": {
    slug: "weight-loss-glp1-overview",
    title: "GLP-1 Medications for Weight Loss: A Patient-Friendly Overview",
    date: "January 8, 2026",
    dateIso: "2026-01-08",
    category: "Weight Loss",
    author: {
      name: "Altara Clinical Team",
      bio: "Clinical education team focused on peptide therapies and patient care.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "Understand what GLP-1 therapies are and how they fit into a broader care plan.",
    content: WEIGHT_MARKDOWN,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: "GLP-1 Weight Loss Overview | Altara Health",
    seoDescription:
      "Patient-friendly overview of GLP-1 medications for weight management. Educational only.",
    readTime: "5 min read",
  },
  "design-color-systems": {
    slug: "design-color-systems",
    title: "Color Systems for Health Brands: Consistency Without Sterility",
    date: "February 1, 2026",
    dateIso: "2026-02-01",
    category: "Design & Creativity",
    author: {
      name: "Elena Marchetti",
      bio: "Design Director & Writer.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "How to build a flexible palette that feels clinical yet human.",
    content: `# Color systems\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "5 min read",
  },
  "design-typography-web": {
    slug: "design-typography-web",
    title: "Typography That Builds Trust on Medical Websites",
    date: "January 22, 2026",
    dateIso: "2026-01-22",
    category: "Design & Creativity",
    author: {
      name: "Elena Marchetti",
      bio: "Design Director & Writer.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "Pairing serif headlines with readable sans body copy.",
    content: `# Typography\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "4 min read",
  },
  "design-motion-micro": {
    slug: "design-motion-micro",
    title: "Micro-Motion: When Animation Helps—and When It Hurts",
    date: "January 10, 2026",
    dateIso: "2026-01-10",
    category: "Design & Creativity",
    author: {
      name: "Elena Marchetti",
      bio: "Design Director & Writer.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "Subtle motion cues for clarity in patient-facing interfaces.",
    content: `# Motion\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "6 min read",
  },
  "longevity-sleep-recovery": {
    slug: "longevity-sleep-recovery",
    title: "Sleep and Recovery: Foundations People Overlook",
    date: "January 18, 2026",
    dateIso: "2026-01-18",
    category: "Longevity",
    author: {
      name: "Altara Clinical Team",
      bio: "Clinical education team.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "Why sleep quality matters for metabolic and cognitive health.",
    content: `# Sleep\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "5 min read",
  },
  "longevity-exercise-mobility": {
    slug: "longevity-exercise-mobility",
    title: "Strength Training After 40: A Practical Starting Point",
    date: "January 12, 2026",
    dateIso: "2026-01-12",
    category: "Longevity",
    author: {
      name: "Altara Clinical Team",
      bio: "Clinical education team.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "Mobility, load progression, and recovery basics.",
    content: `# Strength\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "7 min read",
  },
  "longevity-nutrition-basics": {
    slug: "longevity-nutrition-basics",
    title: "Nutrition Patterns That Support Healthy Aging",
    date: "January 5, 2026",
    dateIso: "2026-01-05",
    category: "Longevity",
    author: {
      name: "Altara Clinical Team",
      bio: "Clinical education team.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "Protein, fiber, and meal timing—high-level guidance.",
    content: `# Nutrition\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "6 min read",
  },
  "weight-loss-habits": {
    slug: "weight-loss-habits",
    title: "Habits That Make GLP-1 Therapy Easier to Stick With",
    date: "January 6, 2026",
    dateIso: "2026-01-06",
    category: "Weight Loss",
    author: {
      name: "Altara Clinical Team",
      bio: "Clinical education team.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "Routines, reminders, and working with your care team.",
    content: `# Habits\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "5 min read",
  },
  "weight-loss-plateaus": {
    slug: "weight-loss-plateaus",
    title: "Understanding Plateaus on GLP-1 Medications",
    date: "December 28, 2025",
    dateIso: "2025-12-28",
    category: "Weight Loss",
    author: {
      name: "Altara Clinical Team",
      bio: "Clinical education team.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "What plateaus can mean and when to check in with your clinician.",
    content: `# Plateaus\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "6 min read",
  },
  "weight-loss-side-effects": {
    slug: "weight-loss-side-effects",
    title: "Managing Common GI Side Effects: A Practical Guide",
    date: "December 15, 2025",
    dateIso: "2025-12-15",
    category: "Weight Loss",
    author: {
      name: "Altara Clinical Team",
      bio: "Clinical education team.",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    excerpt: "Hydration, meal timing, and when to seek help.",
    content: `# Side effects\n\n${STUB}`,
    videoUrl: null,
    featuredImage: "/placeholder.svg?height=480&width=800",
    seoTitle: null,
    seoDescription: null,
    readTime: "7 min read",
  },
}

export function getMockPost(slug: string): BlogPost | null {
  return MOCK_POSTS[slug] ?? null
}

export function getRelatedFromMock(
  category: string,
  excludeSlug: string,
  limit = 3
): RelatedPostItem[] {
  const sameCategory = Object.values(MOCK_POSTS).filter(
    (p) => p.category === category && p.slug !== excludeSlug
  )
  return sameCategory.slice(0, limit).map((p) => ({
    title: p.title,
    excerpt: p.excerpt ?? "",
    category: p.category,
    date: p.date,
    image: p.featuredImage ?? "/placeholder.svg?height=220&width=400",
    slug: p.slug,
  }))
}

export function getAllMockSlugs(): string[] {
  return Object.keys(MOCK_POSTS)
}
