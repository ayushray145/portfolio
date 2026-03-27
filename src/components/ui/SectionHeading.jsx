function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-moss">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-ink/70">{description}</p> : null}
    </div>
  );
}

export default SectionHeading;

