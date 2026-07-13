import clsx from "clsx";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export default function Heading({
  children,
  level = 2,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={clsx(
        "font-heading font-semibold tracking-tight text-white",
        {
          "text-6xl md:text-8xl leading-none": level === 1,
          "text-4xl md:text-6xl leading-tight": level === 2,
          "text-2xl md:text-3xl": level === 3,
        },
        className
      )}
    >
      {children}
    </Tag>
  );
}