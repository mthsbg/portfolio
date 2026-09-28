// Conteúdo da seção Archive — imagens soltas (grid) e séries por projeto (carrossel).
// Para adicionar: coloque o arquivo em public/images/archive/ (solto) ou em
// public/images/archive/<Nome da Pasta>/ (série) e adicione a entrada abaixo.
// width/height são as dimensões reais do arquivo — usadas para preservar o aspect ratio no grid.
// Para trocar a capa de uma série, prefixe o arquivo com "!" na pasta e reordene aqui.
// A ordem abaixo é embaralhada de propósito (ordem aleatória fixa do grid).

export type ArchiveImage = { src: string; width: number; height: number }

export type ArchiveItem =
  | { type: "single"; title: string; image: ArchiveImage }
  | { type: "carousel"; title: string; images: ArchiveImage[] }

const BASE = "/images/archive"

export const archiveItems: ArchiveItem[] = [
  { type: "single", title: "Ilustração - Latkeszito", image: { src: `${BASE}/Ilustração - Latkeszito.jpg`, width: 1626, height: 1587 } },
  {
    type: "carousel",
    title: "Identidade visual - Marujo",
    images: [
      { src: `${BASE}/Identidade visual - Marujo/!Guardanapo Marujo.jpg`, width: 3000, height: 2000 },
      { src: `${BASE}/Identidade visual - Marujo/Logo - Marujo.png`, width: 2084, height: 2084 },
      { src: `${BASE}/Identidade visual - Marujo/Cartao de Visitas - Marujo.jpg`, width: 2000, height: 1500 },
      { src: `${BASE}/Identidade visual - Marujo/Papel Manteiga - Marujo.jpg`, width: 2000, height: 1515 },
    ],
  },
  {
    type: "carousel",
    title: "Ilustrações - Chica Parrilla",
    images: [
      { src: `${BASE}/Ilustrações - Chica Parrilla/!Ilustração - Chica.jpg`, width: 3934, height: 2472 },
      { src: `${BASE}/Ilustrações - Chica Parrilla/Ilustracao barra parrilla Chica.jpeg`, width: 3499, height: 2923 },
    ],
  },
  {
    type: "carousel",
    title: "Identidade visual - Zis",
    images: [
      { src: `${BASE}/Identidade visual - Zis/Captura de Tela 2026-09-27 às 11.44.52.png`, width: 1680, height: 762 },
      { src: `${BASE}/Identidade visual - Zis/Captura de Tela 2026-09-27 às 11.45.10.png`, width: 1679, height: 763 },
      { src: `${BASE}/Identidade visual - Zis/Captura de Tela 2026-09-27 às 11.46.33.png`, width: 1175, height: 537 },
      { src: `${BASE}/Identidade visual - Zis/Captura de Tela 2026-09-27 às 11.46.53.png`, width: 1175, height: 536 },
    ],
  },
  {
    type: "carousel",
    title: "Design - Cucko Copa do Mundo",
    images: [
      { src: `${BASE}/Design - Cucko Copa do mundo/!Post Cucko Copa.png`, width: 1080, height: 1350 },
      { src: `${BASE}/Design - Cucko Copa do mundo/Camiseta Copa.png`, width: 1086, height: 1448 },
      { src: `${BASE}/Design - Cucko Copa do mundo/Cucko Copa horizontal.png`, width: 1920, height: 1080 },
      { src: `${BASE}/Design - Cucko Copa do mundo/Cucko Copa horizontal2.png`, width: 1920, height: 1080 },
      { src: `${BASE}/Design - Cucko Copa do mundo/Cucko Copa vertical.png`, width: 2480, height: 3802 },
    ],
  },
  {
    type: "carousel",
    title: "Rótulo - Balas Artesanais",
    images: [
      { src: `${BASE}/Rótulo - balas artesanais/Etiquetas Balas - 6x6cm_Prancheta 1.png`, width: 756, height: 756 },
      { src: `${BASE}/Rótulo - balas artesanais/Etiquetas Balas - 6x6cm_Prancheta 1 cópia.png`, width: 756, height: 756 },
      { src: `${BASE}/Rótulo - balas artesanais/Etiquetas Balas - 6x6cm-02.png`, width: 756, height: 756 },
      { src: `${BASE}/Rótulo - balas artesanais/Etiquetas Balas - 6x6cm-03.png`, width: 756, height: 756 },
      { src: `${BASE}/Rótulo - balas artesanais/Etiquetas Balas - 6x6cm-05.png`, width: 756, height: 756 },
      { src: `${BASE}/Rótulo - balas artesanais/Etiquetas Balas - 6x6cm-06.png`, width: 756, height: 756 },
    ],
  },
  {
    type: "carousel",
    title: "Design - Carnacucko",
    images: [
      { src: `${BASE}/Design - Carnacucko/!ID Carnacucko-01.png`, width: 8000, height: 4500 },
      { src: `${BASE}/Design - Carnacucko/ID Carnacucko-02.png`, width: 8000, height: 4500 },
    ],
  },
  {
    type: "carousel",
    title: "Rótulo - Zapato Rojo y Amarillo",
    images: [
      { src: `${BASE}/Rótulo - Zapato Rojo y Amarillo/17439D30-B567-44EE-994C-EB3DE4EAE551.jpg`, width: 828, height: 1472 },
      { src: `${BASE}/Rótulo - Zapato Rojo y Amarillo/85D49D38-F3B3-49F7-8640-03A93CD053BD.jpg`, width: 828, height: 1472 },
      { src: `${BASE}/Rótulo - Zapato Rojo y Amarillo/IMG_3444.PNG`, width: 828, height: 1792 },
      { src: `${BASE}/Rótulo - Zapato Rojo y Amarillo/IMG_3446.PNG`, width: 828, height: 1792 },
      { src: `${BASE}/Rótulo - Zapato Rojo y Amarillo/IMG_3447.PNG`, width: 828, height: 1792 },
    ],
  },
  { type: "single", title: "Rótulo - Pimenta Box 18", image: { src: `${BASE}/Rótulo - Pimenta Box 18.jpg`, width: 3032, height: 3094 } },
  { type: "single", title: "Identidade visual - Carro Ideal", image: { src: `${BASE}/Identidade visual - Carro Ideal.png`, width: 2000, height: 1500 } },
  {
    type: "carousel",
    title: "Identidade visual - Janise Ribeiro",
    images: [
      { src: `${BASE}/Identidade visual - Janise Ribeiro/!2ABB74C7-D2A5-4424-9403-B8306B1E407D_1_102_o.jpeg`, width: 1715, height: 1834 },
      { src: `${BASE}/Identidade visual - Janise Ribeiro/18041C5A-CDC0-4BDA-8329-4E3F3718CD16_1_102_o.jpeg`, width: 1715, height: 1834 },
      { src: `${BASE}/Identidade visual - Janise Ribeiro/37012656-974D-41C2-8710-CEA52AF9D405_1_201_a.jpeg`, width: 5526, height: 5911 },
      { src: `${BASE}/Identidade visual - Janise Ribeiro/5FB7D287-8CA7-4FA4-8664-512AB3B6CAD4_1_102_o.jpeg`, width: 1715, height: 1834 },
      { src: `${BASE}/Identidade visual - Janise Ribeiro/B2C0B200-F7B9-4E91-9B25-30E7519F65DE_1_102_o.jpeg`, width: 1715, height: 1834 },
      { src: `${BASE}/Identidade visual - Janise Ribeiro/B67A692D-ED40-4536-B16A-6074C9B59B2F_1_105_c.jpeg`, width: 864, height: 910 },
      { src: `${BASE}/Identidade visual - Janise Ribeiro/B6F91E1B-3718-48C5-9305-B70454B49124_1_102_o.jpeg`, width: 1715, height: 1834 },
    ],
  },
  { type: "single", title: "Ilustração - MTHSBG Custom Design", image: { src: `${BASE}/Ilustração - MTHSBG Custom Design.png`, width: 3240, height: 4050 } },
  {
    type: "carousel",
    title: "Identidade visual - Mureta",
    images: [
      { src: `${BASE}/Identidade visual - Mureta/!Slice 3.png`, width: 1398, height: 1223 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 2.png`, width: 1400, height: 874 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 4.png`, width: 1398, height: 810 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 5.png`, width: 1398, height: 1033 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 6.png`, width: 1400, height: 893 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 7.png`, width: 1400, height: 781 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 8.png`, width: 1398, height: 742 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 9.png`, width: 1400, height: 733 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 10.png`, width: 1397, height: 683 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 11.png`, width: 1397, height: 979 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 12.png`, width: 1397, height: 676 },
      { src: `${BASE}/Identidade visual - Mureta/Slice 13.png`, width: 1400, height: 1115 },
    ],
  },
  { type: "single", title: "Ilustração - Mureta Batata Ketchup Heinz", image: { src: `${BASE}/Ilustração - Mureta Batata Ketchup Heinz.png`, width: 4500, height: 5625 } },
  { type: "single", title: "Embalagem - Café Box 18", image: { src: `${BASE}/Embalagem Cafe Box 18.jpg`, width: 1229, height: 1509 } },
  {
    type: "carousel",
    title: "Ilustrações - Rostos",
    images: [
      { src: `${BASE}/Ilustrações - Rostos/!IMG_3853.PNG`, width: 4500, height: 5625 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3854.PNG`, width: 4497, height: 5617 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3855.PNG`, width: 4500, height: 5625 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3856.PNG`, width: 4497, height: 5617 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3857.PNG`, width: 4500, height: 5625 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3858.PNG`, width: 4497, height: 5617 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3859.PNG`, width: 4497, height: 5617 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3860.PNG`, width: 4497, height: 5617 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3861.PNG`, width: 4500, height: 5625 },
      { src: `${BASE}/Ilustrações - Rostos/IMG_3862.PNG`, width: 4497, height: 5617 },
      { src: `${BASE}/Ilustrações - Rostos/Rostos-02.jpg`, width: 2250, height: 2812 },
      { src: `${BASE}/Ilustrações - Rostos/Rostos-03.jpg`, width: 2250, height: 2812 },
      { src: `${BASE}/Ilustrações - Rostos/Rostos-04.jpg`, width: 2250, height: 2812 },
      { src: `${BASE}/Ilustrações - Rostos/Rostos-05.jpg`, width: 2250, height: 2812 },
      { src: `${BASE}/Ilustrações - Rostos/Rostos-06.jpg`, width: 2250, height: 2812 },
      { src: `${BASE}/Ilustrações - Rostos/Rostos-07.jpg`, width: 2250, height: 2812 },
      { src: `${BASE}/Ilustrações - Rostos/Rostos-08.jpg`, width: 2250, height: 2812 },
      { src: `${BASE}/Ilustrações - Rostos/Rostos-09.jpg`, width: 2250, height: 2812 },
    ],
  },
  { type: "single", title: "Identidade visual - Gajinho Pastéis de Nata", image: { src: `${BASE}/Identidade visual - Gajinho Pasteis de Nata.png`, width: 929, height: 929 } },
  {
    type: "carousel",
    title: "Card Design - Agibank",
    images: [
      { src: `${BASE}/Card Design - Agibank/!3cartoes2.png`, width: 1400, height: 965 },
      { src: `${BASE}/Card Design - Agibank/CartaoConsignado.png`, width: 1400, height: 1050 },
      { src: `${BASE}/Card Design - Agibank/CartaoDigital.png`, width: 1400, height: 1050 },
      { src: `${BASE}/Card Design - Agibank/CartaoNoName.png`, width: 1400, height: 1050 },
    ],
  },
  {
    type: "carousel",
    title: "Ilustrações",
    images: [
      { src: `${BASE}/Ilustrações /Pontos em aberto - ilustracao.PNG`, width: 2161, height: 2701 },
      { src: `${BASE}/Ilustrações /Proximos passos - ilustracao.PNG`, width: 2161, height: 2700 },
    ],
  },
  {
    type: "carousel",
    title: "Design - Cyrela Black Series",
    images: [
      { src: `${BASE}/Design - Cyrela Black Series/!envelope2.png`, width: 1654, height: 1282 },
      { src: `${BASE}/Design - Cyrela Black Series/3.png`, width: 1401, height: 788 },
      { src: `${BASE}/Design - Cyrela Black Series/anuncio_lacamento.png`, width: 1540, height: 1155 },
      { src: `${BASE}/Design - Cyrela Black Series/black_pass2.png`, width: 1400, height: 963 },
      { src: `${BASE}/Design - Cyrela Black Series/interior_book.png`, width: 1540, height: 963 },
    ],
  },
  { type: "single", title: "Embalagem - Picles Box 18", image: { src: `${BASE}/Embalagem - Picles Box 18.png`, width: 2500, height: 1667 } },
  { type: "single", title: "Identidade visual - Contabilidade.com", image: { src: `${BASE}/Identidade Visual - Contabilidade.com.png`, width: 3000, height: 2250 } },
  { type: "single", title: "Design - Jazz na Chica", image: { src: `${BASE}/Design - Jazz na Chica.png`, width: 2250, height: 2813 } },
  { type: "single", title: "Identidade visual - Dindix", image: { src: `${BASE}/Identidade visual - DIndix.png`, width: 4000, height: 3000 } },
]
