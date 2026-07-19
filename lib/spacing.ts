/**
 * -----------------------------------------------------------------------------
 * Tirare Mobility Technologies
 * Spatial Design System
 * -----------------------------------------------------------------------------
 *
 * The spacing system follows an 8-point grid.
 *
 * Objectives:
 * - Predictable rhythm
 * - Consistent visual hierarchy
 * - Mechanical precision
 * - Comfortable readability
 *
 * Components should never hardcode spacing values.
 * Always consume tokens from this module.
 * -----------------------------------------------------------------------------
 */

export const spacing = {
  /**
   * Base spacing scale.
   * All layout rhythm derives from these values.
   */
  scale: {
    0: "0rem",
    1: "0.25rem", // 4px
    2: "0.5rem",  // 8px
    3: "0.75rem", // 12px
    4: "1rem",    // 16px
    5: "1.5rem",  // 24px
    6: "2rem",    // 32px
    7: "3rem",    // 48px
    8: "4rem",    // 64px
    9: "6rem",    // 96px
    10: "8rem",   // 128px
    11: "10rem",  // 160px
    12: "12rem",  // 192px
  },

  /**
   * Horizontal page padding.
   */
  page: {
    mobile: "1.5rem",
    tablet: "2rem",
    desktop: "3rem",
    wide: "4rem",
  },

  /**
   * Maximum content widths.
   */
  container: {
    narrow: "42rem",   // Reading content
    content: "72rem",  // Default sections
    wide: "90rem",     // Engineering layouts
    full: "100%",
  },

  /**
   * Section spacing.
   */
  section: {
    compact: "4rem",
    default: "8rem",
    spacious: "12rem",
    heroTop: "10rem",
    heroBottom: "8rem",
  },

  /**
   * Vertical rhythm inside components.
   */
  stack: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },

  /**
   * Grid spacing.
   */
  grid: {
    gutter: "2rem",
    columnGap: "2rem",
    rowGap: "2.5rem",
  },

  /**
   * Card spacing.
   */
  card: {
    compact: "1.5rem",
    default: "2rem",
    spacious: "2.5rem",
  },

  /**
   * Engineering diagrams and CAD overlays.
   */
  engineering: {
    annotationOffset: "1rem",
    hotspotPadding: "0.75rem",
    calloutSpacing: "2rem",
  },

  /**
   * Navigation layout.
   */
  navigation: {
    height: "5rem",
    paddingX: "2rem",
    paddingY: "1rem",
  },

  /**
   * Footer spacing.
   */
  footer: {
    top: "6rem",
    bottom: "4rem",
  },
} as const;

export type SpacingTokens = typeof spacing;

export default spacing;