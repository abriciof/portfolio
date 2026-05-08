import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../../data/portfolio";

const contacts = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/abriciof",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/abriciof",
    href: profile.github,
    icon: Github,
  },
  {
    label: "E-mail",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="section-frame px-4 py-16 sm:px-6 sm:py-20">
      <div className="neo-window contact-shell mx-auto w-full bg-[var(--orange)] sm:rotate-[-1deg]">
        <div className="neo-window-bar bg-[var(--blue)]">
          <span className="font-display text-sm uppercase tracking-[0.16em]">
            contato.net
          </span>
          <div className="neo-window-dots">
            <span />
            <span className="!bg-[var(--pink)]" />
            <span className="!bg-[var(--lime)]" />
          </div>
        </div>
        <div className="neo-window-content grid gap-10 p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="sticker bg-[var(--lime)] text-black sm:rotate-[2deg]">
              Contato
            </p>
            <h2 className="mt-6 font-display text-3xl text-black sm:text-4xl">
              Vamos conversar sobre software, dados, automação ou IA
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-soft)]">
              Se você quiser trocar ideia sobre projetos, colaborações ou
              oportunidades, estes são os canais mais diretos.
            </p>
            <div className="mt-6 grid gap-3 sm:hidden">
              <a
                href={`mailto:${profile.email}`}
                className="neo-button justify-center bg-[var(--blue)] text-white"
              >
                Enviar e-mail
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="neo-button justify-center bg-[var(--yellow)] text-black"
              >
                Chamar no LinkedIn
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="neo-card group flex items-center justify-between gap-4 bg-[var(--yellow)] px-4 py-4 transition hover:-translate-y-1 sm:px-5 sm:py-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center border-4 border-[var(--border-hard)] bg-[var(--pink)] text-black">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-black uppercase text-[var(--blue)]">
                        {contact.label}
                      </p>
                      <p className="break-all text-sm font-bold text-black sm:text-base">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-black transition group-hover:-rotate-12" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
