"use client";

import type { CSSProperties, HTMLAttributes } from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface HeroBackgroundProps
  extends HTMLAttributes<HTMLDivElement> {}

/**
 * HeroBackground provides the atmospheric foundation
 * of the landing page.
 *
 * It intentionally contains no content.
 *
 * Responsibilities:
 * - Blueprint grid
 * - Engineering radial illumination
 * - Ambient gradient
 * - Noise overlay
 *
 * It never owns text, CAD models or interactions.
 */
export function HeroBackground({
  className,
  style,
  ...props
}: HeroBackgroundProps) {
  const wrapperStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    pointerEvents: "none",
    zIndex: theme.zIndex.background,
    background: theme.colors.background.primary,
    ...style,
  };

  return (
    <div
      className={cn(className)}
      style={wrapperStyle}
      aria-hidden="true"
      {...props}
    >
      {/* Ambient radial illumination */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              circle at 70% 30%,
              rgba(79,142,247,0.12),
              transparent 55%
            ),
            radial-gradient(
              circle at 25% 80%,
              rgba(61,111,182,0.08),
              transparent 50%
            )
          `,
        }}
      />

      {/* Engineering blueprint grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.05) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Fine subdivision grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.04) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "16px 16px",
        }}
      />

      {/* Soft vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              circle,
              transparent 45%,
              rgba(0,0,0,0.55)
            )
          `,
        }}
      />

      {/* Subtle top fade */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0.25),
              transparent 35%
            )
          `,
        }}
      />

      {/* Noise layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage: `
            radial-gradient(circle, white 1px, transparent 1px)
          `,
          backgroundSize: "6px 6px",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}

export default HeroBackground;