import type { CSSProperties } from "react";
import FlowArt, { FlowSection } from "../../components/ui/story-scroll";
import { portfolioProjects } from "../portfolio-data";

export default function AllWorkPage() {
  return (
    <main className="all-work-page" id="top">
      <header className="all-work-header">
        <a className="brand" href="/" aria-label="Sergios, return to homepage">SERGIOS<span>®</span></a>
        <span>PORTFOLIO INDEX / 09</span>
        <a className="all-work-home" href="/">{"BACK HOME \u2196\uFE0E"}</a>
      </header>

      <section className="all-work-hero" aria-labelledby="all-work-title">
        <div className="all-work-kicker"><span>SELECTED DIGITAL WORK</span><span>2025—2026</span></div>
        <h1 id="all-work-title"><span>ALL</span><span>SITES</span></h1>
        <p>Web design, development, e-commerce, SEO and AI integrations across different selected projects.</p>
      </section>

      <FlowArt className="all-work-flow" aria-label="All portfolio projects">
        {portfolioProjects.map((project) => (
          <FlowSection
            key={project.number}
            className="all-work-flow-section"
            aria-label={`${project.title} project`}
            style={{ "--accent": project.accent } as CSSProperties}
          >
            <article className="all-work-card all-work-flow-card">
              <div className="all-work-card-top">
                <span>PROJECT / {project.number}</span>
                <span>{project.field}</span>
                <span>{project.year}</span>
              </div>
              {project.url ? (
                <a
                  className="all-work-art all-work-art-live all-work-art-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live website`}
                >
                  <iframe
                    className="project-site-frame"
                    src={project.url}
                    title={`${project.title} live website preview`}
                    loading="lazy"
                    tabIndex={-1}
                  />
                  <span className="all-work-art-link-label" aria-hidden="true">{"VIEW LIVE \u2197\uFE0E"}</span>
                </a>
              ) : (
                <div className={`all-work-art${project.image ? "" : " all-work-art-placeholder"}`}>
                  {project.image ? (
                    <img src={project.image} alt={project.alt} />
                  ) : (
                    <div role="img" aria-label={project.alt}><span>{project.number}</span><strong>{project.title}</strong></div>
                  )}
                </div>
              )}
              <div className="all-work-card-copy">
                <p>{project.statement}</p>
                <h2>{project.title}</h2>
                <ul>{project.roles.map((role) => <li key={role}>{role}</li>)}</ul>
                <p>{project.summary}</p>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noreferrer">{"OPEN LIVE SITE \u2197\uFE0E"}</a>
                ) : (
                  <span>CASE STUDY / LINK READY</span>
                )}
              </div>
            </article>
          </FlowSection>
        ))}
      </FlowArt>

      <footer className="all-work-footer">
        <a href="mailto:svynarenkosergios@gmail.com">SVYNARENKOSERGIOS@GMAIL.COM</a>
        <a href="#top">{"BACK TO TOP \u2191\uFE0E"}</a>
        <span>© 2026 SERGIOS®</span>
      </footer>
    </main>
  );
}
