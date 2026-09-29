"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { projects, categories } from "@/data/projects"
import type { Project, ProjectCategory } from "@/data/projects"
import LogoAnimation from "@/components/LogoAnimation"

const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  product:  "Product design",
  branding: "Branding",
  graphic:  "Graphic design",
}

// Ordem específica da listagem em coluna única no mobile (independente do grid do desktop).
const MOBILE_ORDER = [
  "redesign-wallet-connect-mp",
  "novo-poder",
  "cucko",
  "red-bull-rabiscada",
  "dashboard-cbp-mp",
  "colab",
  "armazem-box-18",
  "tired-workers-social-club",
  "sofia-karaoke-club",
  "chocolate-box-18",
  "landing-page-assinaturas-mp",
  "ilustracoes",
  "marujinho",
]

const SIZES: Record<string, string> = {
  "dashboard-cbp-mp":            "(max-width: 768px) 100vw, 60vw",
  "sofia-karaoke-club":          "(max-width: 768px) 100vw, 60vw",
  "redesign-wallet-connect-mp":  "(max-width: 768px) 100vw, 40vw",
}

const AREA: Record<string, string> = {
  "redesign-wallet-connect-mp":  "wallet",
  "armazem-box-18":              "novop",
  "red-bull-rabiscada":          "colab",
  "dashboard-cbp-mp":            "dashboard",
  "colab":                       "cucko",
  "tired-workers-social-club":   "tired",
  "chocolate-box-18":            "choc",
  "sofia-karaoke-club":          "sofia",
  "novo-poder":                  "armazem",
  "landing-page-assinaturas-mp": "land",
  "cucko":                       "redbull",
  "ilustracoes":                 "ilustr",
  "marujinho":                   "maruj",
}

const TEMPLATE = `
  "wallet  wallet  wallet  wallet   armazem  armazem  armazem  armazem   redbull  redbull  redbull  redbull"
  "wallet  wallet  wallet  wallet   dashboard dashboard dashboard dashboard dashboard dashboard dashboard dashboard"
  "colab   colab   colab   colab    dashboard dashboard dashboard dashboard dashboard dashboard dashboard dashboard"
  "cucko   cucko   cucko   cucko    novop    novop    novop    novop     tired    tired    tired    tired"
  "sofia   sofia   sofia   sofia    sofia    sofia    sofia    sofia     tired    tired    tired    tired"
  "sofia   sofia   sofia   sofia    sofia    sofia    sofia    sofia     choc     choc     choc     choc"
  "land    land    land    land     ilustr   ilustr   ilustr   ilustr    maruj    maruj    maruj    maruj"
`

const C = (px: number) => `calc((100vw - 408px) * ${(px / 1054).toFixed(4)})`
const ROWS = [C(220), C(150), C(240), C(220), C(150), C(240), C(240)].join(" ")

// ── shared sidebar content ──────────────────────────────────────────────────

function SidebarContent({
  active,
  toggle,
  onFilterClick,
}: {
  active: ProjectCategory | "all"
  toggle: (v: ProjectCategory | "all") => void
  onFilterClick?: () => void
}) {
  const navCategories = categories.filter((c) => c.value !== "all")
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <>
      <nav className="flex flex-col gap-2">
        {navCategories.map((cat) => {
          const isInactive = active !== "all" && active !== cat.value
          const isHovered  = hovered === cat.value
          const opacity    = isInactive ? 0.25 : isHovered ? 0.65 : 1
          return (
          <button
            key={cat.value}
            onClick={() => { toggle(cat.value); onFilterClick?.() }}
            onMouseEnter={() => setHovered(cat.value)}
            onMouseLeave={() => setHovered(null)}
            className="text-left flex items-center gap-1.5"
            style={{
              fontSize: "14px",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              opacity,
              transition: "opacity 150ms ease",
              cursor: "pointer",
            }}
          >
            {cat.label}
            <span
              aria-hidden="true"
              style={{
                fontSize: "14px",
                lineHeight: 1,
                opacity: active === cat.value ? 1 : 0,
                transform: active === cat.value ? "translateX(0) scale(1)" : "translateX(-4px) scale(0.6)",
                transition: "opacity 180ms ease, transform 180ms ease",
                position: "relative",
                top: "-1px",
              }}
            >
              ×
            </span>
          </button>
          )
        })}
      </nav>

      <div className="flex-1" />

      <nav className="flex flex-col gap-2 mb-6">
        <a href="/about" className="sidebar-link underline underline-offset-2"
          style={{ fontSize: "14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          About
        </a>
        <a href="/archive" className="sidebar-link underline underline-offset-2"
          style={{ fontSize: "14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          Archive
        </a>
      </nav>

      <p style={{ fontSize: "14px", letterSpacing: "0.01em", fontWeight: "700" }}>
        SÃO PAULO 🇧🇷, 2026
      </p>
    </>
  )
}

// ── page ────────────────────────────────────────────────────────────────────

export default function Home() {
  const [active, setActive]     = useState<ProjectCategory | "all">("all")
  const [menuOpen, setMenuOpen] = useState(false)
  const [tooltip, setTooltip]   = useState<{ project: Project } | null>(null)
  const [pos, setPos]           = useState({ x: 0, y: 0 })
  const lastProject             = useRef<Project>(projects[0])
  const [hoveredFilter, setHoveredFilter] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setTooltip(null)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active)

  const mobileFiltered = [...filtered].sort(
    (a, b) => MOBILE_ORDER.indexOf(a.slug) - MOBILE_ORDER.indexOf(b.slug)
  )

  function toggle(val: ProjectCategory | "all") {
    setActive((prev) => (prev === val ? "all" : val))
  }

  function handleMouseMove(project: Project, e: React.MouseEvent) {
    setPos({ x: e.clientX, y: e.clientY })
    lastProject.current = project
    setTooltip({ project })
  }

  function handleMouseLeave() {
    setTooltip(null)
  }

  return (
    <div style={{ background: "var(--bg)" }}>

      {/* ── MOBILE ── */}
      <div className="md:hidden">

        {/* Header fixo */}
        <header
          className="flex items-center justify-between px-6 py-6 sticky top-0 z-50"
          style={{ background: "var(--bg)" }}
        >
          <LogoAnimation width={180} />

          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            style={{ cursor: "pointer", padding: "4px", lineHeight: 0 }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {menuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7"  x2="20" y2="7"  />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </header>

        {/* Drawer */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 40,
            overflow: "hidden",
            maxHeight: menuOpen ? "400px" : "0",
            transition: "max-height 300ms ease",
            background: "rgba(237, 236, 232, 0.82)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div
            className="flex flex-col px-5 pb-8"
            style={{ gap: "10px", paddingTop: "96px" }}
          >
            <SidebarContent
              active={active}
              toggle={toggle}
              onFilterClick={() => setMenuOpen(false)}
            />
          </div>
        </div>

        {/* Projetos — coluna única */}
        <div className="flex flex-col px-3 pb-8" style={{ gap: "10px" }}>
          {mobileFiltered.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              style={{
                position: "relative",
                display: "block",
                overflow: "hidden",
                borderRadius: "10px",
                aspectRatio: "3/2",
              }}
            >
              <Image
                src={project.cover}
                alt={project.title}
                fill
                sizes="100vw"
                style={{ objectFit: "cover", transform: `scale(${project.coverScale ?? 1})` }}
              />
              {project.coverOverlay && (
                <>
                  <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)", pointerEvents: "none" }} />
                  <img
                    src={project.coverOverlay}
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: project.coverOverlayWidth ?? "88%",
                      height: "auto",
                      pointerEvents: "none",
                    }}
                  />
                </>
              )}
            </a>
          ))}
        </div>
      </div>

      {/* ── DESKTOP ── */}
      <div className="hidden md:flex min-h-screen">

        {/* Sidebar */}
        <aside
          className="w-96 shrink-0 flex flex-col pl-3 pt-3 pb-3 pr-6 overflow-hidden"
          style={{ position: "sticky", top: 0, height: "100vh" }}
        >
          <div className="mb-5" style={{ marginLeft: "-6px" }}>
            <LogoAnimation />
          </div>
          <SidebarContent active={active} toggle={toggle} />
        </aside>

        {/* Grid */}
        <main className="flex-1 p-3">
          {active === "all" ? (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gridTemplateRows: ROWS,
                gridTemplateAreas: TEMPLATE,
                gap: "12px",
              }}
            >
              {projects.map((project) => {
                const area = AREA[project.slug]
                if (!area) return null
                const hovered = tooltip?.project.slug === project.slug
                return (
                  <a
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    onMouseMove={(e) => handleMouseMove(project, e)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      gridArea: area,
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "12px",
                      display: "block",
                    }}
                  >
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      sizes={SIZES[project.slug] ?? "(max-width: 768px) 100vw, 30vw"}
                      quality={90}
                      unoptimized={project.cover.endsWith(".gif")}
                      style={{
                        objectFit: "cover",
                        transform: `scale(${(project.coverScale ?? 1) * (hovered ? 1.03 : 1)})`,
                        transition: "transform 300ms ease-out",
                      }}
                    />
                    {project.coverOverlay && (
                      <>
                        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)", pointerEvents: "none" }} />
                        <img
                          src={project.coverOverlay}
                          alt=""
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: `translate(-50%, -50%) scale(${hovered ? 1.03 : 1})`,
                            width: project.coverOverlayWidth ?? "88%",
                            height: "auto",
                            pointerEvents: "none",
                            transition: "transform 300ms ease-out",
                          }}
                        />
                      </>
                    )}
                  </a>
                )
              })}
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
              }}
            >
              {filtered.map((project) => {
                const hovered = tooltip?.project.slug === project.slug
                return (
                  <a
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    onMouseMove={(e) => handleMouseMove(project, e)}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      position: "relative",
                      overflow: "hidden",
                      borderRadius: "12px",
                      display: "block",
                      aspectRatio: "3/2",
                    }}
                  >
                    <Image
                      src={project.cover}
                      alt={project.title}
                      fill
                      sizes="50vw"
                      style={{
                        objectFit: "cover",
                        transform: `scale(${(project.coverScale ?? 1) * (hovered ? 1.03 : 1)})`,
                        transition: "transform 300ms ease-out",
                      }}
                    />
                    {project.coverOverlay && (
                      <>
                        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)", pointerEvents: "none" }} />
                        <img
                          src={project.coverOverlay}
                          alt=""
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: `translate(-50%, -50%) scale(${hovered ? 1.03 : 1})`,
                            width: project.coverOverlayWidth ?? "88%",
                            height: "auto",
                            pointerEvents: "none",
                            transition: "transform 300ms ease-out",
                          }}
                        />
                      </>
                    )}
                  </a>
                )
              })}
            </div>
          )}
        </main>

        {/* Tooltip seguindo o mouse (desktop only) */}
        <div
          style={{
            position: "fixed",
            top: pos.y,
            left: pos.x + 16,
            background: "#1b1b1b",
            borderRadius: "12px",
            padding: "8px 12px",
            pointerEvents: "none",
            zIndex: 50,
            opacity: tooltip ? 1 : 0,
            transform: "translateY(-50%)",
            transition: "opacity 200ms ease, top 80ms ease-out, left 80ms ease-out",
            minWidth: "110px",
          }}
        >
          <p style={{ color: "#ffffff", fontSize: "10px", fontWeight: "600", marginBottom: "2px", whiteSpace: "nowrap" }}>
            {lastProject.current.title}
          </p>
          <p style={{ color: "#888888", fontSize: "9px", marginBottom: "1px" }}>
            {CATEGORY_LABEL[lastProject.current.category]}
          </p>
          <p style={{ color: "#888888", fontSize: "9px" }}>
            {lastProject.current.year}
          </p>

        </div>

      </div>

    </div>
  )
}
