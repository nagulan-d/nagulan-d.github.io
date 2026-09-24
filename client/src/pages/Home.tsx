import { useEffect, useMemo, useState } from "react";
import {
  ArrowUpRight,
  ArrowUp,
  BookOpen,
  Check,
  ChevronDown,
  CircleDot,
  Code2,
  Copy,
  ExternalLink,
  Eye,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MessageCircle,
  MapPin,
  Menu,
  Moon,
  Network,
  Printer,
  Sparkles,
  Sun,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const github = "https://github.com/nagulan-d";
const linkedin = "https://www.linkedin.com/in/nagulan-d-84b197258/";
const email = "mailto:naguland.tech@gmail.com";
const phone = "6383733630";
const whatsapp = `https://wa.me/91${phone}?text=${encodeURIComponent("Hi Nagulan, I found your portfolio and would like to discuss an opportunity.")}`;
const resumePdf = "/assets/Nagulan_Resume_Gen_AI.pdf";
const profilePhoto = "/assets/profile-photo.png";

const projects = [
  {
    title: "ThreatGuard",
    eyebrow: "Flagship build",
    category: "AI + Full Stack",
    year: "2026",
    description:
      "An AI-powered cyber threat intelligence and auto-defense system that collects, analyzes, and summarizes threat intelligence for focused monitoring.",
    stack: ["Python", "Flask", "React", "SQLite", "AlienVault OTX", "Gemini API"],
    highlights: ["Threat ingestion and summarization", "Threat scoring and REST APIs", "Role-based dashboards", "Automated response workflows"],
    caseStudy: { problem: "Security teams need a focused way to collect and understand threat intelligence. Manual analysis can scatter indicators, context, scoring, and response activity across separate tools.", solution: "ThreatGuard combines threat ingestion, analysis, summarization, scoring, dashboards, and response workflows in one AI-powered application.", architecture: "React frontend · Flask backend · SQLite database · AlienVault OTX and Gemini API integrations", challenges: ["Keeping threat collection and analysis understandable in one workflow.", "Connecting scoring, AI-assisted summaries, dashboard views, and response actions without hiding the underlying data."] },
    repo: `${github}/threatguard-cybersecurity-project`,
    repoLabel: "View repository",
    accent: "violet",
    featured: true,
  },
  {
    title: "Multiple Disease Prediction System",
    eyebrow: "Machine learning project",
    category: "ML + Data",
    year: "2023",
    description:
      "A machine learning application for predicting multiple diseases from patient health data with a classic supervised-learning workflow.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "MySQL"],
    highlights: ["Data preprocessing", "Feature engineering", "Logistic Regression", "Random Forest and evaluation"],
    repo: `${github}?tab=repositories`,
    repoLabel: "Find repository on GitHub",
    accent: "orange",
    featured: true,
  },
  {
    title: "E-commerce Website",
    eyebrow: "InLighn Tech project",
    category: "Full Stack",
    year: "2025",
    description:
      "A responsive commerce experience with product discovery, category filtering, cart management, authentication, checkout flow, and state persistence.",
    stack: ["Next.js", "React", "Tailwind CSS", "Context API"],
    highlights: ["Product listings and filters", "Cart and order flow", "Authentication", "Reusable responsive UI"],
    repo: `${github}/InLighn-Tech-projects/tree/main/ecommerce-website`,
    accent: "blue",
    featured: false,
  },
  {
    title: "Movie Search Application",
    eyebrow: "InLighn Tech project",
    category: "Frontend + APIs",
    year: "2025",
    description:
      "A responsive movie discovery interface using a public API to fetch, search, and display film details and posters.",
    stack: ["JavaScript", "Fetch API", "JSON", "Responsive UI"],
    highlights: ["API integration", "Search experience", "Poster and detail display", "Responsive layout"],
    repo: `${github}/InLighn-Tech-projects/tree/main/Movie-Search`,
    accent: "pink",
    featured: false,
  },
  {
    title: "Task Management Application",
    eyebrow: "InLighn Tech project",
    category: "Frontend + CRUD",
    year: "2025",
    description:
      "A task organization tool for adding, updating, deleting, and categorizing tasks with deadlines and local persistence.",
    stack: ["JavaScript", "DOM APIs", "Local Storage", "Responsive UI"],
    highlights: ["CRUD interactions", "Task categorization", "Deadline handling", "Mobile and desktop layouts"],
    repo: `${github}/task-management-app`,
    repoLabel: "View repository",
    accent: "green",
    featured: false,
  },
];

const repositoryLibrary = [
  { name: "InLighn-Tech-projects", note: "Collection: e-commerce, digital clock, expense tracker, movie search, quiz, chat, portfolio, task management, and to-do list", href: `${github}/InLighn-Tech-projects` },
  { name: "nagulan-d.github.io", note: "Personal portfolio repository · JavaScript", href: `${github}/nagulan-d.github.io` },
  { name: "Hotel-Management", note: "Public repository · TypeScript", href: `${github}/Hotel-Management` },
];

const skillGroups = [
  { label: "Core", items: ["Python", "JavaScript", "SQL", "React", "Flask", "REST APIs", "Git / GitHub"] },
  { label: "AI / ML", items: ["NumPy", "Pandas", "Scikit-learn", "Machine Learning", "Deep Learning", "NLP"] },
  { label: "Generative AI", items: ["LLMs", "Prompt Engineering", "Embeddings", "RAG", "LangChain", "Transformers"] },
  { label: "Full Stack", items: ["React", "Node.js", "Express", "HTML", "CSS", "Databases"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Jupyter Notebook", "Linux"] },
];

const learningPath = [
  { year: "2026", title: "AI + Generative AI", body: "AI Intern at Internship Studio and Advanced Generative AI Program at Techpanda. Worked through hands-on assignments in Python, data analysis, ML, deep learning, NLP, prompt engineering, LLMs, Hugging Face, RAG, LangChain, AI agents, Flask, and FastAPI." },
  { year: "2025", title: "Full-stack foundations", body: "Full Stack Development Intern at Inlighn Tech. Developed responsive applications and reusable components with React.js, HTML5, CSS3, JavaScript, Node.js, and Express.js; worked with REST APIs, GitHub, debugging, version control, and code reviews." },
  { year: "2023", title: "Machine learning project", body: "Built a multiple disease prediction system using Logistic Regression, Random Forest, Pandas, NumPy, Scikit-learn, and MySQL." },
  { year: "2022–26", title: "B.Tech in Information Technology", body: "Kumaraguru College of Technology · CGPA 8.0 · coursework in machine learning, data mining, DBMS, software engineering, and data structures." },
];

const professionalExperience = [
  { role: "Full Stack Development Intern", company: "InLighn Tech", dates: "March 2025 – August 2025", body: "Developed responsive web applications with React.js, HTML5, CSS3, JavaScript, Node.js, and Express.js, using reusable components and RESTful APIs. Collaborated through Git, GitHub, debugging, version control, and code reviews." },
  { role: "AI Intern", company: "Internship Studio", dates: "July 2026 – September 2026", body: "Worked through hands-on assignments in artificial intelligence, Python, machine learning applications, data preprocessing, model development, and problem-solving." },
];

const trainingExperience = [
  { role: "Advanced Generative AI Program", company: "Techpanda", dates: "June 2026 – August 2026", body: "Completed practical training in Python, data analysis, machine learning, deep learning, NLP, prompt engineering, LLMs, LangChain, Hugging Face, RAG, AI agents, Flask, and FastAPI through assignments and projects." },
];

const certifications = [
  { name: "AWS Academy Cloud Foundations", issuer: "Amazon Web Services · 2024", href: "https://www.credly.com/badges/127bf277-81e6-43bc-9732-54482e99f0a3/linked_in_profile" },
  { name: "Supervised Machine Learning: Regression", issuer: "IBM · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/records/5RP2DQ0XNU86" },
  { name: "Application Development using Microservices and Serverless", issuer: "IBM · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/records/C85N5PSN9XTR" },
  { name: "Continuous Integration and Continuous Delivery (CI/CD)", issuer: "IBM · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/records/U07KR0M2KH2A" },
  { name: "Getting Started with Git and GitHub", issuer: "IBM · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/records/KQ9UK8XZO8AK" },
  { name: "Software Engineering: Modeling Software Systems using UML", issuer: "HKUST · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/records/270XW8LD5DG7" },
  { name: "Healthcare Marketplace", issuer: "University of Minnesota · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/specialization/64S91X541YMO" },
  { name: "Asset Security", issuer: "Packt · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/records/I9D1BDQXW33Y" },
  { name: "Interfacing with the Arduino", issuer: "UC Irvine Division of Continuing Education · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/records/QWN2R0T57ODL" },
  { name: "Security and Risk Management", issuer: "Packt · Coursera · 2025", href: "https://www.coursera.org/account/accomplishments/records/D2CF6LREX9O3" },
  { name: "Advanced Generative AI Program", issuer: "Techpanda · 2026", href: null },
  { name: "Artificial Intelligence Internship Certificate", issuer: "Internship Studio · 2026", href: null },
];

const filters = ["All", "AI + Full Stack", "ML + Data", "Full Stack", "Frontend + APIs", "Frontend + CRUD"];
const whatIBuild = ["AI-powered applications", "Machine learning applications", "LLM and RAG systems", "REST APIs", "React dashboards", "Full-stack web applications", "Data processing workflows"];
const architectureSteps = ["Python", "Data / ML / LLM", "Flask / FastAPI", "REST APIs", "SQLite / MySQL", "React dashboards"];
const skillEvidence = [
  ["Python", "ThreatGuard and disease prediction"],
  ["Flask", "ThreatGuard backend"],
  ["React", "ThreatGuard and e-commerce"],
  ["Scikit-learn", "Disease prediction workflow"],
  ["SQL / MySQL", "Disease prediction data layer"],
  ["REST APIs", "ThreatGuard and internship work"],
  ["Git / GitHub", "Internship workflow and public repositories"],
];
const whyHireMe = ["Built AI, ML, and full-stack projects rather than only listing technologies.", "Worked with Python, Flask, React, REST APIs, SQL, and Git/GitHub in project and internship contexts.", "Can explain the problem, architecture, tradeoffs, and limitations behind the flagship work."];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionLabel({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-index">{index}</span>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function AppLogo() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span className="logo-bracket">[</span><span className="logo-core">N</span><span className="logo-bracket">]</span>
    </span>
  );
}

function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button className="copy-button" type="button" onClick={copyValue} aria-label={label} title={copied ? "Copied" : label}>
      {copied ? <Check size={13} /> : <Copy size={13} />}
    </button>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className={`project-card project-${project.accent} ${project.title === "ThreatGuard" ? "project-flagship" : ""}`}>
      <div className="project-card-top">
        <div>
          <span className="project-eyebrow">{project.eyebrow}</span>
          <h3>{project.title}</h3>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
      <p>{project.description}</p>
      <div className="project-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
      <ul className="project-highlights">
        {project.highlights.map((item) => <li key={item}><Check size={13} />{item}</li>)}
      </ul>
      {"caseStudy" in project && project.caseStudy && <details className="case-study"><summary>View case study</summary><div><strong>Problem</strong><p>{project.caseStudy.problem}</p><strong>Solution</strong><p>{project.caseStudy.solution}</p><strong>Architecture</strong><p>{project.caseStudy.architecture}</p><div className="case-flow" aria-label="ThreatGuard architecture flow">{["Threat source", "Threat ingestion", "Risk scoring", "AI summary", "React dashboard", "Response workflow"].map((step, index) => <span key={step}>{step}{index < 5 && <ArrowUpRight size={12} />}</span>)}</div><strong>Engineering thinking</strong><ul className="case-challenges">{project.caseStudy.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul><div className="case-evidence"><strong>Visual evidence</strong><p>No public screenshots were supplied with this portfolio; the repository remains the source of truth for implementation details.</p></div></div></details>}
      {project.repo && (
        <a className="project-link" href={project.repo} target="_blank" rel="noreferrer">
          {"repoLabel" in project && project.repoLabel ? project.repoLabel : "View repository"} <ArrowUpRight size={15} />
        </a>
      )}
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => window.localStorage.getItem("nagulan-theme") !== "light");
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", !darkMode);
    window.localStorage.setItem("nagulan-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const filteredProjects = useMemo(() => {
    const filtered = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);
    return showAllProjects || activeFilter !== "All" ? filtered : filtered.filter((project) => project.featured);
  }, [activeFilter, showAllProjects]);

  const navItems = ["About", "Work", "Experience", "Skills", "Education", "Contact"];

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)} aria-label="Nagulan D home"><AppLogo /><span>NAGULAN D</span></a>
        <nav id="primary-navigation" className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item, index) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{item}</a>)}
          <a href={github} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}><Github size={15} />GitHub</a>
        </nav>
        <div className="header-actions">
          <button className="icon-button" onClick={() => setDarkMode((value) => !value)} aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}>{darkMode ? <Sun size={17} /> : <Moon size={17} />}</button>
          <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Let's connect <MessageCircle size={15} /></a>
          <button className="mobile-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-navigation">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-wrap" id="about">
          <div className="hero-copy">
            <div className="status-pill"><span className="pulse-dot" /> Available for entry-level opportunities</div>
            <p className="hero-kicker">AI &amp; GENERATIVE AI DEVELOPER <span>·</span> PUDUKKOTTAI, INDIA</p>
            <h1>AI-powered<br /><em>applications</em><br />built to work.</h1>
            <p className="hero-description">I’m Nagulan, a recent Information Technology graduate building <strong>AI-powered applications and full-stack software</strong> with Python, machine learning, GenAI technologies, and modern web technologies.</p>
            <div className="hero-actions">
              <Button className="primary-button" onClick={() => scrollToId("work")}>View projects <ArrowUpRight size={16} /></Button>
              <a className="resume-button" href={resumePdf} target="_blank" rel="noreferrer"><Eye size={15} /> View resume</a>
              <a className="resume-button" href={resumePdf} download="Nagulan_Resume_Gen_AI.pdf"><FileText size={15} /> Download resume</a>
              <a className="text-link" href={linkedin} target="_blank" rel="noreferrer">LinkedIn profile <ExternalLink size={14} /></a>
              <a className="text-link" href={github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14} /></a>
              <button className="text-link print-link" type="button" onClick={() => window.print()}><Printer size={14} /> Print profile</button>
            </div>
            <div className="hero-proof"><span>01</span><div><strong>Project-led</strong><small>Learning through shipped builds</small></div><span className="proof-line" /><span>02</span><div><strong>Evidence-backed</strong><small>Clear about what I know</small></div></div>
          </div>
          <div className="hero-visual" aria-label="Nagulan D profile and developer illustration">
            <div className="profile-photo-wrap"><img src={profilePhoto} alt="Nagulan D" className="profile-photo" /><span className="photo-ring" /></div>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="visual-grid" />
            <div className="code-window">
              <div className="code-bar"><span /><span /><span /><label>nagulan.config.ts</label></div>
              <div className="code-body"><p><i>01</i><b>const</b> profile = {'{'}</p><p><i>02</i>&nbsp; name: <em>'Nagulan D'</em>,</p><p><i>03</i>&nbsp; focus: <em>'AI + full stack'</em>,</p><p><i>04</i>&nbsp; basedIn: <em>'Pudukkottai'</em>,</p><p><i>05</i>&nbsp; builds: [</p><p><i>06</i>&nbsp;&nbsp;&nbsp; <em>'RAG systems'</em>,</p><p><i>07</i>&nbsp;&nbsp;&nbsp; <em>'ML applications'</em>,</p><p><i>08</i>&nbsp;&nbsp;&nbsp; <em>'web products'</em></p><p><i>09</i>&nbsp; ],</p><p><i>10</i>&nbsp; status: <strong>'learning + building'</strong></p><p><i>11</i>{'}'}</p></div>
            </div>
            <div className="visual-chip chip-ai"><Sparkles size={14} /> GenAI</div>
            <div className="visual-chip chip-python"><Terminal size={14} /> Python</div>
            <div className="visual-caption"><span className="caption-line" />01 / 04 <strong>CURIOUS BY DEFAULT</strong></div>
          </div>
        </section>

        <section className="credential-strip" aria-label="Quick credentials"><div><span>B.Tech</span><small>Information Technology · 2026</small></div><div><span>Featured projects</span><small>AI, ML, and full-stack builds</small></div><div><span>Internship experience</span><small>Full stack and AI practice</small></div><div><span>Career focus</span><small>Python · GenAI · ML · APIs</small></div></section>
        <section className="signal-strip"><div><span className="signal-label">Core signal</span><strong>AI fluency with a builder's mindset.</strong></div><div className="signal-item"><Code2 size={17} /><span>Project-led</span></div><div className="signal-item"><Network size={17} /><span>Systems curious</span></div><div className="signal-item"><Zap size={17} /><span>Always learning</span></div></section>

        <section className="section-wrap intro-section" id="work">
          <SectionLabel index="01" eyebrow="Selected work" title="A practical path into AI." />
          <div className="intro-grid"><p className="section-lead">My work sits across <em>AI applications, data workflows, and the interfaces that make them useful.</em></p><p className="section-note">Every project here is drawn from my resume, public GitHub, or LinkedIn. The goal is simple: show the decisions, tools, and capabilities — without noise.</p></div>
          <div className="filter-row" aria-label="Filter projects">{filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? "active" : ""} aria-pressed={activeFilter === filter} onClick={() => { setActiveFilter(filter); setShowAllProjects(true); }}>{filter}</button>)}</div>
          <div className="project-grid">{filteredProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
          {activeFilter === "All" && <button className="show-more" onClick={() => setShowAllProjects((value) => !value)}>{showAllProjects ? "Show featured only" : "Show all repository work"}<ChevronDown size={15} className={showAllProjects ? "rotate" : ""} /></button>}
          <div className="repo-index"><div className="repo-index-head"><span className="section-eyebrow">Public repository index</span><span>GitHub / @nagulan-d</span></div>{repositoryLibrary.map((repo) => <a key={repo.name} href={repo.href} target="_blank" rel="noreferrer"><span className="repo-name">{repo.name}</span><span className="repo-note">{repo.note}</span><ArrowUpRight size={14} /></a>)}</div>
        </section>

        <section className="section-wrap journey-section" id="experience">
          <SectionLabel index="02" eyebrow="Experience" title="Built through practice" />
          <div className="journey-grid"><div className="journey-intro"><p className="section-lead">From web foundations to <em>AI-powered applications.</em></p><p className="section-note">A technical profile built through a B.Tech in Information Technology, professional internships, structured training, and project-led practice.</p><a className="text-link" href={github} target="_blank" rel="noreferrer">Explore my GitHub trail <ArrowUpRight size={14} /></a></div><div className="timeline">{learningPath.map((item) => <div className="timeline-item" key={item.year}><span className="timeline-year">{item.year}</span><span className="timeline-dot" /><div><h3>{item.title}</h3><p>{item.body}</p></div></div>)}</div></div>
          <div className="experience-panels"><div><div className="experience-panel-head"><span className="section-eyebrow">Professional internships</span><span>01</span></div>{professionalExperience.map((item) => <article className="experience-card" key={item.company}><div><span className="experience-dates">{item.dates}</span><h3>{item.role}</h3><strong>{item.company}</strong></div><p>{item.body}</p></article>)}</div><div><div className="experience-panel-head"><span className="section-eyebrow">Training / educational program</span><span>02</span></div>{trainingExperience.map((item) => <article className="experience-card" key={item.company}><div><span className="experience-dates">{item.dates}</span><h3>{item.role}</h3><strong>{item.company}</strong></div><p>{item.body}</p></article>)}</div></div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionLabel index="03" eyebrow="Toolkit" title="What I work with." />
          <div className="skills-intro"><p className="section-lead">A <em>working toolkit</em>, not a random keyword cloud.</p><p className="section-note">These technologies are grouped by the kind of work they support: modeling, building, connecting, and shipping.</p></div>
          <div className="skills-grid">{skillGroups.map((group, index) => <div className="skill-group" key={group.label}><div className="skill-group-head"><span>0{index + 1}</span><h3>{group.label}</h3></div><div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div>
        </section>

        <section className="section-wrap build-section" aria-labelledby="build-title"><div className="build-grid"><div><span className="section-eyebrow">What I build</span><h2 id="build-title">Complete systems, from model to interface.</h2><p className="section-note">The common thread across my work is connecting data, AI logic, APIs, and usable web interfaces.</p></div><div className="build-list">{whatIBuild.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></div><div className="architecture-card"><div><span className="section-eyebrow">Technical architecture</span><p>How the pieces connect in a practical application flow.</p></div><div className="architecture-flow">{architectureSteps.map((step, index) => <div key={step}><span>{step}</span>{index < architectureSteps.length - 1 && <ArrowUpRight size={15} />}</div>)}</div></div></section>

        <section className="section-wrap evidence-section" aria-labelledby="evidence-title"><div className="evidence-heading"><div><span className="section-eyebrow">Skill evidence</span><h2 id="evidence-title">Technologies connected to real work.</h2></div><p className="section-note">A recruiter should be able to see where the core skills appear in the portfolio, not just read a keyword list.</p></div><div className="evidence-grid">{skillEvidence.map(([skill, evidence]) => <div key={skill}><strong>{skill}</strong><span>{evidence}</span></div>)}</div><div className="why-hire"><span className="section-eyebrow">Why this profile</span><h3>Proof first, claims second.</h3><div>{whyHireMe.map((item) => <p key={item}><Check size={14} />{item}</p>)}</div></div></section>

        <section className="section-wrap credentials-section" id="education">
          <SectionLabel index="04" eyebrow="Credentials" title="Proof points & progress." />
          <div className="credentials-grid"><div className="credential-card education-card"><div className="credential-icon"><GraduationCap size={20} /></div><span className="credential-label">Education</span><h3>B.Tech — Information Technology</h3><p>Kumaraguru College of Technology</p><div className="credential-meta"><strong>8.0 CGPA</strong><span>Nov 2022 — May 2026</span></div></div><div className="credential-card cert-card"><div className="credential-icon"><BookOpen size={20} /></div><span className="credential-label">Selected certifications</span><h3>Continuous learning, made visible.</h3><div className="cert-list">{(showAllCertificates ? certifications : certifications.slice(0, 6)).map((cert) => cert.href ? <a key={cert.name} href={cert.href} target="_blank" rel="noreferrer"><span>{cert.name}</span><small>{cert.issuer}</small><ArrowUpRight size={14} /></a> : <div className="cert-row" key={cert.name}><span>{cert.name}</span><small>{cert.issuer}</small><span className="cert-unlinked">Listed on profile</span></div>)}</div><div className="cert-actions"><button className="cert-more" onClick={() => setShowAllCertificates((value) => !value)}>{showAllCertificates ? "Show selected certifications" : "View all certifications"} <ChevronDown size={13} className={showAllCertificates ? "rotate" : ""} /></button><button className="cert-more" onClick={() => window.open(linkedin, "_blank", "noopener,noreferrer")}>View full profile on LinkedIn <ExternalLink size={13} /></button></div></div></div>
        </section>

        <section className="section-wrap contact-section" id="contact"><div className="contact-panel"><div className="contact-stamp"><CircleDot size={16} /> OPEN TO OPPORTUNITIES</div><h2>Have a problem<br />worth <em>building?</em></h2><p>I'm looking for entry-level roles and collaborations across AI, Generative AI, machine learning, backend, and full-stack engineering.</p><div className="contact-actions"><a className="primary-button" href={whatsapp} target="_blank" rel="noreferrer">Message me on WhatsApp <MessageCircle size={16} /></a><a className="secondary-button" href={email}>Email me <Mail size={16} /></a><a className="secondary-button" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a></div><div className="contact-details"><span><MapPin size={14} /> Pudukkottai, Tamil Nadu, India</span><span className="contact-copy-row"><a href={email}><Mail size={14} /> naguland.tech@gmail.com</a><CopyButton value="naguland.tech@gmail.com" label="Copy email address" /></span><span className="contact-copy-row"><a href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={14} /> WhatsApp message</a><CopyButton value={phone} label="Copy phone number" /></span></div></div></section>
      </main>

        <footer className="site-footer"><div><a className="brand" href="#top"><AppLogo /><span>NAGULAN D</span></a><p>Early-career AI + full-stack developer.</p></div><div className="footer-links"><a href={linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a><a href={github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a><a href={email}>Email <ArrowUpRight size={13} /></a></div><button className="back-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">Back to top <ArrowUp size={13} /></button><span className="footer-note">© 2026 · Built with intent.</span></footer>
    </div>
  );
}
