import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import Projects from './pages/Projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
