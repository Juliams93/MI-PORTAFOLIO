/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { Globe, Code, Briefcase } from 'lucide-react'

const WebDevSection = ({ isDarkMode }) => (
  <section id="web-dev" className={`py-20 transition-colors ${
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
        }`}>Desarrollo Web</h2>
        <p className={`text-xl max-w-3xl mx-auto transition-colors ${
          isDarkMode ? 'text-white/80' : 'text-slate-700'
        }`}>
          Especializada en crear aplicaciones web modernas, escalables y centradas en la experiencia del usuario
        </p>
      </motion.div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible">
        {[
          { 
            icon: Globe, 
            title: 'Frontend', 
            skills: ['React', 'JavaScript ES6+', 'HTML5 & CSS3', 'Tailwind CSS', 'Responsive Design'],
            color: 'from-purple-500 to-pink-500'
          },
          { 
            icon: Code, 
            title: 'Backend', 
            skills: ['Node.js', 'Express.js', 'APIs REST', 'MongoDB', 'Authentication'],
            color: 'from-blue-500 to-cyan-500'
          },
          { 
            icon: Briefcase, 
            title: 'Herramientas', 
            skills: ['Git & GitHub', 'VS Code', 'Vite', 'Jest Testing', 'Figma'],
            color: 'from-green-500 to-emerald-500'
          }
        ].map((category, index) => (
          <motion.div
            key={category.title}
            className={`rounded-xl p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-purple-400/30' 
                : 'bg-white/80 backdrop-blur-lg border-slate-200 hover:border-purple-400/50'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
              <category.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className={`text-xl font-semibold mb-4 transition-colors ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill} className={`flex items-center transition-colors ${
                  isDarkMode ? 'text-white/80' : 'text-slate-700'
                }`}>
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)

export default WebDevSection
