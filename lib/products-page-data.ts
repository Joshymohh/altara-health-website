/** PNG paths under `public/Product Page/` (exact filenames on disk; case-sensitive). */
const P = (filename: string) => `/Product%20Page/${encodeURIComponent(filename)}`

export type ProductsPageItem = {
  id: string
  title: string
  href: string
  image: string
}

export type ProductsPageCategory = {
  id: string
  heading: string
  products: ProductsPageItem[]
}

export const PRODUCTS_PAGE_CATEGORIES: ProductsPageCategory[] = [
  {
    id: "weight-management",
    heading: "Weight Management",
    products: [
      {
        id: "tirzepatide",
        title: "Compounded Tirzepatide",
        href: "/tirzepatide",
        image: P("Tirzepatide.png"),
      },
      {
        id: "semaglutide",
        title: "Compounded Semaglutide",
        href: "/products/semaglutide",
        image: P("Semaglutide.png"),
      },
    ],
  },
  {
    id: "longevity-vitality",
    heading: "Longevity & Vitality",
    products: [
      {
        id: "nad",
        title: "NAD+ Injection",
        href: "/products/nad",
        image: P("NAD.png"),
      },
      {
        id: "sermorelin",
        title: "Sermorelin",
        href: "/products/sermorelin",
        image: P("Sermorelin.png"),
      },
      {
        id: "ghk-cu",
        title: "GHK-Cu + Tretinoin + Niacinamide",
        href: "/products/ghk-cu",
        image: P("GHK-Cu.png"),
      },
    ],
  },
  {
    id: "metabolic-health",
    heading: "Metabolic Health",
    products: [
      {
        id: "glutathione",
        title: "Glutathione",
        href: "/products/glutathione",
        image: P("Glutathione.png"),
      },
      {
        id: "lipo-c",
        title: "Lipo C",
        href: "/products/lipo-c",
        image: P("Lipo-C.png"),
      },
      {
        id: "lipotropic-mic",
        title: "Lipotropic (MIC) + B12",
        href: "/products/lipotropic-mic",
        image: P("Lipotropic.png"),
      },
    ],
  },
]
