import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <Link href="/" className="font-serif text-lg font-bold text-foreground">
          Altara Health
        </Link>
        <p className="text-xs text-muted-foreground">
          {"© 2026 Altara Health. All rights reserved. This site is for informational purposes only and does not constitute medical advice."}
        </p>
      </div>
    </footer>
  )
}
