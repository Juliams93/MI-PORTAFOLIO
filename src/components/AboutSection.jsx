import { motion } from 'framer-motion'
import { Heart, GraduationCap, Award, Target } from 'lucide-react'

const AboutSection = ({ isDarkMode }) => (
    <section
        id="about"
        className={`py-20 transition-colors ${
            isDarkMode ? 'bg-black/20' : 'bg-white/50'
        }`}
    >
        <div className="container mx-auto px-6">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2
                    className={`text-4xl font-bold mb-4 transition-colors ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}
                >
                    Sobre Mí
                </h2>
                <p
                    className={`text-xl max-w-3xl mx-auto transition-colors ${
                        isDarkMode ? 'text-white/80' : 'text-slate-700'
                    }`}
                >
                    <span role="img" aria-label="Laptop">💻</span> Apasionada por la tecnología y los datos.<br />
                    <span role="img" aria-label="Palette">🎨</span> Combino creatividad con análisis para crear soluciones innovadoras.<br />
                    <span role="img" aria-label="Target">🎯</span> Mi objetivo es unir diseño, programación y analítica en proyectos que faciliten la vida de las personas y potencien el crecimiento de las empresas.
                </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div
                        className={`rounded-xl p-8 border transition-colors ${
                            isDarkMode
                                ? 'bg-white/5 backdrop-blur-lg border-white/10'
                                : 'bg-white/80 backdrop-blur-lg border-slate-200'
                        }`}
                    >
                        <div className="flex items-center mb-6">
                            <Heart className="w-8 h-8 text-pink-500 mr-3" />
                            <h3
                                className={`text-2xl font-bold transition-colors ${
                                    isDarkMode ? 'text-white' : 'text-slate-900'
                                }`}
                            >
                                Mi Historia
                            </h3>
                        </div>
                        <p
                            className={`text-lg leading-relaxed mb-4 transition-colors ${
                                isDarkMode ? 'text-white/80' : 'text-slate-700'
                            }`}
                        >
                            Mi interés por la tecnología nació cuando descubrí cómo los datos pueden contar historias fascinantes, revelando patrones ocultos y ofreciendo perspectivas que transforman la forma en que entendemos el mundo. 
                            En paralelo, comprendí cómo el código es capaz de dar vida a ideas creativas, convirtiéndolas en productos digitales útiles, visuales y accesibles para las personas.
                        </p>
                        <p
                            className={`text-lg leading-relaxed transition-colors ${
                                isDarkMode ? 'text-white/80' : 'text-slate-700'
                            }`}
                        >
                            A lo largo de mi formación en Neoland y durante mi bootcamp especializado en análisis de datos, he cultivado una visión que combina lo mejor de dos mundos: el desarrollo web y la ciencia de datos.
                            Esta doble perspectiva me permite abordar los proyectos desde una mirada integral, uniendo el diseño y la experiencia de usuario con el rigor analítico y la capacidad de transformar información en decisiones estratégicas.
                            Me motiva trabajar en soluciones que no solo respondan a necesidades técnicas, sino que también aporten valor humano y empresarial. Creo firmemente que la creatividad y el análisis son aliados inseparables, y mi objetivo es seguir construyendo proyectos que faciliten la vida de las personas, potencien la innovación y contribuyan al crecimiento sostenible de las organizaciones.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="space-y-6">
                        <div
                            className={`rounded-xl p-6 border transition-colors ${
                                isDarkMode
                                    ? 'bg-white/5 backdrop-blur-lg border-white/10'
                                    : 'bg-white/80 backdrop-blur-lg border-slate-200'
                            }`}
                        >
                            <div className="flex items-center mb-4">
                                <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />
                                <h4
                                    className={`text-xl font-semibold transition-colors ${
                                        isDarkMode ? 'text-white' : 'text-slate-900'
                                    }`}
                                >
                                    Formación
                                </h4>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <p
                                        className={`font-medium transition-colors ${
                                            isDarkMode ? 'text-white' : 'text-slate-900'
                                        }`}
                                    >
                                        Master Full Stack - Neoland
                                    </p>
                                    <p
                                        className={`text-sm transition-colors ${
                                            isDarkMode ? 'text-white/70' : 'text-slate-600'
                                        }`}
                                    >
                                        Especialización en tecnologías modernas de desarrollo web
                                    </p>
                                </div>
                                <div>
                                    <p
                                        className={`font-medium transition-colors ${
                                            isDarkMode ? 'text-white' : 'text-slate-900'
                                        }`}
                                    >
                                        Bootcamp en Análisis de Datos
                                    </p>
                                    <p
                                        className={`text-sm transition-colors ${
                                            isDarkMode ? 'text-white/70' : 'text-slate-600'
                                        }`}
                                    >
                                        Formación intensiva en Python, estadística y machine learning
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`rounded-xl p-6 border transition-colors ${
                                isDarkMode
                                    ? 'bg-white/5 backdrop-blur-lg border-white/10'
                                    : 'bg-white/80 backdrop-blur-lg border-slate-200'
                            }`}
                        >
                            <div className="flex items-center mb-4">
                                <Award className="w-6 h-6 text-green-500 mr-3" />
                                <h4
                                    className={`text-xl font-semibold transition-colors ${
                                        isDarkMode ? 'text-white' : 'text-slate-900'
                                    }`}
                                >
                                    Experiencia
                                </h4>
                            </div>
                            <p
                                className={`transition-colors ${
                                    isDarkMode ? 'text-white/80' : 'text-slate-700'
                                }`}
                            >
                                Formación dual en desarrollo web full stack y análisis de datos,
                                combinando habilidades técnicas para crear soluciones innovadoras basadas en datos
                            </p>
                        </div>

                        <div
                            className={`rounded-xl p-6 border transition-colors ${
                                isDarkMode
                                    ? 'bg-white/5 backdrop-blur-lg border-white/10'
                                    : 'bg-white/80 backdrop-blur-lg border-slate-200'
                            }`}
                        >
                            <div className="flex items-center mb-4">
                                <Target className="w-6 h-6 text-purple-500 mr-3" />
                                <h4
                                    className={`text-xl font-semibold transition-colors ${
                                        isDarkMode ? 'text-white' : 'text-slate-900'
                                    }`}
                                >
                                    Objetivos
                                </h4>
                            </div>
                            <p
                                className={`transition-colors ${
                                    isDarkMode ? 'text-white/80' : 'text-slate-700'
                                }`}
                            >
                                Especializarme en Machine Learning y crear soluciones que combinen desarrollo web con inteligencia artificial
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
)

export default AboutSection
