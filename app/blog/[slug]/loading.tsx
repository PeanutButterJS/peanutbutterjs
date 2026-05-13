export default function BlogPostLoading() {
  return (
    <div className="max-w-[680px] mx-auto px-6 pt-10 pb-24 animate-pulse">
      <div className="h-4 w-32 bg-surface rounded mb-10" />

      <div className="mb-10">
        <div className="h-8 w-3/4 bg-surface rounded mb-3" />
        <div className="h-8 w-1/2 bg-surface rounded mb-4" />
        <div className="h-3 w-48 bg-surface rounded" />
      </div>

      <div className="space-y-3">
        <div className="h-4 w-full bg-surface rounded" />
        <div className="h-4 w-full bg-surface rounded" />
        <div className="h-4 w-5/6 bg-surface rounded" />
        <div className="h-4 w-full bg-surface rounded" />
        <div className="h-4 w-4/5 bg-surface rounded" />
        <div className="h-4 w-full bg-surface rounded" />
        <div className="h-4 w-2/3 bg-surface rounded" />
      </div>
    </div>
  );
}
