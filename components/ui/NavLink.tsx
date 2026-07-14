"use client";

import Link from "next/link";

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({
  href,
  children,
}: Props) {
  return (
    <Link
      href={href}
      className="
      text-sm
      text-zinc-400
      transition-all
      duration-300
      hover:text-white
      "
    >
      {children}
    </Link>
  );
}