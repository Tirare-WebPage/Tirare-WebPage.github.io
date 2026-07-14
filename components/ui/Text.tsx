import { ReactNode } from "react";

export default function Text({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="text-lg text-zinc-400 leading-8">
      {children}
    </p>
  );
}