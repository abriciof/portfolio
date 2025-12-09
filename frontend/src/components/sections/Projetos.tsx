import Button from "../ui/Button";
import { Code, ExternalLink } from "lucide-react";
import projeto from "../../assets/img/projeto.png";

export default function Projetos() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com carrinho, checkout e painel admin. Stack: React, Node.js, PostgreSQL.",
      tags: ["React", "Node.js", "PostgreSQL"],
      color: "bg-brutal-yellow",
      image: projeto,
      demoUrl: "https://example.com/ecommerce-demo",
    },
    {
      title: "Task Management API",
      description: "API RESTful robusta para gerenciamento de tarefas com autenticação JWT e documentação Swagger.",
      tags: ["Express", "MongoDB", "JWT"],
      color: "bg-brutal-cyan",
      image: projeto,
      demoUrl: "https://example.com/task-api-demo",
    },
    {
      title: "Real-time Chat App",
      description: "Aplicação de chat em tempo real com rooms, notificações e histórico persistente usando WebSockets.",
      tags: ["Socket.io", "React", "Redis"],
      color: "bg-brutal-magenta",
      image: projeto,
      demoUrl: "https://example.com/chat-demo",
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard interativo com visualizações de dados e relatórios customizáveis para análise de métricas.",
      tags: ["Next.js", "TypeScript", "Charts"],
      color: "bg-brutal-lime",
      image: projeto,
      demoUrl: "https://example.com/analytics-demo",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-12">
          <span className="bg-brutal-magenta px-4 py-2 brutal-border brutal-shadow inline-block rotate-[1deg]">
            Projetos
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="brutal-border brutal-shadow bg-card space-y-4 animate-fade-in hover:scale-[1.02] transition-transform overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative group"
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-12 h-12 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
              <div className="p-8 space-y-4">
                <div className={`w-full h-4 ${project.color} brutal-border mb-4`} />
                <h3 className="text-2xl font-black">{project.title}</h3>
                <p className="text-lg leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                </div>
                <div className="flex gap-4 pt-4">
                  <Button>
                    <Code className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
