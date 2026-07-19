import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type ContainerSize =
  | "narrow"
  | "content"
  | "wide"
  | "full";

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Semantic maximum width.
   *
   * narrow  → Long-form reading
   * content → Standard website content
   * wide    → Engineering layouts
   * full    → Full-bleed sections
   */
  size?: ContainerSize;

  children: ReactNode;
}

const MAX_WIDTH: Record<
  Exclude<ContainerSize, "full">,
  string
> = {
  narrow: theme.spacing.container.narrow,
  content: theme.spacing.container.content,
  wide: theme.spacing.container.wide,
};

/**
 * Container establishes the horizontal rhythm of the website.
 *
 * It deliberately has a single responsibility:
 * constrain content width while maintaining consistent
 * horizontal page padding.
 *
 * Visual styling, semantics and section spacing belong
 * to higher-level layout primitives.
 */
export function Container({
  size = "content",
  className,
  style,
  children,
  ...props
}: ContainerProps) {
  const containerStyle: CSSProperties = {
    width: "100%",

    marginInline: "auto",

    paddingInline: `clamp(
      ${theme.spacing.page.mobile},
      4vw,
      ${theme.spacing.page.desktop}
    )`,

    ...(size !== "full"
      ? {
          maxWidth: MAX_WIDTH[size],
        }
      : {}),

    ...style,
  };

  return (
    <div
      className={cn("w-full", className)}
      style={containerStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;