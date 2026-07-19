/**
 * -----------------------------------------------------------------------------
 * Tirare Mobility Technologies
 * Semantic Color System
 * -----------------------------------------------------------------------------
 *
 * Industrial / Human-Centered Engineering Theme
 *
 * Inspired by:
 * • forged steel
 * • weathered machinery
 * • workshop environments
 * • Indian cargo mobility
 * • copper and mechanical components
 *
 * -----------------------------------------------------------------------------
 */

export const colors = {
  background: {
    primary: "#0A0907",
    secondary: "#11100D",
    tertiary: "#171512",
  },

  surface: {
    primary: "#181612",
    secondary: "#201D18",
    tertiary: "#2A2620",
    elevated: "#322D26",
  },

  text: {
    primary: "#F3EFE8",
    secondary: "#D2CAC0",
    tertiary: "#A79D91",
    disabled: "#6F675F",
    inverse: "#0A0907",
  },

  border: {
    subtle: "#2A2620",
    default: "#3A352D",
    strong: "#4E483E",
  },

  accent: {
    primary: "#C86B2A",
    secondary: "#E08743",
    muted: "#8E4D20",
    contrast: "#FFFFFF",
  },

  engineering: {
    blueprint: "#6A7684",
    steel: "#8A847B",
    titanium: "#B2AAA0",
    copper: "#C86B2A",
  },

  status: {
    success: "#4D8A5C",
    warning: "#D19B28",
    danger: "#B54D3E",
    info: "#C86B2A",
  },

  cad: {
    background: "#090806",
    ground: "#11100D",
    wireframe: "#6D675E",
    highlight: "#E08743",
    annotation: "#F3EFE8",
    protected: "#4E483E",
  },

  overlay: {
    backdrop: "rgba(10, 9, 7, 0.78)",
    modal: "rgba(24, 22, 18, 0.97)",
    tooltip: "rgba(17, 16, 13, 0.96)",
  },

  interaction: {
    hover: "#26211B",
    pressed: "#1A1713",
    focus: "#E08743",
  },

  transparency: {
    none: "transparent",
    subtle: "rgba(255,255,255,0.03)",
    medium: "rgba(255,255,255,0.07)",
    strong: "rgba(255,255,255,0.14)",
  },
} as const;

export type ColorTokens = typeof colors;

export default colors;