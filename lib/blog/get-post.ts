import { cache } from "react"
import type { RelatedPostItem } from "./types"
import {
  getPostBySlug,
  getRelatedPosts as getRelatedPostsFromDisk,
  getAllSlugs,
} from "../blog"

export const getBlogPostBySlug = cache(getPostBySlug)

export async function getRelatedPosts(
  category: string,
  excludeSlug: string
): Promise<RelatedPostItem[]> {
  return getRelatedPostsFromDisk(excludeSlug, category, 3)
}

export async function getStaticSlugsForBuild(): Promise<{ slug: string }[]> {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}
