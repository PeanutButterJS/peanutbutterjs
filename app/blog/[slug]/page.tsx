import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getPostSlugs } from '@/lib/posts';
import { mdxComponents } from '@/components/mdx';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = getPostBySlug(slug);
    return {
      title: post.title,
      description: post.description,
      openGraph: {
        title: post.title,
        description: post.description,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
      },
    };
  } catch {
    return { title: 'Post not found' };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <article className="max-w-[680px] mx-auto px-6 pt-10 pb-24">
      {/* Back */}
      <Link
        href="/"
        className="text-sm text-muted hover:text-text transition-colors mb-10 inline-block"
      >
        ← peanutbutterjs
      </Link>

      {/* Header */}
      <header className="mb-10">
        <h1 className="font-heading font-bold text-[2rem] leading-[1.2] text-text mb-4">
          {post.title}
        </h1>
        <p className="text-sm text-muted">
          {new Date(post.date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
          {' · '}
          {post.readTime}
        </p>
      </header>

      {/* Body */}
      <div className="prose">
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [
                [rehypePrettyCode, { theme: 'one-dark-pro', keepBackground: false }],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
