"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface RevealProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Content to reveal.
   */
  children: ReactNode;

  /**
   * Distance travelled before settling.
   */
  distance?: number;

  /**
   * Reveal direction.
   */
  direction?: "up" | "down" | "left" | "right";

  /**
   * Delay before animation begins.
   */
  delay?: number;

  /**
   * Animation duration.
   */
  duration?: number;

  /**
   * Reveal only once.
   */
  once?: boolean;

  /**
   * Intersection threshold.
   */
  threshold?: number;
}

/**
 * Reveal progressively introduces content
 * as it enters the viewport.
 *
 * It intentionally owns only visibility.
 * Sequencing, orchestration and choreography
 * belong to higher-level motion systems.
 */
export function Reveal({
  children,
  direction = "up",
  distance = 32,
  delay = 0,
  duration = theme.motion.duration.medium,
  threshold = 0.2,
  once = true,
  className,
  style,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);

          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [once, threshold]);

  const offset = (() => {
    switch (direction) {
      case "down":
        return `translateY(-${distance}px)`;

      case "left":
        return `translateX(${distance}px)`;

      case "right":
        return `translateX(-${distance}px)`;

      case "up":
      default:
        return `translateY(${distance}px)`;
    }
  })();

  const revealStyle: CSSProperties = {
    opacity: visible ? 1 : 0,

    transform: visible
      ? "translate3d(0,0,0)"
      : offset,

    transitionProperty:
      "opacity, transform",

    transitionDuration: `${duration}ms`,

    transitionDelay: `${delay}ms`,

    transitionTimingFunction:
      theme.motion.easing.entrance,

    willChange: "opacity, transform",

    ...style,
  };

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={revealStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export default Reveal;