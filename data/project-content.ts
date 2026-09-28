// Conteúdo estendido de cada projeto — galeria e textos detalhados.
// Para adicionar imagens: coloque os arquivos em public/images/projects/<slug>/
// e adicione as entradas abaixo.
//
// Galeria: cada row é "full" (largura total), "half" (2 imagens lado a lado)
// ou "grid" (N imagens em um grid de 4 colunas).

// overlay: posiciona um gif/imagem por cima da row "full", no espaço vazio do mockup
// (ex.: a tela de um celular). top/left/width/height em % relativos à imagem base.
export type GalleryOverlay = {
  src: string
  top: string
  left: string
  width: string
  height: string
}

export type GalleryRow =
  | { layout: "full"; src: string; alt?: string; overlay?: GalleryOverlay; aspectRatio?: string } // aspectRatio: letterbox (contain, fundo preto) em vez do tamanho natural — útil pra vídeo vertical
  | { layout: "half"; left: string; right: string; altLeft?: string; altRight?: string; aspectRatio?: string }
  | { layout: "grid"; images: string[] }

export type ProjectContent = {
  slug: string
  description: string   // parágrafo de contexto / problema
  role: string          // o que fiz
  team?: string[]        // colaboradores — ausente quando o projeto foi feito sozinho
  gallery: GalleryRow[]
}

export const projectContent: ProjectContent[] = [
  {
    slug: "redesign-wallet-connect-mp",
    description: "Wallet Connect is Mercado Pago's service that lets users link their account to a website or app to make automatic payments using their balance or saved cards. Metrics showed that each extra step in the flow increased drop-off, so we led a redesign to make the connection faster and more direct. We used user behavior data to automatically suggest a credit card as a backup method — previously a manual step — and reworked the UI and the screen's storytelling to communicate only what mattered. The result was a 7% increase in conversion rate.",
    role: "",
    team: ["Luciana Alves", "Marcella Maia", "Sandra Botero", "Matheus Borba"],
    gallery: [
      {
        layout: "full",
        src: "/images/projects/redesign-wallet-connect-mp/1.png",
        overlay: {
          src: "/images/projects/redesign-wallet-connect-mp/gif-legacy.gif",
          left: "19.14%",
          top: "12.78%",
          width: "18.79%",
          height: "74.31%",
        },
      },
      { layout: "full", src: "/images/projects/redesign-wallet-connect-mp/2.png" },
      { layout: "full", src: "/images/projects/redesign-wallet-connect-mp/3.png" },
      {
        layout: "full",
        src: "/images/projects/redesign-wallet-connect-mp/4.png",
        overlay: {
          src: "/images/projects/redesign-wallet-connect-mp/gif-unificacion.gif",
          left: "41.25%",
          top: "19.25%",
          width: "18.75%",
          height: "68.29%",
        },
      },
      { layout: "full", src: "/images/projects/redesign-wallet-connect-mp/5.png" },
    ],
  },
  {
    slug: "dashboard-cbp-mp",
    description: "CBP is Mercado Pago's product that lets companies operating internationally receive payments in local currency in countries where they have no local entity. The admin panel was just an adaptation of the regular Mercado Pago account experience, and we spotted the opportunity to build a dashboard dedicated to the product. We ran a market benchmark, interviewed stakeholders, and prioritized the information most relevant to users. The result was a management dashboard with a clear view of the company's operations, able to quickly answer the user's key questions within the system.",
    role: "",
    team: ["Matheus Borba", "Sandra Botero", "Lucas Maia", "Luciana Alves"],
    gallery: [
      { layout: "full", src: "/images/projects/dashboard-cbp-mp/1.jpg" },
      { layout: "full", src: "/images/projects/dashboard-cbp-mp/2.jpg" },
      { layout: "full", src: "/images/projects/dashboard-cbp-mp/3.jpg" },
      { layout: "full", src: "/images/projects/dashboard-cbp-mp/4.jpg" },
      { layout: "full", src: "/images/projects/dashboard-cbp-mp/5.jpg" },
      { layout: "full", src: "/images/projects/dashboard-cbp-mp/6.jpg" },
    ],
  },
  {
    slug: "landing-page-assinaturas-mp",
    description: "Landing page created for Mercado Pago's subscriptions product, which lets sellers set up automatic recurring charges for their customers in a simplified way. Together with the product team, we structured the value proposition, the audience's main needs, and the screen's storytelling. From that foundation, we developed all the content and design for the page, creating an experience that clearly communicates the product's benefits.",
    role: "",
    gallery: [
      { layout: "full", src: "/images/projects/landing-page-assinaturas-mp/assinaturas mp (2).png" },
    ],
  },
  {
    slug: "armazem-box-18",
    description: "Armazém Box 18 is a café in Porto Alegre, the younger sibling of the restaurant Chica Parrilla. With inspirations ranging from New York to Uruguay, the space brings together a menu of brunch, coffee and healthy snacks, while also working as a bakery and deli. The brand called for an identity able to unite these varied references in a warm, unpretentious tone that captured the experience of a place that feels both everyday and special.",
    role: "",
    gallery: [
      { layout: "full", src: "/images/projects/armazem-box-18/1.jpg" },
      { layout: "full", src: "/images/projects/armazem-box-18/2.jpg" },
      { layout: "full", src: "/images/projects/armazem-box-18/3.jpg" },
      { layout: "full", src: "/images/projects/armazem-box-18/4.jpg" },
      { layout: "full", src: "/images/projects/armazem-box-18/5.jpg" },
      { layout: "full", src: "/images/projects/armazem-box-18/6.jpg" },
      { layout: "full", src: "/images/projects/armazem-box-18/7.jpg" },
      { layout: "full", src: "/images/projects/armazem-box-18/8.jpg" },
      { layout: "full", src: "/images/projects/armazem-box-18/9.jpg" },
    ],
  },
  {
    slug: "colab",
    description: "Co.lab is a communications and events company that works as a hub of creative professionals, organized into four verticals: Co.cria (creative), Co.analisa (strategy), Co.organiza (corporate events) and Co.música (music events). The challenge was to express this collaboration between distinct fronts without losing the parent brand's cohesion. The answer came from the geometric abstraction of the logo itself: we created a set of graphic shapes for each vertical, which can be freely combined when the communication is for Co.lab as a whole, or applied on their own to give each vertical its own identity in its specific communications.",
    role: "",
    gallery: [
      { layout: "half", left: "/images/projects/Colab/1.png", right: "/images/projects/Colab/2.png" },
      { layout: "full", src: "/images/projects/Colab/3.png" },
      { layout: "full", src: "/images/projects/Colab/4.gif" },
      { layout: "full", src: "/images/projects/Colab/5.png" },
      { layout: "half", left: "/images/projects/Colab/6.png", right: "/images/projects/Colab/7.png" },
      { layout: "full", src: "/images/projects/Colab/8.png" },
      { layout: "full", src: "/images/projects/Colab/9.png" },
      { layout: "full", src: "/images/projects/Colab/10.png" },
    ],
  },
  {
    slug: "cucko",
    description: "Cucko is a nightclub in Porto Alegre that wanted a rebrand to mature the brand and establish itself as a well-structured space, with the quality befitting its history. We brought in straighter, more sober lines, reinventing the lightning bolt — the brand's historic icon — as a symbol derived from the name itself, with its own charisma and identity. The more sober tone balances the brand's nocturnal, adult feel, while the use of color brings back the energy of a party.",
    role: "",
    team: ["Matheus Borba", "Helder Oliveira"],
    gallery: [
      { layout: "full", src: "/images/projects/Cucko/1.png" },
      { layout: "full", src: "/images/projects/Cucko/2.gif" },
      { layout: "full", src: "/images/projects/Cucko/3.png" },
      { layout: "half", left: "/images/projects/Cucko/4.png", right: "/images/projects/Cucko/5.gif" },
      { layout: "full", src: "/images/projects/Cucko/6.mov" },
      { layout: "full", src: "/images/projects/Cucko/7.png" },
      { layout: "full", src: "/images/projects/Cucko/8.png" },
      { layout: "full", src: "/images/projects/Cucko/9.png" },
      { layout: "full", src: "/images/projects/Cucko/10.png" },
      { layout: "full", src: "/images/projects/Cucko/11.png" },
      { layout: "full", src: "/images/projects/Cucko/12.png" },
      { layout: "full", src: "/images/projects/Cucko/13.png" },
      { layout: "full", src: "/images/projects/Cucko/14.png" },
      { layout: "half", left: "/images/projects/Cucko/15.png", right: "/images/projects/Cucko/16.png" },
      { layout: "full", src: "/images/projects/Cucko/17.png" },
      { layout: "full", src: "/images/projects/Cucko/18.png" },
      { layout: "full", src: "/images/projects/Cucko/19.png" },
      { layout: "full", src: "/images/projects/Cucko/20.png" },
      { layout: "full", src: "/images/projects/Cucko/21.png" },
      { layout: "half", left: "/images/projects/Cucko/22.png", right: "/images/projects/Cucko/23.png" },
      { layout: "full", src: "/images/projects/Cucko/24.png" },
      { layout: "full", src: "/images/projects/Cucko/25.png" },
    ],
  },
  {
    slug: "sofia-karaoke-club",
    description: "Sofia is a karaoke bar in Porto Alegre that, after 10 years and a change of ownership, needed a rebrand to modernize and mark this new chapter. We developed the strategy and rebrand together with the new owners, keeping the Eastern reference that was already part of the identity — a nod to the origins of karaoke — and extending that inspiration to the menu as well. We brought in red as the brand's main color, creating visual impact and personality for this new phase.",
    role: "",
    team: ["Matheus Borba", "Helder Oliveira"],
    gallery: [
      { layout: "full", src: "/images/projects/Sofia/1.png" },
      { layout: "full", src: "/images/projects/Sofia/2.gif" },
      { layout: "full", src: "/images/projects/Sofia/3.png" },
      { layout: "full", src: "/images/projects/Sofia/4.png" },
      { layout: "half", left: "/images/projects/Sofia/5.png", right: "/images/projects/Sofia/6.png", aspectRatio: "8/9" },
      { layout: "full", src: "/images/projects/Sofia/7.png" },
      { layout: "full", src: "/images/projects/Sofia/8.gif" },
      { layout: "full", src: "/images/projects/Sofia/9.png" },
      { layout: "full", src: "/images/projects/Sofia/10.png" },
      { layout: "full", src: "/images/projects/Sofia/11.png" },
      { layout: "full", src: "/images/projects/Sofia/12.png" },
      { layout: "full", src: "/images/projects/Sofia/13.png" },
      { layout: "half", left: "/images/projects/Sofia/14.png", right: "/images/projects/Sofia/15.png", aspectRatio: "8/9" },
      { layout: "full", src: "/images/projects/Sofia/16.png" },
      { layout: "full", src: "/images/projects/Sofia/17.png" },
      { layout: "full", src: "/images/projects/Sofia/18.mp4" },
      { layout: "full", src: "/images/projects/Sofia/19.png" },
      { layout: "half", left: "/images/projects/Sofia/20.png", right: "/images/projects/Sofia/21.png", aspectRatio: "8/9" },
      { layout: "full", src: "/images/projects/Sofia/22.png" },
      { layout: "half", left: "/images/projects/Sofia/23.png", right: "/images/projects/Sofia/24.png", aspectRatio: "8/9" },
      { layout: "full", src: "/images/projects/Sofia/25.png" },
      { layout: "full", src: "/images/projects/Sofia/26.png" },
      { layout: "full", src: "/images/projects/Sofia/27.png" },
      { layout: "full", src: "/images/projects/Sofia/29.mp4" },
    ],
  },
  {
    slug: "red-bull-rabiscada",
    description: "Red Bull Rabiscada is a trio competition of passinho, the dance style born from Rio de Janeiro's funk carioca, celebrating the city's street culture. To give the event a visual identity, we looked for a language that captured this urban energy and its geographic roots. We created a lettering style inspired by Brazilian graffiti, blending references from the competition's dance floor with the landscapes of Rio de Janeiro. The result is an identity that carries the authenticity of the culture it represents.",
    role: "",
    gallery: [
      { layout: "full", src: "/images/projects/red-bull-rabiscada/1.jpg" },
      { layout: "full", src: "/images/projects/red-bull-rabiscada/2.jpg" },
      { layout: "full", src: "/images/projects/red-bull-rabiscada/3.jpg" },
      { layout: "half", left: "/images/projects/red-bull-rabiscada/4.jpg", right: "/images/projects/red-bull-rabiscada/5.jpg", aspectRatio: "4/3" },
      { layout: "full", src: "/images/projects/red-bull-rabiscada/6.jpg" },
      { layout: "full", src: "/images/projects/red-bull-rabiscada/7.jpg" },
      { layout: "full", src: "/images/projects/red-bull-rabiscada/8.jpg" },
      { layout: "full", src: "/images/projects/red-bull-rabiscada/9.mov", aspectRatio: "16/9" },
      { layout: "full", src: "/images/projects/red-bull-rabiscada/10.jpg" },
      { layout: "half", left: "/images/projects/red-bull-rabiscada/11.jpeg", right: "/images/projects/red-bull-rabiscada/12.jpg", aspectRatio: "4/3" },
      { layout: "full", src: "/images/projects/red-bull-rabiscada/13.jpg" },
    ],
  },
  {
    slug: "tired-workers-social-club",
    description: "Tired Workers Social Club is a personal project born from a generation's collective exhaustion — burnout, depression and anxiety treated as individual issues when, in fact, they're symptoms of a way of life shaped by pressure for productivity, speed and the constant need to perform on social media. From that concept, we developed a direct, raw visual identity, brought to life through stickers and t-shirts. The project turns a generational unease into a symbol of both identification and critique.",
    role: "",
    gallery: [
      { layout: "full", src: "/images/projects/tired-workers-social-club/1.png" },
      { layout: "full", src: "/images/projects/tired-workers-social-club/2.png" },
      { layout: "full", src: "/images/projects/tired-workers-social-club/3.png" },
      { layout: "half", left: "/images/projects/tired-workers-social-club/4.jpeg", right: "/images/projects/tired-workers-social-club/5.jpeg", aspectRatio: "4/3.9" },
      { layout: "half", left: "/images/projects/tired-workers-social-club/6.jpeg", right: "/images/projects/tired-workers-social-club/7.jpeg", aspectRatio: "4/3.9" },
      {
        layout: "grid",
        images: [
          "/images/projects/tired-workers-social-club/grid/IMG_0888.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_2735.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_3245.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_3662.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_4601.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_4972.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_5035.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_5158.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_5321.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_6368.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_6617.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_6715.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_8035.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_8097.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_8288.jpeg",
          "/images/projects/tired-workers-social-club/grid/IMG_9146.jpeg",
        ],
      },
    ],
  },
  {
    slug: "novo-poder",
    description: "Novo Poder is a Spotify rap playlist that brings together the diversity of Brazilian rap — trap, boom-bap and grime — under a single identity concept. To represent that plurality, we drew inspiration from the icons who paved the way for the genre in Brazil, like Racionais and Sabotage, building the concept of \"echo\": the idea that today's rap still resonates with the impact of the '90s. That translated into a gothic typeface and a visual dynamism that nods to the movement's roots. The project was developed for the \"Decodificando Identidades\" course at Aprender Design.",
    role: "",
    team: ["Almir Neto", "Felipe Castro Vargas", "Luciano Smythe", "Matheus Borba", "Marcos Franchi"],
    gallery: [
      { layout: "full", src: "/images/projects/novo-poder/2.png" },
      { layout: "full", src: "/images/projects/novo-poder/3.gif" },
      { layout: "full", src: "/images/projects/novo-poder/4.png" },
      { layout: "full", src: "/images/projects/novo-poder/5.png" },
      { layout: "full", src: "/images/projects/novo-poder/6.png" },
      { layout: "full", src: "/images/projects/novo-poder/7.png" },
      { layout: "full", src: "/images/projects/novo-poder/8.png" },
      { layout: "full", src: "/images/projects/novo-poder/9.gif" },
      { layout: "full", src: "/images/projects/novo-poder/10.png" },
      { layout: "full", src: "/images/projects/novo-poder/11.png" },
      { layout: "full", src: "/images/projects/novo-poder/12.png" },
      { layout: "full", src: "/images/projects/novo-poder/13.png" },
      { layout: "full", src: "/images/projects/novo-poder/14.gif" },
      { layout: "full", src: "/images/projects/novo-poder/15.png" },
      { layout: "full", src: "/images/projects/novo-poder/16.png" },
      { layout: "full", src: "/images/projects/novo-poder/17.png" },
      { layout: "full", src: "/images/projects/novo-poder/18.png" },
      { layout: "full", src: "/images/projects/novo-poder/19.png" },
      { layout: "full", src: "/images/projects/novo-poder/20.png" },
      { layout: "full", src: "/images/projects/novo-poder/21.png" },
    ],
  },
  {
    slug: "chocolate-box-18",
    description: "Chocolate Box 18 is the packaging created for the partnership between Armazém Box 18 and Magian Cacau. Inspired by classic chocolate packaging, the piece dialogues with Armazém Box 18's vintage universe through custom lettering. Each flavor got its own exclusive color combination, reinforcing the brand identity in a collectible format.",
    role: "",
    gallery: [
      { layout: "half", left: "/images/projects/chocolate-box-18/1.jpg", right: "/images/projects/chocolate-box-18/2.jpg" },
      { layout: "full", src: "/images/projects/chocolate-box-18/3.jpg" },
      { layout: "full", src: "/images/projects/chocolate-box-18/5.jpg" },
      { layout: "full", src: "/images/projects/chocolate-box-18/6.jpg" },
      { layout: "half", left: "/images/projects/chocolate-box-18/4.jpg", right: "/images/projects/chocolate-box-18/7.jpg" },
    ],
  },
  {
    slug: "ilustracoes",
    description: "A series of personal illustrations made with pen and oil pastel, a free exercise in line, texture and color outside the context of client projects. It works as a personal style lab, a space to experiment with compositions and narratives without the constraints of a brief.",
    role: "",
    gallery: [
      { layout: "full", src: "/images/projects/ilustracoes/1.jpg" },
      { layout: "full", src: "/images/projects/ilustracoes/2.jpg" },
      { layout: "full", src: "/images/projects/ilustracoes/3.jpg" },
      { layout: "full", src: "/images/projects/ilustracoes/4.jpg" },
      { layout: "full", src: "/images/projects/ilustracoes/5.jpg" },
      { layout: "full", src: "/images/projects/ilustracoes/6.jpg" },
      { layout: "full", src: "/images/projects/ilustracoes/7.jpg" },
      { layout: "full", src: "/images/projects/ilustracoes/8.jpg" },
    ],
  },
  {
    slug: "marujinho",
    description: "Marujinho is a character illustration created for the restaurant Marujo, in Porto Alegre, which specializes in seafood. To symbolize the restaurant's concept, we developed a friendly shrimp, having a beer and wearing a sailor's hat. The mascot carries good humor and identifies the brand in an immediate, memorable way.",
    role: "",
    gallery: [
      { layout: "full", src: "/images/projects/marujinho/2.jpg" },
      { layout: "full", src: "/images/projects/marujinho/1.jpg" },
      { layout: "full", src: "/images/projects/marujinho/3.jpg" },
      { layout: "full", src: "/images/projects/marujinho/4.jpg" },
      { layout: "full", src: "/images/projects/marujinho/5.jpg" },
      { layout: "full", src: "/images/projects/marujinho/6.jpg" },
    ],
  },
]
