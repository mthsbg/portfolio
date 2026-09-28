import { notFound } from "next/navigation"
import Image from "next/image"
import LogoAnimation from "@/components/LogoAnimation"
import { projects } from "@/data/projects"
import { projectContent } from "@/data/project-content"

const CATEGORY_LABEL: Record<string, string> = {
  product:  "Product design",
  branding: "Branding",
  graphic:  "Graphic design",
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  const content = projectContent.find((c) => c.slug === slug)

  const index = projects.findIndex((p) => p.slug === slug)
  const prevProject = projects[(index - 1 + projects.length) % projects.length]
  const nextProject = projects[(index + 1) % projects.length]

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

      {/* ── Content ── */}
      <main className="flex-1 overflow-y-auto">

        {/* Hero — cover image full width */}
        <div style={{ padding: "12px 12px 0" }}>
          <div style={{ position: "relative", borderRadius: "12px", overflow: "hidden" }}>
            <Image
              src={project.coverDetail ?? project.cover}
              alt={project.title}
              width={0}
              height={0}
              sizes="(max-width: 1280px) 80vw, 70vw"
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
              unoptimized={(project.coverDetail ?? project.cover).endsWith(".gif")}
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
          </div>
        </div>

        {/* Project info */}
        <div style={{ padding: "48px 48px 64px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              columnGap: "40px",
              rowGap: "28px",
              alignItems: "start",
              maxWidth: "900px",
            }}
          >
            {/* Title — spans full width */}
            <h1
              style={{
                gridColumn: "1 / -1",
                fontSize: "28px",
                fontWeight: "500",
                lineHeight: 1.1,
                margin: 0,
                paddingBottom: "8px",
              }}
            >
              {project.title}
            </h1>

            {/* Category */}
            <span style={{ fontSize: "12px", color: "#666", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Category
            </span>
            <span style={{ fontSize: "14px" }}>{CATEGORY_LABEL[project.category]}</span>

            {/* Year */}
            <span style={{ fontSize: "12px", color: "#666", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Year
            </span>
            <span style={{ fontSize: "14px" }}>{project.year}</span>

            {/* Team */}
            {content?.team && content.team.length > 0 && (
              <>
                <span style={{ fontSize: "12px", color: "#666", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  Team
                </span>
                <span style={{ fontSize: "14px" }}>{content.team.join(", ")}</span>
              </>
            )}

            {/* Description */}
            {content?.description && (
              <>
                <span style={{ fontSize: "12px", color: "#666", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  About
                </span>
                <p style={{ fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                  {content.description}
                </p>
              </>
            )}

            {/* Role / what I did */}
            {content?.role && (
              <>
                <span style={{ fontSize: "12px", color: "#666", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                  What I did
                </span>
                <p style={{ fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                  {content.role}
                </p>
              </>
            )}
          </div>
        </div>

        {/* Gallery */}
        {content?.gallery && content.gallery.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "12px 12px 0" }}>
            {content.gallery.map((row, i) => {
              if (row.layout === "full") {
                const isVideo = row.src.endsWith(".mov") || row.src.endsWith(".mp4")
                return (
                  <div
                    key={i}
                    style={{
                      position: "relative",
                      borderRadius: "12px",
                      overflow: "hidden",
                      ...(row.aspectRatio ? { aspectRatio: row.aspectRatio, background: "#000000" } : {}),
                    }}
                  >
                    {isVideo ? (
                      <video
                        src={row.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={
                          row.aspectRatio
                            ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }
                            : { width: "100%", height: "auto", display: "block" }
                        }
                      />
                    ) : (
                      <Image
                        src={row.src}
                        alt={row.alt ?? project.title}
                        fill={!!row.aspectRatio}
                        width={row.aspectRatio ? undefined : 0}
                        height={row.aspectRatio ? undefined : 0}
                        sizes="80vw"
                        quality={90}
                        style={
                          row.aspectRatio
                            ? { objectFit: "contain" }
                            : { width: "100%", height: "auto", display: "block" }
                        }
                        unoptimized={row.src.endsWith(".gif")}
                      />
                    )}
                    {row.overlay && (
                      <div
                        style={{
                          position: "absolute",
                          top: row.overlay.top,
                          left: row.overlay.left,
                          width: row.overlay.width,
                          height: row.overlay.height,
                          borderRadius: "16px",
                          overflow: "hidden",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={row.overlay.src}
                          alt=""
                          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                        />
                      </div>
                    )}
                  </div>
                )
              }
              if (row.layout === "grid") {
                return (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                    {row.images.map((src, j) => (
                      <div key={j} style={{ position: "relative", aspectRatio: "1/1", borderRadius: "12px", overflow: "hidden" }}>
                        <Image
                          src={src}
                          alt={project.title}
                          fill
                          sizes="25vw"
                          quality={90}
                          style={{ objectFit: "cover" }}
                          unoptimized={src.endsWith(".gif")}
                        />
                      </div>
                    ))}
                  </div>
                )
              }
              return (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ position: "relative", aspectRatio: row.aspectRatio ?? "1/1", borderRadius: "12px", overflow: "hidden" }}>
                    <Image
                      src={row.left}
                      alt={row.altLeft ?? project.title}
                      fill
                      sizes="45vw"
                      quality={90}
                      style={{ objectFit: "cover" }}
                      unoptimized={row.left.endsWith(".gif")}
                    />
                  </div>
                  <div style={{ position: "relative", aspectRatio: row.aspectRatio ?? "1/1", borderRadius: "12px", overflow: "hidden" }}>
                    <Image
                      src={row.right}
                      alt={row.altRight ?? project.title}
                      fill
                      sizes="45vw"
                      quality={90}
                      style={{ objectFit: "cover" }}
                      unoptimized={row.right.endsWith(".gif")}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Prev / Next project navigation */}
        <div style={{ display: "flex", justifyContent: "space-between", padding: "12px" }}>
          <a href={`/projects/${prevProject.slug}`} className="sidebar-link underline underline-offset-2"
            style={{ fontSize: "14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            ← Previous project
          </a>
          <a href={`/projects/${nextProject.slug}`} className="sidebar-link underline underline-offset-2"
            style={{ fontSize: "14px", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Next project →
          </a>
        </div>

      </main>
    </div>
  )
}
