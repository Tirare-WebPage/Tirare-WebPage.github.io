import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-500",
        {
          "bg-[#C8863B] text-black hover:scale-[1.02]":
            variant === "primary",

          "border border-zinc-700 text-zinc-300 hover:border-[#C8863B] hover:text-white":
            variant === "ghost",
        }
      )}
    >
      {children}
    </Link>
  );
}