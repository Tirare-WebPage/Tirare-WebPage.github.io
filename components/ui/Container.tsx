import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;

  size?:
    | "narrow"
    | "default"
    | "wide"
    | "full";
}

const WIDTHS = {
  narrow: "880px",

  default: "1100px",

  wide: "1280px",

  full: "1600px",
};

export function Container({
  children,

  size = "default",
}: ContainerProps) {
  return (
    <div
      style={{
        width: "100%",

        maxWidth: WIDTHS[size],

        marginInline: "auto",

        paddingInline: "clamp(1.25rem, 3vw, 2.5rem)",
      }}
    >
      {children}
    </div>
  );
}

export default Container;