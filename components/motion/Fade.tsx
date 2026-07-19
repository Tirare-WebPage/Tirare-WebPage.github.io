"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface FadeProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Child content.
   */
  children: ReactNode;

  /**
   * Controls visibility.
   */
  show?: boolean;

  /**
   * Animation duration in milliseconds.
   */
  duration?: number;

  /**
   * Delay before animation starts.
   */
  delay?: number;

  /**
   * Whether hidden content should still
   * occupy layout space.
   */
  keepMounted?: boolean;
}

/**
 * Fade provides a lightweight opacity transition.
 *
 * Unlike Reveal, this component performs no viewport
 * observation and instead responds directly to the
 * `show` prop.
 */
export function Fade({
  children,
  show = true,
  duration = theme.motion.duration.normal,
  delay = 0,
  keepMounted = true,
  className,
  style,
  ...props
}: FadeProps) {
  if (!keepMounted && !show) {
    return null;
  }

  const fadeStyle: CSSProperties = {
    opacity: show ? 1 : 0,

    transitionProperty: "opacity",

    transitionDuration: `${duration}ms`,

    transitionDelay: `${delay}ms`,

    transitionTimingFunction:
      theme.motion.easing.standard,

    pointerEvents: show ? "auto" : "none",

    ...(!show &&
      keepMounted && {
        visibility: "hidden",
      }),

    ...style,
  };

  return (
    <div
      className={cn(className)}
      style={fadeStyle}
      aria-hidden={!show}
      {...props}
    >
      {children}
    </div>
  );
}

export default Fade;