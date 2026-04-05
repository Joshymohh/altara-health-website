import Link from "next/link";

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[hsl(var(--bone))] to-[hsl(var(--sage))]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <h1 className="font-serif text-4xl font-normal tracking-tight text-foreground lg:text-5xl">
          Products
        </h1>
        <p className="mt-4 font-sans text-lg text-muted-foreground">
          Explore our range of premium treatments. More products coming soon.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/tirzepatide"
            className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
          >
            <span className="font-serif text-xl font-normal text-foreground group-hover:text-primary">
              Compounded Tirzepatide
            </span>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              GLP-1 + GIP therapy for weight loss. FDA-licensed, delivered to your door.
            </p>
            <span className="mt-4 inline-block font-sans text-sm font-medium text-primary">
              View product →
            </span>
          </Link>
          {/* Placeholder cards for future products */}
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6">
            <span className="font-serif text-xl font-normal text-muted-foreground">
              More products
            </span>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              Additional treatments will be listed here.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-6">
            <span className="font-serif text-xl font-normal text-muted-foreground">
              More products
            </span>
            <p className="mt-2 font-sans text-sm text-muted-foreground">
              Additional treatments will be listed here.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
