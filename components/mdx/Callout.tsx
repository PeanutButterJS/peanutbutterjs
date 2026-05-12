import { Info, AlertTriangle, Lightbulb, AlertCircle } from 'lucide-react';
import type { ReactNode } from 'react';

type CalloutType = 'note' | 'tip' | 'warning' | 'danger';

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const config: Record<
  CalloutType,
  { icon: ReactNode; border: string; bg: string; titleColor: string; iconColor: string }
> = {
  note: {
    icon: <Info size={16} />,
    border: 'border-accent/30',
    bg: 'bg-accent/5',
    titleColor: 'text-accent',
    iconColor: 'text-accent',
  },
  tip: {
    icon: <Lightbulb size={16} />,
    border: 'border-primary/30',
    bg: 'bg-primary/5',
    titleColor: 'text-primary',
    iconColor: 'text-primary',
  },
  warning: {
    icon: <AlertTriangle size={16} />,
    border: 'border-warm/30',
    bg: 'bg-warm/5',
    titleColor: 'text-warm',
    iconColor: 'text-warm',
  },
  danger: {
    icon: <AlertCircle size={16} />,
    border: 'border-[#F87171]/30',
    bg: 'bg-[#F87171]/5',
    titleColor: 'text-[#F87171]',
    iconColor: 'text-[#F87171]',
  },
};

const defaultTitles: Record<CalloutType, string> = {
  note: 'Note',
  tip: 'Tip',
  warning: 'Warning',
  danger: 'Danger',
};

export function Callout({ type = 'note', title, children }: CalloutProps) {
  const c = config[type];
  const label = title ?? defaultTitles[type];

  return (
    <div
      className={`my-6 rounded-[14px] border ${c.border} ${c.bg} px-5 py-4 not-prose`}
    >
      <div className={`flex items-center gap-2 font-semibold text-sm mb-2 ${c.titleColor}`}>
        <span className={c.iconColor}>{c.icon}</span>
        {label}
      </div>
      <div className="text-sm text-secondary leading-relaxed [&_p]:mb-1 [&_p:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
