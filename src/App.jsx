import { ArrowUpRight, Award, BrainCircuit, BriefcaseBusiness, Code2, DatabaseZap, GitBranch, Link, Mail, MapPin, Phone, Rocket, ServerCog, Sparkles } from "lucide-react";
import "./App.css";

const skills = [
  "Java", "Spring Boot", "Python", "Microservices", "REST APIs", "Elasticsearch",
  "Kafka", "Oracle SQL", "GenAI", "LangChain", "Vector Search", "RAG", "MLOps",
  "Kubernetes", "Docker", "OCI Streaming", "Oracle JET", "TypeScript"
];

const highlights = [
  { value: "5-10x", label: "Search performance uplift" },
  { value: "80%", label: "Deal drafting cycle reduction" },
  { value: "36%", label: "Key-term extraction accuracy lift" },
  { value: "9.2", label: "NIT Calicut CGPA" }
];

const experience = [
  {
    company: "Oracle",
    role: "Application Solution Developer",
    period: "June 2024 - Present",
    location: "Hyderabad, India",
    tags: ["Java", "Spring Boot", "Elasticsearch", "Python", "GenAI"],
    points: [
      "Implemented Elasticsearch-powered search in OCIP, improving contract and deal search performance by 5-10x.",
      "Built Spring Boot microservices for reporting, filtered exports, REST UI integration, and large-scale result navigation.",
      "Developed vector search, clause prediction, agentic workflows, and GenAI key-term extraction for contract intelligence.",
      "Managed Kafka synchronization, MLOps pipelines, Kubernetes deployments, service gateways, proxies, and secure configuration isolation."
    ]
  },
  {
    company: "Meta XP Private Limited",
    role: "Data Science Intern",
    period: "Oct 2022 - Nov 2022",
    location: "Remote",
    tags: ["Speech Recognition", "AI", "Data Analysis"],
    points: [
      "Built an ML pipeline using Google Speech-to-Text to transcribe video audio and analyze speaking patterns including filler words, pitch range, and speech rate."
    ]
  },
  {
    company: "Indian Institute of Science, Bangalore",
    role: "Research Intern",
    period: "Jul 2022 - Aug 2022",
    location: "Bengaluru, India",
    tags: ["LAMMPS", "Simulation", "Research"],
    points: [
      "Performed molecular dynamics simulations to study Lennard-Jones fluids and estimate vapor-liquid coexistence and equilibrium properties."
    ]
  }
];

const projects = [
  {
    title: "Contract Intelligence Search Platform",
    description: "High-speed full-text and filtered search platform for contracts and deals with Elasticsearch, Kafka synchronization, and REST-based UI integration.",
    icon: DatabaseZap,
    tags: ["Elasticsearch", "Kafka", "Spring Boot", "Oracle DB"]
  },
  {
    title: "Vector Search Clause Prediction",
    description: "GenAI and vector search workflow that accelerates legal document drafting, supports clause prediction, and powers customer-specific clause insertion.",
    icon: BrainCircuit,
    tags: ["Vector Search", "GenAI", "RAG", "Agentic Workflows"]
  },
  {
    title: "Image Captioning Model",
    description: "Deep learning model using ResNet for visual feature extraction and a Transformer decoder to generate captions for images.",
    icon: Sparkles,
    tags: ["ResNet", "Transformer", "Deep Learning"]
  }
];

const certifications = [
  "Deep Learning Specialization - Andrew Ng",
  "Oracle Data Science",
  "Oracle Vector Search",
  "Agent Studio"
];

function App() {
  return (
    <main className="site-shell">
      <nav className="nav">
        <a href="#home" className="brand"><span>BA</span> Adithya</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="status-pill"><Rocket size={16} /> Building AI-native enterprise systems</div>
          <h1>Baacha Adithya</h1>
          <h2>Application Solution Developer blending backend engineering, search, cloud, and GenAI.</h2>
          <p>
            I design scalable microservices, intelligent search systems, vector search workflows, and AI-powered contract intelligence experiences that move enterprise teams faster.
          </p>
          <div className="hero-actions">
            <a className="primary" href="/Adithya_Resume.pdf" target="_blank" rel="noreferrer">Download Resume <ArrowUpRight size={18} /></a>
            <a className="secondary" href="#projects">Explore Projects</a>
          </div>
          <div className="quick-contact">
            <span><MapPin size={16} /> Hyderabad, India</span>
            <span><Mail size={16} /> adithyabachha@gmail.com</span>
            <span><Phone size={16} /> +91 81794694323</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="AI orbit illustration">
          <img src="/ai-orbit.svg" alt="Abstract AI orbit illustration" />
          <div className="floating-card card-one"><ServerCog size={18} /> Microservices</div>
          <div className="floating-card card-two"><BrainCircuit size={18} /> GenAI + RAG</div>
          <div className="floating-card card-three"><DatabaseZap size={18} /> Search Systems</div>
        </div>
      </section>

      <section className="metrics">
        {highlights.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section-grid" id="work">
        <div className="section-heading">
          <p>Experience</p>
          <h2>Enterprise engineering with measurable impact.</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-card" key={item.company}>
              <div className="timeline-top">
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.company} • {item.location}</p>
                </div>
                <span>{item.period}</span>
              </div>
              <div className="tag-row">
                {item.tags.map((tag) => <small key={tag}>{tag}</small>)}
              </div>
              <ul>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading centered">
          <p>Selected Projects</p>
          <h2>Search, AI, and cloud systems built for speed and intelligence.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article className="project-card" key={project.title}>
                <div className="project-icon"><Icon size={24} /></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => <small key={tag}>{tag}</small>)}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-heading">
          <p>Technical Stack</p>
          <h2>Backend, AI, data, and cloud technologies.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="split-section">
        <article className="glass-panel">
          <Award size={28} />
          <h2>Honors & Education</h2>
          <p><strong>NIT Calicut</strong> — B.Tech Chemical Engineering, CGPA 9.2, May 2024.</p>
          <p>Gold Medalist and Final Year Branch Topper. Rockstar Gold Award at Oracle for exceptional contribution to OCIP enhancement.</p>
        </article>
        <article className="glass-panel">
          <Code2 size={28} />
          <h2>Certifications</h2>
          <ul className="clean-list">
            {certifications.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section className="contact" id="contact">
        <div>
          <p>Let's build something intelligent.</p>
          <h2>Available for software, GenAI, search, and cloud-native development conversations.</h2>
        </div>
        <div className="contact-actions">
          <a href="mailto:adithyabachha@gmail.com"><Mail size={18} /> Email</a>
          <a href="#"><Link size={18} /> LinkedIn</a>
          <a href="#"><GitBranch size={18} /> GitHub</a>
          <a href="/Adithya_Resume.pdf" target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> Resume</a>
        </div>
      </section>
    </main>
  );
}

export default App;