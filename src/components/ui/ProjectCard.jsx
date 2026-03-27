function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-sand/70 p-6">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-clay">Featured Project</p>
      <h3 className="mt-4 font-display text-2xl font-bold text-ink">{project.title}</h3>
      <p className="mt-3 flex-1 text-base leading-7 text-ink/70">{project.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/10 bg-cloud px-3 py-1 text-sm font-medium text-ink/80"
          >
            {item}
          </span>
        ))}
      </div>
      <a
        href={project.href}
        className="mt-6 inline-flex w-fit items-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cloud hover:bg-moss"
      >
        View Project
      </a>
    </article>
  );
}

export default ProjectCard;

