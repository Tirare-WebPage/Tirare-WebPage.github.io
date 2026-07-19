"use client";

import {
  type CSSProperties,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
} from "react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /**
   * Controls whether the modal is visible.
   */
  open: boolean;

  /**
   * Called when the modal requests to close.
   */
  onClose: () => void;

  /**
   * Optional modal heading.
   */
  heading?: ReactNode;

  /**
   * Modal content.
   */
  children: ReactNode;

  /**
   * Optional footer actions.
   */
  footer?: ReactNode;

  /**
   * Prevent closing via overlay click.
   */
  disableOverlayClose?: boolean;
}

/**
 * Modal presents focused engineering information without
 * navigating away from the current page.
 *
 * It intentionally avoids marketing-style animations
 * in favor of restrained, documentation-like behavior.
 */
export function Modal({
  open,
  onClose,
  heading,
  footer,
  children,
  disableOverlayClose = false,
  className,
  style,
  ...props
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const overlayStyle: CSSProperties = {
    position: "fixed",
    inset: 0,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: theme.spacing.scale[6],

    background: theme.colors.overlay.backdrop,

    backdropFilter: `blur(${theme.effects.blur.md}px)`,

    zIndex: theme.zIndex.modalBackdrop,
  };

  const modalStyle: CSSProperties = {
    width: "100%",
    maxWidth: "48rem",

    background: theme.colors.overlay.modal,

    border: `1px solid ${theme.colors.border.default}`,

    borderRadius: `${theme.radius.lg}px`,

    boxShadow: "0 24px 64px rgba(0,0,0,0.35)",

    overflow: "hidden",

    display: "flex",
    flexDirection: "column",

    ...style,
  };

  return (
    <div
      style={overlayStyle}
      onClick={() => {
        if (!disableOverlayClose) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className={cn(className)}
        style={modalStyle}
        onClick={(event) => event.stopPropagation()}
        {...props}
      >
        {heading && (
          <header
            style={{
              padding: theme.spacing.card.default,
              borderBottom: `1px solid ${theme.colors.border.subtle}`,
              color: theme.colors.text.primary,
              fontFamily: theme.typography.fontFamily.sans,
              fontSize: theme.typography.heading.h3.fontSize,
              fontWeight: theme.typography.heading.h3.fontWeight,
              lineHeight: theme.typography.heading.h3.lineHeight,
            }}
          >
            {heading}
          </header>
        )}

        <div
          style={{
            padding: theme.spacing.card.default,
            color: theme.colors.text.secondary,
          }}
        >
          {children}
        </div>

        {footer && (
          <footer
            style={{
              padding: theme.spacing.card.default,
              borderTop: `1px solid ${theme.colors.border.subtle}`,
            }}
          >
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}

export default Modal;