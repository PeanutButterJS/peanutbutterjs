@AGENTS.md

# PeanutButterJS

Personal frontend engineering blog. Simple, minimal — inspired by overreacted.io. Dark only.

## Stack

- **Next.js 16** — App Router, TypeScript
- **Tailwind CSS v4** — config lives in `app/globals.css` via `@theme` blocks, not `tailwind.config.ts`
- **next-mdx-remote v6** — use `next-mdx-remote/rsc` (Server Component API) for MDX rendering
- **gray-matter** — frontmatter parsing
- **rehype-pretty-code + shiki** — syntax highlighting in blog posts
- **framer-motion** — available but use sparingly
- **lucide-react v1** — brand icons (GitHub, Twitter) were removed in v1; use inline SVGs instead

## Brand tokens (use these Tailwind classes)

```
bg-background   #0B1020   page background
bg-surface      #12182B   subtle containers
bg-elevated     #18213A   hover states
text-primary    #7C5CFF   purple — links, hover, accents
text-accent     #41D1FF   cyan — secondary highlights
text-warm       #FFC16B   gold — use sparingly
text-text       #B9C3CE   main body text (calm, not harsh white)
text-secondary  #8B95A4
text-muted      #5C6877   timestamps, labels
border-border   #232A3D

font-heading    Sora (Google Font, loaded via next/font)
font-sans       Inter
font-mono       JetBrains Mono
```

## File structure

```
app/
  layout.tsx           root layout — imports Navbar and Footer
  page.tsx             homepage — post list grouped by year
  globals.css          Tailwind v4 theme + prose + code block styles
  blog/
    page.tsx           /blog listing page
    [slug]/page.tsx    individual post page (MDX rendered here)

components/
  layout/
    Navbar.tsx         minimal top nav (logo + "All posts" + GitHub)
    Footer.tsx         single-line footer
  blog/
    ArticleCard.tsx    post card (available but not used on homepage)
  mdx/
    index.tsx          exports all MDX components — pass to MDXRemote
    Callout.tsx
    Quote.tsx
    ProCon.tsx
    Stat.tsx / StatsRow
    Divider.tsx
    AuthorNote.tsx
    ImageCaption.tsx
    CodeBlock.tsx
  ui/
    SpoonLogo.tsx      SVG spoon logo component

lib/
  posts.ts             getAllPosts(), getPostBySlug(), getPostSlugs()
  types.ts             Post, PostMeta types

content/
  blog/
    *.mdx              blog post files — drop here to publish
```

## Adding a blog post

Create `content/blog/your-slug.mdx`. It appears on the homepage automatically.

```yaml
---
title: "Post Title"
description: "One sentence."
date: "2026-05-12"
category: "React"
tags: ["tag1", "tag2"]
readTime: "6 min read"
author: "Aron"
featured: false
---
```

Categories: React, TypeScript, Architecture, CSS, Performance, State Management, Testing, Next.js, Engineering, AI

## MDX components available in posts

```mdx
<Callout type="note|tip|warning|danger" title="optional">...</Callout>
<Quote author="Name" source="optional">...</Quote>
<ProCon pros={["...", "..."]} cons={["...", "..."]} />
<Stat value="42k" label="label" description="optional" />
<StatsRow stats={[{ value, label, description }, ...]} />
<Divider label="optional section label" />
<AuthorNote>personal aside shown with logo</AuthorNote>
<ImageCaption src="..." alt="..." caption="optional" />
<CodeBlock filename="file.ts" language="ts">...</CodeBlock>
```

## Design rules

- Dark only — no light mode
- Single column, `max-w-[680px]`, centered
- Minimal UI — no hero sections, no marketing copy, no gradients on the homepage
- The writing is the product; chrome gets out of the way
- `prose` class on the article body activates blog typography from globals.css
