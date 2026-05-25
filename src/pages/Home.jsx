import { Link } from 'react-router-dom'
import './Home.css'

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/jccaran',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jccaran/',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="hero-glow hero-glow-1" />
        <div className="hero-glow hero-glow-2" />
        <div className="container hero-content">
          <div className="hero-photo-wrap">
            <img
              src="/iceland-profile.png"
              alt="Chris Caran"
              className="hero-photo"
            />
            <div className="hero-photo-ring" />
          </div>
          <div className="hero-text">
            <p className="hero-greeting">Hey, I'm</p>
            <h1 className="hero-name">Chris Caran</h1>
            <p className="hero-tagline">
              <span className="tagline-accent">Quality Engineering Leader</span> building (and testing) things that matter.
            </p>
            <p className="hero-bio">Experienced quality engineer, engineering leader, manager, and SDET. 
              Worked in JavaScript, Node.js, Bash, Python, C#, Java, Groovy, Go in various automation tools and 
              frameworks (Cypress, Selenium, etc.) over my career. I have over 15 years of testing frontend web 
              applications, mobile apps, API testing, backend (SQL, noSQL) with experience doing ETL, 
              data migration, and all manners of functional, performance, and security testing in single 
              and multi-tenant environments.</p>
    
             <p className="hero-bio">I most recently worked in Development Operations as hands-on leader owning CI/CD, 
              automation integration, and devops tooling in Google Cloud Platform. I owned vendor relationships 
              and administration duties for CircleCI, Testrail, Cypress, and other tools. I am adept and quickly 
              pivoting to new technologies and have shown this at multiple roles over my career.</p>

             <p className="hero-bio">I love the chaos of small, quickly growing companies and startups but I can be 
              an asset in whatever organization I'm in. I have built quality teams from the ground up at two 
              different companies and have excelled at growing and mentoring my employees onto bigger and better 
              things - many of them are now staff quality engineers, quality managers, Senior SDETs, and the like.</p>
              <p className="hero-bio">I have led engineering-wide initiatives to improve automation and to create an 
                engineering onboarding structure. I have excellent documentation and technical writing. I am also 
                very experienced as an Agile leader, having been a product owner, scrum master, and been an 
                integral part of agile transformation in multiple roles.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View My Work</Link>
              <Link to="/resume" className="btn btn-outline">Resume</Link>
            </div>
            <div className="hero-socials">
              {socialLinks.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={label}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="highlights section">
        <div className="container">
          <div className="highlights-grid">
            {[
              { emoji: '🚀', label: 'Shipping Fast', desc: 'Pragmatic, iterative development' },
              { emoji: '🎨', label: 'Caring About UX', desc: 'Details make the difference' },
              { emoji: '🧠', label: 'Always Learning', desc: 'New tech, new problems' },
              { emoji: '🌍', label: 'Big-Picture Thinking', desc: 'Systems that scale' },
            ].map(({ emoji, label, desc }) => (
              <div className="highlight-card" key={label}>
                <span className="highlight-emoji">{emoji}</span>
                <h3 className="highlight-label">{label}</h3>
                <p className="highlight-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
