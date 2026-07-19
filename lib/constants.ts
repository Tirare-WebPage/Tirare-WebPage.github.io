/**
 * -----------------------------------------------------------------------------
 * Tirare Mobility Technologies
 * Global Engineering Constants
 * -----------------------------------------------------------------------------
 *
 * These constants define application-wide interaction, layout and rendering
 * behavior.
 *
 * This file intentionally contains values that are not design tokens
 * (colors, spacing, typography) but still require a canonical source.
 *
 * Components should never invent their own breakpoints, durations,
 * z-index values or border radii.
 * -----------------------------------------------------------------------------
 */

/* -------------------------------------------------------------------------- */
/* Responsive Breakpoints                                                     */
/* -------------------------------------------------------------------------- */

export const breakpoints = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/* -------------------------------------------------------------------------- */
/* Layout Constraints                                                         */
/* -------------------------------------------------------------------------- */

export const layout = {
  maxWidth: {
    narrow: 672,
    content: 1152,
    wide: 1440,
    ultra: 1680,
  },

  navbarHeight: 80,

  scrollbarCompensation: 16,
} as const;

/* -------------------------------------------------------------------------- */
/* Border Radius                                                              */
/* -------------------------------------------------------------------------- */

export const radius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

/* -------------------------------------------------------------------------- */
/* Z-Index Hierarchy                                                          */
/* -------------------------------------------------------------------------- */

export const zIndex = {
  background: -1,

  default: 0,

  elevated: 10,

  sticky: 100,

  navigation: 500,

  tooltip: 700,

  modalBackdrop: 900,

  modal: 1000,

  notification: 1100,

  debug: 9999,
} as const;

/* -------------------------------------------------------------------------- */
/* Motion Timing                                                              */
/* -------------------------------------------------------------------------- */

export const duration = {
  instant: 0,

  fast: 120,

  normal: 220,

  medium: 320,

  slow: 450,

  deliberate: 700,

  cinematic: 1000,
} as const;

/* -------------------------------------------------------------------------- */
/* Motion Curves                                                              */
/* -------------------------------------------------------------------------- */

export const easing = {
  standard: "cubic-bezier(0.4, 0, 0.2, 1)",

  entrance: "cubic-bezier(0.16, 1, 0.3, 1)",

  exit: "cubic-bezier(0.7, 0, 0.84, 0)",

  mechanical: "cubic-bezier(0.25, 0.1, 0.25, 1)",

  linear: "linear",
} as const;

/* -------------------------------------------------------------------------- */
/* Blur Tokens                                                                */
/* -------------------------------------------------------------------------- */

export const blur = {
  none: 0,

  sm: 4,

  md: 8,

  lg: 16,

  xl: 24,
} as const;

/* -------------------------------------------------------------------------- */
/* Opacity Tokens                                                             */
/* -------------------------------------------------------------------------- */

export const opacity = {
  hidden: 0,

  subtle: 0.4,

  muted: 0.65,

  visible: 1,
} as const;

/* -------------------------------------------------------------------------- */
/* CAD Experience                                                             */
/* -------------------------------------------------------------------------- */

export const cad = {
  cameraTransition: 1400,

  highlightFade: 250,

  annotationDelay: 180,

  guidedPause: 600,

  idleRotationSpeed: 0.0025,
} as const;

/* -------------------------------------------------------------------------- */
/* Accessibility                                                              */
/* -------------------------------------------------------------------------- */

export const accessibility = {
  minimumTouchTarget: 44,

  maximumReadableCharacters: 75,

  focusOutlineWidth: 2,
} as const;

/* -------------------------------------------------------------------------- */
/* Theme Contract                                                             */
/* -------------------------------------------------------------------------- */

export const constants = {
  breakpoints,
  layout,
  radius,
  zIndex,
  duration,
  easing,
  blur,
  opacity,
  cad,
  accessibility,
} as const;

export type Constants = typeof constants;

export default constants;