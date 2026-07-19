"use client";

import {
  type HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface CounterProps
  extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Final value.
   */
  value: number;

  /**
   * Starting value.
   */
  start?: number;

  /**
   * Animation duration.
   */
  duration?: number;

  /**
   * Decimal precision.
   */
  decimals?: number;

  /**
   * Optional prefix.
   *
   * Examples:
   * ₹
   * $
   */
  prefix?: string;

  /**
   * Optional suffix.
   *
   * Examples:
   * +
   * %
   * km
   * ms
   */
  suffix?: string;

  /**
   * Automatically begin counting.
   */
  autoplay?: boolean;
}

/**
 * Counter animates numeric values.
 *
 * It intentionally owns only interpolation.
 * Formatting remains configurable through
 * prefixes, suffixes and decimal precision.
 */
export function Counter({
  value,
  start = 0,
  duration = 1200,
  decimals = 0,
  prefix = "",
  suffix = "",
  autoplay = true,
  className,
  ...props
}: CounterProps) {
  const [current, setCurrent] = useState(
    autoplay ? start : value
  );

  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!autoplay) {
      setCurrent(value);
      return;
    }

    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      // Ease-out cubic
      const eased =
        1 - Math.pow(1 - progress, 3);

      setCurrent(
        start + (value - start) * eased
      );

      if (progress < 1) {
        frame.current = requestAnimationFrame(
          animate
        );
      }
    };

    frame.current = requestAnimationFrame(
      animate
    );

    return () => {
      if (frame.current !== null) {
        cancelAnimationFrame(frame.current);
      }
    };
  }, [autoplay, duration, start, value]);

  return (
    <span
      className={cn(className)}
      style={{
        fontVariantNumeric: "tabular-nums",
        fontFeatureSettings: '"tnum"',
        transition: `color ${theme.motion.duration.fast}ms ${theme.motion.easing.standard}`,
      }}
      {...props}
    >
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default Counter;