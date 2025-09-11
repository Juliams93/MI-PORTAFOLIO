import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, User, Code, Briefcase, BarChart3, Database, Globe, GraduationCap, Award, Heart, Target, Sun, Moon } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el email
    alert('¡Mensaje enviado! Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'bg-black/20 border-white/10' 
          : 'bg-white/20 border-black/10'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`text-2xl font-bold transition-colors ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Julia.dev
            </motion.div>
            
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-8">
                {['home', 'about', 'web-dev', 'data-analysis', 'projects', 'contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className={`transition-colors capitalize ${
                      isDarkMode ? 'text-white/80 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                    } ${
                      activeSection === item ? (isDarkMode ? 'text-purple-400' : 'text-purple-600') : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveSection(item)}
                  >
                    {item === 'web-dev' ? 'Desarrollo Web' : 
                     item === 'data-analysis' ? 'Análisis de Datos' : 
                     item === 'about' ? 'Sobre Mí' : 
                     item === 'projects' ? 'Proyectos' : item}
                  </motion.a>
                ))}
              </div>
              
              {/* Theme Toggle */}
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
        </div>
      </nav>

      {/* Hero Section */}
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
                Julia
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
                className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                  isDarkMode 
                    ? 'border border-white/30 text-white hover:bg-white/10' 
                    : 'border border-slate-300 text-slate-900 hover:bg-slate-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contacto
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className={`py-20 transition-colors ${
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
            }`}>Sobre Mí</h2>
            <p className={`text-xl max-w-3xl mx-auto transition-colors ${
              isDarkMode ? 'text-white/80' : 'text-slate-700'
            }`}>
              Apasionada por la tecnología y los datos, combino creatividad con análisis para crear soluciones innovadoras
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Personal Story */}
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
                <div className="flex items-center mb-6">
                  <Heart className="w-8 h-8 text-pink-500 mr-3" />
                  <h3 className={`text-2xl font-bold transition-colors ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>Mi Historia</h3>
                </div>
                <p className={`text-lg leading-relaxed mb-4 transition-colors ${
                  isDarkMode ? 'text-white/80' : 'text-slate-700'
                }`}>
                  Mi pasión por la tecnología comenzó cuando descubrí cómo los datos pueden contar historias 
                  fascinantes y cómo el código puede dar vida a ideas creativas.
                </p>
                <p className={`text-lg leading-relaxed transition-colors ${
                  isDarkMode ? 'text-white/80' : 'text-slate-700'
                }`}>
                  A través de mi formación en Neoland y mi bootcamp especializado en análisis de datos, 
                  he desarrollado una perspectiva única que combina desarrollo web con ciencia de datos, 
                  creando soluciones que realmente impacten en la vida de las personas.
                </p>
              </div>
            </motion.div>

            {/* Skills & Goals */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="space-y-6">
                {/* Education */}
                <div className={`rounded-xl p-6 border transition-colors ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-lg border-white/10' 
                    : 'bg-white/80 backdrop-blur-lg border-slate-200'
                }`}>
                  <div className="flex items-center mb-4">
                    <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />
                    <h4 className={`text-xl font-semibold transition-colors ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Formación</h4>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className={`font-medium transition-colors ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        Master Full Stack - Neoland
                      </p>
                      <p className={`text-sm transition-colors ${
                        isDarkMode ? 'text-white/70' : 'text-slate-600'
                      }`}>
                        Especialización en tecnologías modernas de desarrollo web
                      </p>
                    </div>
                    <div>
                      <p className={`font-medium transition-colors ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        Bootcamp en Análisis de Datos
                      </p>
                      <p className={`text-sm transition-colors ${
                        isDarkMode ? 'text-white/70' : 'text-slate-600'
                      }`}>
                        Formación intensiva en Python, estadística y machine learning
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className={`rounded-xl p-6 border transition-colors ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-lg border-white/10' 
                    : 'bg-white/80 backdrop-blur-lg border-slate-200'
                }`}>
                  <div className="flex items-center mb-4">
                    <Award className="w-6 h-6 text-green-500 mr-3" />
                    <h4 className={`text-xl font-semibold transition-colors ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Experiencia</h4>
                  </div>
                  <p className={`transition-colors ${
                    isDarkMode ? 'text-white/80' : 'text-slate-700'
                  }`}>
                    Formación dual en desarrollo web full stack y análisis de datos, 
                    combinando habilidades técnicas para crear soluciones innovadoras basadas en datos
                  </p>
                </div>

                {/* Goals */}
                <div className={`rounded-xl p-6 border transition-colors ${
                  isDarkMode 
                    ? 'bg-white/5 backdrop-blur-lg border-white/10' 
                    : 'bg-white/80 backdrop-blur-lg border-slate-200'
                }`}>
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-purple-500 mr-3" />
                    <h4 className={`text-xl font-semibold transition-colors ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>Objetivos</h4>
                  </div>
                  <p className={`transition-colors ${
                    isDarkMode ? 'text-white/80' : 'text-slate-700'
                  }`}>
                    Especializarme en Machine Learning y crear soluciones que combinen desarrollo web con inteligencia artificial
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web Development Section */}
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
          
          <div className="grid md:grid-cols-3 gap-8">
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

      {/* Data Analysis Section */}
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          
          {/* Data Analysis Projects Preview */}
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
            <div className="grid md:grid-cols-4 gap-6 text-center">
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

      {/* Projects Section */}
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
            {/* Web Development Projects */}
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
                    title: "E-commerce Moderno",
                    tech: ["React", "Node.js", "MongoDB"],
                    description: "Plataforma de comercio electrónico con carrito de compras, pagos seguros y panel de administración.",
                    features: ["Autenticación JWT", "Pasarela de pagos", "Dashboard admin"]
                  },
                  {
                    title: "App de Gestión de Tareas",
                    tech: ["React", "Express", "PostgreSQL"],
                    description: "Aplicación colaborativa para gestión de proyectos con funcionalidades en tiempo real.",
                    features: ["WebSockets", "Notificaciones", "Kanban Board"]
                  },
                  {
                    title: "Portfolio Interactivo",
                    tech: ["React", "Framer Motion", "Tailwind"],
                    description: "Sitio web personal con animaciones avanzadas y modo oscuro/claro.",
                    features: ["Animaciones CSS", "Responsive Design", "Theme Toggle"]
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
                      <motion.button 
                        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Ver Demo
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
                        Ver Código
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Data Analysis Projects */}
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

      {/* Contact Section */}
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
            {/* Contact Form */}
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

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className={`rounded-xl p-8 border transition-colors ${
                isDarkMode 
                  ? 'bg-white/5 backdrop-blur-lg border-white/10' 
                  : 'bg-white/80 backdrop-blur-lg border-slate-200'
              }`}>
                <h3 className={`text-2xl font-bold mb-6 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>Sígueme en</h3>
                
                <div className="space-y-4">
                  {[
                    { icon: Github, href: 'https://github.com/tuusuario', label: 'GitHub', color: 'hover:bg-gray-600' },
                    { icon: Linkedin, href: 'https://linkedin.com/in/tuusuario', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                    { icon: Mail, href: 'mailto:julia@example.com', label: 'julia@example.com', color: 'hover:bg-purple-600' }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className={`flex items-center p-4 rounded-lg border transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
                          : 'bg-white/50 border-slate-200 text-slate-900 hover:bg-white'
                      } ${social.color}`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-6 h-6 mr-4" />
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
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
    </div>
  )
}

export default App
