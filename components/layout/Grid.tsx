import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type GridColumns =
  | 1
  | 2
  | 3
  | 4
  | 6
  | 12;

type GridGap =
  | "compact"
  | "default"
  | "comfortable"
  | "spacious";

type GridAlign =
  | "start"
  | "center"
  | "end"
  | "stretch";

export interface GridProps
  extends HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns;

  gap?: GridGap;

  align?: GridAlign;

  children: ReactNode;
}

const GAP: Record<GridGap, string> = {
  compact: "0.75rem",

  default: "1.25rem",

  comfortable: "2rem",

  spacious: "3rem",
};

export function Grid({
  columns = 2,

  gap = "default",

  align = "stretch",

  className,

  style,

  children,

  ...props
}: GridProps) {
  const gridStyle: CSSProperties = {
    display: "grid",

    width: "100%",

    gap: GAP[gap],

    alignItems: align,

    gridTemplateColumns:
      columns === 1
        ? "1fr"
        : columns === 2
        ? "repeat(auto-fit,minmax(420px,1fr))"
        : columns === 3
        ? "repeat(auto-fit,minmax(280px,1fr))"
        : columns === 4
        ? "repeat(auto-fit,minmax(240px,1fr))"
        : `repeat(${columns},minmax(0,1fr))`,

    ...style,
  };

  return (
    <div
      className={cn(className)}
      style={gridStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export default Grid;