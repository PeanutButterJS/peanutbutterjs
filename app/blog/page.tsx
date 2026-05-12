import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'All posts',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[680px] mx-auto px-6 pt-12 pb-24">
      <h1 className="font-heading font-bold text-xl text-text mb-8">All posts</h1>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <ul className="space-y-1">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex items-baseline justify-between gap-6 py-2 rounded-lg -mx-2 px-2 hover:bg-elevated transition-colors duration-150"
              >
                <span className="text-text group-hover:text-primary transition-colors font-medium leading-snug">
                  {post.title}
                </span>
                <span className="shrink-0 text-sm text-muted tabular-nums">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
