import SectionHeading from "../ui/SectionHeading";

function ContactSection({ profile }) {
  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Ready for freelance work, full-time roles, or collaboration."
            description="Replace the placeholder email and links with your real contact details, and this section is ready to go live."
          />
        </div>

        <div className="rounded-[1.75rem] border border-ink/10 bg-ink p-8 text-cloud">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">Reach out</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 block font-display text-2xl font-bold tracking-tight text-cloud hover:text-gold"
          >
            {profile.email}
          </a>
          <p className="mt-4 text-base leading-7 text-cloud/75">
            This starter is set up as a strong default for Vercel-hosted personal sites: fast static output, simple configuration, and clean component boundaries.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex rounded-full bg-cloud px-5 py-3 text-sm font-semibold text-ink hover:bg-gold"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

