/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Check, ChevronRight, Github, Home, Laptop, Linkedin, Mail, Menu, Moon, ShieldCheck, Sparkles, Sun, X } from "lucide-react";
import "./index.css";

const products = [
  { number: "01", name: "FamilyHOME", eyebrow: "Producto funcional · Smart home", summary: "Un centro privado para acompañar y cuidar a la familia mediante cámaras domésticas, transmisión local y una experiencia sencilla.", challenge: "Reunir dispositivos reales en una interfaz accesible sin publicar credenciales ni imágenes familiares.", features: ["Streaming local protegido", "Cámaras Tapo y PTZ", "Acceso privado", "Diseño multidispositivo"], stack: ["React", "Vite", "WebRTC", "MediaMTX", "Clerk"], url: "https://familyhome-ochre.vercel.app/", tone: "teal", icon: Home, status: "En uso" },
  { number: "02", name: "SafeWalk", eyebrow: "Producto en desarrollo · IA y seguridad", summary: "Una compañía de IA personalizable que acompaña durante los trayectos y convierte la tecnología de seguridad en una presencia cercana.", challenge: "Diseñar acompañamiento, prevención y ayuda sin generar alarma ni sustituir a los servicios de emergencia.", features: ["Compañías de IA elegibles", "Voces e identidades diversas", "Ruta acompañada", "Personalización accesible"], stack: ["React", "TypeScript", "Vite", "IA conversacional", "Diseño de producto"], tone: "amber", icon: ShieldCheck, status: "Prototipo" },
];

const archive = [
  { name: "Ada y Byte", type: "Experiencia educativa", description: "Aventura interactiva para acercar la programación a la infancia.", demo: "https://ada-byte-codeadventure.vercel.app/", code: "https://github.com/Juliams93/Ada-byte-codeadventure/tree/main/ada-byte-aventura" },
  { name: "Weather App", type: "Aplicación web", description: "Consulta meteorológica en tiempo real mediante una API externa.", demo: "https://weather-app-dusky-six-72.vercel.app/", code: "https://github.com/Juliams93/Weather-app" },
  { name: "Análisis de ventas", type: "Datos y visualización", description: "Exploración de tendencias, indicadores y comportamiento comercial.", code: "https://github.com/Juliams93/Analisis-ventas" },
  { name: "Tendencias Netflix", type: "Datos y Tableau", description: "Análisis de patrones de contenido con Python y visualización.", code: "https://github.com/Juliams93/Proyecto-Netflix-Tableau" },
];

const capabilities = [
  { icon: Laptop, title: "Producto digital", text: "Transformo una necesidad real en una experiencia clara, útil y adaptable." },
  { icon: BrainCircuit, title: "IA con propósito", text: "Exploro la IA como compañía y herramienta, con límites, privacidad y criterio humano." },
  { icon: ShieldCheck, title: "Privacidad desde el inicio", text: "Diseño separando datos sensibles, credenciales, interfaz pública y procesamiento local." },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className="topbar">
      <a className="wordmark" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio"><span className="wordmark-mark">JM</span><span>Julia Marín</span></a>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navegación principal">
        <a href="#lvx" onClick={closeMenu}>LVX Studio</a><a href="#productos" onClick={closeMenu}>Productos</a><a href="#trayectoria" onClick={closeMenu}>Trayectoria</a><a href="#contacto" onClick={closeMenu}>Contacto</a>
      </nav>
      <div className="topbar-actions">
        <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>

    <main>
      <section className="hero section" id="inicio">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>Desarrollo · Datos · Inteligencia artificial</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>Construyo tecnología <span>útil para la vida real.</span></motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }}>Soy Julia Marín, desarrolladora y creadora de productos digitales. Combino diseño, código, datos e IA para convertir necesidades cotidianas en soluciones humanas.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .24 }}><a className="button primary" href="#productos">Ver productos <ArrowRight size={18} /></a><a className="button secondary" href="#contacto">Hablemos</a></motion.div>
        </div>
        <motion.div className="hero-object" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2 }} aria-hidden="true">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core-card"><Sparkles size={22}/><strong>Ideas que cuidan</strong><span>Diseño · Desarrollo · IA</span></div><span className="floating-label label-one">Privacidad</span><span className="floating-label label-two">Experiencia</span><span className="floating-label label-three">Propósito</span>
        </motion.div>
      </section>

      <section className="lvx section" id="lvx">
        <div className="section-heading split-heading"><div><p className="eyebrow">Mi proyecto personal</p><h2>LVX Studio</h2></div><p>El lugar desde el que convierto problemas cercanos en productos digitales con identidad, intención y recorrido.</p></div>
        <div className="lvx-panel"><div className="lvx-monogram" aria-hidden="true">LVX</div><div className="lvx-copy"><p className="large-copy">No me interesa crear tecnología porque sí. Me interesa que alguien pueda usarla y pensar: <em>esto me ayuda de verdad.</em></p><div className="principles"><span><Check size={16}/> Necesidades reales</span><span><Check size={16}/> Diseño humano</span><span><Check size={16}/> Desarrollo responsable</span></div><a className="text-link" href="https://github.com/Juliams93/LVX-studio" target="_blank" rel="noreferrer">Conocer LVX Studio <ArrowRight size={17}/></a></div></div>
      </section>

      <section className="products section" id="productos">
        <div className="section-heading"><p className="eyebrow">Productos destacados</p><h2>Del problema a una solución que se puede usar.</h2></div>
        <div className="product-list">{products.map((product, index) => { const Icon = product.icon; return <motion.article className={`product-card ${product.tone}`} key={product.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }}>
          <div className="product-topline"><span>{product.number}</span><span className="status-dot">{product.status}</span></div>
          <div className="product-grid"><div className="product-intro"><div className="product-icon"><Icon size={28}/></div><p className="eyebrow">{product.eyebrow}</p><h3>{product.name}</h3><p className="product-summary">{product.summary}</p>{product.url && <a className="text-link" href={product.url} target="_blank" rel="noreferrer">Ver proyecto protegido <ArrowRight size={17}/></a>}</div>
          <div className="product-detail"><p className="detail-label">El reto</p><p>{product.challenge}</p><p className="detail-label">Lo que resuelve</p><ul>{product.features.map(feature => <li key={feature}><Check size={15}/> {feature}</li>)}</ul><div className="tags">{product.stack.map(item => <span key={item}>{item}</span>)}</div></div></div>
        </motion.article>; })}</div>
      </section>

      <section className="capabilities section">
        <div className="section-heading split-heading"><div><p className="eyebrow">Cómo trabajo ahora</p><h2>Más que una lista de herramientas.</h2></div><p>Investigo, diseño, construyo, pruebo y mejoro. La tecnología es el medio; la utilidad es el resultado.</p></div>
        <div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="tool-line"><span>React</span><span>TypeScript</span><span>Node.js</span><span>APIs</span><span>Python</span><span>SQL</span><span>Vite</span><span>Figma</span><span>Vercel</span></div>
      </section>

      <section className="journey section" id="trayectoria"><div className="section-heading"><p className="eyebrow">Trayectoria</p><h2>Los proyectos que construyeron el camino.</h2></div><div className="archive-grid">{archive.map(project => <article className="archive-card" key={project.name}><p className="archive-type">{project.type}</p><h3>{project.name}</h3><p>{project.description}</p><div className="archive-links">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo <ChevronRight size={15}/></a>}<a href={project.code} target="_blank" rel="noreferrer">Código <ChevronRight size={15}/></a></div></article>)}</div></section>

      <section className="about section"><div className="about-number">JM</div><div className="about-copy"><p className="eyebrow">Sobre mí</p><h2>Curiosidad, sensibilidad y ganas de hacer cosas que importen.</h2><p>Mi formación une desarrollo web full stack y análisis de datos. Hoy la aplico para crear productos completos: desde la primera idea y el diseño hasta la integración técnica, la privacidad y la puesta en marcha.</p><p>FamilyHOME cambió mi manera de verme profesionalmente. Me demostró que disfruto especialmente cuando la tecnología sale de la pantalla y mejora algo concreto en la vida de una persona.</p><a className="text-link" href="/curriculum.pdf" download>Descargar currículum <ArrowRight size={17}/></a></div></section>

      <section className="contact section" id="contacto"><div className="contact-copy"><p className="eyebrow">Contacto</p><h2>¿Hay una necesidad que podamos convertir en una solución?</h2><p>Estoy abierta a proyectos, colaboraciones y conversaciones sobre tecnología útil, producto digital, datos e inteligencia artificial.</p></div><div className="contact-actions"><a className="button primary" href="mailto:jul.ms1193@gmail.com"><Mail size={18}/> Escribirme</a><div className="social-links"><a href="https://github.com/Juliams93" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20}/></a><a href="https://linkedin.com/in/julia-marín-salas-b20167309" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a></div></div></section>
    </main>
    <footer><span>Julia Marín · LVX Studio</span><span>Diseñado y construido con intención.</span></footer>
  </div>;
}
