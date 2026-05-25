import { NavLink } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/', label: 'About' },
  { to: '/resume', label: 'Resume' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
]

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner container">
        <NavLink to="/" className="nav-logo">
          <span className="nav-logo-bracket">&lt;</span>
          jccaran
          <span className="nav-logo-bracket"> /&gt;</span>
        </NavLink>
        <nav className="nav-links">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      <div className="nav-gradient-bar" />
    </header>
  )
}
