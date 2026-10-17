import Section from './Section';
import { skills } from '../data';

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technical toolkit"
      intro="Frontend-first, with the backend, data and delivery skills to ship features end to end."
    >
      <div className="skills-grid">
        {skills.map((s) => (
          <article key={s.group} className="card skill-card">
            <h3>{s.group}</h3>
            <ul className="chips">
              {s.items.map((item) => (
                <li key={item} className="chip">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
