import SocialLink from "../ui/SocialLink";

function HeroSection({ profile, socialLinks }) {
  return (
    <section id="top" className="section-shell overflow-hidden">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-moss">{profile.location}</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-none tracking-tight text-ink md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-medium text-clay md:text-2xl">{profile.role}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink/75 md:text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cloud hover:bg-moss"
            >
              Let&apos;s work together
            </a>
            <a
              href={profile.resumeUrl}
              download="Ayush-Kumar-Resume.pdf"
              className="rounded-full border border-ink/10 bg-cloud px-6 py-3 text-sm font-semibold text-ink hover:border-clay hover:text-clay"
            >
              View Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <SocialLink key={link.label} link={link} />
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-ink/10 bg-ink p-8 text-cloud">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Why this setup works</p>
          <p className="mt-5 text-2xl font-semibold leading-tight">
            Simple structure, scalable components, and a clean Vercel deployment path.
          </p>
          <p className="mt-4 text-base leading-7 text-cloud/75">{profile.summary}</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-cloud/10 bg-cloud/5 p-4">
              <p className="text-3xl font-bold">90+</p>
              <p className="mt-2 text-sm text-cloud/70">Lighthouse-friendly foundation</p>
            </div>
            <div className="rounded-2xl border border-cloud/10 bg-cloud/5 p-4">
              <p className="text-3xl font-bold">1-click</p>
              <p className="mt-2 text-sm text-cloud/70">Vercel import and deploy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
