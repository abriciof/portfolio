import { ArrowUpRight, GraduationCap, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import fotoPerfil from "../../assets/img/foto-perfil.png";
import { highlights, profile } from "../../data/portfolio";

export default function BoasVindas() {
  return (
    <section
      id="inicio"
      className="section-frame relative overflow-hidden px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-20"
    >
      <div className="shape-grid" aria-hidden="true">
        <span className="shape-a" />
        <span className="shape-b" />
        <span className="shape-c" />
        <span className="shape-d" />
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative order-1 animate-enter-delay lg:order-2">
          <div className="portrait-tag absolute left-0 top-1 sticker bg-[var(--blue)] text-white sm:-left-1 sm:top-10 sm:rotate-[-7deg]">
            Full Stack + Dados + IA
          </div>
          <div className="portrait-tag absolute right-0 bottom-2 sticker bg-[var(--yellow)] text-black sm:-right-1 sm:bottom-8 sm:rotate-[8deg]">
            Manaus / Brasil
          </div>

          <div className="portrait-stage">
            <div className="portrait-layer portrait-layer-one" />
            <div className="portrait-layer portrait-layer-two" />
            <div className="portrait-layer portrait-layer-three" />

            <div className="portrait-ring">
              <div className="portrait-photo">
                <img
                  src={fotoPerfil}
                  alt="Foto de perfil de Fabrício Guimarães"
                />
                <div className="portrait-tint" aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:mt-6">
            {highlights.map((item, index) => (
              <div
                key={item}
                className={`neo-card px-4 py-3 text-sm font-semibold leading-6 text-black ${
                  index % 2 === 0 ? "bg-white" : "bg-[var(--yellow)]"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="order-2 space-y-6 animate-enter lg:order-1 lg:space-y-8">
          <div className="sticker bg-[var(--lime)] text-white sm:-rotate-2">
            Portfolio de desenvolvimento
          </div>

          <div className="neo-window max-w-4xl">
            <div className="neo-window-bar">
              <span className="font-display text-sm uppercase tracking-[0.16em]">
                fabricio.exe
              </span>
              <div className="neo-window-dots">
                <span />
                <span className="!bg-[var(--orange)]" />
                <span className="!bg-[var(--cyan)]" />
              </div>
            </div>
            <div className="neo-window-content space-y-5 p-5 sm:p-8">
              <h1 className="font-display text-4xl leading-none text-balance text-black sm:text-6xl lg:text-7xl">
                {profile.name}
              </h1>
              <p className="max-w-3xl text-base font-bold leading-7 text-[var(--blue)] sm:text-xl sm:leading-8">
                {profile.headline}
              </p>
              <p className="max-w-3xl text-sm leading-7 text-[var(--text-soft)] sm:text-lg sm:leading-8">
                {profile.summary}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="neo-button justify-center bg-[var(--pink)] text-white sm:hidden"
            >
              Entrar em contato
              <MdEmail className="h-4 w-4" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="neo-button justify-center bg-[var(--blue)] text-white sm:justify-start sm:rotate-[-2deg]"
            >
              Ver projetos
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="neo-button justify-center bg-[var(--yellow)] text-black sm:justify-start sm:rotate-[1deg]"
            >
              Falar no LinkedIn
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="neo-card rotate-[-1deg] bg-[var(--lime)] p-4 text-black">
              <div className="mb-2 flex items-center gap-2 text-black">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-black uppercase">Base</span>
              </div>
              <p className="text-sm font-semibold">{profile.location}</p>
            </div>
            <div className="neo-card rotate-[1deg] bg-[var(--yellow)] p-4 text-black">
              <div className="mb-2 flex items-center gap-2 text-black">
                <GraduationCap className="h-4 w-4" />
                <span className="text-sm font-black uppercase">Formação atual</span>
              </div>
              <p className="text-sm font-semibold">{profile.education}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-black sm:gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="sticker bg-white transition hover:bg-[var(--yellow)] sm:rotate-[-3deg]"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="sticker bg-white transition hover:bg-[var(--cyan)] sm:rotate-[2deg]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="sticker bg-white transition hover:bg-[var(--lime)]"
              aria-label="Email"
            >
              <MdEmail size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
