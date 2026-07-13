"use client";

import Link from "next/link";

const links = [
  "Platform",
  "Engineering",
  "Technology",
  "Validation",
  "Roadmap",
  "Founder",
  "Contact",
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-6 flex max-w-[1280px] items-center justify-between rounded-full border border-zinc-800 bg-black/40 px-8 py-4 backdrop-blur-xl">

        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight"
        >
          Tirare
        </Link>

        <nav className="hidden gap-8 md:flex">

          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {item}
            </a>
          ))}

        </nav>

      </div>
    </header>
  );
}