import Icon from './Icon';
import Section from './Section';
import { projects, socials } from '../data';

const github = socials.find((s) => s.icon === 'github').href;
const main = projects.filter((p) => !p.minor);
const minor = projects.filter((p) => p.minor);

function Links({ p }) {
  if (!p.live && !p.code) return null;
  return (
    <div className="project-actions">
      {p.live && (
        <a href={p.live} target="_blank" rel="noreferrer" className="text-link">
          Live demo <Icon name="arrow" size={14} />
        </a>
      )}
      {p.code && (
        <a href={p.code} target="_blank" rel="noreferrer" className="text-link">
          <Icon name="github" size={14} /> Code
        </a>
      )}
    </div>
  );
}

// Shown when a project has no screenshot: a stylised card built from its stack.
function Placeholder({ p }) {
  return (
    <div className="project-placeholder">
      <span className="mono">{p.subtitle}</span>
      <strong>{p.title}</strong>
      <ul>
        {p.tags.slice(0, 4).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="Personal projects I’ve designed and built end to end — from full-stack booking platforms to data-driven SPAs."
    >
      <div className="projects-grid">
        {main.map((p) => (
          <article key={p.title} className={`card project ${p.featured ? 'project--featured' : ''}`}>
            <div className="project-media">
              {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" /> : <Placeholder p={p} />}
            </div>
            <div className="project-body">
              {p.featured && <span className="pill pill-accent">Featured</span>}
              {p.subtitle && <p className="project-subtitle mono">{p.subtitle}</p>}
              <h3>{p.title}</h3>
              <p className="muted">{p.description}</p>
              <ul className="tags">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <Links p={p} />
            </div>
          </article>
        ))}
      </div>

      {minor.length > 0 && (
        <div className="other-projects">
          <h3>Other projects</h3>
          <ul>
            {minor.map((p) => (
              <li key={p.title} className="card other-project">
                <div>
                  <strong>{p.title}</strong>
                  <p className="muted small">{p.description}</p>
                </div>
                <Links p={p} />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="more-work card">
        <div>
          <h3>Want to see more?</h3>
          <p className="muted">Explore the rest of my code, experiments and contributions on GitHub.</p>
        </div>
        <a href={github} target="_blank" rel="noreferrer" className="btn btn-ghost">
          <Icon name="github" size={18} /> Visit GitHub
        </a>
      </div>
    </Section>
  );
}
