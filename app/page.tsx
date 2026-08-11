"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { TestimonialsSection, type Testimonial } from "../components/ui/testimonials-with-marquee";
import { featuredProjects, portfolioProjects } from "./portfolio-data";

const services = [
  ["01", "Web design", "Distinctive responsive interfaces built around your brand, audience and business goals."],
  ["02", "Development", "Fast, scalable production websites with clean code, smooth interactions and reliable performance."],
  ["03", "SEO", "Technical and on-page foundations that help search engines understand, rank and surface your website."],
  ["04", "AI agents", "Useful AI integrations for lead qualification, customer support, booking and repetitive business tasks."],
];

const testimonials: Testimonial[] = [
  {
    author: { label: "REAL ESTATE AGENCY", mark: "RE" },
    text: "Sergios translated our luxury positioning into a fast, polished website that feels premium on every screen and makes our properties much easier to explore.",
  },
  {
    author: { label: "RESTAURANT OWNER", mark: "RO" },
    text: "Our new website finally feels as considered as the restaurant itself. Sergios simplified the booking journey, improved mobile performance and gave the brand a stronger digital presence.",
  },
  {
    author: { label: "SHOPIFY BRAND", mark: "SH" },
    text: "Sergios built a Shopify store that looks distinctive, works beautifully on mobile and is easy for our team to manage. The entire shopping journey feels sharper and more trustworthy.",
  },
  {
    author: { label: "LOCAL SERVICE BUSINESS", mark: "SE" },
    text: "The SEO work was practical and measurable. Sergios improved the site structure, technical foundations and local search visibility, helping more qualified customers find us.",
  },
  {
    author: { label: "SAAS FOUNDER", mark: "AI" },
    text: "The AI agent integration immediately reduced repetitive support questions and helped visitors reach the right information faster. It feels useful, natural and genuinely connected to the product.",
  },
  {
    author: { label: "E-COMMERCE OWNER", mark: "EC" },
    text: "Sergios connected design, development and search into one clear system. The result is faster, easier to use and much better at turning attention into enquiries and sales.",
  },
];

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const cursor = cursorRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let cursorX = targetX;
    let cursorY = targetY;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      root.style.setProperty("--mx", ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      root.style.setProperty("--my", ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    };

    const animateCursor = () => {
      cursorX += (targetX - cursorX) * 0.18;
      cursorY += (targetY - cursorY) * 0.18;
      if (cursor) cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(animateCursor);
    };

    const updateScroll = () => {
      const total = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--page-progress", (window.scrollY / total).toFixed(4));

      const hero = document.querySelector<HTMLElement>(".hero");
      if (hero) {
        const progress = Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / window.innerHeight));
        hero.style.setProperty("--hero-scroll", progress.toFixed(3));
      }

      document.querySelectorAll<HTMLElement>(".project-poster").forEach((scene) => {
        const rect = scene.getBoundingClientRect();
        const travel = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / travel));
        scene.style.setProperty("--p", progress.toFixed(3));
      });
    };

    const onEnter = () => cursor?.classList.add("is-active");
    const onLeave = () => cursor?.classList.remove("is-active");
    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach((target) => {
      target.addEventListener("pointerenter", onEnter);
      target.addEventListener("pointerleave", onLeave);
    });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal, .project-poster").forEach((element) => observer.observe(element));

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();
    if (!reducedMotion) frame = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", updateScroll);
      targets.forEach((target) => {
        target.removeEventListener("pointerenter", onEnter);
        target.removeEventListener("pointerleave", onLeave);
      });
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (activeProject === null) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setActiveProject(null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeProject]);

  const selectedProject = activeProject === null ? null : featuredProjects[activeProject];
  const archiveNames = portfolioProjects.map((project) => project.title.toUpperCase());
  const archiveTrack = [...archiveNames, ...archiveNames];

  return (
    <main id="top">
      <a className="skip-link" href="#work">Skip to work</a>
      <div className="progress-line" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="intro-poster" aria-hidden="true">
        <span>BUILD</span><span>RANK</span><span>AUTOMATE</span>
        <small>Sergios® / Web developer / 2026</small>
      </div>
      <div ref={cursorRef} className="square-cursor" aria-hidden="true"><span>OPEN</span></div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sergios, back to top">SERGIOS<span>®</span></a>
        <span className="status"><i /> AVAILABLE<br />FOR SELECT PROJECTS</span>
        <nav aria-label="Primary navigation">
          <a href="#work">WORK</a>
          <a href="#about">INFO</a>
          <a href="#contact">{"CONTACT \u2198\uFE0E"}</a>
          <a className="all-work-button" href="/work">{"ALL SITES \u2197\uFE0E"}</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta">
          <span>INDEPENDENT DIGITAL CREATIVE<br />FOR AMBITIOUS BRANDS</span>
          <span>WEB DESIGN + DEVELOPMENT<br />SEO + AI AGENTS</span>
          <span>BUILD. RANK. AUTOMATE.<br />{"SCROLL TO EXPLORE \u2193\uFE0E"}</span>
        </div>
        <h1 id="hero-title">
          <span className="hero-word word-one">WEB</span>
          <span className="hero-word word-two">DESIGN</span>
          <span className="hero-word word-three">DEVELOP</span>
          <span className="hero-word word-four">AUTOMATE</span>
        </h1>
        <div className="hero-stamp" aria-hidden="true"><span>S</span><small>EST.<br />2021</small></div>
        <div className="hero-marquee" aria-hidden="true">
          <div><span>DESIGN — DEVELOP — RANK — AUTOMATE</span><b>✳</b><span>DESIGN — DEVELOP — RANK — AUTOMATE</span><b>✳</b><span>DESIGN — DEVELOP — RANK — AUTOMATE</span><b>✳</b></div>
        </div>
      </section>

      <section id="work" className="work-intro">
        <div className="work-kicker reveal"><span>SELECTED WORK / 05</span><span>2025—2026</span></div>
        <h2 className="reveal"><span>PROJECTS</span><span>THAT HIT</span><span>DIFFERENT.</span></h2>
        <p className="reveal">Web design, development, SEO and AI agents—built as one connected system for visibility, conversion and growth.</p>
      </section>

      <section className="project-stack" aria-label="Selected projects">
        {featuredProjects.map((project, index) => (
          <article
            className={`project-poster ${project.direction}`}
            key={project.title}
            style={{ "--accent": project.accent } as CSSProperties}
          >
            <div className="poster-board" data-cursor>
              <div className="poster-topline">
                <span>CASE {project.number} / 05</span>
                <span>{project.field}</span>
                <span>{project.year}</span>
              </div>
              <div className={`poster-image${project.url ? " poster-live-preview" : project.image ? "" : " poster-placeholder"}`}>
                {project.url ? (
                  <iframe
                    className="project-site-frame"
                    src={project.url}
                    title={`${project.title} live website preview`}
                    loading="lazy"
                    tabIndex={-1}
                  />
                ) : project.image ? (
                  <img src={project.image} alt={project.alt} />
                ) : (
                  <div role="img" aria-label={project.alt}>
                    <span>{project.number}</span>
                    <strong>{project.title}</strong>
                    <small>WEBSITE / PORTFOLIO</small>
                  </div>
                )}
              </div>
              <span className="poster-index" aria-hidden="true">{project.number}</span>
              <div className="poster-title">
                <p>{project.statement}</p>
                <h3>{project.title}</h3>
              </div>
              <div className="poster-footer">
                <ul>{project.roles.map((role) => <li key={role}>{role}</li>)}</ul>
                <p>{project.summary}</p>
                <span>{project.url ? "VIEW LIVE SITE \u2197\uFE0E" : "VIEW CASE \u2197\uFE0E"}</span>
              </div>
              <button className="poster-hit" type="button" onClick={() => setActiveProject(index)} aria-label={`Open ${project.title} project`} />
            </div>
          </article>
        ))}
      </section>

      <section className="more-work" aria-label="See all projects">
        <div className="more-work-top">
          <span>THE FULL ARCHIVE</span>
          <span>EVERY BUILD, ONE PLACE</span>
        </div>
        <a className="more-work-marquee" href="/work" aria-label="View all projects">
          <div className="more-work-track" aria-hidden="true">
            {archiveTrack.map((name, index) => (
              <span key={`${name}-${index}`}>{name}<i>✳</i></span>
            ))}
          </div>
        </a>
        <div className="more-work-foot">
          <span>DESIGN · DEVELOP · RANK · AUTOMATE</span>
          <a className="more-work-button" href="/work">{"VIEW ALL PROJECTS \u2197\uFE0E"}</a>
        </div>
      </section>

      <section id="about" className="manifesto">
        <div className="manifesto-label reveal"><span>ABOUT / SERGIOS</span><span>[ THIS IS THE POINT OF VIEW ]</span></div>
        <h2 className="reveal">MORE<br />THAN A<br /><em>WEBSITE.</em></h2>
        <div className="manifesto-grid reveal">
          <p className="manifesto-lede">I design and develop websites that look sharp, load fast, rank better and work harder.</p>
          <p>I combine web design, development, SEO and AI agent integration in one focused service. The result is not just a portfolio piece—it is a working business tool built to attract, convert and support customers.</p>
          <div className="stat"><strong>05+</strong><span>YEARS MAKING<br />SCREENS MOVE</span></div>
          <div className="stat"><strong>28</strong><span>PROJECTS ACROSS<br />09 INDUSTRIES</span></div>
        </div>
      </section>

      <section className="services">
        <div className="services-title reveal"><span>DESIGN / CODE / SEARCH / AI</span><h2>FULL-SERVICE.<br />ZERO-FILLER.</h2></div>
        <div className="services-list">
          {services.map(([number, title, description]) => (
            <div className="service-row reveal" key={number}>
              <span>[{number}]</span><h3>{title}</h3><p>{description}</p><i>{"\u2197\uFE0E"}</i>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection
        title="WHAT MY CLIENTS SAY."
        description="Feedback on web design, development, Shopify, SEO and AI-agent integrations—focused on the results the work created."
        testimonials={testimonials}
      />

      <section className="type-break" aria-label="Design philosophy">
        <div className="type-track" aria-hidden="true"><span>DESIGN IT</span><i>✳</i><span>RANK IT</span><i>✳</i><span>AUTOMATE IT</span><i>✳</i></div>
        <p className="reveal">Great websites attract, convert and support customers.<br /><span className="philosophy-emphasis">Even while you sleep.</span></p>
      </section>

      <footer id="contact" className="contact">
        <div className="contact-top"><span>START A PROJECT / 2026</span><span>WEB / SEARCH / AUTOMATION</span></div>
        <a className="contact-link" href="mailto:svynarenkosergios@gmail.com">
          <small>NEED A WEBSITE, SEO OR AI AUTOMATION?</small><span>LET&apos;S</span><span>WORK<i className="cta-arrow">{"\u2197\uFE0E"}</i></span>
        </a>
        <div className="footer-row">
          <a className="footer-email" href="mailto:svynarenkosergios@gmail.com">SVYNARENKOSERGIOS@GMAIL.COM</a>
          <a className="footer-back" href="#top">{"BACK TO TOP \u2191\uFE0E"}</a>
          <span className="footer-year">© 2026 SERGIOS®</span>
        </div>
      </footer>

      {selectedProject && (
        <div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title">
          <div className={`case-image${selectedProject.url ? " case-live-preview" : selectedProject.image ? "" : " case-image-placeholder"}`}>
            {selectedProject.url ? (
              <iframe
                className="project-site-frame"
                src={selectedProject.url}
                title={`${selectedProject.title} live website preview`}
                tabIndex={-1}
              />
            ) : selectedProject.image ? <img src={selectedProject.image} alt="" /> : <strong>{selectedProject.title}</strong>}
          </div>
          <div className="case-bar"><span>CASE {selectedProject.number} / 05</span><span>{selectedProject.field}</span></div>
          <button type="button" className="case-close" onClick={() => setActiveProject(null)} aria-label="Close project">CLOSE [×]</button>
          <div className="case-copy">
            <span>{selectedProject.year} / SELECTED WORK</span>
            <h2 id="case-title">{selectedProject.title}</h2>
            <p>{selectedProject.detail}</p>
            <ul>{selectedProject.roles.map((role) => <li key={role}>[{role}]</li>)}</ul>
            {selectedProject.url && <a className="case-live-link" href={selectedProject.url} target="_blank" rel="noreferrer">{"OPEN LIVE WEBSITE \u2197\uFE0E"}</a>}
          </div>
        </div>
      )}
    </main>
  );
}
