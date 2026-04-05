/**
 * Individual blog post page — route: /blog/[slug]
 * Use the class "font-lora" on the post H1 so it uses Lora (see globals.css).
 * Replace with your V0 blog post template when ready.
 */
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="font-lora text-4xl font-bold">Blog post: {slug}</h1>
      <p className="mt-4 text-gray-600">Post content will go here.</p>
    </div>
  );
}
