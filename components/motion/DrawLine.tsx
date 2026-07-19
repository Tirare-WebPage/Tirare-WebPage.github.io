"use client";

import {
  type CSSProperties,
  type SVGAttributes,
  useEffect,
  useRef,
  useState,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface DrawLineProps
  extends SVGAttributes<SVGSVGElement> {
  /**
   * SVG path definition.
   */
  path: string;

  /**
   * Stroke colour.
   */
  color?: string;

  /**
   * Stroke width.
   */
  strokeWidth?: number;

  /**
   * Animation duration.
   */
  duration?: number;

  /**
   * Animation delay.
   */
  delay?: number;

  /**
   * Automatically begin drawing.
   */
  autoplay?: boolean;
}

/**
 * DrawLine progressively reveals an SVG path.
 *
 * It is intended for engineering diagrams,
 * CAD callouts, timelines and blueprint
 * illustrations.
 */
export function DrawLine({
  path,
  color = theme.colors.engineering.blueprint,
  strokeWidth = 2,
  duration = 1200,
  delay = 0,
  autoplay = true,
  className,
  style,
  ...props
}: DrawLineProps) {
  const pathRef = useRef<SVGPathElement>(null);

  const [length, setLength] = useState(0);

  useEffect(() => {
    if (!pathRef.current) return;

    const totalLength = pathRef.current.getTotalLength();

    setLength(totalLength);
  }, [path]);

  const svgStyle: CSSProperties = {
    overflow: "visible",
    ...style,
  };

  return (
    <svg
      className={cn(className)}
      style={svgStyle}
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        ref={pathRef}
        d={path}
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={length}
        strokeDashoffset={autoplay ? length : 0}
        style={{
          animation: autoplay
            ? `tirare-draw-line ${duration}ms ${theme.motion.easing.entrance} ${delay}ms forwards`
            : undefined,
        }}
      />

      <style>
        {`
          @keyframes tirare-draw-line {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}
      </style>
    </svg>
  );
}

export default DrawLine;