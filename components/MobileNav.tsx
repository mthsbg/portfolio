"use client"

import { useState } from "react"
import LogoAnimation from "@/components/LogoAnimation"

export default function MobileNav({
  links,
}: {
  links: { href: string; label: string }[]
}) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header
        className="md:hidden flex items-center justify-between px-6 py-6 sticky top-0 z-50"
        style={{ background: "var(--bg)" }}
      >
        <a href="/">
          <LogoAnimation width={180} />
        </a>

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
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </header>

      <div
        className="md:hidden"
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
        <div className="flex flex-col px-5 pb-8" style={{ gap: "10px", paddingTop: "96px" }}>
          <nav className="flex flex-col gap-2 mb-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="sidebar-link underline underline-offset-2"
                style={{ fontSize: "14px", letterSpacing: "0.04em", textTransform: "uppercase" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p style={{ fontSize: "14px", letterSpacing: "0.01em", fontWeight: "700" }}>
            SÃO PAULO 🇧🇷, 2026
          </p>
        </div>
      </div>
    </>
  )
}
