import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-name">Chris Caran</span>
        <span className="footer-copy">© {new Date().getFullYear()} — Built with React + Vite</span>
      </div>
    </footer>
  )
}
