import SectionHeading from "../ui/SectionHeading";

function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Professional highlights with room to grow into detailed case studies."
        description="Each entry is intentionally brief so you can start simple, then expand into measurable outcomes as your portfolio matures."
      />
      <div className="mt-10 space-y-5">
        {experience.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="rounded-[1.75rem] border border-ink/10 bg-sand/70 p-6"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold text-ink">{item.title}</h3>
                <p className="mt-1 text-base font-medium text-clay">{item.company}</p>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">{item.period}</p>
            </div>
            <p className="mt-4 max-w-3xl text-base leading-7 text-ink/70">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

