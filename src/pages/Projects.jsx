import './Projects.css'

const projects = [
  {
    title: 'DevBoard',
    description:
      'A developer dashboard that aggregates GitHub activity, pull requests, and CI status into a single at-a-glance view. Built to scratch my own itch — no more tab-switching.',
    tags: [
      { label: 'React', color: 'cyan' },
      { label: 'TypeScript', color: 'indigo' },
      { label: 'Node.js', color: 'green' },
      { label: 'GitHub API', color: 'amber' },
    ],
    github: 'https://github.com/jccaran',
    accent: 'linear-gradient(135deg, #6366f1, #06b6d4)',
  },
  {
    title: 'Trailhead',
    description:
      'A hiking trail planner with offline map support and elevation profiles. Uses OpenStreetMap data and a lightweight tile server. Great for trips where cell service is nonexistent.',
    tags: [
      { label: 'Python', color: 'amber' },
      { label: 'PostgreSQL', color: 'indigo' },
      { label: 'Leaflet.js', color: 'green' },
      { label: 'Docker', color: 'rose' },
    ],
    github: 'https://github.com/jccaran',
    accent: 'linear-gradient(135deg, #10b981, #06b6d4)',
  },
  {
    title: 'Inkwell',
    description:
      "A minimalist Markdown blogging engine with syntax highlighting and RSS support. Statically generated, deploys to GitHub Pages in seconds. This site's blog is powered by it.",
    tags: [
      { label: 'Go', color: 'cyan' },
      { label: 'Markdown', color: 'purple' },
      { label: 'Static Site', color: 'amber' },
    ],
    github: 'https://github.com/jccaran',
    accent: 'linear-gradient(135deg, #f43f5e, #f59e0b)',
  },
]

export default function Projects() {
  return (
    <div className="projects-page section">
      <div className="container">
        <h1 className="section-title">Projects</h1>
        <p className="section-subtitle">Things I've built, broken, and learned from.</p>

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              <div className="project-accent-bar" style={{ background: p.accent }} />
              <div className="project-body">
                <h2 className="project-title">{p.title}</h2>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map(({ label, color }) => (
                    <span key={label} className={`tag tag-${color}`}>{label}</span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-github-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  View on GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
