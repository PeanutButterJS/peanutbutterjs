import type { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  filename?: string;
  language?: string;
}

export function CodeBlock({ children, filename, language }: CodeBlockProps) {
  return (
    <div className="my-6 not-prose">
      {(filename || language) && (
        <div className="flex items-center justify-between bg-elevated border border-border border-b-0 rounded-t-[12px] px-4 py-2.5">
          {filename && (
            <span className="text-xs font-mono text-muted">{filename}</span>
          )}
          {language && (
            <span className="text-xs text-muted uppercase tracking-wider">{language}</span>
          )}
        </div>
      )}
      <div
        className={`bg-surface border border-border overflow-x-auto ${
          filename || language ? 'rounded-b-[12px]' : 'rounded-[12px]'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
