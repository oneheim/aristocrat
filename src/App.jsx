import { Routes, Route } from 'react-router-dom'
import './App.css'
import { LanguageProvider } from './i18n/LanguageContext'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </LanguageProvider>
  )
}

export default App
