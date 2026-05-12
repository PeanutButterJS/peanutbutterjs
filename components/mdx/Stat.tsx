interface StatProps {
  value: string;
  label: string;
  description?: string;
  accent?: boolean;
}

interface StatsRowProps {
  stats: Array<Omit<StatProps, 'accent'>>;
}

export function Stat({ value, label, description, accent = false }: StatProps) {
  return (
    <div className="bg-surface border border-border rounded-[14px] p-5 not-prose text-center">
      <p
        className="font-heading font-bold text-3xl mb-1"
        style={accent ? {
          background: 'linear-gradient(135deg, #7C5CFF 0%, #41D1FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        } : { color: '#E6ECF3' }}
      >
        {value}
      </p>
      <p className="text-sm font-medium text-text mb-1">{label}</p>
      {description && (
        <p className="text-xs text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className={`my-6 grid gap-4 not-prose grid-cols-${Math.min(stats.length, 3)}`}>
      {stats.map((s, i) => (
        <Stat key={i} {...s} accent={i === 0} />
      ))}
    </div>
  );
}
