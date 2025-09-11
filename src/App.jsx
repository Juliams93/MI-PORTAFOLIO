import { useState } from 'react'
import './App.css'

import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import WebDevSection from './components/WebDevSection'
import DataAnalysisSection from './components/DataAnalysisSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('¡Mensaje enviado! Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <Navigation 
        isDarkMode={isDarkMode}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        toggleTheme={toggleTheme}
      />

      <HeroSection isDarkMode={isDarkMode} />
      <AboutSection isDarkMode={isDarkMode} />
      <WebDevSection isDarkMode={isDarkMode} />
      <DataAnalysisSection isDarkMode={isDarkMode} />
      <ProjectsSection isDarkMode={isDarkMode} />
      <ContactSection 
        isDarkMode={isDarkMode}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        formData={formData}
      />
    </div>
  )
}

export default App
