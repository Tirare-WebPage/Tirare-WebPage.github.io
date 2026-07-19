import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export type QuoteVariant =
  | "statement"
  | "observation"
  | "engineering";

export interface QuoteProps
  extends HTMLAttributes<HTMLElement> {
  children: ReactNode;

  author?: ReactNode;

  source?: ReactNode;

  variant?: QuoteVariant;
}

const ACCENT: Record<
  QuoteVariant,
  string
> = {
  statement:
    theme.colors.accent.primary,

  observation:
    theme.colors.engineering.blueprint,

  engineering:
    theme.colors.engineering.copper,
};

export function Quote({
  children,
  author,
  source,
  variant = "statement",
  className,
  style,
  ...props
}: QuoteProps) {
  const rootStyle: CSSProperties = {
    position: "relative",

    display: "flex",
    flexDirection: "column",

    gap: theme.spacing.stack.lg,

    padding:
      theme.spacing.card.spacious,

    borderRadius: `${theme.radius.lg}px`,

    background:
      theme.colors.surface.secondary,

    border: `1px solid ${theme.colors.border.default}`,

    overflow: "hidden",

    ...style,
  };

  return (
    <figure
      className={cn(className)}
      style={rootStyle}
      {...props}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",

          borderLeft: `4px solid ${ACCENT[variant]}`,
        }}
      />

      <div
        style={{
          color: ACCENT[variant],

          fontSize:
            theme.typography.body.sm.fontSize,

          fontWeight:
            theme.typography.weight.bold,

          textTransform: "uppercase",

          letterSpacing: "0.08em",
        }}
      >
        {variant === "statement" &&
          "Founder Statement"}

        {variant === "observation" &&
          "Field Observation"}

        {variant === "engineering" &&
          "Engineering Principle"}
      </div>

      <blockquote
        style={{
          margin: 0,

          color:
            theme.colors.text.primary,

          fontSize:
            theme.typography.heading.h3.fontSize,

          lineHeight:
            theme.typography.heading.h3.lineHeight,

          fontWeight:
            theme.typography.weight.medium,

          maxWidth: "42ch",
        }}
      >
        {children}
      </blockquote>

      {(author || source) && (
        <figcaption
          style={{
            display: "flex",
            flexDirection: "column",

            gap:
              theme.spacing.stack.xs,

            paddingTop:
              theme.spacing.stack.md,

            borderTop: `1px solid ${theme.colors.border.subtle}`,
          }}
        >
          {author && (
            <span
              style={{
                color:
                  theme.colors.text.primary,

                fontWeight:
                  theme.typography.weight.semibold,
              }}
            >
              {author}
            </span>
          )}

          {source && (
            <span
              style={{
                color:
                  theme.colors.text.secondary,

                fontSize:
                  theme.typography.body.sm.fontSize,
              }}
            >
              {source}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
}

export default Quote;