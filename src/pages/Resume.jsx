import './Resume.css'

const experience = [
  {
    company: 'Veeva Systems',
    role: 'Senior Software Manager in Test',
    period: 'Jan 2025 – Present',
    location: 'Remote',
    bullets: [
      'Senior QA Manager for the SiteVault application suite, a clinical research software platform serving life-science companies worldwide.',
    ],
    color: '#6366f1',
  },
  {
    company: 'Hudl',
    role: 'Quality Assurance Manager – Fan Experience',
    period: 'Oct 2023 – Jan 2025',
    location: 'Remote',
    bullets: [
      'QA Manager for the Fan Experience within the Competitive Business Unit.',
      'Automation with Python (Behave BDD, PyTest) and TypeScript (Playwright); senior code reviewer focused on technical development and education.',
      'Created and presented multiple trainings on coding best practices, testing skills, and code review approaches for the competitive business unit.',
      'Testing on web and mobile platforms; first and second tier on-call responsibilities.',
    ],
    color: '#06b6d4',
  },
  {
    company: 'Pendo.io',
    role: 'Manager, Release Engineering',
    period: 'Feb 2022 – Jun 2023',
    location: 'Raleigh, NC · Hybrid',
    bullets: [
      'Owned CI/CD process and tooling (CircleCI, GitHub), SDLC improvements, release automation, metrics, efficiency, and cost.',
      'Release and Quality SME and coordinator for 20+ feature teams, SREs, and security; took regular weekly on-call shifts.',
      'Directly managed two release/devops engineers — interviewed, hired, mentored, and promoted within career frameworks.',
      'Led engineering-wide initiative to improve testing and automation, eliminating manual touch points across the deployment pipeline.',
      'Built tools in JavaScript, Node.js, Bash, Python, and GoLang — including a release CLI and integration/orchestration layer for build, quality, and deployment.',
      'Owned quality and release metrics reporting at QBRs to the executive team via CircleCI and Looker dashboards.',
    ],
    color: '#f43f5e',
  },
  {
    company: 'Pendo.io',
    role: 'Release Engineering Lead',
    period: 'Jan 2021 – Feb 2022',
    location: 'Raleigh, NC · Hybrid',
    bullets: [
      'Sole dedicated release engineer for an engineering org of 200+ across three countries (US, UK, Israel).',
      'Owned CI/CD tooling, SDLC improvements, release automation, metrics, and vendor relationships (CircleCI, Cypress, Testrail, Aviator).',
      'Developed internal tools in JavaScript, Node.js, Bash, Python, and GoLang for release orchestration and build/quality/deployment integration.',
    ],
    color: '#a855f7',
  },
  {
    company: 'Pendo.io',
    role: 'Staff Quality Engineer',
    period: 'Jan 2020 – Jan 2021',
    location: 'Raleigh, NC · On-site',
    bullets: [
      'Owned quality processes, tools (Cypress, Postman, CircleCI), testing standards, deployment process, and documentation.',
      'Lead and mentor to quality engineers across a distributed matrix organization.',
      'Wrote automation in Cypress (JavaScript/Node.js), API automation (Postman, curl), and custom backend tests against Google Cloud Platform datastore.',
      'Owned release change control documentation for SOC2 compliance.',
    ],
    color: '#f97316',
  },
  {
    company: 'Pendo.io',
    role: 'Quality Engineering Manager',
    period: 'Oct 2018 – Jan 2020',
    location: 'Raleigh, NC · On-site',
    bullets: [
      'Directly managed ten quality engineers across multiple feature teams — web apps, user agents, backend aggregations, performance, and security.',
      'Managed three automation engineers building a webdriver.io centralized automation bridge between US (JavaScript) and Israel (Java mobile) teams.',
      'Hired 8 QEs and 3 SDETs; developed new hire onboarding materials for all engineers.',
      'Built a JavaScript data-robot hackathon app to facilitate analytics testing across multiple subscriptions and environments.',
      'Produced comprehensive Jira/Looker quality dashboards and metrics reports reviewed by VPs and C-suite.',
    ],
    color: '#10b981',
  },
  {
    company: 'Pendo.io',
    role: 'Senior Quality Engineer',
    period: 'Feb 2017 – Oct 2018',
    location: 'Raleigh, NC',
    bullets: [
      'First senior quality engineer at the company.',
      'Front-end (Node.js, Angular, Vue) and back-end (GoLang) testing on cloud-deployed web applications.',
      'Wrote automation with webdriver.io and Cypress; API automation with Stoplight and Postman; backend aggregation testing against GCP datastore.',
      'Owned GDPR testing, multi-application subscription transition, track-event integration, and foundational CI/CD work (Wercker → CircleCI).',
    ],
    color: '#06b6d4',
  },
  {
    company: 'Verscend (formerly Verisk Health)',
    role: 'Quality Engineering Manager',
    period: 'Nov 2010 – Feb 2017',
    location: 'Durham, NC · On-site',
    bullets: [
      'QA Manager for the Payment Accuracy division — owned requirements, documentation, and testing infrastructure for the core clinical rules engine (CMS, MCD rules, fraud, reporting, analytics).',
      'End-to-end testing of the ConVergence Point platform: heavy API testing (sync/async web services), ETL, and SQL.',
      'Product owner and developer on a custom automation platform processing batches of claims as web service requests, verifying ETL and SQL output (Java and Lisp).',
      'Implemented SoapUI automation for web services (Java/Groovy); worked in Maven and Bamboo for CI/CD.',
      'Hired a team of 6 testers; coordinated with offshore quality resources in Nepal; member of leadership team for morale, retention, and planning.',
    ],
    color: '#6366f1',
  },
  {
    company: 'Harnessed Electrons',
    role: 'Freelance Consultant',
    period: 'Jun 2010 – Sep 2011',
    location: 'Cary, NC · Remote',
    bullets: [
      'Part-time freelance on government/defense projects.',
      'Primary back-end game design, modeling, quality, and testing for a counter-insurgency training game used by the National Defense University in Washington, DC.',
      'Phase 2: on-site execution at National Defense University (September 2011).',
    ],
    color: '#f43f5e',
  },
  {
    company: 'Allscripts',
    role: 'Transaction Hub QA Lead',
    period: 'Jun 2010 – Oct 2010',
    location: 'Raleigh, NC · On-site',
    bullets: [
      'Senior tester and team lead for the Transaction Hub — the central piece of the Meaningful Use initiative to meet federal healthcare guidelines.',
      'Led integration testing across five projects through web services into a middleware hub; extensive SoapUI testing in XML (CCD and HL7 2.3.1).',
      'Interviewed and hired three SDETs; led a team of five SDETs as primary management interface.',
    ],
    color: '#a855f7',
  },
  {
    company: 'CC Intelligent Solutions',
    role: 'Quality Engineering Manager',
    period: 'Oct 2006 – Jun 2010',
    location: 'Raleigh, NC · On-site',
    bullets: [
      'QA Manager supporting multiple agencies including the US Army; held Secret clearance (DISCO, granted 2007).',
      'Traveled to customer secure facilities to deploy solutions on SIPR/NIPR networks; tested sensitive applications in secure environments.',
      'Automation and web services tested in C# .NET and SQL; implemented HP automation and trained quality engineers.',
      'Promoted from QE → QA Lead (within 1 month) → Manager (Jan 2007); hired and grew a quality team.',
    ],
    color: '#10b981',
  },
  {
    company: 'Lenovo',
    role: 'eTechnical Solution Developer',
    period: 'May 2005 – Sep 2006',
    location: 'Durham, NC · On-site',
    bullets: [
      'Software developer for the eSupport site after Lenovo acquired the business unit from IBM.',
      'Wrote automation in C++ for use on the support site.',
    ],
    color: '#f97316',
  },
  {
    company: 'IBM',
    role: 'eTechnical Solutions Developer',
    period: 'Aug 1999 – May 2005',
    location: 'Durham, NC · On-site',
    bullets: [
      'Software developer for the IBM support site.',
      'Wrote automation in C++.',
    ],
    color: '#06b6d4',
  },
]

const skills = [
  { label: 'Python', color: 'indigo' },
  { label: 'TypeScript / JavaScript', color: 'amber' },
  { label: 'Playwright', color: 'cyan' },
  { label: 'Cypress', color: 'green' },
  { label: 'Pytest / Behave BDD', color: 'indigo' },
  { label: 'Node.js', color: 'green' },
  { label: 'GoLang', color: 'cyan' },
  { label: 'Java', color: 'rose' },
  { label: 'C# / .NET', color: 'purple' },
  { label: 'SQL', color: 'purple' },
  { label: 'REST / SOAP APIs', color: 'cyan' },
  { label: 'CI/CD (CircleCI, GitHub Actions)', color: 'rose' },
  { label: 'Git / GitHub', color: 'green' },
  { label: 'Docker', color: 'amber' },
  { label: 'Google Cloud Platform', color: 'amber' },
  { label: 'Postman', color: 'rose' },
  { label: 'Jira / Confluence', color: 'purple' },
  { label: 'Agile / Scrum', color: 'indigo' },
  { label: 'Test Strategy & Planning', color: 'cyan' },
  { label: 'People Management', color: 'green' },
]

const certifications = [
  { name: 'XRay Essentials for Cloud', issuer: 'Xray by Xblend', date: 'Oct 2023' },
  { name: 'GPT-4 Foundations: Building AI-Powered Apps', issuer: 'LinkedIn Learning', date: 'Jul 2023' },
  { name: 'Test Automation with Python: Python for Testers', issuer: 'LinkedIn Learning', date: 'Jul 2023' },
  { name: 'Certified Tester Foundation Level (CTFL)', issuer: 'ASTQB / ISTQB', date: 'Sep 2010' },
]

const education = []

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

        {/* Certifications */}
        <h2 className="resume-section-heading" style={{ marginTop: '3.5rem' }}>Certifications</h2>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.name}>
              <span className="cert-name">{cert.name}</span>
              <span className="cert-meta">{cert.issuer} · {cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
