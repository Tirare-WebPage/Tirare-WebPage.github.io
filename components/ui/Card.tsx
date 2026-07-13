import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-[24px] border border-zinc-800 bg-[#141414] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-zinc-700",
        className
      )}
    >
      {children}
    </div>
  );
}