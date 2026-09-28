"use client"

import { useRef, useState } from "react"

const FRAMES = ["/logo-frames/1.svg", "/logo-frames/2.svg", "/logo-frames/3.svg", "/logo-frames/4.svg", "/logo-frames/5.svg", "/logo-frames/6.svg"]
const INTERVAL_MS = 200

export default function LogoAnimation({ width = 260 }: { width?: number }) {
  const [src, setSrc] = useState("/logo.svg")
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const frameRef = useRef(0)

  function startAnimation() {
    frameRef.current = 0
    setSrc(FRAMES[0])
    intervalRef.current = setInterval(() => {
      frameRef.current = (frameRef.current + 1) % FRAMES.length
      setSrc(FRAMES[frameRef.current])
    }, INTERVAL_MS)
  }

  function stopAnimation() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    setSrc("/logo.svg")
  }

  return (
    <div
      onMouseEnter={startAnimation}
      onMouseLeave={stopAnimation}
      style={{ cursor: "pointer", display: "inline-block" }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="MTHSBG"
        style={{ width, height: "auto", display: "block" }}
      />
    </div>
  )
}
