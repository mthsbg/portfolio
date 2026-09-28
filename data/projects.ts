export type ProjectCategory =
  | "product"
  | "branding"
  | "graphic"

export type Project = {
  slug: string
  title: string
  category: ProjectCategory
  year: number
  cover: string
  coverScale?: number // zoom aplicado à imagem de capa no grid da home (1 = padrão)
  coverOverlay?: string
  coverOverlayWidth?: string
  coverDetail?: string // imagem de capa usada na página do projeto, quando diferente da capa da listagem
  tags: string[]
  description: string
  featured: boolean
  archived: boolean
}

export const projects: Project[] = [
  {
    slug: "redesign-wallet-connect-mp",
    title: "Redesign Wallet Connect Mercado Pago",
    category: "product",
    year: 2025,
    cover: "/images/projects/redesign-wallet-connect-mp.png",
    tags: ["UX", "Product Design", "Mercado Pago"],
    description: "",
    featured: true,
    archived: false,
  },
  {
    slug: "armazem-box-18",
    title: "Armazém Box 18",
    category: "branding",
    year: 2020,
    cover: "/images/projects/armazem-box-18.jpg",
    tags: ["Branding", "Identity"],
    description: "",
    featured: true,
    archived: false,
  },
  {
    slug: "red-bull-rabiscada",
    title: "Red Bull Rabiscada",
    category: "graphic",
    year: 2025,
    cover: "/images/projects/red-bull-rabiscada.jpg",
    tags: ["Graphic", "Campaign"],
    description: "",
    featured: false,
    archived: false,
  },
  {
    slug: "colab",
    title: "Co.lab",
    category: "branding",
    year: 2025,
    cover: "/images/projects/colab.jpg",
    tags: ["Branding", "Identity"],
    description: "",
    featured: false,
    archived: false,
  },
  {
    slug: "dashboard-cbp-mp",
    title: "Dashboard CBP Mercado Pago",
    category: "product",
    year: 2025,
    cover: "/images/projects/dashboard-cbp-mp.jpg",
    tags: ["UX", "Dashboard", "Mercado Pago"],
    description: "",
    featured: true,
    archived: false,
  },
  {
    slug: "tired-workers-social-club",
    title: "Tired Workers Social Club",
    category: "graphic",
    year: 2023,
    cover: "/images/projects/tired-workers-social-club.jpeg",
    coverDetail: "/images/projects/tired-workers-social-club/cover-interna.png",
    tags: ["Graphic", "Identity"],
    description: "",
    featured: false,
    archived: false,
  },
  {
    slug: "novo-poder",
    title: "Novo Poder",
    category: "graphic",
    year: 2024,
    cover: "/images/projects/novo-poder.gif",
    tags: ["Graphic", "Identity"],
    description: "",
    featured: false,
    archived: false,
  },
  {
    slug: "chocolate-box-18",
    title: "Chocolate Box 18",
    category: "graphic",
    year: 2021,
    cover: "/images/projects/Chocolate-Box-18.gif",
    tags: ["Graphic", "Packaging"],
    description: "",
    featured: false,
    archived: false,
  },
  {
    slug: "sofia-karaoke-club",
    title: "Sofia Karaoke Club",
    category: "branding",
    year: 2026,
    cover: "/images/projects/SOFIA-karaoke-club.jpg",
    tags: ["Branding", "Identity"],
    description: "",
    featured: false,
    archived: false,
  },
  {
    slug: "landing-page-assinaturas-mp",
    title: "Subscriptions Landing Page Mercado Pago",
    category: "product",
    year: 2022,
    cover: "/images/projects/landing-page-assinaturas-mp.png",
    tags: ["UX", "Web", "Mercado Pago"],
    description: "",
    featured: true,
    archived: false,
  },
  {
    slug: "cucko",
    title: "Cucko",
    category: "branding",
    year: 2026,
    cover: "/images/projects/cucko-bg.JPEG",
    coverOverlay: "/images/projects/cucko-logo.png",
    coverOverlayWidth: "40%",
    tags: ["Branding", "Identity"],
    description: "",
    featured: false,
    archived: false,
  },
  {
    slug: "ilustracoes",
    title: "Illustrations",
    category: "graphic",
    year: 2023,
    cover: "/images/projects/ilustracoes.jpg",
    tags: ["Graphic", "Illustration"],
    description: "",
    featured: false,
    archived: false,
  },
  {
    slug: "marujinho",
    title: "Marujinho",
    category: "graphic",
    year: 2023,
    cover: "/images/projects/marujinho.jpg",
    tags: ["Branding", "Identity"],
    description: "",
    featured: false,
    archived: false,
  },
]

export const categories: { value: ProjectCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "product", label: "Product" },
  { value: "branding", label: "Branding" },
  { value: "graphic", label: "Graphic" },
]
