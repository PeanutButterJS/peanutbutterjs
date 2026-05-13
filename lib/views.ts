import { Redis } from '@upstash/redis';

function getRedis() {
  try {
    const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
    const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;
    if (!url || !token) return null;
    return new Redis({ url, token });
  } catch {
    return null;
  }
}

export async function getViews(slug: string): Promise<number> {
  try {
    const redis = getRedis();
    if (!redis) return 0;
    const views = await redis.get<number>(`views:${slug}`);
    return views ?? 0;
  } catch {
    return 0;
  }
}

export async function incrementViews(slug: string): Promise<void> {
  if (process.env.NODE_ENV !== 'production') return;
  try {
    const redis = getRedis();
    if (!redis) return;
    await redis.incr(`views:${slug}`);
  } catch {
    // Fail silently so a missing KV store never breaks the page
  }
}
