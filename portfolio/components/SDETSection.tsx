import { Section } from "@/components/Section";
import { sdetCopy, sdetWorkflow } from "@/data/sdet";

export function SDETSection() {
  return (
    <Section id="sdet" eyebrow="SDET" title="Testing and quality engineering">
      <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[var(--muted)]">
        {sdetCopy.intro}
      </p>

      <ol className="mb-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center">
        {sdetWorkflow.map((step, index) => (
          <li
            key={step}
            className="flex flex-col items-center sm:flex-row sm:flex-1"
          >
            <div className="w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-3 text-center text-sm font-medium text-[var(--text)]">
              {step}
            </div>
            {index < sdetWorkflow.length - 1 ? (
              <span
                className="py-1 font-mono text-[var(--accent)] sm:px-1 sm:py-0"
                aria-hidden
              >
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="grid gap-4 sm:grid-cols-3">
        {sdetCopy.points.map((point) => (
          <article
            key={point.title}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
          >
            <h3 className="text-sm font-semibold text-[var(--text)]">
              {point.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
              {point.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
