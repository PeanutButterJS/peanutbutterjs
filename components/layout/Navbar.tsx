import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="max-w-[680px] mx-auto px-6 pt-8 flex items-center justify-between">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-medium text-text transition-colors"
      >
<span>peanutbutter<span className="text-primary">js</span></span>
      </Link>

    </nav>
  );
}
