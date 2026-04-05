export function BlogIndexSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-[#FFFFFF]">
      <div className="border-b border-neutral-100 px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl space-y-4">
          <div className="h-4 w-32 rounded bg-neutral-200" />
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="aspect-[3/2] rounded-[4px] bg-neutral-200 lg:col-span-7" />
            <div className="space-y-3 py-4 lg:col-span-5">
              <div className="h-3 w-24 rounded bg-neutral-200" />
              <div className="h-8 w-full rounded bg-neutral-200" />
              <div className="h-4 w-full rounded bg-neutral-200" />
              <div className="h-4 w-2/3 rounded bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-6 w-20 rounded bg-neutral-200" />
          ))}
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10 xl:gap-12">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-[4px] bg-white">
              <div className="aspect-[3/2] bg-neutral-200" />
              <div className="space-y-3 p-5">
                <div className="h-3 w-28 rounded bg-neutral-200" />
                <div className="h-6 w-full rounded bg-neutral-200" />
                <div className="h-3 w-full rounded bg-neutral-200" />
                <div className="h-3 w-4/5 rounded bg-neutral-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
