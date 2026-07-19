import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type SectionSpacing =
  | "none"
  | "compact"
  | "default"
  | "spacious"
  | "hero";

type SectionBackground =
  | "transparent"
  | "background"
  | "surface"
  | "surfaceSecondary";

export interface SectionProps
  extends HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;

  spacing?: SectionSpacing;

  background?: SectionBackground;

  children: ReactNode;
}

const SPACING: Record<
  SectionSpacing,
  CSSProperties
> = {
  none: {
    paddingBlock: 0,
  },

  compact: {
    paddingBlock: "3rem",
  },

  default: {
    paddingBlock: "5rem",
  },

  spacious: {
    paddingBlock: "7rem",
  },

  hero: {
    paddingTop: "6rem",
    paddingBottom: "6rem",
    minHeight: "100vh",
  },
};

const BACKGROUND: Record<
  SectionBackground,
  CSSProperties
> = {
  transparent: {},

  background: {
    backgroundColor: "var(--background)",
  },

  surface: {
    backgroundColor: "var(--surface)",
  },

  surfaceSecondary: {
    backgroundColor:
      "var(--surface-secondary)",
  },
};

export function Section({
  as: Component = "section",

  spacing = "default",

  background = "transparent",

  className,

  style,

  children,

  ...props
}: SectionProps) {
  const sectionStyle: CSSProperties = {
    position: "relative",

    width: "100%",

    scrollMarginTop: "100px",

    ...SPACING[spacing],

    ...BACKGROUND[background],

    ...style,
  };

  return (
    <Component
      className={cn(className)}
      style={sectionStyle}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Section;