/**
 * -----------------------------------------------------------------------------
 * Tirare Mobility Technologies
 * Framework Utilities
 * -----------------------------------------------------------------------------
 *
 * This module contains framework-level utilities that are shared across the
 * application.
 *
 * Keep this file intentionally small.
 * Domain-specific helpers should live in dedicated modules.
 * -----------------------------------------------------------------------------
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Compose and intelligently merge CSS class names.
 *
 * Unlike simple string concatenation, this helper removes conflicting Tailwind
 * utility classes while preserving conditional logic.
 *
 * Example:
 *
 * cn(
 *   "px-4",
 *   isLarge && "px-8",
 *   className,
 * );
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}