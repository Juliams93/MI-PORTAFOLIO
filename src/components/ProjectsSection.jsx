/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Globe, BarChart3 } from 'lucide-react'

const ProjectsSection = ({ isDarkMode }) => (
  <section id="projects" className={`py-20 transition-colors ${
    isDarkMode ? 'bg-black/20' : 'bg-white/50'
  }`}>
    <div className="container mx-auto px-6">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={`text-4xl font-bold mb-4 transition-colors ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>Mis Proyectos</h2>
        <p className={`text-xl max-w-3xl mx-auto transition-colors ${
          isDarkMode ? 'text-white/80' : 'text-slate-700'
        }`}>
          Una selección de proyectos que demuestran mis habilidades en desarrollo web y análisis de datos
        </p>
      </motion.div>
      <div className="grid lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <Globe className="w-6 h-6 text-purple-500 mr-3" />
            Desarrollo Web
          </h3>
          <div className="space-y-6">
            {[
              {
                title: "Ada y Byte - Aventura interactiva",
                tech: ["React", "Vite"],
                description: "Juego educativo para que los niños aprendan a programar de forma divertida.",
                features: ["Animaciones SVG", "Niveles progresivos", "Sistema de recompensas"],
                demoUrl: "https://vercel.com/julia-marin-salas-projects/ada-byte-codeadventure",
                codeUrl: "https://github.com/Juliams93/Ada-byte-codeadventure/tree/main/ada-byte-aventura"
              },
              {
                title: "Portfolio Interactivo",
                tech: ["React", "Framer Motion", "Tailwind"],
                description: "Sitio web personal con animaciones avanzadas y modo oscuro/claro.",
                features: ["Animaciones CSS", "Responsive Design", "Theme Toggle"],
                demoUrl: "https://mi-portafolio-beige-zeta.vercel.app/",
                codeUrl: "https://github.com/Juliams93/MI-PORTAFOLIO"
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-400/30' 
                    : 'bg-white/80 backdrop-blur-lg border-slate-200 hover:border-purple-400/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <h4 className={`text-xl font-semibold mb-2 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>{project.title}</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`text-sm mb-4 transition-colors ${
                  isDarkMode ? 'text-white/80' : 'text-slate-700'
                }`}>
                  {project.description}
                </p>
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className={`text-sm flex items-center transition-colors ${
                      isDarkMode ? 'text-white/70' : 'text-slate-600'
                    }`}>
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-4">
                  {project.demoUrl ? (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Demo
                    </motion.a>
                  ) : (
                    <motion.button 
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Demo
                    </motion.button>
                  )}
                  {project.codeUrl ? (
                    <motion.a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isDarkMode 
                          ? 'border border-white/30 text-white hover:bg-white/10' 
                          : 'border border-slate-300 text-slate-900 hover:bg-slate-100'
                      } flex items-center justify-center`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Código
                    </motion.a>
                  ) : (
                    <motion.button 
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isDarkMode 
                          ? 'border border-white/30 text-white hover:bg-white/10' 
                          : 'border border-slate-300 text-slate-900 hover:bg-slate-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Ver Código
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className={`text-2xl font-bold mb-6 flex items-center transition-colors ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            <BarChart3 className="w-6 h-6 text-blue-500 mr-3" />
            Análisis de Datos
          </h3>
          <div className="space-y-6">
            {[
              {
                title: "Análisis de Ventas",
                tech: ["Python", "Pandas", "Plotly"],
                description: "Dashboard interactivo para análisis de tendencias de ventas y predicción de demanda.",
                features: ["Visualizaciones dinámicas", "Modelos predictivos", "KPIs en tiempo real"]
              },
              {
                title: "Segmentación de Clientes",
                tech: ["Python", "Scikit-learn", "Tableau"],
                description: "Análisis de comportamiento de clientes usando clustering y machine learning.",
                features: ["K-means clustering", "RFM Analysis", "Customer Lifetime Value"]
              },
              {
                title: "Análisis de Sentimientos",
                tech: ["Python", "NLP", "MongoDB"],
                description: "Procesamiento de texto para análisis de opiniones en redes sociales.",
                features: ["Text Mining", "Sentiment Classification", "Word Clouds"]
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-blue-400/30' 
                    : 'bg-white/80 backdrop-blur-lg border-slate-200 hover:border-blue-400/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <h4 className={`text-xl font-semibold mb-2 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>{project.title}</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className={`text-sm mb-4 transition-colors ${
                  isDarkMode ? 'text-white/80' : 'text-slate-700'
                }`}>
                  {project.description}
                </p>
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className={`text-sm flex items-center transition-colors ${
                      isDarkMode ? 'text-white/70' : 'text-slate-600'
                    }`}>
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 mt-4">
                  <motion.button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Análisis
                  </motion.button>
                  <motion.button 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isDarkMode 
                        ? 'border border-white/30 text-white hover:bg-white/10' 
                        : 'border border-slate-300 text-slate-900 hover:bg-slate-100'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Notebook
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

export default ProjectsSection
