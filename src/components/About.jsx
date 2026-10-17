import Section from './Section';
import { about, education } from '../data';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer with an eye for detail">
      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="stats">
            {about.stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="card facts">
          <dl>
            {about.facts.map((f) => (
              <div key={f.label} className="fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <div className="edu">
            <p className="card-label">Education</p>
            {education.map((e) => (
              <div key={e.degree} className="edu-item">
                <div className="edu-top">
                  <strong>{e.degree}</strong>
                  <span className="muted mono">{e.period}</span>
                </div>
                <p className="muted">{e.school}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Section>
  );
}
