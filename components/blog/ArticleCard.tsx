import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import type { PostMeta } from '@/lib/types';

const categoryColors: Record<string, string> = {
  React: 'text-accent bg-accent/10 border-accent/20',
  TypeScript: 'text-primary bg-primary/10 border-primary/20',
  Architecture: 'text-warm bg-warm/10 border-warm/20',
  Performance: 'text-[#4ADE80] bg-[#4ADE80]/10 border-[#4ADE80]/20',
  CSS: 'text-[#F472B6] bg-[#F472B6]/10 border-[#F472B6]/20',
  'State Management': 'text-accent bg-accent/10 border-accent/20',
  Testing: 'text-[#FB923C] bg-[#FB923C]/10 border-[#FB923C]/20',
  'Next.js': 'text-text bg-elevated border-border',
  Engineering: 'text-primary bg-primary/10 border-primary/20',
  AI: 'text-warm bg-warm/10 border-warm/20',
};

interface ArticleCardProps {
  post: PostMeta;
  featured?: boolean;
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  const tagStyle = categoryColors[post.category] ?? 'text-muted bg-elevated border-border';

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group block bg-surface border border-border rounded-[20px] p-6
        hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(124,92,255,0.12)]
        transition-all duration-200 ${featured ? 'h-full' : ''}`}
    >
      {/* Category tag */}
      <span
        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${tagStyle} mb-4`}
      >
        {post.category}
      </span>

      {/* Title */}
      <h3
        className={`font-heading font-bold text-text group-hover:text-primary transition-colors leading-snug mb-3 ${
          featured ? 'text-xl' : 'text-lg'
        }`}
      >
        {post.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-2">
        {post.description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <Clock size={12} />
          {post.readTime}
        </span>
        <span className="flex items-center gap-1.5">
          <Calendar size={12} />
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </span>
      </div>
    </Link>
  );
}
