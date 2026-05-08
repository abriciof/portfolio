import { currentFocus, highlights } from "../../data/portfolio";

export default function Sobre() {
  return (
    <section id="sobre" className="section-frame px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="neo-window rotate-[-1deg]">
          <div className="neo-window-bar bg-[var(--cyan)] text-black">
            <span className="font-display text-sm uppercase tracking-[0.16em]">
              sobre.txt
            </span>
            <div className="neo-window-dots">
              <span />
              <span className="!bg-[var(--pink)]" />
              <span className="!bg-[var(--lime)]" />
            </div>
          </div>
          <div className="neo-window-content p-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[var(--blue)]">
            Sobre mim
          </p>
          <h2 className="font-display text-3xl text-black sm:text-4xl">
            Engenharia, pesquisa e produto andando juntos
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--text-soft)]">
            Meu trabalho mistura construção de software, arquitetura, dados e
            pesquisa aplicada. Gosto de projetar sistemas com clareza, manter a
            base de código sustentável e conectar backend, frontend e
            infraestrutura de forma pragmática.
          </p>
          <p className="mt-4 text-base leading-8 text-[var(--text-soft)]">
            No GitHub, você vai encontrar desde APIs e aplicações distribuídas
            até ETL, bancos de dados, automação e projetos ligados a IA. A
            ideia aqui é mostrar repertório técnico sem perder o foco em
            problemas reais e entrega consistente.
          </p>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="neo-card rotate-[2deg] bg-[var(--lime)] p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-black">
              Áreas de atuação
            </p>
            <div className="grid gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="border-4 border-[var(--border-hard)] bg-white px-4 py-3 text-sm font-semibold leading-6 text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="neo-card rotate-[-1deg] bg-[var(--pink)] p-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-black">
              Atualmente focado em
            </p>
            <div className="grid gap-3">
              {currentFocus.map((item) => (
                <div
                  key={item}
                  className="border-4 border-[var(--border-hard)] bg-white px-4 py-3 text-sm font-semibold leading-6 text-black"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
