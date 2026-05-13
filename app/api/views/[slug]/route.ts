import { type NextRequest } from 'next/server';
import { getViews, incrementViews } from '@/lib/views';

interface RouteContext {
  params: Promise<{ slug: string }>;
}

export async function GET(_req: NextRequest, { params }: RouteContext) {
  const { slug } = await params;
  const views = await getViews(slug);
  return Response.json({ views });
}

export async function POST(_req: NextRequest, { params }: RouteContext) {
  const { slug } = await params;
  await incrementViews(slug);
  const views = await getViews(slug);
  return Response.json({ views });
}
