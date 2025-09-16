import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Menu } from 'lucide-react'

const Navigation = ({ isDarkMode, activeSection, setActiveSection, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const navItems = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'Sobre Mí' },
    { key: 'web-dev', label: 'Desarrollo Web' },
    { key: 'data-analysis', label: 'Análisis de Datos' },
    { key: 'projects', label: 'Proyectos' },
    { key: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-lg transition-colors duration-300
      ${isDarkMode ? 'bg-black/20 border-white/10' : 'bg-white/20 border-black/10'}
    `}>
      <div className="w-full px-2 sm:px-6 py-2 sm:py-4 mx-0">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl font-bold transition-colors ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
          >
            Jm-devdata.com
          </motion.div>
          <div className="flex items-center space-x-6">
            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={`#${item.key}`}
                  className={`transition-colors capitalize ${
                    isDarkMode ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                  } ${
                    activeSection === item.key ? (isDarkMode ? 'text-purple-400' : 'text-purple-600') : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveSection(item.key)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full transition-colors focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`} />
            </button>
            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                isDarkMode 
                  ? 'bg-white/10 hover:bg-white/20 text-white' 
                  : 'bg-black/10 hover:bg-black/20 text-slate-900'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
        {/* Mobile dropdown */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden flex flex-col space-y-4 mt-4 px-2`}
          >
            {navItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                className={`transition-colors capitalize py-2 px-4 rounded ${
                  isDarkMode ? 'text-white/80 hover:bg-purple-900/20' : 'text-slate-700 hover:bg-purple-100'
                } ${
                  activeSection === item.key ? (isDarkMode ? 'text-purple-400' : 'text-purple-600') : ''
                }`}
                onClick={() => {
                  setActiveSection(item.key)
                  setMobileOpen(false)
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mt-3 text-center text-sm md:text-base font-medium ${
            isDarkMode ? 'text-white/80' : 'text-slate-700'
          }`}
        >
          🎯 Tecnología + Datos + Creatividad = Soluciones innovadoras que mejoran vidas y hacen crecer negocios.
        </motion.p>
      </div>
    </nav>
  )
}

export default Navigation
