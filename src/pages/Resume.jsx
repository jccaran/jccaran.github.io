import './Resume.css'

const experience = [
  {
    company: 'Veeva Systems',
    role: 'Software Engineer',
    period: '2022 – Present',
    location: 'Remote',
    bullets: [
      'Building and maintaining enterprise SaaS products used by life-science companies worldwide.',
      'Collaborated cross-functionally with product and design to ship high-impact features on tight timelines.',
      'Improved performance of critical data pipelines, reducing average processing time by 40%.',
    ],
    color: '#6366f1',
  },
  {
    company: 'Previous Company',
    role: 'Software Engineer',
    period: '2020 – 2022',
    location: 'San Francisco, CA',
    bullets: [
      'Developed RESTful APIs serving millions of requests per day with 99.9% uptime.',
      'Led migration of legacy monolith to microservices architecture.',
      'Mentored two junior engineers and ran weekly tech talks.',
    ],
    color: '#06b6d4',
  },
  {
    company: 'Startup (Internship)',
    role: 'Software Engineering Intern',
    period: 'Summer 2019',
    location: 'New York, NY',
    bullets: [
      'Built a full-stack feature from design mock-up to production in 6 weeks.',
      'Wrote comprehensive unit + integration test suite, pushing coverage from 42% to 78%.',
    ],
    color: '#f43f5e',
  },
]

const skills = [
  { label: 'JavaScript / TypeScript', color: 'amber' },
  { label: 'React', color: 'cyan' },
  { label: 'Node.js', color: 'green' },
  { label: 'Python', color: 'indigo' },
  { label: 'Java', color: 'rose' },
  { label: 'SQL / PostgreSQL', color: 'purple' },
  { label: 'REST APIs', color: 'cyan' },
  { label: 'GraphQL', color: 'indigo' },
  { label: 'Docker / Kubernetes', color: 'amber' },
  { label: 'AWS', color: 'amber' },
  { label: 'Git / GitHub', color: 'green' },
  { label: 'CI/CD', color: 'rose' },
  { label: 'Agile / Scrum', color: 'purple' },
  { label: 'System Design', color: 'indigo' },
]

const education = [
  {
    school: 'University of Illinois at Urbana-Champaign',
    degree: 'B.S. Computer Science',
    period: '2016 – 2020',
  },
]

export default function Resume() {
  return (
    <div className="resume-page section">
      <div className="container">
        <h1 className="section-title">Resume</h1>
        <p className="section-subtitle">Where I've been and what I can do.</p>

        {/* Experience */}
        <h2 className="resume-section-heading">Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <div className="timeline-item" key={job.company + job.period}>
              <div className="timeline-dot" style={{ background: job.color }} />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="job-role">{job.role}</h3>
                    <span className="job-company">{job.company}</span>
                  </div>
                  <div className="job-meta">
                    <span className="job-period">{job.period}</span>
                    <span className="job-location">{job.location}</span>
                  </div>
                </div>
                <ul className="job-bullets">
                  {job.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Skills */}
        <h2 className="resume-section-heading" style={{ marginTop: '3.5rem' }}>Skills</h2>
        <div className="skills-grid">
          {skills.map(({ label, color }) => (
            <span key={label} className={`tag tag-${color} skill-tag`}>{label}</span>
          ))}
        </div>

        {/* Education */}
        <h2 className="resume-section-heading" style={{ marginTop: '3.5rem' }}>Education</h2>
        {education.map((edu) => (
          <div className="edu-card" key={edu.school}>
            <div>
              <h3 className="edu-school">{edu.school}</h3>
              <span className="edu-degree">{edu.degree}</span>
            </div>
            <span className="edu-period">{edu.period}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
