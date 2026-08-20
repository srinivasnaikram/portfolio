"use client";

import { useMemo, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from "@/data/projects";

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <Section id="projects" eyebrow="Work" title="Projects">
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filter projects"
      >
        {projectFilters.map((item) => {
          const active = item === filter;
          return (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item)}
              className={`rounded-md border px-3 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                active
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              {item}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6">
        {visible.map((project) => (
          <article
            key={project.id}
            className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {project.name}
              </h3>
              <span className="font-mono text-xs text-[var(--accent)]">
                {project.category}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {project.description}
            </p>
            <p className="mt-3 text-sm text-[var(--text)]">
              <span className="font-medium">Problem: </span>
              <span className="text-[var(--muted)]">{project.problem}</span>
            </p>
            <div className="mt-4">
              <h4 className="text-xs font-medium tracking-wide text-[var(--text)] uppercase">
                Technologies
              </h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-[var(--border)] px-2 py-0.5 text-xs text-[var(--muted)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="text-xs font-medium tracking-wide text-[var(--text)] uppercase">
                Key features
              </h4>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--muted)]">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <ButtonLink href={project.githubUrl} variant="secondary">
                  GitHub
                </ButtonLink>
              ) : (
                <span className="font-mono text-xs text-[var(--muted)]">
                  Source is private (internship)
                </span>
              )}
              {project.liveDemoUrl ? (
                <ButtonLink href={project.liveDemoUrl} variant="ghost">
                  Live Demo
                </ButtonLink>
              ) : (
                <span className="font-mono text-xs text-[var(--muted)]">
                  No public demo
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
