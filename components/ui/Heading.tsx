import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

type HeadingWeight =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

type HeadingAlign =
  | "left"
  | "center"
  | "right";

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Semantic heading level.
   *
   * Only four heading styles currently
   * exist in the design system.
   */
  level?: HeadingLevel;

  /**
   * Optional font-weight override.
   */
  weight?: HeadingWeight;

  /**
   * Text alignment.
   */
  align?: HeadingAlign;

  children: ReactNode;
}

const LEVEL_STYLES: Record<
  HeadingLevel,
  CSSProperties
> = {
  1: theme.typography.heading.h1,

  2: theme.typography.heading.h2,

  3: theme.typography.heading.h3,

  4: theme.typography.heading.h4,
};

const FONT_WEIGHT: Record<
  HeadingWeight,
  CSSProperties["fontWeight"]
> = {
  light: theme.typography.weight.light,

  regular: theme.typography.weight.regular,

  medium: theme.typography.weight.medium,

  semibold: theme.typography.weight.semibold,

  bold: theme.typography.weight.bold,
};

const TEXT_ALIGN: Record<
  HeadingAlign,
  CSSProperties["textAlign"]
> = {
  left: "left",

  center: "center",

  right: "right",
};

/**
 * Heading establishes semantic document hierarchy.
 *
 * Layout is intentionally delegated to higher-level
 * layout primitives such as Section and Grid.
 */
export function Heading({
  level = 2,
  weight = "semibold",
  align = "left",
  className,
  style,
  children,
  ...props
}: HeadingProps) {
  const Component = (`h${level}`) as
    | "h1"
    | "h2"
    | "h3"
    | "h4";

  const headingStyle: CSSProperties = {
    margin: 0,

    color: theme.colors.text.primary,

    fontFamily:
      theme.typography.fontFamily.sans,

    fontWeight: FONT_WEIGHT[weight],

    textAlign: TEXT_ALIGN[align],

    textWrap: "balance",

    ...LEVEL_STYLES[level],

    ...style,
  };

  return (
    <Component
      className={cn(className)}
      style={headingStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Heading;