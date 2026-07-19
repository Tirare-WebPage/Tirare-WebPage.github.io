import Link from "next/link";
import type { CSSProperties } from "react";

import Container from "./Container";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "Problem",
    href: "#problem",
  },
  {
    label: "Engineering",
    href: "#engineering-principles",
  },
  {
    label: "Architecture",
    href: "#retrofit-architecture",
  },
  {
    label: "CAD",
    href: "#cad-showcase",
  },
  {
    label: "Validation",
    href: "#validation",
  },
  {
    label: "Impact",
    href: "#impact",
  },
  {
    label: "Innovation",
    href: "#innovation",
  },
  {
    label: "Contact",
    href: "#contact",
  },
] as const;

/**
 * Primary website navigation.
 *
 * Navigation intentionally remains presentational.
 * Active link detection, mobile navigation,
 * and scroll spy can be introduced later
 * without changing this component.
 */
export function Navbar() {
  const navStyle: CSSProperties = {
    position: "sticky",
    top: 0,

    zIndex: theme.zIndex.navigation,

    width: "100%",
    height: theme.layout.navbarHeight,

    background: theme.colors.overlay.backdrop,

    backdropFilter: `blur(${theme.effects.blur.lg}px)`,

    borderBottom: `1px solid ${theme.colors.border.subtle}`,
  };

  const containerStyle: CSSProperties = {
    height: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const navigationStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",

    gap: theme.spacing.scale[6],
  };

  const logoStyle: CSSProperties = {
    color: theme.colors.text.primary,

    fontFamily: theme.typography.fontFamily.sans,

    fontWeight: theme.typography.weight.semibold,

    fontSize: theme.typography.body.lg.fontSize,

    letterSpacing: theme.typography.tracking.wide,

    textDecoration: "none",
  };

  const linkStyle: CSSProperties = {
    color: theme.colors.text.secondary,

    fontFamily: theme.typography.fontFamily.sans,

    fontSize: theme.typography.body.sm.fontSize,

    fontWeight: theme.typography.weight.medium,

    textDecoration: "none",

    transition: `color ${theme.motion.duration.normal}ms ${theme.motion.easing.standard}`,
  };

  return (
    <header
      style={navStyle}
      aria-label="Primary Navigation"
    >
      <Container>
        <div style={containerStyle}>
          <Link
            href="/"
            style={logoStyle}
          >
            Tirare
          </Link>

          <nav
            aria-label="Section Navigation"
            style={navigationStyle}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={linkStyle}
                className={cn()}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Navbar;