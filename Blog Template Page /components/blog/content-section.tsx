export function ContentSection() {
  return (
    <article className="px-5 py-8 md:px-10 md:py-12">
      <div className="prose-blog mx-auto max-w-[800px] font-sans">
        {/* Intro paragraph */}
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

        {/* Section 1 */}
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

        {/* Blockquote */}
        <blockquote className="my-8 border-l-4 border-primary py-2 pl-6 italic">
          <p className="text-[18px] leading-[1.7] text-muted-foreground">
            {'"'}Good design is not about making things beautiful. It is about
            making things work beautifully for the people who use them.{'"'}
          </p>
        </blockquote>

        {/* Section 2 */}
        <h2 className="mb-4 mt-12 text-[24px] font-semibold leading-[1.3] text-foreground md:text-[28px]">
          The Role of White Space
        </h2>

        <p className="text-[18px] font-normal leading-[1.7] text-foreground">
          White space, often misunderstood as empty space, is one of the most
          powerful tools in a designer{"'"}s toolkit. It provides breathing room
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
          <li className="flex items-start gap-3 text-[18px] leading-[1.7] text-foreground">
            <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="font-semibold">Reduced cognitive load</strong>{" "}
              &mdash; Users can focus on what matters without feeling
              overwhelmed.
            </span>
          </li>
        </ul>

        {/* Section 3 */}
        <h2 className="mb-4 mt-12 text-[24px] font-semibold leading-[1.3] text-foreground md:text-[28px]">
          Typography as a Design System
        </h2>

        <p className="text-[18px] font-normal leading-[1.7] text-foreground">
          Typography is often called the backbone of design. The typefaces you
          choose, the way you pair them, and the hierarchy you establish through
          size, weight, and spacing all communicate meaning before a single
          word is read.
        </p>

        <p className="mt-6 text-[18px] font-normal leading-[1.7] text-foreground">
          A well-designed typographic system creates consistency across an
          entire product while remaining flexible enough to handle diverse
          content types. Consider how{" "}
          <a
            href="#"
            className="font-medium text-primary underline decoration-primary/40 underline-offset-4 transition-colors hover:decoration-primary"
          >
            variable fonts
          </a>{" "}
          have revolutionized this process, offering a single file that
          accommodates multiple weights and styles seamlessly.
        </p>

        <h3 className="mb-3 mt-8 text-[22px] font-semibold leading-[1.4] text-foreground">
          Choosing the Right Pairing
        </h3>

        <p className="text-[18px] font-normal leading-[1.7] text-foreground">
          The art of pairing typefaces lies in contrast with cohesion. A serif
          headline paired with a clean sans-serif body text creates a dynamic
          rhythm that keeps the reader engaged. The key is ensuring both
          typefaces share a similar x-height and overall proportion, so they
          feel related despite their stylistic differences.
        </p>

        {/* Section 4 */}
        <h2 className="mb-4 mt-12 text-[24px] font-semibold leading-[1.3] text-foreground md:text-[28px]">
          Building with Empathy
        </h2>

        <p className="text-[18px] font-normal leading-[1.7] text-foreground">
          At its core, mindful design is an exercise in empathy. Every color
          choice, every interaction pattern, every piece of microcopy is an
          opportunity to make someone{"'"}s day a little easier, a little more
          delightful, a little more human.
        </p>

        <p className="mt-6 text-[18px] font-normal leading-[1.7] text-foreground">
          When we design with empathy, we move beyond solving problems to
          creating experiences that resonate on an emotional level. This is what
          transforms a good product into a beloved one, and it starts with the
          simple act of paying attention to the details.
        </p>
      </div>
    </article>
  )
}
