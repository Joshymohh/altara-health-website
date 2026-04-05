import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Altara Health",
  description: "Altara Health privacy policy and newsletter subscription terms.",
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="font-serif text-3xl text-foreground md:text-4xl">Privacy Policy</h1>
      <p className="mt-6 font-sans text-muted-foreground leading-relaxed">
        This is a placeholder privacy policy page. Replace this content with your
        finalized policy and legal review. Newsletter subscriptions and personal data
        are handled in accordance with applicable laws.
      </p>
      <p className="mt-8">
        <Link
          href="/"
          className="font-sans text-sm font-medium text-[#326ea2] hover:underline"
        >
          ← Back to home
        </Link>
      </p>
    </div>
  )
}
