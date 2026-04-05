import type { ReactNode } from "react"

interface ContentSectionProps {
  /** Blog body content. Can be rich HTML from CMS or React nodes. */
  children?: ReactNode
}

const defaultContent = (
  <>
    <p className="text-[18px] font-normal leading-[1.7] text-foreground">
      Design is more than aesthetics. It is the silent language that guides
      users through an experience, shaping their emotions, decisions, and
      ultimately their relationship with the product. In a world overflowing
      with digital noise, mindful design stands apart as a practice rooted
      in intentionality and empathy.
    </p>

    <p className="mt-6 text-[18px] font-normal leading-[1.7] text-foreground">
      This article explores the principles behind thoughtful design
      decisions and how small, deliberate choices can create lasting impact
      on user experiences. Whether you are a seasoned designer or just
      beginning your journey, these ideas will reshape how you approach
      every project.
    </p>

    <h2 className="mb-4 mt-12 text-[24px] font-semibold leading-[1.3] text-foreground md:text-[28px]">
      Understanding the Foundations
    </h2>

    <p className="text-[18px] font-normal leading-[1.7] text-foreground">
      Every great design starts with a deep understanding of the problem it
      aims to solve. Before reaching for tools or sketching wireframes, the
      most effective designers spend time listening, observing, and asking
      questions that uncover the true needs of their audience.
    </p>

    <p className="mt-6 text-[18px] font-normal leading-[1.7] text-foreground">
      This foundational work may feel slow, but it prevents costly pivots
      later and ensures that every subsequent decision is grounded in real
      user needs rather than assumptions.
    </p>

    <blockquote className="my-8 border-l-4 border-primary py-2 pl-6 italic">
      <p className="text-[18px] leading-[1.7] text-muted-foreground">
        &ldquo;Good design is not about making things beautiful. It is about
        making things work beautifully for the people who use them.&rdquo;
      </p>
    </blockquote>

    <h2 className="mb-4 mt-12 text-[24px] font-semibold leading-[1.3] text-foreground md:text-[28px]">
      The Role of White Space
    </h2>

    <p className="text-[18px] font-normal leading-[1.7] text-foreground">
      White space, often misunderstood as empty space, is one of the most
      powerful tools in a designer&apos;s toolkit. It provides breathing room
      for content, guides the eye through a layout, and creates a sense of
      elegance and clarity.
    </p>

    <h3 className="mb-3 mt-8 text-[22px] font-semibold leading-[1.4] text-foreground">
      Benefits of Generous Spacing
    </h3>

    <ul className="my-4 space-y-3 pl-6">
      <li className="flex items-start gap-3 text-[18px] leading-[1.7] text-foreground">
        <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
        <span>
          <strong className="font-semibold">Improved readability</strong>{" "}
          &mdash; Content becomes easier to scan and digest when it is not
          crammed together.
        </span>
      </li>
      <li className="flex items-start gap-3 text-[18px] leading-[1.7] text-foreground">
        <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
        <span>
          <strong className="font-semibold">Visual hierarchy</strong>{" "}
          &mdash; Strategic spacing reinforces the importance of different
          elements on the page.
        </span>
      </li>
      <li className="flex items-start gap-3 text-[18px] leading-[1.7] text-foreground">
        <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
        <span>
          <strong className="font-semibold">Perceived quality</strong>{" "}
          &mdash; Generous white space signals confidence and a premium
          feel.
        </span>
      </li>
    </ul>

    <h2 className="mb-4 mt-12 text-[24px] font-semibold leading-[1.3] text-foreground md:text-[28px]">
      Building with Empathy
    </h2>

    <p className="text-[18px] font-normal leading-[1.7] text-foreground">
      At its core, mindful design is an exercise in empathy. Every color
      choice, every interaction pattern, every piece of microcopy is an
      opportunity to make someone&apos;s day a little easier, a little more
      delightful, a little more human.
    </p>
  </>
)

export function ContentSection({ children }: ContentSectionProps) {
  return (
    <article className="px-5 py-8 md:px-10 md:py-12">
      <div className="prose-blog mx-auto max-w-[800px] font-sans">
        {children ?? defaultContent}
      </div>
    </article>
  )
}
