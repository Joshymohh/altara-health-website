export default function BlogPostLoading() {
  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-background px-5 py-12 md:px-10">
      <div className="mx-auto max-w-[800px] space-y-6 animate-pulse">
        <div className="mx-auto h-8 w-32 rounded-full bg-muted" />
        <div className="mx-auto h-10 w-full max-w-lg rounded-md bg-muted" />
        <div className="mx-auto h-6 w-64 rounded-md bg-muted" />
        <div className="aspect-video w-full rounded-lg bg-muted" />
        <div className="space-y-3 pt-8">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-3/4 rounded bg-muted" />
        </div>
      </div>
    </div>
  )
}
