"use client";

import type {
  CSSProperties,
  HTMLAttributes,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ScrollIndicatorDirection = "down" | "up";

export interface ScrollIndicatorProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Direction the indicator points.
   *
   * Defaults to downward.
   */
  direction?: ScrollIndicatorDirection;

  /**
   * Optional descriptive label.
   */
  label?: string;

  /**
   * Shows the animated guide line.
   */
  animated?: boolean;
}

/**
 * ScrollIndicator subtly communicates that additional
 * engineering content exists beyond the current viewport.
 *
 * It intentionally avoids decorative motion and instead
 * behaves like an instrument indicator.
 */
export function ScrollIndicator({
  direction = "down",
  label = "Scroll",
  animated = true,
  className,
  style,
  ...props
}: ScrollIndicatorProps) {
  const arrowRotation =
    direction === "down" ? "0deg" : "180deg";

  const wrapperStyle: CSSProperties = {
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing.stack.sm,

    color: theme.colors.text.tertiary,

    userSelect: "none",

    ...style,
  };

  return (
    <div
      className={cn(className)}
      style={wrapperStyle}
      aria-label={label}
      {...props}
    >
      <span
        style={{
          fontFamily: theme.typography.fontFamily.sans,
          fontSize: theme.typography.label.fontSize,
          fontWeight: theme.typography.label.fontWeight,
          letterSpacing: theme.typography.label.letterSpacing,
          textTransform: theme.typography.label.textTransform,
          color: theme.colors.text.tertiary,
        }}
      >
        {label}
      </span>

      <div
        style={{
          position: "relative",
          width: "1px",
          height: "3rem",
          background: theme.colors.border.default,
          overflow: "hidden",
        }}
      >
        {animated && (
          <span
            style={{
              position: "absolute",
              insetInline: 0,
              top: 0,
              height: "40%",
              background: theme.colors.accent.primary,
              animation:
                "tirare-scroll-indicator 1.8s infinite",
            }}
          />
        )}
      </div>

      <span
        aria-hidden
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",

          transform: `rotate(${arrowRotation})`,

          color: theme.colors.text.secondary,

          fontSize:
            theme.typography.body.lg.fontSize,

          lineHeight: 1,
        }}
      >
        ↓
      </span>

      <style jsx>{`
        @keyframes tirare-scroll-indicator {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          25% {
            opacity: 1;
          }

          75% {
            opacity: 1;
          }

          100% {
            transform: translateY(250%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default ScrollIndicator;