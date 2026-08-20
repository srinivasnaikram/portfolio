import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
};

export function Section({ id, title, eyebrow, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 border-t border-[var(--border)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {eyebrow ? (
          <p className="mb-2 font-mono text-xs tracking-[0.16em] text-[var(--accent)] uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h2
          id={`${id}-heading`}
          className="mb-8 text-2xl font-semibold tracking-tight text-[var(--text)] sm:text-3xl"
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
