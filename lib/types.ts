export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  author: string;
  coverImage?: string;
  featured?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

export type Category =
  | 'React'
  | 'TypeScript'
  | 'Architecture'
  | 'CSS'
  | 'Performance'
  | 'State Management'
  | 'Testing'
  | 'Next.js'
  | 'Engineering'
  | 'AI';
