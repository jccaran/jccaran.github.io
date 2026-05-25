import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Nav.css'

const personalItems = [
  { to: '/personal/travel', label: 'Travel' },
  { to: '/personal/gaming', label: 'Gaming' },
  { to: '/personal/work', label: 'Work' },
]

function PersonalDropdown() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const location = useLocation()
  const isActive = location.pathname.startsWith('/personal')

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        className={`nav-link nav-dropdown-trigger ${isActive ? 'active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        Personal
        <svg className={`dropdown-chevron ${open ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="nav-dropdown-menu">
          {personalItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => `nav-dropdown-item ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  )
}

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
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
          <NavLink to="/resume" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Resume</NavLink>
          <PersonalDropdown />
          <NavLink to="/blog" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Blog</NavLink>
        </nav>
      </div>
      <div className="nav-gradient-bar" />
    </header>
  )
}
