import { stackGroups } from "../../data/portfolio";

export default function Stack() {
  return (
    <section id="stack" className="section-frame px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="sticker rotate-[-2deg] bg-[var(--cyan)] text-black">
            Stack em destaque
          </p>
          <h2 className="mt-6 font-display text-3xl text-black sm:text-4xl">
            Tecnologias que aparecem com frequência no meu trabalho
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <div
              key={group.title}
              className="neo-window bg-white"
            >
              <div className="neo-window-bar bg-[var(--yellow)] text-black">
                <h3 className="font-display text-lg uppercase tracking-[0.08em]">
                {group.title}
                </h3>
                <div className="neo-window-dots">
                  <span />
                  <span className="!bg-[var(--pink)]" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2 p-7">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="sticker bg-[var(--lime)] text-black"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
