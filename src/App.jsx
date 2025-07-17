import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/Layout.jsx'
import Resume from './pages/Resume.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
