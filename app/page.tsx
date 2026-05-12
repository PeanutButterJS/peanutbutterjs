import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Post } from '@/lib/types';

function groupByYear(posts: Post[]): Record<number, Post[]> {
  return posts.reduce(
    (acc, post) => {
      const year = new Date(post.date).getFullYear();
      (acc[year] ??= []).push(post);
      return acc;
    },
    {} as Record<number, Post[]>
  );
}

export default function HomePage() {
  const posts = getAllPosts();
  const byYear = groupByYear(posts);
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <div className="max-w-[680px] mx-auto px-6 pt-16 pb-24">
      {/* Site intro */}
      <header className="mb-14 flex flex-col items-start">
        {/* Spoon image */}
        <div className="relative">

          <Image
            src="/spoon1.png"
            alt="PeanutButterJS spoon"
            width={70}
            height={70}
            priority
            className="block drop-shadow-[0_8px_24px_rgba(200,120,32,0.25)]"
          />
        </div>

        <h1 className="font-heading font-bold text-2xl text-text mb-2">
          peanutbutter<span className="text-primary">js</span>
        </h1>
        <p className="text-muted">
          Practical frontend engineering. Smooth code. Fast delivery.
        </p>
      </header>

      {/* Post list grouped by year */}
      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        years.map((year) => (
          <section key={year} className="mb-10">
            <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">
              {year}
            </p>
            <ul className="space-y-1">
              {byYear[year].map((post) => (
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
                      })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))
      )}
    </div>
  );
}
