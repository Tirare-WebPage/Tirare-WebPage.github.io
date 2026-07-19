"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export interface StaggerProps
  extends HTMLAttributes<HTMLDivElement> {
  /**
   * Child elements to sequence.
   *
   * Intended primarily for Reveal components,
   * but works with any component that accepts
   * a `delay` prop.
   */
  children: ReactNode;

  /**
   * Initial delay before the first child.
   */
  delay?: number;

  /**
   * Time between consecutive children.
   */
  interval?: number;
}

/**
 * Stagger coordinates sequential entrance animations.
 *
 * It intentionally performs no animation itself.
 * Its only responsibility is distributing delay values
 * to child components.
 */
export function Stagger({
  children,
  delay = 0,
  interval = 120,
  className,
  ...props
}: StaggerProps) {
  const items = Children.map(children, (child, index) => {
    if (!isValidElement(child)) {
      return child;
    }

    const element = child as ReactElement<{ delay?: number }>;

    return cloneElement(element, {
      delay: delay + index * interval,
    });
  });

  return (
    <div
      className={cn(className)}
      {...props}
    >
      {items}
    </div>
  );
}

export default Stagger;