import type { ReactNode } from 'react';
import { SpoonLogo } from '@/components/ui/SpoonLogo';

interface AuthorNoteProps {
  children: ReactNode;
}

export function AuthorNote({ children }: AuthorNoteProps) {
  return (
    <aside className="my-8 not-prose flex gap-4 items-start bg-elevated border border-border rounded-[14px] p-5">
      <div className="shrink-0 w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center">
        <SpoonLogo size={22} />
      </div>
      <div className="text-sm text-secondary leading-relaxed [&_p]:mb-1 [&_p:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}
