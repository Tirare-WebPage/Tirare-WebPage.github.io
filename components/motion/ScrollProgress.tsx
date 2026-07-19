"use client";

import {
  CSSProperties,
  HTMLAttributes,
  useEffect,
  useState,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface ScrollProgressProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Height of the indicator.
   */
  height?: number;

  /**
   * Progress bar colour.
   */
  color?: string;

  /**
   * Fixed offset from the top.
   *
   * Useful when positioned below a sticky navbar.
   */
  offset?: number;
}

/**
 * ScrollProgress visualises page reading progress.
 *
 * It intentionally owns only scroll measurement and
 * rendering. It does not know about page structure
 * or navigation.
 */
export function ScrollProgress({
  height = 3,
  color = theme.colors.accent.primary,
  offset = 0,
  className,
  style,
  ...props
}: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      setProgress(
        Math.min(
          Math.max(scrollTop / scrollHeight, 0),
          1
        )
      );
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );

      window.removeEventListener(
        "resize",
        updateProgress
      );
    };
  }, []);

  const wrapperStyle: CSSProperties = {
    position: "fixed",

    top: offset,

    left: 0,

    width: "100%",

    height,

    zIndex: theme.zIndex.navigation + 1,

    pointerEvents: "none",

    background: "transparent",

    ...style,
  };

  const barStyle: CSSProperties = {
    width: `${progress * 100}%`,

    height: "100%",

    background: color,

    transition: `width ${theme.motion.duration.fast}ms ${theme.motion.easing.standard}`,

    transformOrigin: "left center",

    boxShadow: `0 0 8px ${color}`,
  };

  return (
    <div
      className={cn(className)}
      style={wrapperStyle}
      aria-hidden="true"
      {...props}
    >
      <div style={barStyle} />
    </div>
  );
}

export default ScrollProgress;