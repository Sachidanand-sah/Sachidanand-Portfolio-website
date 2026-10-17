import Icon from './Icon';
import { profile, socials } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="muted small">
          © {new Date().getFullYear()} {profile.name}. Designed & built with React.
        </p>
        <ul className="socials">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="icon-btn">
                <Icon name={s.icon} size={16} />
              </a>
            </li>
          ))}
          <li>
            <a href="#home" className="icon-btn" aria-label="Back to top">
              <Icon name="up" size={16} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
