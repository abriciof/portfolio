export default function Sobre(){
    return (
        <section id="sobre" className="mb-16">

          <h2 className="text-2xl font-semibold mb-2">Sobre Mim</h2>
            <img src='./src/assets/img/foto-perfil.png' width={250}></img>
          <p className="text-gray-700 ">
            Mestrando em Engenharia da Computação pela Universidade Federal do Amazonas - UFAM. 
            Experiência em desenvolvimento de software com Python, C/C++, Java, Javascript,
            Typescript, assim como conhecimento em APIs, CI/CD, Docker, Banco de Dados Relacional
            e NoSQL, Desenvolvimento Web, Análise de Dados, Machine Learning, Inteligência 
            Artificial, Metodologia Scrum, Kanban e etc. Minha pesquisa da graduação foi sobre 
            a detecção de defeitos em placas de circuito impresso, onde foi utilizado uma rede 
            CNN YOLO.</p>
        </section>
    );
}