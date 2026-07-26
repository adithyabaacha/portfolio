import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  DatabaseZap,
  GitBranch,
  GraduationCap,
  Link,
  Mail,
  MapPin,
  Menu,
  Rocket,
  ServerCog,
  Sparkles,
  Workflow,
  X,
  Zap
} from "lucide-react";
import "./App.css";

const navItems = ["About", "Experience", "Skills", "Projects", "Contact"];

const heroSkills = [
  "SpringBoot",
  "Kafka",
  "Elasticsearch",
  "Vector Search",
  "Cloud Native",
  "MLOps",
  "Oracle JET"
];

const experiences = [
  {
    role: "Application Solution Developer",
    company: "Oracle",
    period: "June 2024 - Present",
    location: "Hyderabad, India",
    icon: <BriefcaseBusiness size={22} />,
    points: [
      "Improved enterprise contract and deal search performance by 5-10x using Elasticsearch in OCIP.",
      "Built Spring Boot microservices and REST integrations for filtered search and deal discovery.",
      "Implemented Kafka-based synchronization from Oracle DB to Elasticsearch for near real-time indexing.",
      "Worked on Vector Search and GenAI-driven clause prediction to reduce deal velocity from 1-2 weeks to 1-2 days.",
      "Built agentic workflows for clause insertion in redline documents and GenAI key-term extraction."
    ]
  },
  {
    role: "Data Science Intern",
    company: "Meta XP",
    period: "Oct 2022 - Nov 2022",
    location: "Remote",
    icon: <BrainCircuit size={22} />,
    points: [
      "Built a speech-to-text based analysis pipeline for public speaking evaluation.",
      "Analyzed speaking patterns including filler word frequency, speech rate, and pitch variation.",
      "Created insights that helped evaluate clarity, pacing, and presentation quality."
    ]
  },
  {
    role: "Research Intern",
    company: "Indian Institute of Science",
    period: "Jul 2022 - Aug 2022",
    location: "Bengaluru, India",
    icon: <GraduationCap size={22} />,
    points: [
      "Worked on molecular simulation research using LAMMPS.",
      "Handled simulation workflows, result interpretation, and research-oriented experimentation."
    ]
  }
];

const skillGroups = [
  {
    title: "Backend Engineering",
    icon: <ServerCog size={22} />,
    skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Python",
      "Service Gateways",
      "API Design"
    ]
  },
  {
    title: "Search, Data & Streaming",
    icon: <DatabaseZap size={22} />,
    skills: [
      "Elasticsearch",
      "Kafka",
      "Oracle SQL",
      "Oracle DB",
      "OCI Streaming",
      "Vector Search",
      "Indexing Pipelines"
    ]
  },
  {
    title: "GenAI & MLOps",
    icon: <BrainCircuit size={22} />,
    skills: [
      "GenAI",
      "LangChain",
      "RAG",
      "MLOps",
      "PyTorch",
      "TensorFlow",
      "Agentic Workflows",
      "MCP"
    ]
  },
  {
    title: "Frontend & Cloud",
    icon: <Code2 size={22} />,
    skills: [
      "Oracle JET",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Docker",
      "Kubernetes",
      "Helm"
    ]
  }
];

const projects = [
  {
    title: "Enterprise Contract Search Engine",
    tag: "Oracle | Search Infrastructure",
    icon: <DatabaseZap size={24} />,
    description:
      "Built high-performance enterprise search capabilities for contract and deal discovery using Elasticsearch, Spring Boot, Kafka, and Oracle DB synchronization.",
    highlights: [
      "Improved search performance by 5-10x.",
      "Designed filtered queries and REST APIs for search workflows.",
      "Built Kafka sync from Oracle DB to Elasticsearch.",
      "Integrated backend services with Oracle JET UI components."
    ],
    stack: ["Java", "Spring Boot", "Elasticsearch", "Kafka", "Oracle SQL"]
  },
  {
    title: "GenAI Clause Prediction Engine",
    tag: "Vector Search | GenAI",
    icon: <Sparkles size={24} />,
    description:
      "Designed a GenAI-powered clause prediction workflow using Vector Search to recommend relevant legal clauses and reduce manual deal review time.",
    highlights: [
      "Reduced deal velocity from 1-2 weeks to 1-2 days.",
      "Used Vector Search for semantic clause retrieval.",
      "Built agentic workflows for redline clause insertion.",
      "Improved key-term extraction accuracy by 36%."
    ],
    stack: ["GenAI", "Vector Search", "RAG", "LangChain", "Python"]
  },
  {
    title: "Speech Evaluation Pipeline",
    tag: "AI | Audio Analytics",
    icon: <Workflow size={24} />,
    description:
      "Built an ML pipeline to transcribe video/audio and analyze public speaking patterns including filler words, pitch range, pauses, and speech rate.",
    highlights: [
      "Transcribed speech using Speech-to-Text.",
      "Detected filler words such as um, uh, and like.",
      "Calculated words per minute and pause metrics.",
      "Generated speaking quality feedback."
    ],
    stack: ["Python", "Speech-to-Text", "Audio Analysis", "ML"]
  },
  {
    title: "Image Captioning System",
    tag: "Deep Learning | Vision",
    icon: <Rocket size={24} />,
    description:
      "Developed an image captioning model using a ResNet encoder and Transformer decoder to generate natural-language descriptions for images.",
    highlights: [
      "Used ResNet for visual feature extraction.",
      "Built Transformer-based caption generation.",
      "Worked with deep learning training and evaluation workflows.",
      "Applied sequence modeling for image-to-text generation."
    ],
    stack: ["Python", "ResNet", "Transformer", "PyTorch", "Deep Learning"]
  }
];

const achievements = [
  {
    title: "Oracle Rockstar Gold Award",
    description: "Recognized at Oracle for high-impact engineering contributions in Q1 2025."
  },
  {
    title: "Gold Medalist",
    description: "Final Year Branch Topper at NIT Calicut with CGPA 9.2."
  },
  {
    title: "Certified AI & Data Practitioner",
    description:
      "Completed certifications in Deep Learning, Oracle Data Science, Oracle Vector Search, and Agent Studio."
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell" id="home">
      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />
      <div className="background-grid" />

      <header className="topbar">
        <a href="#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">BA</span>
          <span>Adithya</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "topnav open" : "topnav"}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-padding">
          <div className="hero-copy reveal visible">
            <p className="eyebrow">
              <Sparkles size={16} />
              I&apos;m Baacha Adithya
            </p>

            <h1>
              Building intelligent enterprise systems with search, GenAI, and
              scalable backend engineering.
            </h1>

            <p className="hero-text">
              Application Solution Developer at Oracle building search platforms,
              GenAI workflows, vector-search systems, backend services, and
              cloud-native enterprise applications.
            </p>

            <div className="hero-actions">
              <a
                className="primary"
                href="/Resume_Adithya.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume <ArrowUpRight size={18} />
              </a>

              <a
                className="secondary"
                href="https://www.linkedin.com/in/baacha-adithya/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={18} />
              </a>

              <a
                className="secondary"
                href="https://github.com/adithyabaacha"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="hero-skills">
              {heroSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal visible">
            <div className="profile-orbit">
              <div className="orbit-ring ring-one" />
              <div className="orbit-ring ring-two" />

              <div className="profile-card">
                <img src="/profile.jpg" alt="Baacha Adithya" />
              </div>

<div className="floating-pill pill-one">
  <ServerCog size={15} /> Java
</div>

<div className="floating-pill pill-two">
  <Zap size={15} /> Spring Boot
</div>

<div className="floating-pill pill-three">
  <BrainCircuit size={15} /> GenAI + RAG
</div>

<div className="floating-pill pill-four">
  <Code2 size={15} /> Python
</div>

<div className="floating-pill pill-five">
  <Code2 size={15} /> JavaScript
</div>
            </div>
          </div>
        </section>

        <section className="stats-strip reveal">
          <div>
            <strong>5-10x</strong>
            <span>Search performance improvement</span>
          </div>
          <div>
            <strong>80%</strong>
            <span>Deal velocity reduction</span>
          </div>
          <div>
            <strong>36%</strong>
            <span>Key-term extraction accuracy gain</span>
          </div>
          <div>
            <strong>9.2</strong>
            <span>CGPA at NIT Calicut</span>
          </div>
        </section>

        <section className="section-padding about-section reveal" id="about">
          <div className="section-kicker">About</div>
          <div className="section-grid">
            <h2>Engineering products where backend scale meets applied AI.</h2>
            <div>
              <p>
                I specialize in building enterprise systems that combine
                scalable backend engineering with intelligent search and GenAI.
                My work spans Java/Spring Boot microservices, Elasticsearch,
                Kafka data pipelines, Vector Search, RAG, MLOps, and agentic
                document workflows.
              </p>
              <p>
                At Oracle, I work on search and AI systems for contract and deal
                workflows, helping teams discover information faster, automate
                document intelligence, and improve business process velocity.
              </p>
            </div>
          </div>
        </section>

        <section
          className="section-padding experience-section reveal"
          id="experience"
        >
          <div className="section-kicker">Experience</div>
          <h2 className="section-title">Professional journey</h2>

          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-card" key={item.role}>
                <div className="timeline-icon">{item.icon}</div>

                <div>
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <span>
                      <MapPin size={14} /> {item.location}
                    </span>
                  </div>

                  <h3>{item.role}</h3>
                  <p className="company-name">{item.company}</p>

                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding skills-section reveal" id="skills">
          <div className="section-kicker">Skills</div>
          <h2 className="section-title">Technical toolkit</h2>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-heading">
                  {group.icon}
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-padding projects-section reveal"
          id="projects"
        >
          <div className="section-kicker">Projects</div>
          <h2 className="section-title">Selected engineering work</h2>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-top">
                  <div className="project-icon">{project.icon}</div>
                  <span>{project.tag}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding achievements-section reveal">
          <div className="section-kicker">Achievements</div>
          <h2 className="section-title">Recognition & certifications</h2>

          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <article className="achievement-card" key={achievement.title}>
                <Award size={24} />
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-padding contact-section reveal" id="contact">
          <div>
            <div className="section-kicker">Contact</div>
            <h2>Let&apos;s build intelligent systems together.</h2>
            <p>
              I&apos;m interested in backend engineering, AI platforms,
              enterprise search, GenAI applications, and applied ML systems.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:adithyabachha@gmail.com">
              <Mail size={18} /> Email
            </a>

            <a
              href="https://www.linkedin.com/in/baacha-adithya/"
              target="_blank"
              rel="noreferrer"
            >
              <Link size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/adithyabaacha"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={18} /> GitHub
            </a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Baacha Adithya</span>
        <span>Built with React, Vite, and Cloudflare Pages</span>
      </footer>
    </div>
  );
}

export default App;