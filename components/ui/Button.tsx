import type {
  ButtonHTMLAttributes,
  CSSProperties,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline";

type ButtonSize =
  | "sm"
  | "md"
  | "lg";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Semantic visual appearance.
   */
  variant?: ButtonVariant;

  /**
   * Semantic size.
   */
  size?: ButtonSize;

  /**
   * Expand to fill available width.
   */
  fullWidth?: boolean;

  children: ReactNode;
}

const SIZE: Record<ButtonSize, CSSProperties> = {
  sm: {
    minHeight: "2.5rem",
    paddingInline: theme.spacing.scale[4],
    paddingBlock: theme.spacing.scale[2],
    fontSize: theme.typography.body.sm.fontSize,
  },

  md: {
    minHeight: "3rem",
    paddingInline: theme.spacing.scale[5],
    paddingBlock: theme.spacing.scale[3],
    fontSize: theme.typography.body.md.fontSize,
  },

  lg: {
    minHeight: "3.5rem",
    paddingInline: theme.spacing.scale[6],
    paddingBlock: theme.spacing.scale[3],
    fontSize: theme.typography.body.lg.fontSize,
  },
};

const VARIANT: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: theme.colors.accent.primary,
    color: theme.colors.accent.contrast,
    border: "none",
  },

  secondary: {
    background: theme.colors.surface.secondary,
    color: theme.colors.text.primary,
    border: `1px solid ${theme.colors.border.default}`,
  },

  ghost: {
    background: "transparent",
    color: theme.colors.text.primary,
    border: "none",
  },

  outline: {
    background: "transparent",
    color: theme.colors.text.primary,
    border: `1px solid ${theme.colors.border.strong}`,
  },
};

/**
 * Button is the canonical interactive action component.
 *
 * It intentionally contains no business logic.
 * Navigation, forms and dialogs determine behaviour.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  style,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const buttonStyle: CSSProperties = {
    display: "inline-flex",

    alignItems: "center",

    justifyContent: "center",

    gap: theme.spacing.scale[2],

    width: fullWidth ? "100%" : "auto",

    borderRadius: `${theme.radius.md}px`,

    cursor: disabled ? "not-allowed" : "pointer",

    opacity: disabled ? 0.6 : 1,

    fontFamily: theme.typography.fontFamily.sans,

    fontWeight: theme.typography.weight.medium,

    lineHeight: 1,

    transition: [
      `background ${theme.motion.duration.normal}ms ${theme.motion.easing.standard}`,
      `border-color ${theme.motion.duration.normal}ms ${theme.motion.easing.standard}`,
      `color ${theme.motion.duration.normal}ms ${theme.motion.easing.standard}`,
      `transform ${theme.motion.duration.fast}ms ${theme.motion.easing.standard}`,
    ].join(", "),

    ...SIZE[size],

    ...VARIANT[variant],

    ...style,
  };

  return (
    <button
      className={cn(className)}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;