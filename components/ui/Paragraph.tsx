import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ParagraphSize =
  | "lg"
  | "md"
  | "sm";

type ParagraphColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | "disabled";

type ParagraphAlign =
  | "left"
  | "center"
  | "right";

export interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Semantic body size.
   */
  size?: ParagraphSize;

  /**
   * Semantic text color.
   */
  color?: ParagraphColor;

  /**
   * Text alignment.
   */
  align?: ParagraphAlign;

  children: ReactNode;
}

const SIZE_STYLES: Record<
  ParagraphSize,
  CSSProperties
> = {
  lg: theme.typography.body.lg,

  md: theme.typography.body.md,

  sm: theme.typography.body.sm,
};

const COLOR_STYLES: Record<
  ParagraphColor,
  CSSProperties["color"]
> = {
  primary: theme.colors.text.primary,

  secondary: theme.colors.text.secondary,

  tertiary: theme.colors.text.tertiary,

  disabled: theme.colors.text.disabled,
};

const TEXT_ALIGN: Record<
  ParagraphAlign,
  CSSProperties["textAlign"]
> = {
  left: "left",

  center: "center",

  right: "right",
};

/**
 * Paragraph provides semantic body typography.
 *
 * It intentionally owns only text presentation.
 * Layout, spacing and positioning belong to
 * higher-level layout primitives.
 */
export function Paragraph({
  size = "md",
  color = "secondary",
  align = "left",
  className,
  style,
  children,
  ...props
}: ParagraphProps) {
  const paragraphStyle: CSSProperties = {
    margin: 0,

    maxWidth: "75ch",

    color: COLOR_STYLES[color],

    fontFamily:
      theme.typography.fontFamily.sans,

    textAlign: TEXT_ALIGN[align],

    textWrap: "pretty",

    ...SIZE_STYLES[size],

    ...style,
  };

  return (
    <p
      className={cn(className)}
      style={paragraphStyle}
      {...props}
    >
      {children}
    </p>
  );
}

export default Paragraph;