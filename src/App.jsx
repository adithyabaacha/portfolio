import { useState } from "react";
import { ArrowUpRight, Award, BrainCircuit, BriefcaseBusiness, Code2, DatabaseZap, GitBranch, Link, Mail, MapPin, Phone, Rocket, ServerCog, Sparkles } from "lucide-react";
import "./App.css";

const services = [
  {
    title: "Website Development",
    description: "Responsive, polished portfolio and product sites with modern UI, accessible interactions, and fast page loads.",
    icon: Code2
  },
  {
    title: "App & AI Systems",
    description: "Backend and AI/ML systems using Java, Spring Boot, Elasticsearch, vector search, and GenAI workflows.",
    icon: BrainCircuit
  },
  {
    title: "Cloud & Search",
    description: "Scalable microservices, Kubernetes deployments, Kafka sync, and enterprise search for high-volume data teams.",
    icon: DatabaseZap
  }
];

const stats = [
  { value: "5-10x", label: "Search uplift" },
  { value: "36%", label: "Extraction accuracy" },
  { value: "80%", label: "Workflow speed" }
];

const projectCards = [
  {
    title: "Contract Intelligence Platform",
    description: "Search, RAG, and enterprise document workflows for contract teams using Elasticsearch and GenAI.",
    tags: ["Elasticsearch", "Kafka", "Spring Boot"],
    icon: DatabaseZap
  },
  {
    title: "Vector Search Clause Engine",
    description: "AI-driven clause prediction and drafting support with vector search and annotation workflows.",
    tags: ["GenAI", "Vector Search", "RAG"],
    icon: BrainCircuit
  },
  {
    title: "Captioning Model Demo",
    description: "Vision-language prototype for image captions built with ResNet features and Transformer decoding.",
    tags: ["Deep Learning", "ML", "Transformer"],
    icon: Sparkles
  }
];

const skills = [
  "Java", "Spring Boot", "Python", "Microservices", "Elasticsearch", "GenAI", "Kafka", "Docker", "Kubernetes", "OCI", "TypeScript"
];

function App() {
  const [captionImage, setCaptionImage] = useState(null);
  const [captionPreview, setCaptionPreview] = useState(null);
  const [generatedCaption, setGeneratedCaption] = useState("");
  const [captionLoading, setCaptionLoading] = useState(false);
  const [captionError, setCaptionError] = useState("");

  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#home" className="brand"><span>BA</span> Adithya</a>
        <nav className="topnav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Hello.</p>
            <h1>I'm Adithya</h1>
            <p className="hero-text">Application Solution Developer building enterprise-grade AI, search, and cloud systems with Java, Spring Boot, Elasticsearch, and GenAI.</p>
            <div className="hero-actions">
              <a className="primary" href="https://github.com/adithyabaacha" target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={18} /></a>
              <a className="secondary" href="/Adithya_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </div>
            <div className="hero-tags">
              {skills.slice(0, 6).map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>

          <aside className="hero-panel">
            <div className="profile-card">
              <div className="profile-frame">
                <div className="profile-photo" />
              </div>
              <div className="profile-info">
                <p className="profile-role">Application Solution Developer</p>
                <p>Expert in building AI-native search systems, microservices, and cloud-ready engineering solutions.</p>
              </div>
              <ul className="profile-meta">
                <li><span>Hyderabad, India</span></li>
                <li><span>Java | Spring Boot | GenAI | Kubernetes</span></li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="about" id="about">
          <div className="section-header">
            <p>About me</p>
            <h2>Designing intelligent systems that work at scale.</h2>
          </div>
          <div className="about-grid">
            <article className="about-copy">
              <p>I collaborate with enterprise teams to create high-performance cloud and AI applications. My work focuses on search, vector workflows, secure microservices, and practical GenAI solutions.</p>
              <div className="about-stats">
                {stats.map((item) => (
                  <div key={item.label} className="stat-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </article>

            <div className="service-cards">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="service-card">
                    <div className="service-icon"><Icon size={18} /></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-header">
            <p>Projects</p>
            <h2>Selected work in search, AI, and cloud-native engineering.</h2>
          </div>
          <div className="project-grid">
            {projectCards.map((project) => {
              const Icon = project.icon;
              return (
                <article key={project.title} className="project-card">
                  <div className="project-icon"><Icon size={22} /></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <small key={tag}>{tag}</small>)}
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/adithyabaacha" target="_blank" rel="noreferrer">View GitHub</a>
                    <a href="#contact">Contact</a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="caption-demo" id="caption-demo">
          <div className="section-header">
            <p>Demo</p>
            <h2>Image captioning interaction</h2>
          </div>
          <div className="caption-demo-grid">
            <div className="caption-demo-card">
              <div className="caption-preview">
                {captionPreview ? (
                  <img src={captionPreview} alt="Uploaded preview" />
                ) : (
                  <div className="image-placeholder">Upload an image to generate a caption</div>
                )}
              </div>
              <label className="upload-label">
                <input type="file" accept="image/*" onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  setCaptionError("");
                  setGeneratedCaption("");
                  setCaptionImage(file);
                  setCaptionPreview(URL.createObjectURL(file));
                }} />
                Choose image
              </label>
              <button className="primary" type="button" disabled={!captionImage || captionLoading} onClick={async () => {
                if (!captionImage) return;
                setCaptionLoading(true);
                setCaptionError("");
                setGeneratedCaption("");
                try {
                  const formData = new FormData();
                  formData.append("image", captionImage);
                  const response = await fetch("/api/caption", {
                    method: "POST",
                    body: formData,
                  });
                  if (!response.ok) throw new Error(`Server error ${response.status}`);
                  const data = await response.json();
                  setGeneratedCaption(data.caption || data.result || "No caption returned.");
                } catch (error) {
                  setCaptionError("Could not generate caption. Make sure the caption endpoint is configured.");
                } finally {
                  setCaptionLoading(false);
                }
              }}>
                {captionLoading ? "Generating..." : "Generate caption"}
              </button>
              {captionError && <p className="error-message">{captionError}</p>}
            </div>

            <div className="caption-result">
              <p className="eyebrow">Generated caption</p>
              <div className="caption-output">
                {generatedCaption || "Upload an image and click generate to preview the caption here."}
              </div>
              <div className="caption-help">
                This demo is designed to connect to a Cloudflare Worker API that sends the image to your model backend and returns the generated caption.
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-card">
            <div>
              <p>Contacts</p>
              <h2>Have a project? Let's talk.</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:adithyabachha@gmail.com"><Mail size={18} /> Email</a>
              <a href="https://www.linkedin.com/in/baacha-adithya-933543204/" target="_blank" rel="noreferrer"><Link size={18} /> LinkedIn</a>
              <a href="https://github.com/adithyabaacha" target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Designed with care for Adithya.</p>
      </footer>
    </div>
  );
}

export default App;
