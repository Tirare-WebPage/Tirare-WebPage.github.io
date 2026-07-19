import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type CardVariant =
  | "default"
  | "surface"
  | "elevated"
  | "outlined"
  | "transparent";

type CardPadding =
  | "none"
  | "sm"
  | "md"
  | "lg";

export interface CardProps
  extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;

  padding?: CardPadding;

  children: ReactNode;
}

const PADDING: Record<CardPadding, string> = {
  none: "0",

  sm: "1rem",

  md: "1.5rem",

  lg: "2rem",
};

const VARIANTS: Record<
  CardVariant,
  CSSProperties
> = {
  default: {
    background:
      theme.colors.surface.primary,

    border: `1px solid ${theme.colors.border.subtle}`,
  },

  surface: {
    background:
      theme.colors.surface.secondary,

    border: `1px solid ${theme.colors.border.subtle}`,
  },

  elevated: {
    background:
      theme.colors.surface.elevated,

    border: `1px solid ${theme.colors.border.default}`,

    boxShadow:
      "0 12px 32px rgba(0,0,0,.16)",
  },

  outlined: {
    background: "transparent",

    border: `1px solid ${theme.colors.border.default}`,
  },

  transparent: {
    background: "transparent",

    border: "none",
  },
};

export function Card({
  variant = "default",

  padding = "md",

  className,

  style,

  children,

  ...props
}: CardProps) {
  const cardStyle: CSSProperties = {
    width: "100%",

    display: "flex",

    flexDirection: "column",

    borderRadius: "16px",

    padding: PADDING[padding],

    overflow: "hidden",

    transition:
      "border-color 200ms ease, box-shadow 200ms ease",

    ...VARIANTS[variant],

    ...style,
  };

  return (
    <div
      className={cn(className)}
      style={cardStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;