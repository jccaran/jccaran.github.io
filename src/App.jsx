import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Travel from './pages/Travel'
import Gaming from './pages/Gaming'
import Work from './pages/Work'
import Blog from './pages/Blog'
import './App.css'

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/personal/travel" element={<Travel />} />
          <Route path="/personal/gaming" element={<Gaming />} />
          <Route path="/personal/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}
