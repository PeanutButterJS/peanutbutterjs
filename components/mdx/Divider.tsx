interface DividerProps {
  label?: string;
}

export function Divider({ label }: DividerProps) {
  if (!label) {
    return <hr className="my-10 border-t border-border not-prose" />;
  }

  return (
    <div className="my-10 flex items-center gap-4 not-prose">
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs font-semibold text-muted uppercase tracking-widest px-2">
        {label}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}
