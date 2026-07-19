/**
 * -----------------------------------------------------------------------------
 * Tirare Mobility Technologies
 * Typography System
 * -----------------------------------------------------------------------------
 *
 * Typography is treated as an information hierarchy rather than a collection
 * of font sizes.
 *
 * Components should consume semantic text roles instead of declaring their
 * own typography values.
 *
 * Example:
 *
 * ✓ typography.heading.h2
 * ✗ fontSize: "2rem"
 *
 * This allows the hierarchy to evolve without changing individual components.
 * -----------------------------------------------------------------------------
 */

export const typography = {
  /**
   * ---------------------------------------------------------------------------
   * Font Families
   * ---------------------------------------------------------------------------
   */

  fontFamily: {
    sans: [
      "Geist",
      "Inter",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "sans-serif",
    ].join(", "),

    mono: [
      '"Geist Mono"',
      '"SFMono-Regular"',
      "Consolas",
      '"Liberation Mono"',
      "Menlo",
      "monospace",
    ].join(", "),
  },

  /**
   * ---------------------------------------------------------------------------
   * Font Weights
   * ---------------------------------------------------------------------------
   */

  weight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  /**
   * ---------------------------------------------------------------------------
   * Letter Spacing
   * ---------------------------------------------------------------------------
   */

  tracking: {
    tighter: "-0.04em",
    tight: "-0.02em",
    normal: "0",
    wide: "0.02em",
    wider: "0.06em",
  },

  /**
   * ---------------------------------------------------------------------------
   * Line Heights
   * ---------------------------------------------------------------------------
   */

  leading: {
    none: 1,
    compact: 1.15,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.7,
  },

  /**
   * ---------------------------------------------------------------------------
   * Display Styles
   * ---------------------------------------------------------------------------
   */

  display: {
    xl: {
      fontSize: "5.5rem",
      lineHeight: 1,
      fontWeight: 600,
      letterSpacing: "-0.04em",
    },

    lg: {
      fontSize: "4.5rem",
      lineHeight: 1.02,
      fontWeight: 600,
      letterSpacing: "-0.035em",
    },

    md: {
      fontSize: "3.75rem",
      lineHeight: 1.08,
      fontWeight: 600,
      letterSpacing: "-0.03em",
    },
  },

  /**
   * ---------------------------------------------------------------------------
   * Heading Hierarchy
   * ---------------------------------------------------------------------------
   */

  heading: {
    h1: {
      fontSize: "3rem",
      lineHeight: 1.1,
      fontWeight: 600,
      letterSpacing: "-0.03em",
    },

    h2: {
      fontSize: "2.25rem",
      lineHeight: 1.15,
      fontWeight: 600,
      letterSpacing: "-0.025em",
    },

    h3: {
      fontSize: "1.75rem",
      lineHeight: 1.2,
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },

    h4: {
      fontSize: "1.375rem",
      lineHeight: 1.3,
      fontWeight: 600,
      letterSpacing: "-0.01em",
    },
  },

  /**
   * ---------------------------------------------------------------------------
   * Body Copy
   * ---------------------------------------------------------------------------
   */

  body: {
    lg: {
      fontSize: "1.125rem",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: "0",
    },

    md: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontWeight: 400,
      letterSpacing: "0",
    },

    sm: {
      fontSize: "0.9375rem",
      lineHeight: 1.65,
      fontWeight: 400,
      letterSpacing: "0",
    },
  },

  /**
   * ---------------------------------------------------------------------------
   * Utility Text
   * ---------------------------------------------------------------------------
   */

  label: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
  },

  caption: {
    fontSize: "0.8125rem",
    lineHeight: 1.5,
    fontWeight: 400,
    letterSpacing: "0.01em",
  },

  overline: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
  },

  code: {
    fontSize: "0.9rem",
    lineHeight: 1.6,
    fontWeight: 400,
  },
} as const;

export type TypographyTokens = typeof typography;

export default typography;