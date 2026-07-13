interface StatisticProps {
  value: string;
  label: string;
}

export default function Statistic({
  value,
  label,
}: StatisticProps) {
  return (
    <div>
      <h3 className="font-mono text-4xl text-white">
        {value}
      </h3>

      <p className="mt-2 text-sm text-zinc-500">
        {label}
      </p>
    </div>
  );
}