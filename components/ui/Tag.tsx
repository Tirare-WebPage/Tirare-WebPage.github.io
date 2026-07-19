import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type TagVariant =
  | "default"
  | "accent"
  | "outline"
  | "muted";

type TagSize =
  | "sm"
  | "md";

export interface TagProps
  extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual appearance.
   */
  variant?: TagVariant;

  /**
   * Semantic size.
   */
  size?: TagSize;

  children: ReactNode;
}

const SIZE: Record<TagSize, CSSProperties> = {
  sm: {
    minHeight: "1.5rem",

    paddingInline: theme.spacing.scale[2],

    paddingBlock: theme.spacing.scale[1],

    fontSize: theme.typography.caption.fontSize,
  },

  md: {
    minHeight: "2rem",

    paddingInline: theme.spacing.scale[3],

    paddingBlock: theme.spacing.scale[2],

    fontSize: theme.typography.body.sm.fontSize,
  },
};

const VARIANT: Record<TagVariant, CSSProperties> = {
  default: {
    background: theme.colors.surface.secondary,

    color: theme.colors.text.secondary,

    border: `1px solid ${theme.colors.border.subtle}`,
  },

  accent: {
    background: theme.colors.transparency.subtle,

    color: theme.colors.accent.secondary,

    border: `1px solid ${theme.colors.accent.primary}`,
  },

  outline: {
    background: "transparent",

    color: theme.colors.text.secondary,

    border: `1px solid ${theme.colors.border.default}`,
  },

  muted: {
    background: "transparent",

    color: theme.colors.text.tertiary,

    border: `1px solid ${theme.colors.border.subtle}`,
  },
};

/**
 * Tag represents taxonomy rather than status.
 *
 * Examples:
 *
 * Hardware
 * Retrofit
 * Mobility
 * Manufacturing
 * Engineering
 *
 * Unlike Badge, Tag should never communicate workflow
 * state or validation.
 */
export function Tag({
  variant = "default",
  size = "sm",
  className,
  style,
  children,
  ...props
}: TagProps) {
  const tagStyle: CSSProperties = {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    whiteSpace: "nowrap",

    userSelect: "none",

    borderRadius: `${theme.radius.full}px`,

    fontFamily: theme.typography.fontFamily.sans,

    fontWeight: theme.typography.weight.medium,

    lineHeight: 1,

    letterSpacing: theme.typography.tracking.normal,

    transition: [
      `background ${theme.motion.duration.normal}ms ${theme.motion.easing.standard}`,
      `border-color ${theme.motion.duration.normal}ms ${theme.motion.easing.standard}`,
      `color ${theme.motion.duration.normal}ms ${theme.motion.easing.standard}`,
    ].join(", "),

    ...SIZE[size],

    ...VARIANT[variant],

    ...style,
  };

  return (
    <span
      className={cn(className)}
      style={tagStyle}
      {...props}
    >
      {children}
    </span>
  );
}

export default Tag;