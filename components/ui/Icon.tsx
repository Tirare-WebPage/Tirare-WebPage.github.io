import type { CSSProperties, HTMLAttributes } from "react";

import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Award,
  Battery,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Coins,
  Cpu,
  ExternalLink,
  Eye,
  Factory,
  Gauge,
  Globe,
  Info,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Minus,
  MoveRight,
  Package,
  Play,
  Plus,
  Shield,
  Sparkles,
  Truck,
  Users,
  Wrench,
  X,
  type LucideIcon,
} from "lucide-react";

import { theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const ICONS = {
  alert: AlertCircle,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  award: Award,
  battery: Battery,
  check: CheckCircle2,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  circle: Circle,
  coins: Coins,
  cpu: Cpu,
  external: ExternalLink,
  eye: Eye,
  factory: Factory,
  gauge: Gauge,
  globe: Globe,
  info: Info,
  lightbulb: Lightbulb,
  mail: Mail,
  mapPin: MapPin,
  menu: Menu,
  minus: Minus,
  moveRight: MoveRight,
  package: Package,
  play: Play,
  plus: Plus,
  shield: Shield,
  sparkles: Sparkles,
  truck: Truck,
  users: Users,
  wrench: Wrench,
  close: X,
} as const;

export type IconName = keyof typeof ICONS;

export type IconSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl";

const SIZE: Record<IconSize, number> = {
  xs: 14,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export interface IconProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children"> {
  /**
   * Semantic icon identifier.
   */
  name: IconName;

  /**
   * Semantic size token.
   */
  size?: IconSize;

  /**
   * Override icon color.
   */
  color?: string;

  /**
   * Stroke width.
   */
  strokeWidth?: number;
}

/**
 * Icon provides a stable abstraction over the icon library.
 *
 * Components never import Lucide icons directly.
 * They consume semantic icon names instead.
 *
 * This allows the entire application to migrate to another
 * icon set without changing component code.
 */
export function Icon({
  name,
  size = "md",
  color = theme.colors.text.secondary,
  strokeWidth = 1.75,
  className,
  style,
  ...props
}: IconProps) {
  const Component: LucideIcon = ICONS[name];

  const wrapperStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: 0,
    color,
    ...style,
  };

  return (
    <span
      className={cn(className)}
      style={wrapperStyle}
      aria-hidden="true"
      {...props}
    >
      <Component
        size={SIZE[size]}
        strokeWidth={strokeWidth}
      />
    </span>
  );
}

export default Icon;