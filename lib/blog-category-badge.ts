/** Shared category chip styles for blog UI (safe for client components). */
export function categoryBadgeClass(category: string): string {
  switch (category) {
    case "Expert Insights":
      return "bg-[#003366] text-white"
    case "Wellness Stories":
      return "bg-[#5a8a7a]/20 text-[#1a3a4a]"
    case "Longevity Lab":
      return "bg-[#326ea2]/15 text-[#003366]"
    case "Performance & Recovery":
      return "bg-[#d6dbd2] text-[#1a2332]"
    default:
      return "bg-muted text-foreground"
  }
}
