export function SuggestedProducts() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16">
      <h2 className="mb-8 text-center font-serif text-2xl font-bold text-foreground md:text-3xl">
        Suggested Products
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md"
          >
            {/* Product Image Placeholder */}
            <div className="aspect-square w-full bg-muted" />

            {/* Product Info */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              {/* Product Title Placeholder */}
              <div className="h-5 w-3/4 rounded bg-muted" />

              {/* Product Description Placeholder */}
              <div className="flex flex-col gap-2">
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-2/3 rounded bg-muted" />
              </div>

              {/* Price Placeholder */}
              <div className="mt-auto pt-3">
                <div className="h-6 w-1/4 rounded bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
