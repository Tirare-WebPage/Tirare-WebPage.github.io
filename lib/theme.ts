/**
 * -----------------------------------------------------------------------------
 * Tirare Mobility Technologies
 * Design System Theme
 * -----------------------------------------------------------------------------
 *
 * This module is the single public entry point for the design system.
 *
 * Components should always import from:
 *
 *   import { theme } from "@/lib/theme";
 *
 * Never import individual token modules directly inside application
 * components. Keeping a single public API allows the internal structure
 * of the design system to evolve without affecting the rest of the codebase.
 *
 * -----------------------------------------------------------------------------
 */

import colors from "./colors";
import spacing from "./spacing";
import typography from "./typography";
import constants, {
  accessibility,
  blur,
  breakpoints,
  cad,
  duration,
  easing,
  layout,
  opacity,
  radius,
  zIndex,
} from "./constants";

/**
 * Canonical design system.
 *
 * All visual decisions originate from this object.
 */
export const theme = {
  colors,

  spacing,

  typography,

  breakpoints,

  layout,

  radius,

  zIndex,

  motion: {
    duration,

    easing,
  },

  effects: {
    blur,

    opacity,
  },

  cad,

  accessibility,
} as const;

/**
 * Full theme type.
 */
export type Theme = typeof theme;

/**
 * Re-export individual namespaces for advanced usage.
 *
 * Most components should consume `theme`.
 * Individual exports exist primarily for infrastructure and tooling.
 */
export {
  colors,
  spacing,
  typography,
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
  constants,
};

export default theme;