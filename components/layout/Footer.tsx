import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 py-16">

      <div className="mx-auto flex max-w-[1280px] justify-between px-8">

        <div>

          <h3 className="font-heading text-xl">
            Tirare Mobility Technologies
          </h3>

          <p className="mt-4 max-w-sm text-zinc-500">
            Electrifying existing utility vehicles through
            proprietary retrofit technology.
          </p>

        </div>

        <div className="space-y-3">

          <Link href="/">LinkedIn</Link>

          <br />

          <Link href="/">Email</Link>

        </div>

      </div>

    </footer>
  );
}