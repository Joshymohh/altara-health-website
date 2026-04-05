/** Extract YouTube video ID from URL or id string. */
export function getYoutubeId(url: string | null | undefined): string | null {
  if (!url || typeof url !== "string") return null
  const trimmed = url.trim()
  if (!trimmed) return null
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed
  try {
    const withProtocol = trimmed.startsWith("http") ? trimmed : `https://${trimmed}`
    const u = new URL(withProtocol)
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0]
      return id && id.length >= 6 ? id : null
    }
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v")
      if (v) return v
      const parts = u.pathname.split("/").filter(Boolean)
      const embedIdx = parts.indexOf("embed")
      if (embedIdx >= 0 && parts[embedIdx + 1]) return parts[embedIdx + 1] ?? null
      const shortIdx = parts.indexOf("shorts")
      if (shortIdx >= 0 && parts[shortIdx + 1]) return parts[shortIdx + 1] ?? null
    }
  } catch {
    return null
  }
  return null
}
