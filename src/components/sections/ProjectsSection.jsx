import ProjectCard from "../ui/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects that communicate value quickly."
        description="Keep your strongest work here. This section is already organized around reusable cards so adding or removing projects stays easy."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

