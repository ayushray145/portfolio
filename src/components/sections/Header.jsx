function Header({ navItems }) {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-sand/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-xl font-bold tracking-tight text-ink">
          DevPortfolio
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-ink/70 hover:text-ink"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;

