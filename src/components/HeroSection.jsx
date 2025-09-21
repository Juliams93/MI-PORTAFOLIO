/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Globe, BarChart3 } from 'lucide-react'

const HeroSection = ({ isDarkMode }) => (
  <section id="home" className="min-h-screen flex items-center justify-center pt-20">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className={`text-5xl md:text-7xl font-bold mb-6 transition-colors ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Hola, soy{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Julia Marín
          </span>
        </motion.h1>
        <motion.p 
          className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors ${
            isDarkMode ? 'text-white/80' : 'text-slate-700'
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Desarrolladora Web Full Stack y Analista de Datos especializada en crear 
          soluciones digitales inteligentes y análisis profundos de datos
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="#web-dev"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Globe className="w-5 h-5" />
            Desarrollo Web
          </motion.a>
          <motion.a
            href="#data-analysis"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart3 className="w-5 h-5" />
            Análisis de Datos
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 border border-blue-400"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Contacto
          </motion.a>
          <motion.a
            href="/curriculum.pdf"
            download
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 border border-pink-400"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Descargar CV
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
)

export default HeroSection
