import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const PRODUCT_OPTIONS = [
  { value: "tirzepatide", label: "Compounded Tirzepatide" },
  { value: "semaglutide", label: "Compounded Semaglutide" },
  { value: "nad", label: "NAD+ Injection" },
  { value: "sermorelin", label: "Sermorelin" },
  { value: "ghk-cu", label: "GHK-Cu + Tretinoin + Niacinamide" },
  { value: "glutathione", label: "Glutathione" },
  { value: "lipo-c", label: "Lipo C" },
  { value: "lipotropic-mic", label: "Lipotropic (MIC) + B12" },
] as const;

const CATEGORY_OPTIONS = [
  "Expert Insights",
  "Wellness Stories",
  "Longevity Lab",
  "Performance & Recovery",
] as const;

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads/blog",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/blog",
        format: "mdx",
        ui: {
          filename: {
            slugify: (values) => {
              const s = values?.slug;
              if (typeof s === "string" && s.trim()) {
                return s
                  .trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "");
              }
              const t = values?.title;
              if (typeof t === "string" && t.trim()) {
                return t
                  .trim()
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/^-|-$/g, "");
              }
              return "new-post";
            },
          },
          router: ({ document }) => {
            const base = document._sys.basename.replace(/\.mdx$/i, "");
            return `/blog/${base}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
            description: "URL-friendly slug (should match filename)",
          },
          {
            type: "datetime",
            name: "date",
            label: "Publish date",
            required: true,
            ui: {
              dateFormat: "MMM dd, yyyy",
              timeFormat: false,
            },
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            required: true,
            options: [...CATEGORY_OPTIONS],
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "authorImage",
            label: "Author headshot",
            uploadDir: () => "uploads/blog",
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured image (hero)",
            required: true,
            uploadDir: () => "uploads/blog",
          },
          {
            type: "string",
            name: "videoUrl",
            label: "YouTube embed URL",
            description: "Optional — replaces hero image when set",
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            required: true,
            ui: {
              component: "textarea",
              validate: (value) => {
                const v = typeof value === "string" ? value : "";
                if (v.length > 200)
                  return "Excerpt must be 200 characters or less";
              },
            },
          },
          {
            type: "rich-text",
            name: "content",
            label: "Content",
            isBody: true,
            required: true,
            parser: { type: "mdx" },
          },
          {
            type: "boolean",
            name: "featured",
            label: "Feature on homepage",
            ui: { defaultValue: false },
          },
          {
            type: "string",
            name: "suggestedProducts",
            label: "Suggested products",
            list: true,
            description:
              "Select 1–3 products to feature at the bottom of this post",
            options: [...PRODUCT_OPTIONS],
            ui: {
              max: 3,
            },
          },
          {
            type: "string",
            name: "seoTitle",
            label: "SEO title",
          },
          {
            type: "string",
            name: "seoDescription",
            label: "SEO meta description",
            ui: {
              component: "textarea",
              validate: (value) => {
                const v = typeof value === "string" ? value : "";
                if (v.length > 160)
                  return "SEO description must be 160 characters or less";
              },
            },
          },
        ],
      },
    ],
  },
});
