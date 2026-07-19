import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type BadgeVariant =
  | "default"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "engineering";

type BadgeSize =
  | "sm"
  | "md";

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Semantic badge appearance.
   */
  variant?: BadgeVariant;

  /**
   * Semantic badge size.
   */
  size?: BadgeSize;

  children: ReactNode;
}

const SIZE: Record<BadgeSize, CSSProperties> = {
  sm: {
    minHeight: "1.5rem",
    paddingInline: theme.spacing.scale[2],
    paddingBlock: theme.spacing.scale[1],

    fontSize: theme.typography.label.fontSize,
  },

  md: {
    minHeight: "1.875rem",
    paddingInline: theme.spacing.scale[3],
    paddingBlock: theme.spacing.scale[2],

    fontSize: theme.typography.caption.fontSize,
  },
};

const VARIANT: Record<BadgeVariant, CSSProperties> = {
  default: {
    background: theme.colors.surface.secondary,
    color: theme.colors.text.secondary,
    border: `1px solid ${theme.colors.border.subtle}`,
  },

  accent: {
    background: theme.colors.accent.primary,
    color: theme.colors.accent.contrast,
    border: "none",
  },

  success: {
    background: theme.colors.status.success,
    color: theme.colors.text.primary,
    border: "none",
  },

  warning: {
    background: theme.colors.status.warning,
    color: theme.colors.text.inverse,
    border: "none",
  },

  danger: {
    background: theme.colors.status.danger,
    color: theme.colors.text.primary,
    border: "none",
  },

  engineering: {
    background: theme.colors.transparency.subtle,
    color: theme.colors.engineering.titanium,
    border: `1px solid ${theme.colors.engineering.blueprint}`,
  },
};

/**
 * Badge communicates engineering metadata.
 *
 * It is intentionally compact and presentation-only.
 * Business meaning belongs to the consuming component.
 */
export function Badge({
  variant = "default",
  size = "sm",
  className,
  style,
  children,
  ...props
}: BadgeProps) {
  const badgeStyle: CSSProperties = {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    gap: theme.spacing.scale[1],

    borderRadius: `${theme.radius.full}px`,

    whiteSpace: "nowrap",

    userSelect: "none",

    fontFamily: theme.typography.fontFamily.sans,

    fontWeight: theme.typography.weight.medium,

    lineHeight: 1,

    letterSpacing: theme.typography.tracking.wide,

    textTransform: "uppercase",

    ...SIZE[size],

    ...VARIANT[variant],

    ...style,
  };

  return (
    <span
      className={cn(className)}
      style={badgeStyle}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;