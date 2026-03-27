import { useState } from "react";
import {
  aboutSection,
  educationCards,
  heroCards,
  profile,
  projectCards,
  projectsSection,
  serviceCards,
  servicesIntro,
  socialButtons,
} from "./data/portfolio";

function SocialIcon({ type }) {
  if (type === "github") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px] fill-current text-black"
      >
        <path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.33 9.33 0 0 1 12 7.44c.85 0 1.71.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.46.11 2.72.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.6.69.49A10.23 10.23 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (type === "linkedin") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[18px] w-[18px] fill-none stroke-current"
      >
        <path
          d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9h4v12H2z"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="4" cy="4" r="2" strokeWidth="1.9" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px] fill-none stroke-current"
    >
      <path
        d="m8 8-4 4 4 4"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m16 8 4 4-4 4"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 5 10.5 19"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeaderLink({ card }) {
  return (
    <a href={card.href} className="group min-w-[150px] px-2 py-1.5">
      <div className="flex items-start justify-between gap-3 border-t border-black pt-1.5">
        <div>
          <p className="text-sm font-semibold text-black">{card.title}</p>
          <p className="mt-1 max-w-[140px] text-[11px] leading-4 text-black/70">
            {card.description}
          </p>
        </div>
        <span className="text-xs text-black transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          ↗
        </span>
      </div>
    </a>
  );
}

function ServiceIcon({ type, inverted }) {
  const className = inverted
    ? "h-10 w-10 fill-none stroke-white"
    : "h-10 w-10 fill-none stroke-black";

  if (type === "monitor") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
        <rect x="9" y="10" width="30" height="20" rx="3" strokeWidth="1.8" />
        <path d="M18 37h12" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M24 30v7" strokeWidth="1.8" strokeLinecap="round" />
        <path
          d="m18 18 5-5 4 4 6-6"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
        <circle cx="24" cy="14" r="3.5" strokeWidth="1.8" />
        <circle cx="14" cy="24" r="3.5" strokeWidth="1.8" />
        <circle cx="34" cy="24" r="3.5" strokeWidth="1.8" />
        <circle cx="18" cy="35" r="3.5" strokeWidth="1.8" />
        <circle cx="30" cy="35" r="3.5" strokeWidth="1.8" />
        <path d="M21.5 16.4 16.8 21.6" strokeWidth="1.8" />
        <path d="M26.5 16.4 31.2 21.6" strokeWidth="1.8" />
        <path d="M17.3 26.3 20 32" strokeWidth="1.8" />
        <path d="M30.7 26.3 28 32" strokeWidth="1.8" />
        <path d="M17.5 24h13" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className={className}>
      <path
        d="M24 9c4 0 7 3.3 7 7.4 0 2.4-.9 4.4-2.6 5.8l-4.4 3.7-4.4-3.7A7.4 7.4 0 0 1 17 16.4C17 12.3 20 9 24 9Z"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="16.4" r="2.4" strokeWidth="1.8" />
      <path d="m24 25.8 4.6 7.7" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m19.4 33.5 9.2-7.7" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m15.3 18.8-4.8 2.8" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m32.7 18.8 4.8 2.8" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="10.5" cy="22" r="2.2" strokeWidth="1.8" />
      <circle cx="37.5" cy="22" r="2.2" strokeWidth="1.8" />
      <circle cx="19.4" cy="35.5" r="2.2" strokeWidth="1.8" />
      <circle cx="28.6" cy="35.5" r="2.2" strokeWidth="1.8" />
    </svg>
  );
}

function ServiceCard({ card }) {
  const cardClass = card.inverted
    ? "border-black bg-[#171717] text-white"
    : "border-black/30 bg-transparent text-black";
  const linkClass = card.inverted ? "text-white/85" : "text-black/80";

  return (
    <article
      className={`flex min-h-[280px] flex-col justify-between border p-6 ${cardClass}`}
    >
      <div>
        <ServiceIcon type={card.type} inverted={card.inverted} />
        <h3 className="mt-9 max-w-[12rem] font-display text-[1.7rem] font-semibold leading-[1.08] tracking-[-0.03em]">
          {card.title}
        </h3>
      </div>
      <a
        href={card.href}
        className={`inline-flex items-center gap-3 text-xs font-semibold tracking-[0.14em] ${linkClass}`}
      >
        <span>READ MORE</span>
        <span className="text-base">→</span>
      </a>
    </article>
  );
}

function EducationCard({ item }) {
  const className = item.inverted
    ? "border-black bg-[#171717] text-white"
    : "border-black/45 bg-transparent text-black";
  const metaClass = item.inverted ? "text-white/70" : "text-black/65";

  return (
    <article
      className={`grid gap-6 border px-8 py-7 md:grid-cols-[72px_1fr_420px] md:items-center ${className}`}
    >
      <div className="flex h-12 w-12 items-center justify-center bg-black text-lg font-semibold text-white">
        {item.index}
      </div>
      <div>
        <h3 className="font-display text-[1.9rem] font-semibold leading-tight">
          {item.degree}
        </h3>
        <p className={`mt-2 text-sm leading-6 ${metaClass}`}>
          {item.institute} - {item.detail}
        </p>
      </div>
      <div className="flex flex-wrap gap-4 md:justify-self-end">
        {item.cgpa ? (
          <p
            className={`text-sm font-semibold uppercase tracking-[0.12em] ${metaClass}`}
          >
            {item.cgpa}
          </p>
        ) : null}
        {item.percentage ? (
          <p
            className={`text-sm font-semibold uppercase tracking-[0.12em] ${metaClass}`}
          >
            {item.percentage}
          </p>
        ) : null}
        <p
          className={`border-l border-current pl-5 text-sm font-semibold uppercase tracking-[0.12em] ${metaClass}`}
        >
          {item.duration}
        </p>
      </div>
    </article>
  );
}

function ProjectShowcase({ project, onOpen }) {
  return (
    <article className="grid gap-5 lg:grid-cols-[0.92fr_0.88fr] lg:items-stretch">
      <div className="flex justify-center lg:justify-start">
        <div className="relative w-full max-w-[395px] border border-black/15 bg-white shadow-[0_10px_32px_rgba(0,0,0,0.05)]">
          <div className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">
              About Project
            </p>
            <div className="mt-4">
              <h3 className="font-display text-[1.95rem] font-semibold leading-[0.94] tracking-[-0.04em] text-black">
                Devrooms.
                <br />
              </h3>
            </div>
            <div className="mt-5 h-[190px] overflow-hidden bg-[linear-gradient(135deg,#d8ddd8,#c0c8bf)]">
              {project.imageUrl ? (
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-end justify-center">
                  <div className="h-[88%] w-[78%] rounded-t-[160px] bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.6),rgba(255,255,255,0.12)),linear-gradient(180deg,#4c5f4a,#1f2a22)]" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-xl flex-col justify-end">
        <div>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex rounded-full bg-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-white"
          >
            See Details
          </button>
          <h3 className="mt-5 font-display text-[2rem] font-semibold leading-[1.08] tracking-[-0.04em] text-black sm:text-[2.45rem]">
            {project.title}
          </h3>
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 border-b border-black pb-1.5 text-[1.25rem] font-medium tracking-[-0.02em] text-black"
          >
            <span>Visit Website</span>
            <span className="text-[1.45rem]">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function SectionScroll({ href, label = "Scroll Down", className = "" }) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`absolute bottom-10 left-0 z-30 hidden lg:flex lg:flex-col lg:items-center lg:gap-6 ${className}`}
    >
      <p className="rotate-180 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/65 [writing-mode:vertical-rl]">
        Scroll Down
      </p>
      <div className="h-14 w-px bg-black/70" />
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-xl text-white transition hover:-translate-y-1">
        ↓
      </div>
    </a>
  );
}

function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="landing-shell min-h-screen bg-ivory text-black">
      <div className="landing-noise" />

      <main className="relative mx-auto max-w-7xl px-6 py-3 md:px-10 md:py-4 lg:px-16">
        <section id="home" className="relative min-h-screen">
          <header className="absolute left-0 right-0 top-0 z-20 flex flex-col gap-3 py-2 lg:flex-row lg:items-start lg:justify-between">
            <a
              href="#home"
              className="inline-flex w-fit items-center gap-2 border-b border-black pb-1 font-display text-lg font-medium tracking-tight"
            >
              <span className="text-xl leading-none">👋</span>
              it&apos;s me
            </a>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {heroCards.map((card) => (
                <HeaderLink key={card.title} card={card} />
              ))}
            </div>
          </header>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
              <h1 className="font-display text-[2.4rem] font-medium leading-[0.94] tracking-[-0.04em] text-black sm:text-[3.4rem] lg:text-[4.7rem]">
                <span className="font-light">Hello!</span>{" "}
                <span className="font-extrabold">I&apos;m {profile.name}</span>
              </h1>

              <p className="mt-4 max-w-2xl text-[13px] leading-6 text-black/72 sm:text-[14px]">
                {profile.bioStart}{" "}
                <span className="font-bold">{profile.bioBold}</span>,{" "}
                {profile.bioEnd}
              </p>

              <div className="mt-8 flex flex-wrap items-end justify-center gap-6">
                <a
                  href={profile.resumeUrl}
                  className="inline-flex h-10 items-center gap-2.5 border-b border-black pb-1 text-base font-medium text-black"
                >
                  Download Cv
                  <span className="text-base">↓</span>
                </a>

                {socialButtons.map((button) => (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={button.label}
                    className="inline-flex h-10 items-center justify-center border-b border-black pb-1 text-black transition hover:-translate-y-0.5"
                  >
                    <SocialIcon type={button.type} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <SectionScroll href="#about" label="Scroll to next section" />
        </section>

        <section
          id="about"
          className="relative flex min-h-screen flex-col justify-center py-0"
        >
          <SectionScroll href="#projects" label="Scroll to Projects section" />

          <div className="flex flex-1 flex-col justify-center lg:pl-[140px]">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr_220px] lg:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-black" />
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/80">
                    {servicesIntro.eyebrow}
                  </p>
                </div>
                <h2 className="mt-6 max-w-[12rem] font-display text-[2.7rem] font-bold leading-[0.95] tracking-[-0.04em] text-black sm:text-[3.6rem]">
                  {servicesIntro.title}
                </h2>
              </div>

              <p className="max-w-md pt-2 text-sm leading-7 text-black/72 sm:text-[15px]">
                {servicesIntro.description}
              </p>

              <div className="lg:justify-self-end">
                <a
                  href={servicesIntro.ctaHref}
                  className="inline-flex rounded-full bg-black px-8 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white"
                >
                  {servicesIntro.ctaLabel}
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {serviceCards.map((card) => (
                <ServiceCard key={card.title} card={card} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="relative flex min-h-screen flex-col justify-center py-0"
        >
          <SectionScroll href="#education" label="Scroll to About Me section" />

          <div className="translate-y-8 lg:pl-[140px]">
            <div className="mx-auto -translate-y-10 flex w-full max-w-[980px] justify-start text-left">
              <div>
                <h2 className="font-display text-[2.35rem] font-bold leading-[0.96] tracking-[-0.04em] text-black sm:text-[3rem]">
                  {projectsSection.eyebrow}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-black/70 sm:text-[14px]">
                  {projectsSection.description}
                </p>
              </div>
            </div>

            <div className="mx-auto mt-9 w-full max-w-[980px]">
              <ProjectShowcase
                project={projectCards[0]}
                onOpen={setActiveProject}
              />
            </div>
          </div>
        </section>

        <section
          id="education"
          className="relative flex min-h-screen flex-col justify-center py-0"
        >
          <SectionScroll
            href="#home"
            label="Scroll to top section"
            className="lg:bottom-16"
          />

          <div className="lg:pl-[140px]">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
              <h2 className="font-display text-[2.7rem] font-bold leading-[0.96] tracking-[-0.04em] text-black sm:text-[3.6rem]">
                {aboutSection.title}
              </h2>

              <p className="mt-5 max-w-3xl text-[15px] font-medium leading-8 text-black/88 sm:text-[17px]">
                {aboutSection.description}
              </p>
            </div>

            <div className="mx-auto mt-10 grid w-full max-w-5xl gap-5">
              {educationCards.map((item) => (
                <EducationCard key={item.index} item={item} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {activeProject ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-6 py-8 backdrop-blur-[2px]">
          <div className="relative w-full max-w-2xl border border-black/15 bg-ivory p-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] sm:p-10">
            <button
              type="button"
              onClick={() => setActiveProject(null)}
              className="absolute right-5 top-5 text-sm font-semibold uppercase tracking-[0.14em] text-black/55"
            >
              Close
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/55">
              {activeProject.category}
            </p>
            <h3 className="mt-4 max-w-xl font-display text-[2.2rem] font-bold leading-[1.02] tracking-[-0.04em] text-black sm:text-[2.8rem]">
              {activeProject.title}
            </h3>
            <p className="mt-6 text-[15px] leading-8 text-black/82">
              {activeProject.description}
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-black/55">
                Technologies Used
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {activeProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-black/20 px-4 py-2 text-sm font-medium text-black"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
