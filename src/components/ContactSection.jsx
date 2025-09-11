import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const socials = [
  { icon: Github, href: 'https://github.com/juliams93', label: 'GitHub', color: 'hover:bg-gray-600' },
  { icon: Linkedin, href: 'https://linkedin.com/in/julia-marín-salas-b20167309', label: 'LinkedIn', color: 'hover:bg-blue-600' },
  { icon: Mail, href: 'mailto:jul.ms1193@gmail.com', label: 'E-mail', color: 'hover:bg-purple-600' }
]

const ContactSection = ({ isDarkMode, handleSubmit, handleInputChange, formData }) => {
  const [copiedKey, setCopiedKey] = useState(null)

  const handleCopy = async (e, key, value) => {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(value)
      setCopiedKey(key)
      setTimeout(() => setCopiedKey(null), 1200)
    } catch {
      // no-op
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-4 transition-colors ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>Conectemos</h2>
          <p className={`text-xl max-w-3xl mx-auto transition-colors ${
            isDarkMode ? 'text-white/80' : 'text-slate-700'
          }`}>
            ¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y colaborar contigo
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={`rounded-xl p-8 border transition-colors ${
              isDarkMode 
                ? 'bg-white/5 backdrop-blur-lg border-white/10' 
                : 'bg-white/80 backdrop-blur-lg border-slate-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>Envíame un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors ${
                    isDarkMode ? 'text-white/80' : 'text-slate-700'
                  }`}>
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors ${
                    isDarkMode ? 'text-white/80' : 'text-slate-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                    }`}
                    placeholder="tu.email@ejemplo.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors ${
                    isDarkMode ? 'text-white/80' : 'text-slate-700'
                  }`}>
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                      isDarkMode 
                        ? 'bg-white/10 border-white/20 text-white placeholder-white/50' 
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-500'
                    }`}
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensaje
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div className={`rounded-xl p-8 border transition-colors ${
              isDarkMode 
                ? 'bg-white/5 backdrop-blur-lg border-white/10' 
                : 'bg-white/80 backdrop-blur-lg border-slate-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>Sígueme en</h3>
              <div className="space-y-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className={`flex items-center p-4 rounded-lg border transition-all duration-300 justify-between ${
                      isDarkMode 
                        ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
                        : 'bg-white/50 border-slate-200 text-slate-900 hover:bg-white'
                    } ${social.color}`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center">
                      <social.icon className="w-6 h-6 mr-4" />
                      <span className="font-medium">{social.label}</span>
                    </span>
                    <button
                      onClick={(e) => handleCopy(e, social.label, social.href)}
                      className="ml-4 p-2 rounded hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                      title="Copiar enlace"
                      type="button"
                    >
                      {copiedKey === social.label ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </motion.a>
                ))}
              </div>
            </div>
            <div className={`rounded-xl p-8 border transition-colors ${
              isDarkMode 
                ? 'bg-white/5 backdrop-blur-lg border-white/10' 
                : 'bg-white/80 backdrop-blur-lg border-slate-200'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>Disponibilidad</h3>
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className={`font-medium transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>Disponible para proyectos</span>
              </div>
              <p className={`text-sm transition-colors ${
                isDarkMode ? 'text-white/70' : 'text-slate-600'
              }`}>
                Actualmente acepto proyectos de desarrollo web y análisis de datos. 
                Tiempo de respuesta promedio: 24 horas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
