function SocialLink({ link }) {
  return (
    <a
      href={link.href}
      target={link.href.startsWith("http") ? "_blank" : undefined}
      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
      className="rounded-full border border-ink/10 bg-cloud px-4 py-2 text-sm font-semibold text-ink hover:border-moss hover:text-moss"
    >
      {link.label}
    </a>
  );
}

export default SocialLink;

