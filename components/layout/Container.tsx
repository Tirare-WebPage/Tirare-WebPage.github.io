import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}

export default function Container({
  children,
  className,
  narrow = false,
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto px-6 md:px-10",
        narrow ? "max-w-[720px]" : "max-w-[1280px]",
        className
      )}
    >
      {children}
    </div>
  );
}