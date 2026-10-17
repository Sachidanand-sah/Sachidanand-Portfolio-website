import Icon from './Icon';
import { profile, socials } from '../data';
import { useTypewriter } from '../hooks';

// Served from public/ so index.html can preload it (it's the LCP image).
const photo = `${import.meta.env.BASE_URL}profile.webp`;

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="status">
            <span className="status-dot" /> Open to new opportunities
          </p>
          <h1>
            Hi, I’m <span className="accent-text">{profile.name}</span>
          </h1>
          <p className="hero-role">
            <span className="sr-only">{profile.roles.join(', ')}</span>
            <span aria-hidden="true">
              {typed}
              <span className="caret" />
            </span>
          </p>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View my work
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="btn btn-ghost">
              <Icon name="download" size={18} /> Download CV
            </a>
          </div>

          <ul className="socials">
            {[
              ...socials.filter((s) => s.professional),
              { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
            ].map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="icon-btn">
                  <Icon name={s.icon} size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-visual">
          <div className="portrait">
            <img src={photo} alt={`Portrait of ${profile.name}`} width="420" height="420" fetchpriority="high" />
          </div>
          <div className="floating-card floating-card--top">
            <strong>Angular · React</strong>
            <span>1.5+ yrs in production</span>
          </div>
          <div className="floating-card floating-card--bottom">
            <Icon name="pin" size={16} />
            <span>{profile.location}</span>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll to about section">
        <span />
      </a>
    </section>
  );
}
