interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="rounded-full border border-[#C8863B]/30 bg-[#C8863B]/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-[#C8863B]">
      {children}
    </span>
  );
}