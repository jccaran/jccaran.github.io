import './Blog.css'

const posts = [
  {
    date: 'May 26, 2025',
    title: 'Placeholder',
    excerpt:
      "Maybe something will go here.",
    tags: [{ label: 'Engineering', color: 'indigo' }, { label: 'Opinion', color: 'rose' }],
    readTime: '5 min read',
  }
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
