"use client";

import {
  HTMLAttributes,
  ReactNode,
  useState,
} from "react";

import { Icon } from "@/components/ui/Icon";
import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface AccordionProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Primary heading displayed in the accordion trigger.
   *
   * Named "heading" instead of "title" to avoid
   * conflicting with the native HTML title attribute.
   */
  heading: ReactNode;

  /**
   * Optional supporting label.
   *
   * Example:
   * Current Architecture
   * Patent Pending
   * Engineering Decision
   */
  subtitle?: ReactNode;

  /**
   * Accordion body.
   */
  children: ReactNode;

  /**
   * Initial expansion state.
   */
  defaultOpen?: boolean;

  /**
   * Disable interaction.
   */
  disabled?: boolean;
}

/**
 * Accordion progressively reveals engineering information.
 *
 * This component intentionally avoids FAQ styling.
 * It behaves more like an expandable section
 * inside an engineering report.
 */
export function Accordion({
  heading,
  subtitle,
  children,
  defaultOpen = false,
  disabled = false,
  className,
  style,
  ...props
}: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  const toggle = () => {
    if (!disabled) {
      setOpen((value) => !value);
    }
  };

  return (
    <div
      className={cn(className)}
      style={{
        border: `1px solid ${theme.colors.border.subtle}`,
        borderRadius: `${theme.radius.md}px`,
        background: theme.colors.surface.primary,
        overflow: "hidden",
        ...style,
      }}
      {...props}
    >
      <button
        type="button"
        onClick={toggle}
        disabled={disabled}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: theme.spacing.stack.md,

          padding: theme.spacing.card.default,

          background: "transparent",

          border: "none",

          cursor: disabled ? "default" : "pointer",

          color: theme.colors.text.primary,

          textAlign: "left",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: theme.spacing.stack.xs,
          }}
        >
          <span
            style={{
              fontSize: theme.typography.heading.h4.fontSize,
              fontWeight: theme.typography.weight.semibold,
              lineHeight: theme.typography.heading.h4.lineHeight,
              letterSpacing:
                theme.typography.heading.h4.letterSpacing,
            }}
          >
            {heading}
          </span>

          {subtitle && (
            <span
              style={{
                color: theme.colors.text.secondary,
                fontSize: theme.typography.body.sm.fontSize,
                lineHeight: theme.typography.body.sm.lineHeight,
              }}
            >
              {subtitle}
            </span>
          )}
        </div>

        <Icon
          name={open ? "minus" : "plus"}
          size="md"
        />
      </button>

      {open && (
        <div
          style={{
            paddingInline: theme.spacing.card.default,
            paddingBottom: theme.spacing.card.default,
            borderTop: `1px solid ${theme.colors.border.subtle}`,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;