import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

type StatisticAlign = "left" | "center" | "right";

type StatisticTone =
  | "default"
  | "accent"
  | "success"
  | "muted";

export interface StatisticProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Primary metric.
   *
   * Examples:
   * 96
   * ₹20K
   * 3
   * 45°C
   * Patent Pending
   */
  value: ReactNode;

  /**
   * Metric label.
   */
  label: ReactNode;

  /**
   * Optional supporting description.
   */
  description?: ReactNode;

  /**
   * Optional leading icon.
   */
  icon?: ReactNode;

  /**
   * Horizontal alignment.
   */
  align?: StatisticAlign;

  /**
   * Semantic color treatment.
   */
  tone?: StatisticTone;
}

const TONE: Record<StatisticTone, string> = {
  default: theme.colors.text.primary,
  accent: theme.colors.accent.primary,
  success: theme.colors.status.success,
  muted: theme.colors.text.secondary,
};

const ALIGN: Record<
  StatisticAlign,
  CSSProperties["textAlign"]
> = {
  left: "left",
  center: "center",
  right: "right",
};

/**
 * Statistic presents a single quantitative insight.
 *
 * It intentionally contains no animation or counting logic.
 * Motion belongs to higher-level animation components.
 */
export function Statistic({
  value,
  label,
  description,
  icon,
  align = "left",
  tone = "default",
  className,
  style,
  ...props
}: StatisticProps) {
  const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing.stack.sm,
    textAlign: ALIGN[align],
    ...style,
  };

  return (
    <div
      className={cn(className)}
      style={rootStyle}
      {...props}
    >
      {icon && (
        <div
          style={{
            display: "flex",
            justifyContent:
              align === "left"
                ? "flex-start"
                : align === "center"
                ? "center"
                : "flex-end",
            color: TONE[tone],
          }}
        >
          {icon}
        </div>
      )}

      <div
        style={{
          color: TONE[tone],
          fontFamily: theme.typography.fontFamily.sans,
          fontSize:
            theme.typography.display.md.fontSize,
          fontWeight:
            theme.typography.display.md.fontWeight,
          lineHeight:
            theme.typography.display.md.lineHeight,
          letterSpacing:
            theme.typography.display.md.letterSpacing,
        }}
      >
        {value}
      </div>

      <div
        style={{
          color: theme.colors.text.primary,
          fontFamily: theme.typography.fontFamily.sans,
          fontSize:
            theme.typography.heading.h4.fontSize,
          fontWeight:
            theme.typography.heading.h4.fontWeight,
          lineHeight:
            theme.typography.heading.h4.lineHeight,
          letterSpacing:
            theme.typography.heading.h4.letterSpacing,
        }}
      >
        {label}
      </div>

      {description && (
        <div
          style={{
            color: theme.colors.text.secondary,
            fontFamily: theme.typography.fontFamily.sans,
            fontSize:
              theme.typography.body.md.fontSize,
            fontWeight:
              theme.typography.body.md.fontWeight,
            lineHeight:
              theme.typography.body.md.lineHeight,
            letterSpacing:
              theme.typography.body.md.letterSpacing,
            maxWidth: "36ch",
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}

export default Statistic;