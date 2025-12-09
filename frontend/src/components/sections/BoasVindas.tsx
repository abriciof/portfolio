import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function BoasVindas(){
    return (
       <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-black leading-tight">
              Full Stack
            <span className="bg-brutal-cyan px-4 py-2 inline-block brutal-border brutal-shadow rotate-[-2deg]">
              Developer  
            </span>

          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Transformando ideias em experiências digitais completas. Backend robusto, frontend elegante.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <FaGithub size={32} />
            <FaLinkedin size={32}/>
            <MdEmail size={32}/>
         
          </div>
        </div>
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="w-80 h-80 brutal-border brutal-shadow bg-brutal-magenta rotate-3 overflow-hidden">
            <img
              src="./src/assets/img/foto-perfil.png"
              alt="Foto do perfil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
    );
}