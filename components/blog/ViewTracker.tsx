'use client';

import { useEffect, useState } from 'react';

interface ViewTrackerProps {
  slug: string;
  initialViews: number;
}

export function ViewTracker({ slug, initialViews }: ViewTrackerProps) {
  const [views, setViews] = useState(initialViews ?? 0);

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: 'POST' })
      .then((r) => r.json())
      .then((data) => setViews(data.views))
      .catch(() => {});
  }, [slug]);

  if (views < 100) return null;

  return (
    <span>
      {' · '}
      {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
    </span>
  );
}
