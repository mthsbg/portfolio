import React from "react"
import Image from "next/image"
import LogoAnimation from "@/components/LogoAnimation"

const experiences: { period: string; company: string; role: string; description: string[] }[] = [
  {
    period: "2022 — now",
    company: "Mercado Livre",
    role: "Senior UX Designer",
    description: [
      "As a Senior UX Designer, I work on digital products within Mercado Pago, collaborating with product, technology and design teams to shape experiences from early concepts through implementation — from redesigning existing flows to creating new features and tools, with close attention to interaction, interface and visual detail.",
    ],
  },
  {
    period: "2020 — 2022",
    company: "Mercado Livre",
    role: "UX Designer",
    description: [
      "Working within Mercado Pago's Online Payments team, I helped redesign the Subscriptions experience for sellers — covering administration, communication and new product features — combining user research and interviews with hands-on design; the first round of improvements increased the product's NPS by more than 10 percentage points.",
    ],
  },
  {
    period: "2018 — 2020",
    company: "Agibank",
    role: "UX Designer",
    description: [
      "I joined Agibank during a major redesign of its digital experience across app, website and internet banking, later working across digital and physical touchpoints — including store systems and sales flows — as the UX team became part of CXM; one of my main projects was the Digital Payroll Loan, taking a product sold only in physical branches online, from early benchmarks through implementation and QA.",
    ],
  },
  {
    period: "2017 — 2018",
    company: "BriviaDEZ",
    role: "Digital Art Director",
    description: [
      "As Digital Art Director, I worked across ecommerce and advertising projects, combining visual direction with the practical demands of digital production — from Dakota Calçados' ecommerce communication and responsive newsletters to sales campaigns and art direction for real estate photography with Cyrela Goldztein.",
    ],
  },
  {
    period: "2017",
    company: "e21",
    role: "Art Director",
    description: [
      "As Art Director, I led campaigns for clients including Vinícola Salton, Massey Ferguson, Votorantin Cimentos and BASF — including the winning pitch for the Vinícola Salton account, competing against larger agencies in Porto Alegre — and defined the content and art direction for social media across Vinícola Salton, Conhaque Presidente, Vórus Vodka and Massey Ferguson.",
    ],
  },
  {
    period: "2015 — 2016",
    company: "e21",
    role: "Art Assistant",
    description: [
      "As Art Assistant, I worked on the agency's main accounts, BASF and Votorantin Cimentos — the latter including the largest nationwide campaign the brand had launched at the time.",
    ],
  },
]

const FS: React.CSSProperties     = { fontSize: "16px", lineHeight: "1.5", margin: 0 }
const FS_EXP: React.CSSProperties = { fontSize: "12px", lineHeight: "1.5", margin: 0 }
const LABEL: React.CSSProperties  = { fontSize: "20px", fontWeight: "400", lineHeight: 1 }

export default function About() {
  return (
    <div className="flex min-h-screen" style={{ background: "var(--bg)" }}>

      {/* ── Sidebar ── */}
      <aside
        className="w-96 shrink-0 flex flex-col pl-3 pt-3 pb-3 pr-6"
        style={{ position: "sticky", top: 0, height: "100vh" }}
      >
        <a href="/" className="mb-5 block" style={{ marginLeft: "-6px" }}>
          <LogoAnimation />
        </a>

        <div className="flex-1" />

        <nav className="flex flex-col gap-2 mb-6">
          <a href="/" className="sidebar-link underline underline-offset-2"
            style={{ fontSize: "14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Projects
          </a>
          <a href="/archive" className="sidebar-link underline underline-offset-2"
            style={{ fontSize: "14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Archive
          </a>
        </nav>

        <p style={{ fontSize: "14px", letterSpacing: "0.01em", fontWeight: "700" }}>
          SÃO PAULO 🇧🇷, 2026
        </p>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 py-8 pr-10">

        {/*
          Único grid de 4 colunas para toda a página:
            col1 (220px) = labels (About / Experience)
            col2 (200px) = foto / datas
            col3 (200px) = empresa+cargo  ← alinhado com bio text (col3+4 no About)
            col4 (1fr)   = bio text / descrição
        */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "220px 280px 200px 1fr",
            columnGap: "64px",
            alignItems: "start",
          }}
        >
          {/* ── About ── */}
          <span style={LABEL}>About</span>

          {/* Photo — col 2 */}
          <div style={{ position: "relative", width: "280px", height: "410px" }}>
            <Image
              src="/images/about/about_matheus.jpg"
              alt="Matheus Guimarães"
              fill
              sizes="280px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          {/* Bio — spans col 3 + col 4 */}
          <div
            style={{
              gridColumn: "3 / 5",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              paddingBottom: "160px",
            }}
          >
            <p style={FS}>
              I'm a multidisciplinary designer with a background in graphic design, advertising and digital products.
            </p>
            <p style={FS}>
              I started my career in advertising, working as an art director, and moved into UX in 2018. Since then, I've worked on digital products across banking and fintech, and I'm currently a Senior UX Designer at Mercado Livre.
            </p>
            <p style={FS}>
              Moving between these two worlds has shaped the way I work. I like to understand the problem, but I also care about the idea, the visual language and the details that make a solution feel right.
            </p>
            <p style={FS}>
              I'm interested in design that is simple, thoughtful and actually useful.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "12px" }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2" style={FS}>Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2" style={FS}>Linkedin</a>
              <a href="https://wa.me/5551986220995" target="_blank" rel="noopener noreferrer"
                className="underline underline-offset-2" style={FS}>Whatsapp</a>
              <a href="mailto:matheusborbaguimaraes@gmail.com"
                className="underline underline-offset-2" style={FS}>Email</a>
            </div>
          </div>

          {/* ── Experience rows — same 4-col grid ── */}
          {experiences.map((exp, i) => (
            <React.Fragment key={i}>
              <div style={{ paddingBottom: "48px" }}>
                {i === 0 && <span style={LABEL}>Experience</span>}
              </div>
              <p style={{ ...FS_EXP, paddingBottom: "48px" }}>{exp.period}</p>
              <div style={{ paddingBottom: "48px" }}>
                <p style={{ ...FS_EXP, fontWeight: "500" }}>{exp.company}</p>
                <p style={FS_EXP}>{exp.role}</p>
              </div>
              <div style={{ paddingBottom: "48px", display: "flex", flexDirection: "column", gap: "16px" }}>
                {exp.description.map((para, j) => (
                  <p key={j} style={FS_EXP}>{para}</p>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>

      </main>
    </div>
  )
}
