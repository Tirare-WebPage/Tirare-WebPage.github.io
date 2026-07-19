"use client";

import {
  HTMLAttributes,
  ReactNode,
  useId,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";
import { theme } from "@/lib/theme";

type TooltipPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right";

export interface TooltipProps
  extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Element that triggers the tooltip.
   */
  children: ReactNode;

  /**
   * Tooltip body.
   *
   * Named "tooltip" instead of "content"
   * to avoid conflicting with the native
   * HTML `content` attribute.
   */
  tooltip: ReactNode;

  /**
   * Preferred placement.
   */
  placement?: TooltipPlacement;

  /**
   * Delay before showing.
   */
  delay?: number;

  /**
   * Disable tooltip behaviour.
   */
  disabled?: boolean;
}

const POSITION: Record<
  TooltipPlacement,
  React.CSSProperties
> = {
  top: {
    bottom: "calc(100% + 0.75rem)",
    left: "50%",
    transform: "translateX(-50%)",
  },

  bottom: {
    top: "calc(100% + 0.75rem)",
    left: "50%",
    transform: "translateX(-50%)",
  },

  left: {
    right: "calc(100% + 0.75rem)",
    top: "50%",
    transform: "translateY(-50%)",
  },

  right: {
    left: "calc(100% + 0.75rem)",
    top: "50%",
    transform: "translateY(-50%)",
  },
};

/**
 * Tooltip communicates contextual engineering
 * information without interrupting reading flow.
 */
export function Tooltip({
  children,
  tooltip,
  placement = "top",
  delay = 150,
  disabled = false,
  className,
  style,
  ...props
}: TooltipProps) {
  const [visible, setVisible] = useState(false);

  const id = useId();

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (disabled) return;

    timer.current = setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hide = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    setVisible(false);
  };

  return (
    <span
      className={cn(className)}
      style={{
        position: "relative",
        display: "inline-flex",
        ...style,
      }}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      aria-describedby={visible ? id : undefined}
      {...props}
    >
      {children}

      {visible && (
        <span
          id={id}
          role="tooltip"
          style={{
            position: "absolute",

            zIndex: theme.zIndex.tooltip,

            ...POSITION[placement],

            minWidth: "12rem",
            maxWidth: "18rem",

            padding: theme.spacing.scale[3],

            border: `1px solid ${theme.colors.border.default}`,

            borderRadius: `${theme.radius.sm}px`,

            background: theme.colors.overlay.tooltip,

            color: theme.colors.text.primary,

            fontFamily: theme.typography.fontFamily.sans,

            fontSize: theme.typography.caption.fontSize,

            lineHeight: theme.typography.caption.lineHeight,

            backdropFilter: `blur(${theme.effects.blur.md}px)`,

            boxShadow:
              "0 12px 32px rgba(0,0,0,0.28)",

            pointerEvents: "none",

            whiteSpace: "normal",
          }}
        >
          {tooltip}
        </span>
      )}
    </span>
  );
}

export default Tooltip;