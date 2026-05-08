import { useState } from "react";
import { profile } from "../data/portfolio";
import type { ThemeName } from "../pages/Index";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const themes: Array<{ id: ThemeName; label: string }> = [
  { id: "earth", label: "Earth" },
  { id: "graphite", label: "Graphite" },
  { id: "dark", label: "Dark" },
  { id: "vivid", label: "Vivid" },
];

type NavbarProps = {
  theme: ThemeName;
  onThemeChange: (theme: ThemeName) => void;
};

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="section-frame sticky top-0 z-50 px-4 pt-3 sm:px-6">
      <div className="neo-card navbar-shell mx-auto flex w-full items-center justify-between bg-[var(--yellow)] px-5 py-4">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center border-4 border-[var(--border-hard)] bg-[var(--blue)] font-display text-sm text-white">
            FG
          </span>
          <div>
            <p className="font-display text-base text-black">
              {profile.name}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-black/70">
              Portfolio
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="theme-dropdown neo-card bg-[var(--bg-panel)] px-3 py-2">
            <label className="theme-dropdown-label" htmlFor="theme-select-desktop">
              Tema
            </label>
            <select
              id="theme-select-desktop"
              className="theme-select"
              value={theme}
              onChange={(event) => onThemeChange(event.target.value as ThemeName)}
            >
              {themes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

          <ul className="flex items-center gap-3 text-sm font-extrabold uppercase tracking-[0.08em] text-black">
            {links.map((link) => (
              <li key={link.href}>
                <a className="sticker bg-white transition hover:-rotate-2" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="neo-button bg-[var(--blue)] text-white"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center border-4 border-[var(--border-hard)] bg-[var(--blue)] text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
          aria-label="Abrir menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="neo-card navbar-shell mx-auto mt-3 w-full bg-white px-6 py-4 lg:hidden">
          <div className="theme-dropdown mb-5 bg-[var(--bg-panel)] p-3">
            <label className="theme-dropdown-label" htmlFor="theme-select-mobile">
              Tema
            </label>
            <select
              id="theme-select-mobile"
              className="theme-select"
              value={theme}
              onChange={(event) => onThemeChange(event.target.value as ThemeName)}
            >
              {themes.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <ul className="space-y-4 text-sm font-bold uppercase tracking-[0.08em] text-black">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  className="block border-b-4 border-black pb-2"
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="neo-button justify-center bg-[var(--blue)] text-white"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                Ver GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
