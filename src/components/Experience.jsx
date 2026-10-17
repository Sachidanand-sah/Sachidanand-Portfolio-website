import Section from './Section';
import { experience } from '../data';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="card job">
              <div className="job-head">
                <div>
                  <h3>{job.role}</h3>
                  <p className="job-company">
                    {job.company} <span className="muted">· {job.location}</span>
                  </p>
                </div>
                <span className="pill mono">{job.period}</span>
              </div>
              <p className="muted">{job.summary}</p>
              <ul className="job-points">
                {job.points.map((p) => (
                  <li key={p.title}>
                    <div className="job-point-head">
                      <strong>{p.title}</strong>
                      <span className="job-domain">{p.domain}</span>
                    </div>
                    <p className="job-role">Role: {p.role}</p>
                    <ul className="job-highlights">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
              <ul className="tags">
                {job.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
