import { ReactNode } from "react";

export default function Heading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <h2 className="text-5xl font-semibold tracking-tight leading-tight">
      {children}
    </h2>
  );
}