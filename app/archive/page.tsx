"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import LogoAnimation from "@/components/LogoAnimation"
import { archiveItems } from "@/data/archive"
import type { ArchiveItem } from "@/data/archive"
import MobileNav from "@/components/MobileNav"

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {direction === "left" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
    </svg>
  )
}

// Ícone de "múltiplas imagens", no estilo do indicador de carrossel do Instagram.
function MultiImageIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.6))" }}
    >
      <rect x="2.5" y="6.5" width="15" height="15" rx="3" fill="#ffffff" />
      <path
        d="M7.5 6V4.5C7.5 3.11929 8.61929 2 10 2H19.5C20.8807 2 22 3.11929 22 4.5V14C22 15.3807 20.8807 16.5 19.5 16.5H18"
        stroke="#ffffff"
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  )
}

function ArchiveTile({
  item,
  onEnter,
  onMove,
  onLeave,
  onOpen,
}: {
  item: ArchiveItem
  onEnter: (title: string) => void
  onMove: (e: React.MouseEvent) => void
  onLeave: () => void
  onOpen: (item: ArchiveItem, index: number) => void
}) {
  const [index, setIndex] = useState(0)
  const isCarousel = item.type === "carousel"
  const image = isCarousel ? item.images[index] : item.image
  const total = isCarousel ? item.images.length : 1

  function go(delta: number, e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (!isCarousel) return
    setIndex((i) => (i + delta + total) % total)
  }

  return (
    <div
      onMouseEnter={() => onEnter(item.title)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(item, index)}
      className="archive-tile"
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        aspectRatio: "1/1",
        background: "#00000008",
        cursor: "pointer",
      }}
    >
      <Image
        src={encodeURI(image.src)}
        alt={item.title}
        fill
        sizes="(max-width: 768px) 50vw, 25vw"
        quality={90}
        style={{ objectFit: "cover" }}
      />

      {isCarousel && total > 1 && (
        <>
          <div style={{ position: "absolute", top: "8px", right: "8px", pointerEvents: "none" }}>
            <MultiImageIcon />
          </div>
          <button
            aria-label="Imagem anterior"
            onClick={(e) => go(-1, e)}
            className="archive-arrow"
            style={{ left: "8px" }}
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            aria-label="Próxima imagem"
            onClick={(e) => go(1, e)}
            className="archive-arrow"
            style={{ right: "8px" }}
          >
            <ArrowIcon direction="right" />
          </button>
        </>
      )}
    </div>
  )
}

function ArchiveModal({
  item,
  initialIndex,
  onClose,
}: {
  item: ArchiveItem
  initialIndex: number
  onClose: () => void
}) {
  const [index, setIndex] = useState(initialIndex)
  const [loaded, setLoaded] = useState(false)
  const isCarousel = item.type === "carousel"
  const image = isCarousel ? item.images[index] : item.image
  const total = isCarousel ? item.images.length : 1

  useEffect(() => {
    setLoaded(false)
  }, [image.src])

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && isCarousel) setIndex((i) => (i - 1 + total) % total)
      if (e.key === "ArrowRight" && isCarousel) setIndex((i) => (i + 1) % total)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isCarousel, total, onClose])

  function go(delta: number, e: React.MouseEvent) {
    e.stopPropagation()
    setIndex((i) => (i + delta + total) % total)
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.85)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        aria-label="Fechar"
        onClick={onClose}
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          width: "40px",
          height: "40px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.1)",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>

      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}
      >
        {!loaded && <div className="archive-modal-spinner" />}
        <Image
          key={image.src}
          src={encodeURI(image.src)}
          alt={item.title}
          width={image.width}
          height={image.height}
          quality={90}
          sizes="90vw"
          priority
          onLoad={() => setLoaded(true)}
          style={{
            width: "auto",
            height: "auto",
            maxWidth: "90vw",
            maxHeight: "90vh",
            borderRadius: "4px",
            opacity: loaded ? 1 : 0,
            transition: "opacity 150ms ease",
          }}
        />

        {isCarousel && total > 1 && (
          <>
            <button
              aria-label="Imagem anterior"
              onClick={(e) => go(-1, e)}
              className="archive-arrow archive-arrow-modal archive-arrow-modal-left"
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              aria-label="Próxima imagem"
              onClick={(e) => go(1, e)}
              className="archive-arrow archive-arrow-modal archive-arrow-modal-right"
            >
              <ArrowIcon direction="right" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default function Archive() {
  const [tooltip, setTooltip] = useState<string | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [modal, setModal] = useState<{ item: ArchiveItem; index: number } | null>(null)

  function handleMove(e: React.MouseEvent) {
    setPos({ x: e.clientX, y: e.clientY })
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen" style={{ background: "var(--bg)" }}>

      <MobileNav links={[
        { href: "/", label: "Projects" },
        { href: "/about", label: "About" },
      ]} />

      {/* ── Sidebar ── */}
      <aside
        className="hidden md:flex w-96 shrink-0 md:flex-col pl-3 pt-3 pb-3 pr-6"
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
          <a href="/about" className="sidebar-link underline underline-offset-2"
            style={{ fontSize: "14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            About
          </a>
        </nav>

        <p style={{ fontSize: "14px", letterSpacing: "0.01em", fontWeight: "700" }}>
          SÃO PAULO 🇧🇷, 2026
        </p>
      </aside>

      {/* ── Main ── */}
      <main className="flex-1 p-3">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {archiveItems.map((item, i) => (
            <ArchiveTile
              key={i}
              item={item}
              onEnter={setTooltip}
              onMove={handleMove}
              onLeave={() => setTooltip(null)}
              onOpen={(item, index) => setModal({ item, index })}
            />
          ))}
        </div>
      </main>

      {/* Tooltip seguindo o mouse */}
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
          opacity: tooltip && !modal ? 1 : 0,
          transform: "translateY(-50%)",
          transition: "opacity 200ms ease, top 80ms ease-out, left 80ms ease-out",
          minWidth: "110px",
        }}
      >
        <p style={{ color: "#ffffff", fontSize: "10px", fontWeight: "600", whiteSpace: "nowrap" }}>
          {tooltip}
        </p>
      </div>

      {modal && (
        <ArchiveModal
          item={modal.item}
          initialIndex={modal.index}
          onClose={() => setModal(null)}
        />
      )}

    </div>
  )
}
