import { useEffect } from 'react'
import {
  profile,
  coreFocus,
  stats,
  skillCategories,
  projects,
  workHistory,
  educationHistory,
  certifications,
} from './data'

function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar')
      if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 30)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
<span className="brand-mark">{'>_'}</span> {profile.fullName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#siteNav"
          aria-controls="siteNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="siteNav">
          <ul className="navbar-nav ms-auto">
            {links.map((l) => (
              <li className="nav-item" key={l.href}>
                <a className="nav-link" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-lg-7">
<p className="eyebrow">{'>_'} whoami</p>
            <h1>{profile.fullName}</h1>
            <h2>{profile.headline}</h2>
            <p className="lead">{profile.shortIntro}</p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener"
              >
                <i className="bi bi-download"></i> Download Resume
              </a>
              <a className="btn btn-outline" href="#contact">
                Contact Me
              </a>
            </div>
            <div className="social-links">
              {profile.githubUrl && (
                <a href={profile.githubUrl} target="_blank" rel="noopener">
                  <i className="bi bi-github"></i>
                </a>
              )}
              {profile.linkedinUrl && (
                <a href={profile.linkedinUrl} target="_blank" rel="noopener">
                  <i className="bi bi-linkedin"></i>
                </a>
              )}
              {profile.email && (
                <a href={`mailto:${profile.email}`}>
                  <i className="bi bi-envelope"></i>
                </a>
              )}
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-card">
              <img
                src={profile.profileImageUrl}
                alt={profile.fullName}
                loading="lazy"
              />
              <div className="hero-card-body">
                <p className="code-line">
                  <span className="text-accent">developer</span> = {'{'}
                </p>
                <p className="code-line">
                  &nbsp;&nbsp;"role": "{profile.headline}",
                </p>
                <p className="code-line">
                  &nbsp;&nbsp;"location": "{profile.location}",
                </p>
                <p className="code-line">&nbsp;&nbsp;"open_to_work": true</p>
                <p className="code-line">{'}'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <p className="eyebrow">About</p>
            <h3>A developer who builds products, not just code.</h3>
            <p>{profile.aboutText}</p>
            <div className="stats-grid">
              {stats.map((s) => (
                <div className="stat-card" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="info-card">
              <h4>Core focus</h4>
              <ul>
                {coreFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Toolbox</p>
          <h3>Skills and technologies</h3>
        </div>
        <div className="row g-4">
          {skillCategories.map((cat) => (
            <div className="col-md-6 col-lg-4" key={cat.label}>
              <div className="card-surface h-100">
                <div className="card-icon">
                  <i className={`bi ${cat.icon}`}></i>
                </div>
                <h4>{cat.label}</h4>
                <div className="tag-list">
                  {cat.skills.map((s) => (
                    <span className="tag" key={s.name}>
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h3>Featured projects</h3>
        </div>
        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-md-6 col-lg-4" key={p.title}>
              <div className="project-card h-100">
                <img src={p.image} alt={p.title} loading="lazy" />
                <div className="project-body">
                  <h4>{p.title}</h4>
                  <p>{p.shortDescription}</p>
                  <div className="tag-list">
                    {p.tech.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    {p.githubUrl && (
                      <a href={p.githubUrl} target="_blank" rel="noopener">
                        GitHub
                      </a>
                    )}
                    {p.liveUrl && (
                      <a href={p.liveUrl} target="_blank" rel="noopener">
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Journey</p>
          <h3>Experience and education</h3>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="timeline-card">
              <h4>Work experience</h4>
              {workHistory.map((item) => (
                <div className="timeline-item" key={item.roleTitle}>
                  <h5>{item.roleTitle}</h5>
                  <p className="timeline-meta">
                    {item.organization} • {item.location}
                  </p>
                  <p className="timeline-date">
                    {item.startDate} –{' '}
                    {item.isCurrent ? 'Present' : item.endDate}
                  </p>
                  <ul>
                    {item.descriptionLines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="timeline-card">
              <h4>Education</h4>
              {educationHistory.map((item) => (
                <div className="timeline-item" key={item.roleTitle}>
                  <h5>{item.roleTitle}</h5>
                  <p className="timeline-meta">
                    {item.organization} • {item.location}
                  </p>
                  <p className="timeline-date">
                    {item.startDate} –{' '}
                    {item.isCurrent ? 'Present' : item.endDate}
                  </p>
                  <ul>
                    {item.descriptionLines.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Credentials</p>
          <h3>Certifications</h3>
        </div>
        <div className="row g-4">
          {certifications.map((cert) => (
            <div className="col-md-6 col-lg-4" key={cert.title}>
              <div className="cert-card h-100">
                <img src={cert.badgeImageUrl} alt={cert.title} loading="lazy" />
                <h4>{cert.title}</h4>
                <p>
                  {cert.issuer} • {cert.issueDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <p className="eyebrow">Contact</p>
            <h3>Let’s build something meaningful.</h3>
            <p>Open to full-time roles, freelance work, and product collaborations.</p>
            <div className="contact-list">
              {profile.email && (
                <p>
                  <i className="bi bi-envelope"></i> {profile.email}
                </p>
              )}
              {profile.phone && (
                <p>
                  <i className="bi bi-phone"></i> {profile.phone}
                </p>
              )}
              {profile.location && (
                <p>
                  <i className="bi bi-geo-alt"></i> {profile.location}
                </p>
              )}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-card">
              <a className="btn btn-primary w-100" href={`mailto:${profile.email}`}>
                Say Hello
              </a>
              <a
                className="btn btn-outline w-100 mt-3"
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener"
              >
                Open Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p>
          © <span id="year">{new Date().getFullYear()}</span> {profile.fullName}. All
          rights reserved.
        </p>
        <p>Built for speed with a static-first portfolio experience.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
