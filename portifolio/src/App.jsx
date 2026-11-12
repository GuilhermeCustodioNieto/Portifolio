import "./App.css";

const socialLinks = {
  github: "https://github.com/GuilhermeCustodioNieto",
  linkedin: "https://www.linkedin.com/in/guilherme-custodio-nieto/",
  cv: "/Guilherme-Custodio-Nieto-CV.pdf",
  email: "mailto:guilhermecustodionieto@gmail.com",
};

const skills = [
  {
    title: "Backend & APIs",
    description:
      "APIs, regras de negócio, integração entre serviços e arquitetura de sistemas.",
    items: [
      "Java",
      "Spring Boot",
      "TypeScript",
      "NestJS",
      "Node.js",
      "Express",
      "REST APIs",
      "Swagger",
    ],
  },
  {
    title: "Frontend",
    description:
      "Interfaces responsivas, componentes e experiência de uso limpa e objetiva.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "Databases & Persistence",
    description:
      "Persistência, modelagem e uso de bancos relacionais e não relacionais.",
    items: [
      "SQL Server",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "JPA",
      "Sequelize",
      "TypeORM",
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploy, containers, versionamento e práticas para entrega contínua.",
    items: ["AWS", "Docker", "Git", "GitHub", "CI/CD", "Docker Compose"],
  },
];

const experiences = [
  {
    period: "Ago/2026 – Atual",
    role: "Jovem Aprendiz Administrativo",
    company: "The Magnum",
    area: "Trade Marketing · Dados",
    bullets: [
      "Acompanhamento de metas, indicadores e operações comerciais por meio de planilhas e análises de dados.",
      "Uso de Excel e Power BI para organizar informações, acompanhar resultados e identificar tendências e oportunidades de melhoria.",
      "Desenvolvimento de pequenas automações em Python para reduzir tarefas manuais e tornar rotinas operacionais mais eficientes.",
    ],
    tools: ["Excel", "Power BI", "Python", "Indicadores"],
  },
  {
    period: "Ago/2026 – Atual",
    role: "Desenvolvedor Backend (Freelance)",
    company: "SAL – Sistema de Agendamento de Laboratórios",
    area: "Backend · Arquitetura",
    bullets: [
      "Responsável pela concepção técnica do backend: decisões de arquitetura, modelagem de domínio e definição das regras de negócio.",
      "Aplicação de SOLID, Clean Code e Design Patterns para separar responsabilidades e facilitar a evolução do sistema.",
      "Camada de persistência e integrações com Java, Spring Boot, JPA, PostgreSQL e AWS S3, com Cloudflare e Swagger para infraestrutura e documentação.",
      "Uso de ferramentas de IA como apoio ao desenvolvimento, sempre com análise e validação para manter a qualidade do código.",
    ],
    tools: ["Java", "Spring Boot", "PostgreSQL", "AWS S3", "Swagger"],
  },
];

const timeline = [
  {
    year: "2026 - 2029",
    title: "Bacharelado em Ciência e Tecnologia",
    org: "Universidade Federal do ABC - UFABC",
    bullets: [
      "Formação interdisciplinar em ciência, tecnologia e matemática, com forte base em raciocínio lógico, modelagem e resolução de problemas.",
      "Desenvolvimento de visão analítica para compreender problemas complexos sob diferentes perspectivas científicas e tecnológicas.",
      "Formação acadêmica conciliada com desenvolvimento de software, projetos práticos e aprofundamento contínuo em computação.",
    ],
    highlight: false,
  },
  {
    year: "2026",
    title: "Formação em Desenvolvimento Full Stack",
    org: "Instituto PROA + Senac",
    bullets: [
      "Formação prática em desenvolvimento Full Stack, abrangendo construção de interfaces, APIs, bancos de dados e integração de aplicações.",
      "Desenvolvimento de projetos em equipe utilizando metodologias colaborativas, versionamento e boas práticas de desenvolvimento.",
      "Experiência prática na construção de aplicações web completas, conectando frontend, backend e persistência de dados.",
    ],
    highlight: false,
  },
  {
    year: "2023 - 2025",
    title: "Técnico em Desenvolvimento de Sistemas",
    org: "ETEC Cidade Tiradentes",
    bullets: [
      "Formação técnica voltada ao desenvolvimento de sistemas, com fundamentos de programação, banco de dados, engenharia de software e aplicações web.",
      "Desenvolvimento de projetos utilizando diferentes linguagens, frameworks e tecnologias, com foco em transformar requisitos em soluções funcionais.",
      "Experiência em projetos de equipe, documentação, versionamento e desenvolvimento de sistemas durante a formação técnica.",
    ],
    highlight: false,
  },
];
const projects = [
  {
    featured: true,
    category: "Full Stack · SaaS · E-commerce · Web Builder",
    title: "Paggie",
    description:
      "Plataforma digital desenvolvida como TCC para micro e pequenos empreendedores. O sistema combina criação visual de sites, marketplace e e-commerce em uma única solução, permitindo que negócios criem e gerenciem sua presença digital.",
    stack:
      "TypeScript · NestJS · Next.js · SQL Server · Docker · AWS · Tailwind CSS · Swagger",
    role: "Tech Lead Backend",
    meta: [
      ["Architecture", "NestJS + SQL Server"],
      ["Infrastructure", "Docker + AWS"],
      ["Frontend", "Next.js + Tailwind"],
      ["API", "REST + Swagger"],
      ["Process", "Scrum + Trello"],
    ],
    links: {},
  },
  {
    category: "IoT · IA · Backend",
    title: "Aquamarine",
    description:
      "Sistema inteligente de monitoramento de água que combina sensores IoT e processamento de dados para identificar possíveis vazamentos. O projeto integra dispositivos físicos, backend e análise automatizada.",
    stack: "ESP32 · C# · .NET 8 · IoT · IA",
    links: {},
  },
  {
    category: "Mobile · Real-time · WebSocket",
    title: "Museum B3",
    description:
      "Aplicação mobile interativa desenvolvida para experiências de perguntas e respostas em tempo real. Utiliza comunicação bidirecional por WebSocket para sincronizar participantes e eventos com o backend.",
    stack: "React Native · Spring Boot · WebSocket · SockJS · STOMP",
    links: {},
  },
  {
    category: "Backend · API · Finanças",
    title: "API Financeira",
    description:
      "API REST para gerenciamento financeiro pessoal, estruturada com autenticação e autorização de usuários, controle de receitas e despesas e persistência relacional. O projeto explora recursos essenciais de uma aplicação backend moderna.",
    stack:
      "Java · Spring Boot · PostgreSQL · Spring Data JPA · Spring Security · JWT · Swagger · Docker",
    links: {
      github: "https://github.com/GuilhermeCustodioNieto/Finance-API",
    },
  },
  {
    category: "Web · Backend · API Integration",
    title: "GL-Crypto",
    description:
      "Aplicação web voltada à consulta e simulação de transações entre diferentes moedas e criptomoedas. O sistema utiliza integração com API externa para obter dados e processá-los na aplicação.",
    stack: "HTML · CSS · JavaScript · Node.js · Express · MySQL",
    links: {
      github: "https://github.com/GuilhermeCustodioNieto/GL-Crypto",
    },
  },
];
function App() {
  return (
    <div className="page">
      <header className="header">
        <a className="brand" href="#home">
          Guilherme Nieto
        </a>

        <nav className="nav">
          <a href="#about">Sobre</a>
          <a href="#experience">Experiência</a>
          <a href="#skills">Skills</a>
          <a href="#timeline">Trajetória</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>

        <span className="status">Aberto a estágio · Tech & Dados</span>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              São Paulo, Brasil · Buscando estágio em Tecnologia & Dados
            </p>
            <h1>Guilherme Nieto</h1>
            <h2>Software & Dados</h2>
            <p className="lead">
              Desenvolvedor backend e full stack, estudante de Ciência e
              Tecnologia na UFABC e, no dia a dia profissional, acompanhando
              metas e indicadores com Excel, Power BI e Python. Uno engenharia
              de software e visão analítica para transformar dados e requisitos
              em soluções que resolvem problemas de negócio.
            </p>

            <div className="cta-row">
              <a className="button button-primary" href="#projects">
                Ver projetos
              </a>
              <a className="button button-secondary" href={socialLinks.cv} download>
                Baixar currículo
              </a>
            </div>

            <div className="social-row">
              <a href={socialLinks.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <img
              className="profile-photo"
              src="/eu.png"
              alt="Guilherme Nieto"
            />
            <div className="visual-caption">
              <span>Software · Dados</span>
              <span>Java · SQL · Power BI · Python</span>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="section-heading">
            <p>Sobre mim</p>
            <h2>
              Desenvolvo sistemas e uso dados para entender e resolver
              problemas de negócio.
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Sou desenvolvedor de software e estudante de Bacharelado em
                Ciência e Tecnologia na UFABC. Possuo formação técnica em
                Desenvolvimento de Sistemas pela ETEC Cidade Tiradentes e
                formação Full Stack pelo Instituto PROA em parceria com o Senac.
              </p>
              <p>
                Hoje concilio duas frentes. Como Jovem Aprendiz em Trade
                Marketing na The Magnum, acompanho metas, indicadores e
                operações comerciais com Excel e Power BI e automatizo rotinas
                com Python. Como desenvolvedor freelance, sou responsável pelo
                backend do SAL, um sistema de agendamento de laboratórios em
                Java, Spring Boot e PostgreSQL.
              </p>
              <p>
                Busco um estágio em tecnologia ou análise de dados onde eu possa
                contribuir com produtos reais, aprender com o time e unir o lado
                técnico com a leitura de negócio.
              </p>
              <blockquote>
                "Construo sistemas, não apenas funcionalidades."
              </blockquote>
            </div>

            <div className="metrics">
              <div>
                <strong>Backend</strong>
                <span>Java, Spring Boot, NestJS e APIs REST</span>
              </div>
              <div>
                <strong>Dados</strong>
                <span>Excel, Power BI e Python na rotina profissional</span>
              </div>
              <div>
                <strong>Top 300</strong>
                <span>Entre 58.920 na Olimpíada de Informática</span>
              </div>
              <div>
                <strong>Tech Lead</strong>
                <span>Backend do Paggie, projeto de TCC</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section experience" id="experience">
          <div className="section-heading">
            <p>Experiência</p>
            <h2>
              Dados na rotina de negócio e backend em um produto real.
            </h2>
          </div>

          <div className="experience-list">
            {experiences.map((job) => (
              <article className="experience-card" key={job.role}>
                <div className="experience-head">
                  <div>
                    <span className="experience-area">{job.area}</span>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <span className="experience-period">{job.period}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-heading">
            <p>Stack & Skills</p>
            <h2>
              Ferramentas e tecnologias que uso para construir aplicações reais.
            </h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section timeline" id="timeline">
          <div className="section-heading">
            <p>Trajetória</p>
            <h2>
              Uma formação construída entre estudo, prática e responsabilidade
              técnica.
            </h2>
          </div>

          <div className="timeline-list">
            {timeline.map((item) => (
              <article
                className={`timeline-item${item.highlight ? " is-highlight" : ""}`}
                key={`${item.year}-${item.title}`}
              >
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="section-heading">
            <p>Projetos selecionados</p>
            <h2>
              Sistemas desenvolvidos para resolver problemas reais e explorar
              diferentes áreas da engenharia de software.
            </h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article
                className={`project-card${project.featured ? " featured" : ""}`}
                key={project.title}
              >
                <div className="project-topline">
                  <span>{project.category}</span>
                  <span>
                    {project.featured ? "Projeto em destaque" : "Projeto"}
                  </span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack">{project.stack}</div>

                {project.featured && (
                  <div className="case-study">
                    <h4>{project.role}</h4>
                    <div className="case-grid">
                      {project.meta.map(([label, value]) => (
                        <div key={label}>
                          <span>{label}</span>
                          <strong>{value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-links">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live}>Ver projeto</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy">
            <p>Contato</p>
            <h2>Vamos conversar?</h2>
            <p>
              Estou buscando oportunidades para continuar evoluindo como
              desenvolvedor de software e contribuir com equipes que constroem
              produtos e sistemas reais.
            </p>
          </div>

          <div className="contact-links">
            <a href={socialLinks.email}>
              <span>E-mail</span>
              <strong>guilhermecustodionieto@gmail.com</strong>
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>github.com/GuilhermeCustodioNieto</strong>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>linkedin.com/in/guilherme-custodio-nieto</strong>
            </a>
            <a href={socialLinks.cv} download>
              <span>Currículo</span>
              <strong>Baixar currículo</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>Guilherme Nieto</div>
        <div className="footer-nav">
          <a href="#about">Sobre</a>
          <a href="#experience">Experiência</a>
          <a href="#skills">Skills</a>
          <a href="#timeline">Trajetória</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
        <div>
          <p>© 2026 Guilherme Custódio Nieto</p>
          <span>Building software. Learning continuously.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
