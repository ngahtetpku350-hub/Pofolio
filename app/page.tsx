"use client";

import { FormEvent, useState } from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "MySQL",
  "Java",
  "Kotlin",
  "Python",
  "Git",
  "GitHub",
  "VS Code",
  "Figma",
];

const projects = [
  {
    number: "01",
    title: "FoodFusion",
    description:
      "A recipe-sharing platform built with PHP, MySQL and Bootstrap, including authentication and an admin area.",
    tags: ["PHP", "MySQL", "Bootstrap"],
  },
  {
    number: "02",
    title: "E-Commerce Website",
    description:
      "An online store concept for mobile devices and laptops with product, category, brand and order management.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
  {
    number: "03",
    title: "Personal Finance App",
    description:
      "A simple budget tracker for recording budgets, income and expenses with a clean mobile-first interface.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
];

function Icon({
  name,
}: {
  name: "github" | "linkedin" | "mail" | "arrow" | "sun" | "moon" | "download";
}) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  if (name === "arrow")
    return (
      <svg {...common}>
        <path d="M5 12h13" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    );
  if (name === "mail")
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    );
  if (name === "linkedin")
    return (
      <svg {...common}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  if (name === "github")
    return (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.7-1.6 6.7-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.2.3S18 .1 15 2a13.4 13.4 0 0 0-6 0C6 0 4.8.3 4.8.3A5 5 0 0 0 4.7 4 5.4 5.4 0 0 0 3.3 7.5c0 5.4 3.4 6.6 6.7 7A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    );
  if (name === "download")
    return (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  if (name === "sun")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  return (
    <svg {...common} fill="currentColor" stroke="none">
      <path d="M21 15.5A9 9 0 0 1 8.5 3 9 9 0 1 0 21 15.5Z" />
    </svg>
  );
}

export default function Home() {
  const [dark, setDark] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <main className={dark ? "site dark" : "site"}>
      <nav className="nav container">
        <a href="#home" className="brand">
          <span>TH</span>
          <strong>THUE HTET ANING</strong>
        </a>
        <div className="navlinks">
          {[
            ["Home", "home"],
            ["About", "about"],
            ["Skills", "skills"],
            ["Projects", "projects"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <button
          className="theme"
          aria-label="Toggle theme"
          onClick={() => setDark(!dark)}
        >
          {dark ? <Icon name="sun" /> : <Icon name="moon" />}
        </button>
      </nav>

      <section id="home" className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">HELLO, I&apos;M</p>
          <h1>
            THUE HTET
            <br />
            <span>ANING</span>
          </h1>
          <p className="role">
            Computer Science Student <i /> Full-Stack Developer
          </p>
          <p className="lead">
            I&apos;m passionate about building modern web applications and
            solving real-world problems with code. Currently studying Computer
            Science at KMD College, Yangon.
          </p>
          <div className="actions">
            <a className="btn darkbtn" href="#projects">
              View My Projects <Icon name="arrow" />
            </a>
            <a className="btn outline" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="socials">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Icon name="github" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
            </a>
            <a href="mailto:thuehtetnaing.mm@gmail.com">
              <Icon name="mail" />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div style={{margin:"20px"}}>
            <img
              src="/media/thuehtetnaing.png"
              alt="Thue Htet - Developer"
              style={{
                width: "420px",
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "0 auto",
              }}
            />
          </div>
          
          <span className="scribble">
            Better
            <br />
            Code
            <br />
            Better
            <br />
            Tomorrow
          </span>
        </div>
      </section>

      <section id="about" className="section soft">
        <div className="container about-grid">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>Who Am I?</h2>
            <p>
              I&apos;m Thue Htet Aning, a Computer Science student in Yangon.
              I&apos;m passionate about technology, web development, and
              creating useful digital solutions.
            </p>
            <p>
              My goal is to become a skilled full-stack developer, build
              meaningful products, and keep improving through real projects.
            </p>
            <a className="btn darkbtn small" href="#contact">
              Let&apos;s Talk <Icon name="arrow" />
            </a>
          </div>
          <div className="facts">
            <div>
              <b>Education</b>
              <span>
                KMD College, Yangon
                <br />
                Computer Science · 2nd Year
              </span>
              <span>Now, Study in Computing Final Year</span>
            </div>
            <div>
              <b>Location</b>
              <span>Yangon, Myanmar</span>
            </div>
            <div>
              <b>Interests</b>
              <span>Coding · Technology · Business · Self Improvement</span>
            </div>
          </div>
          <blockquote>
            “Small steps
            <br />
            every day
            <br />
            lead to big
            <br />
            results.”
          </blockquote>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container skills-grid">
          <div>
            <p className="eyebrow">MY SKILLS</p>
            <h2>Technical Skills</h2>
            <p>
              These are the technologies and tools I work with and am currently
              learning.
            </p>
          </div>
          <div className="skill-list">
            {skills.map((skill, i) => (
              <div className="skill" key={skill}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <strong>{skill}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MY PROJECTS</p>
              <h2>Featured Projects</h2>
            </div>
            <p>
              Selected work from my learning journey. More projects will be
              added as I build.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((p) => (
              <article className="project" key={p.number}>
                <div className="project-image">
                  <span>{p.number}</span>
                  <div className="window">
                    <div />
                    <div />
                    <div />
                  </div>
                </div>
                <div className="project-content">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a href="#contact">
                    View Project <Icon name="arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container journey-grid">
          <div>
            <p className="eyebrow">EDUCATION &amp; EXPERIENCE</p>
            <h2>My Journey</h2>
            <div className="timeline">
              <div>
                <time>2023 — Present</time>
                <b>KMD College, Yangon</b>
                <span>Computer Science · 2nd Year</span>
              </div>
              <div>
                <time>2022 — 2023</time>
                <b>Food Delivery</b>
                <span>
                  Built responsibility, time management and customer-service
                  experience.
                </span>
              </div>
            </div>
          </div>
          <div className="goal">
            <div className="target">◎</div>
            <h3>My Goal</h3>
            <p>
              To become a professional developer, build useful products, and
              create a better future through technology.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let&apos;s Work Together</h2>
            <p>
              Have a project in mind? Feel free to reach out. I&apos;m always
              open to new opportunities and collaborations.
            </p>
          </div>
          <form onSubmit={submit}>
            <div className="form-row">
              <input required placeholder="Name" />
              <input required type="email" placeholder="Email" />
            </div>
            <textarea required placeholder="Message" rows={5} />
            <button className="btn lightbtn" type="submit">
              {sent ? "Message Ready ✓" : "Send Message"} <Icon name="arrow" />
            </button>
          </form>
          <div className="contact-info">
            <a href="mailto:thuehtetnaing@gmail.com">
              <Icon name="mail" />
              thuehtetnaing@gmail.com
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Icon name="github" />
              github.com/thuehtet
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <Icon name="linkedin" />
              linkedin.com/in/thuehtet
            </a>
            <span>● Yangon, Myanmar</span>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>THUE HTET ANING © 2026</span>
          <div>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
