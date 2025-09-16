/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { BarChart3, Database, Code } from 'lucide-react'

const DataAnalysisSection = ({ isDarkMode }) => (
  <section id="data-analysis" className="py-20">
    <div className="container mx-auto px-6">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={`text-4xl font-bold mb-4 transition-colors ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>Análisis de Datos</h2>
        <p className={`text-xl max-w-3xl mx-auto transition-colors ${
          isDarkMode ? 'text-white/80' : 'text-slate-700'
        }`}>
          Transformo datos en insights valiosos utilizando técnicas avanzadas de análisis y visualización
        </p>
      </motion.div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            icon: BarChart3, 
            title: 'Análisis Estadístico', 
            skills: ['Python', 'Pandas', 'NumPy', 'Estadística Descriptiva', 'Pruebas de Hipótesis'],
            color: 'from-orange-500 to-red-500'
          },
          { 
            icon: Database, 
            title: 'Bases de Datos', 
            skills: ['SQL', 'PostgreSQL', 'MongoDB', 'ETL Processes', 'Data Warehousing'],
            color: 'from-blue-500 to-indigo-500'
          },
          { 
            icon: BarChart3, 
            title: 'Visualización', 
            skills: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
            color: 'from-green-500 to-teal-500'
          },
          { 
            icon: Code, 
            title: 'Machine Learning', 
            skills: ['Scikit-learn', 'Regression', 'Classification', 'Clustering', 'Model Evaluation'],
            color: 'from-purple-500 to-violet-500'
          }
        ].map((category, index) => (
          <motion.div
            key={category.title}
            className={`rounded-xl p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/5 backdrop-blur-lg border-white/10 hover:border-blue-400/30' 
                : 'bg-white/80 backdrop-blur-lg border-slate-200 hover:border-blue-400/50'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
              <category.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className={`text-lg font-semibold mb-3 transition-colors ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>{category.title}</h3>
            <ul className="space-y-1.5">
              {category.skills.map((skill) => (
                <li key={skill} className={`text-sm flex items-center transition-colors ${
                  isDarkMode ? 'text-white/80' : 'text-slate-700'
                }`}>
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={`mt-16 rounded-xl p-8 border transition-colors ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-white/10' 
            : 'bg-gradient-to-r from-blue-100 to-purple-100 border-slate-200'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <h3 className={`text-2xl font-bold mb-4 text-center transition-colors ${
          isDarkMode ? 'text-white' : 'text-slate-900'
        }`}>Metodología de Trabajo</h3>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center overflow-x-auto md:overflow-visible">
          {[
            { step: '01', title: 'Recolección', desc: 'Obtención y limpieza de datos' },
            { step: '02', title: 'Exploración', desc: 'Análisis exploratorio y patrones' },
            { step: '03', title: 'Modelado', desc: 'Aplicación de técnicas analíticas' },
            { step: '04', title: 'Visualización', desc: 'Presentación de insights' }
          ].map((item, index) => (
            <motion.div
              key={item.step}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-blue-400 mb-2">{item.step}</div>
              <h4 className={`text-lg font-semibold mb-2 transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>{item.title}</h4>
              <p className={`text-sm transition-colors ${
                isDarkMode ? 'text-white/70' : 'text-slate-600'
              }`}>{item.desc}</p>
              {index < 3 && (
                <div className="hidden md:block absolute top-6 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

export default DataAnalysisSection
