"use client";

import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";
import { theme } from "@/lib/theme";

type MediaType =
  | "diagram"
  | "cad"
  | "photo"
  | "video"
  | "logo";

export interface MediaFrameProps
  extends HTMLAttributes<HTMLDivElement> {
  type?: MediaType;

  children: ReactNode;
}

const FRAME_STYLES: Record<
  MediaType,
  CSSProperties
> = {
  logo: {
    maxWidth: "220px",
    maxHeight: "120px",
    aspectRatio: "16 / 9",
  },

  diagram: {
    width: "100%",
    maxWidth: "720px",
    aspectRatio: "16 / 9",
  },

  cad: {
    width: "100%",
    maxWidth: "900px",
    aspectRatio: "16 / 9",
  },

  photo: {
    width: "100%",
    maxWidth: "640px",
    aspectRatio: "4 / 3",
  },

  video: {
    width: "100%",
    maxWidth: "800px",
    aspectRatio: "16 / 9",
  },
};

export function MediaFrame({
  type = "diagram",

  className,

  style,

  children,

  ...props
}: MediaFrameProps) {
  const frameStyle: CSSProperties = {
    width: "100%",

    marginInline: "auto",

    overflow: "hidden",

    borderRadius: `${theme.radius.lg}px`,

    border: `1px solid ${theme.colors.border.subtle}`,

    background:
      theme.colors.surface.secondary,

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    ...FRAME_STYLES[type],

    ...style,
  };

  return (
    <div
      className={cn(className)}
      style={frameStyle}
      {...props}
    >
      {children}
    </div>
  );
}

export default MediaFrame;