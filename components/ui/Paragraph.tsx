import clsx from "clsx";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({
  children,
  className,
}: ParagraphProps) {
  return (
    <p
      className={clsx(
        "text-lg leading-8 text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
}