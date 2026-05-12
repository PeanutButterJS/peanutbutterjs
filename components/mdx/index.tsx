/**
 * MDX component registry — import this and pass to <MDXRemote components={mdxComponents} />
 *
 * Available custom components for blog posts:
 *
 * <Callout type="note|tip|warning|danger" title="optional">…</Callout>
 * <Quote author="Name" source="optional">…</Quote>
 * <ProCon pros={[…]} cons={[…]} />
 * <Stat value="42" label="label" description="optional" />
 * <StatsRow stats={[{value, label, description}, …]} />
 * <Divider label="optional section label" />
 * <AuthorNote>…</AuthorNote>
 * <ImageCaption src="…" alt="…" caption="optional" />
 * <CodeBlock filename="file.ts" language="ts">…</CodeBlock>
 */

import type { MDXComponents } from 'mdx/types';
import { Callout } from './Callout';
import { Quote } from './Quote';
import { ProCon } from './ProCon';
import { Stat, StatsRow } from './Stat';
import { Divider } from './Divider';
import { AuthorNote } from './AuthorNote';
import { ImageCaption } from './ImageCaption';
import { CodeBlock } from './CodeBlock';

export const mdxComponents: MDXComponents = {
  // Custom components
  Callout,
  Quote,
  ProCon,
  Stat,
  StatsRow,
  Divider,
  AuthorNote,
  ImageCaption,
  CodeBlock,
};

export { Callout, Quote, ProCon, Stat, StatsRow, Divider, AuthorNote, ImageCaption, CodeBlock };
