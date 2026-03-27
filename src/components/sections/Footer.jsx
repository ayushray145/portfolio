function Footer({ profile }) {
  return (
    <footer className="px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-ink/60 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React, Tailwind CSS, and Vite for smooth Vercel deployment.</p>
      </div>
    </footer>
  );
}

export default Footer;
