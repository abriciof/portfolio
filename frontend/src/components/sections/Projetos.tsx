import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "../../data/portfolio";

export default function Projetos() {
  return (
    <section id="projetos" className="section-frame px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="sticker bg-[var(--pink)] text-black sm:rotate-[1deg]">
              Projetos em evidência
            </p>
            <h2 className="mt-6 font-display text-3xl text-black sm:text-4xl">
              Repositórios que representam bem meu jeito de construir software
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="neo-window group flex h-full flex-col transition duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 0.08}s`,
                transform: `rotate(${index % 2 === 0 ? "-0.5deg" : "0.5deg"})`,
              }}
            >
              <div
                className={`neo-window-bar ${index % 3 === 0 ? "bg-[var(--cyan)]" : index % 3 === 1 ? "bg-[var(--lime)]" : "bg-[var(--yellow)]"} text-black`}
              >
                <span className="font-display text-sm uppercase tracking-[0.12em]">
                  repo://featured
                </span>
                <div className="neo-window-dots">
                  <span />
                  <span className="!bg-[var(--pink)]" />
                  <span className="!bg-white" />
                </div>
              </div>
              <div className="neo-window-content flex flex-1 flex-col p-5 sm:p-7">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--blue)]">
                    Projeto
                  </p>
                  <h3 className="text-2xl font-black text-black">
                    {project.title}
                  </h3>
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center border-4 border-[var(--border-hard)] bg-[var(--pink)] text-black transition group-hover:-rotate-6"
                  aria-label={`Abrir ${project.title} no GitHub`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>

              <p className="text-base leading-8 text-[var(--text-soft)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="sticker bg-[var(--lime)] text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="neo-button w-full justify-center bg-[var(--cyan)] text-black sm:w-auto"
                >
                  <Github className="h-4 w-4" />
                  Ver repositório
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
