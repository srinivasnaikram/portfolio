"use client";

import { useState } from "react";
import { navItems, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          {site.name}
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] px-3 py-2 text-sm text-[var(--text)] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-2.5 py-1.5 text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open ? (
        <ul
          id="mobile-menu"
          className="border-t border-[var(--border)] px-5 py-3 md:hidden"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={close}
                className="block rounded-md py-2.5 text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </header>
  );
}
