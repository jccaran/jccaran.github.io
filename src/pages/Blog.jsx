import './Blog.css'

const posts = [
  {
    date: 'May 10, 2025',
    title: 'The Art of the Good Enough Abstraction',
    excerpt:
      "Every engineer has an instinct to over-engineer. Here's how I learned to resist it — and when to give in — after watching a beautifully abstract system collapse under its own weight.",
    tags: [{ label: 'Engineering', color: 'indigo' }, { label: 'Opinion', color: 'rose' }],
    readTime: '5 min read',
  },
  {
    date: 'Mar 22, 2025',
    title: 'Lessons From a Year of Remote-First Engineering',
    excerpt:
      'Async-first communication, documentation as a first-class artifact, and the surprising importance of timezone empathy — what changed in my work after going fully remote.',
    tags: [{ label: 'Career', color: 'amber' }, { label: 'Remote', color: 'cyan' }],
    readTime: '7 min read',
  },
  {
    date: 'Jan 5, 2025',
    title: "Iceland in January: A Hiking Engineer's Field Notes",
    excerpt:
      'Frozen waterfalls, aurora chasing, and what happens when your GPS app decides to route you across a geothermal vent. Lessons from the land of fire and ice.',
    tags: [{ label: 'Travel', color: 'green' }, { label: 'Life', color: 'purple' }],
    readTime: '9 min read',
  },
]

export default function Blog() {
  return (
    <div className="blog-page section">
      <div className="container">
        <h1 className="section-title">Blog</h1>
        <p className="section-subtitle">Writing about code, craft, and the occasional adventure.</p>

        <div className="posts-list">
          {posts.map((post) => (
            <article className="post-card" key={post.title}>
              <div className="post-meta">
                <span className="post-date">{post.date}</span>
                <span className="post-read-time">{post.readTime}</span>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.excerpt}</p>
              <div className="post-footer">
                <div className="post-tags">
                  {post.tags.map(({ label, color }) => (
                    <span key={label} className={`tag tag-${color}`}>{label}</span>
                  ))}
                </div>
                <span className="post-coming-soon">Coming soon</span>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-note">
          <span className="blog-note-icon">✍️</span>
          <p>Full posts coming soon. Subscribe via{' '}
            <a href="/feed.xml" className="blog-note-link">RSS</a> or check back later.
          </p>
        </div>
      </div>
    </div>
  )
}
