export default function Footer() {
  return (
    <footer className="bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-emerald-400 to-lime-400" />
            <span className="text-sm font-semibold text-white">Heather</span>
          </div>
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} Heather Energy, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-neutral-400">
            <a href="#technology" className="hover:text-white">Technology</a>
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
