export default function Footer() {
  return (
    <footer className="max-w-[680px] mx-auto px-6 py-12 border-t border-border mt-16">
      <p className="text-sm text-muted">
        © {new Date().getFullYear()} PeanutButterJS
      </p>
    </footer>
  );
}
