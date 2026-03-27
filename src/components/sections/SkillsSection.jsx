import SectionHeading from "../ui/SectionHeading";
import SkillPill from "../ui/SkillPill";

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Core Skills"
        title="A clear, scannable skills section for recruiters and clients."
        description="This format keeps the stack readable while giving you room to evolve into case studies, service areas, or certifications later."
      />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((skill) => (
          <SkillPill key={skill} label={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;

