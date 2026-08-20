import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-5xl px-5 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16"
      aria-labelledby="hero-heading"
    >
      <p className="mb-4 font-mono text-xs tracking-[0.18em] text-[var(--accent)] uppercase">
        {site.location}
      </p>
      <h1
        id="hero-heading"
        className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text)] sm:text-5xl"
      >
        {site.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-[var(--muted)] sm:text-xl">
        {site.headline}
      </p>
      <p className="mt-5 max-w-2xl text-[0.975rem] leading-relaxed text-[var(--text)]/90">
        {site.intro}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="#projects">View Projects</ButtonLink>
        <ButtonLink href={site.resumeUrl} variant="secondary" download>
          Download Resume
        </ButtonLink>
        <ButtonLink href={site.githubUrl} variant="ghost">
          GitHub
        </ButtonLink>
        <ButtonLink href={site.linkedinUrl} variant="ghost">
          LinkedIn
        </ButtonLink>
      </div>
    </section>
  );
}
