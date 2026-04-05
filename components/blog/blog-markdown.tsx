import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"

interface BlogMarkdownProps {
  content: string
}

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <div className="mx-auto w-full max-w-[800px]">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          /* # in article: render as h2 so the page keeps a single h1 from the hero */
          h1: ({ node: _n, children, ...props }) => (
            <h2
              className="mb-6 mt-8 font-serif text-4xl font-bold text-black"
              {...props}
            >
              {children}
            </h2>
          ),
          h2: ({ node: _n, children, ...props }) => (
            <h2
              className="mb-6 mt-12 font-serif text-3xl font-bold text-black"
              {...props}
            >
              {children}
            </h2>
          ),
          h3: ({ node: _n, children, ...props }) => (
            <h3
              className="mb-4 mt-8 font-serif text-2xl font-semibold text-black"
              {...props}
            >
              {children}
            </h3>
          ),
          h4: ({ node: _n, children, ...props }) => (
            <h4
              className="mb-3 mt-6 font-sans text-xl font-bold text-black"
              {...props}
            >
              {children}
            </h4>
          ),
          h5: ({ node: _n, children, ...props }) => (
            <h5
              className="mb-2 mt-4 font-serif text-lg font-semibold text-black"
              {...props}
            >
              {children}
            </h5>
          ),
          h6: ({ node: _n, children, ...props }) => (
            <h6
              className="mb-2 mt-4 font-sans text-base font-semibold text-black"
              {...props}
            >
              {children}
            </h6>
          ),
          p: ({ node: _n, children, ...props }) => (
            <p
              className="mb-6 font-sans text-base leading-relaxed text-gray-800"
              {...props}
            >
              {children}
            </p>
          ),
          ul: ({ node: _n, children, ...props }) => (
            <ul
              className="mb-6 ml-6 list-outside list-disc space-y-2 text-gray-800"
              {...props}
            >
              {children}
            </ul>
          ),
          ol: ({ node: _n, children, ...props }) => (
            <ol
              className="mb-6 ml-6 list-outside list-decimal space-y-2 text-gray-800"
              {...props}
            >
              {children}
            </ol>
          ),
          li: ({ node: _n, children, ...props }) => (
            <li className="text-base font-sans leading-relaxed" {...props}>
              {children}
            </li>
          ),
          strong: ({ node: _n, children, ...props }) => (
            <strong className="font-bold text-black" {...props}>
              {children}
            </strong>
          ),
          em: ({ node: _n, children, ...props }) => (
            <em className="italic" {...props}>
              {children}
            </em>
          ),
          a: ({ node: _n, children, ...props }) => (
            <a
              className="text-blue-600 underline transition-colors hover:text-blue-800"
              {...props}
            >
              {children}
            </a>
          ),
          blockquote: ({ node: _n, children, ...props }) => (
            <blockquote
              className="my-6 border-l-4 border-blue-600 pl-6 italic text-gray-600"
              {...props}
            >
              {children}
            </blockquote>
          ),
          img: ({ src, alt }) => {
            if (!src || typeof src !== "string") return null
            const isLocal = src.startsWith("/")
            return (
              <figure className="my-8 w-full overflow-hidden rounded-[4px] bg-neutral-100">
                <div className="relative mx-auto aspect-[16/10] w-full max-w-full">
                  {isLocal ? (
                    <Image
                      src={src}
                      alt={alt ?? ""}
                      fill
                      quality={100}
                      className="object-contain sharp-image"
                      sizes="(max-width: 800px) 100vw, 800px"
                    />
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={src}
                      alt={alt ?? ""}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  )}
                </div>
                {alt ? (
                  <figcaption className="mt-2 text-center font-sans text-sm text-[#666666]">
                    {alt}
                  </figcaption>
                ) : null}
              </figure>
            )
          },
          hr: () => <hr className="my-10 border-neutral-200" />,
          pre: ({ children }) => (
            <pre className="my-8 overflow-x-auto rounded-lg border border-border bg-[#0d1117] p-4 text-sm leading-relaxed text-[#e6edf3]">
              {children}
            </pre>
          ),
          code: ({ className, children, ...props }) => {
            const isBlock =
              typeof className === "string" && className.includes("language-")
            if (isBlock) {
              return (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
            return (
              <code
                className="rounded bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.9em] text-black"
                {...props}
              >
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
