import { useReveal } from '../hooks';

export default function Section({ id, eyebrow, title, intro, children }) {
  const ref = useReveal();
  return (
    <section id={id} className="section">
      <div className="container reveal" ref={ref}>
        <header className="section-head">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {intro && <p className="section-intro">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
