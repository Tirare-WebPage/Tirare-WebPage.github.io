import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id?: string;
}

export default function Section({ children, id }: Props) {
  return (
    <section
      id={id}
      className="relative py-36 px-8"
    >
      <div className="mx-auto max-w-[1440px]">
        {children}
      </div>
    </section>
  );
}