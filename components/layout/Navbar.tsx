"use client";

import Logo from "../ui/Logo";
import NavLink from "../ui/NavLink";
import { navigation } from "@/data/navigation";
import { useScroll } from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <header
      className={`
      fixed
      top-0
      left-0
      right-0
      z-50
      transition-all
      duration-500

      ${
        scrolled
          ? "backdrop-blur-xl bg-black/50 border-b border-zinc-800"
          : "bg-transparent"
      }
      `}
    >
      <div
        className="
        max-w-[1440px]
        mx-auto
        h-20
        px-8

        flex
        items-center
        justify-between
        "
      >
        <Logo />

        <nav
          className="
          flex
          items-center
          gap-10
          "
        >
          {navigation.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}