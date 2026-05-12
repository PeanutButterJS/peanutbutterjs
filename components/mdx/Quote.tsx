import type { ReactNode } from 'react';

interface QuoteProps {
  author?: string;
  source?: string;
  children: ReactNode;
}

export function Quote({ author, source, children }: QuoteProps) {
  return (
    <figure className="my-8 not-prose">
      <blockquote className="relative border-l-[3px] border-primary pl-6 py-1">
        <div
          className="absolute top-0 left-5 text-6xl leading-none text-primary/20 font-serif select-none"
          aria-hidden
        >
          &ldquo;
        </div>
        <div className="text-[1.05rem] text-secondary leading-relaxed italic relative z-10">
          {children}
        </div>
      </blockquote>
      {(author || source) && (
        <figcaption className="mt-3 pl-6 flex items-center gap-2 text-sm text-muted">
          <span className="w-4 h-px bg-border" aria-hidden />
          <span>
            {author}
            {source && (
              <span className="italic">, {source}</span>
            )}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
