import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Get in touch">
      <p className="max-w-xl text-sm leading-relaxed text-[var(--muted)]">
        For Backend, Full Stack, or software engineering roles, email or
        LinkedIn is the best starting point.
      </p>
      <dl className="mt-6 space-y-2 text-sm">
        <div className="flex flex-wrap gap-2">
          <dt className="text-[var(--muted)]">Email</dt>
          <dd>
            <a
              className="text-[var(--text)] underline-offset-4 hover:text-[var(--accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </dd>
        </div>
        <div className="flex flex-wrap gap-2">
          <dt className="text-[var(--muted)]">GitHub</dt>
          <dd>
            <a
              className="text-[var(--text)] underline-offset-4 hover:text-[var(--accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.githubUrl}
            </a>
          </dd>
        </div>
        <div className="flex flex-wrap gap-2">
          <dt className="text-[var(--muted)]">LinkedIn</dt>
          <dd>
            <a
              className="text-[var(--text)] underline-offset-4 hover:text-[var(--accent)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.linkedinUrl}
            </a>
          </dd>
        </div>
      </dl>
      <div className="mt-6">
        <ButtonLink href={`mailto:${site.email}`}>Contact</ButtonLink>
      </div>
    </Section>
  );
}
