import Image from "next/image"

interface BlogFeaturedImageProps {
  src: string
  alt: string
}

const imageStyle = {
  width: "100%",
  height: "600px",
  maxWidth: "800px",
  objectFit: "cover" as const,
  display: "block" as const,
}

const containerStyle = {
  paddingTop: "20px",
  maxWidth: "800px",
  margin: "0 auto",
  width: "100%",
}

export function BlogFeaturedImage({ src, alt }: BlogFeaturedImageProps) {
  const isLocal = src.startsWith("/")

  return (
    <section className="bg-[#FFFFFF] px-5 pb-8 md:px-10 md:pb-12">
      <div style={containerStyle}>
        <figure className="m-0 overflow-hidden rounded-[4px] bg-neutral-100">
          {isLocal ? (
            <Image
              src={src}
              alt={alt}
              width={800}
              height={600}
              style={imageStyle}
              priority
              quality={100}
              sizes="(max-width: 768px) 100vw, 800px"
              unoptimized={src.includes("placeholder")}
              className="sharp-image"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={alt}
              width={800}
              height={600}
              style={imageStyle}
              loading="eager"
            />
          )}
        </figure>
        {alt ? (
          <figcaption className="px-4 py-3 text-center font-sans text-sm text-[#666666]">
            {alt}
          </figcaption>
        ) : null}
      </div>
    </section>
  )
}
