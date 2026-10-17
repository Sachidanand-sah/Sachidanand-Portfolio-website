import { useState } from 'react';
import Icon from './Icon';
import Section from './Section';
import { profile } from '../data';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', message: '' });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  // Opens the visitor's mail client with the message pre-filled — no backend needed.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let’s build something together"
      intro="Have a role, project or question in mind? My inbox is always open — I usually reply within a day."
    >
      <div className="contact-grid">
        <div className="contact-info">
          <div className="card contact-item">
            <Icon name="mail" />
            <div>
              <p className="card-label">Email</p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <button className="icon-btn" onClick={copyEmail} aria-label="Copy email address">
              <Icon name={copied ? 'check' : 'copy'} size={16} />
            </button>
          </div>
          <div className="card contact-item">
            <Icon name="phone" />
            <div>
              <p className="card-label">Phone</p>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
            </div>
          </div>
          <div className="card contact-item">
            <Icon name="pin" />
            <div>
              <p className="card-label">Location</p>
              <span>{profile.location}</span>
            </div>
          </div>
          <a href={profile.resume} target="_blank" rel="noreferrer" className="card contact-item contact-item--link">
            <Icon name="download" />
            <div>
              <p className="card-label">Resume</p>
              <span>Download my CV</span>
            </div>
            <Icon name="arrow" size={16} />
          </a>
          <p className="muted small">
            Prefer a form?{' '}
            <a href={profile.questionForm} target="_blank" rel="noreferrer" className="text-link">
              Ask a question here
            </a>
            .
          </p>
        </div>

        <form className="card contact-form" onSubmit={onSubmit}>
          <label>
            <span>Your name</span>
            <input value={form.name} onChange={update('name')} required autoComplete="name" placeholder="Jane Doe" />
          </label>
          <label>
            <span>Message</span>
            <textarea
              value={form.message}
              onChange={update('message')}
              required
              rows={6}
              placeholder="Tell me about your project or role…"
            />
          </label>
          <button type="submit" className="btn btn-primary">
            <Icon name="mail" size={18} /> Send message
          </button>
        </form>
      </div>
    </Section>
  );
}
