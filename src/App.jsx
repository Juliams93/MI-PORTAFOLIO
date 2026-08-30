/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, BrainCircuit, Check, ChevronRight, Cloud, Code2, Database, Footprints, Github, Heart, Home, Laptop, Lightbulb, Linkedin, Mail, Menu, MessageCircle, Moon, Palette, PenTool, ShieldCheck, Sparkles, Sun, Wrench, X } from "lucide-react";
import "./index.css";

const products = [
  { number: "01", name: "FamilyHOME", eyebrow: "Producto funcional · Smart home", summary: "Un centro privado para acompañar y cuidar a la familia mediante cámaras domésticas, transmisión local y una experiencia sencilla.", challenge: "Reunir dispositivos reales en una interfaz accesible sin publicar credenciales ni imágenes familiares.", features: ["Streaming local protegido", "Cámaras Tapo y PTZ", "Acceso privado", "Diseño multidispositivo"], stack: ["React", "Vite", "WebRTC", "MediaMTX", "Clerk"], images: ["/projects/familyhome/dashboard.webp", "/projects/familyhome/settings.webp"], url: "https://familyhome-ochre.vercel.app/", demoLabel: "Abrir proyecto protegido", tone: "teal", icon: Home, status: "En uso" },
  { number: "02", name: "SafeWalk", eyebrow: "Producto en desarrollo · IA y seguridad", summary: "Una compañía de IA personalizable que acompaña durante los trayectos y convierte la tecnología de seguridad en una presencia cercana.", challenge: "Diseñar acompañamiento, prevención y ayuda sin generar alarma ni sustituir a los servicios de emergencia.", features: ["Compañías de IA elegibles", "Voces e identidades diversas", "Ruta acompañada", "Personalización accesible"], stack: ["React", "TypeScript", "Vite", "IA conversacional", "Diseño de producto"], tone: "amber", icon: ShieldCheck, status: "Prototipo" },
  { number: "03", name: "FitReserve Gym", eyebrow: "Producto funcional · Reservas", summary: "Una plataforma personalizada para reservar y gestionar clases de gimnasio desde una experiencia cuidada para socios y administración.", challenge: "Convertir horarios, plazas, perfiles y gestión diaria en un flujo sencillo, visual y preparado para crecer.", features: ["Reservas y lista de espera", "Perfiles de socio", "Panel de administración", "Notificaciones en tiempo real"], stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io"], images: ["/projects/fitreserve/dashboard.webp", "/projects/fitreserve/login.webp"], tone: "rose", icon: Heart, status: "Caso completo" },
  { number: "04", name: "La Gigante de Piedra", eyebrow: "Producto en directo · Datos deportivos", summary: "Clasificación oficial en tiempo real para una prueba ciclista, diseñada para consultar posiciones, tiempos y estados durante la carrera.", challenge: "Transformar datos deportivos en directo en una interfaz rápida, legible y útil para participantes, organización y público.", features: ["Clasificación en directo", "Búsqueda y categorías", "Controles C1–C6", "Estado de carrera"], stack: ["React", "Datos en tiempo real", "Filtros", "Diseño responsive"], images: ["/projects/gigante/classification.webp", "/projects/gigante/controls.webp"], code: "https://github.com/Juliams93/gigante-clasificacion", tone: "gold", icon: Footprints, status: "En producción" },
];

const archive = [
  { name: "Ada y Byte", type: "Experiencia educativa · Aventura interactiva", description: "Una aventura visual dividida en capítulos para acercar la programación a la infancia mediante personajes, retos y una historia que avanza desde el primer «Hola, mundo» hasta los enigmas condicionales.", images: ["/projects/ada-byte/home.webp", "/projects/ada-byte/chapter-one.webp", "/projects/ada-byte/chapter-two.webp", "/projects/ada-byte/chapter-three.webp"], demo: "https://ada-byte-codeadventure.vercel.app/", demoLabel: "Abrir aventura", code: "https://github.com/Juliams93/Ada-byte-codeadventure/tree/main/ada-byte-aventura" },
  { name: "Weather App", type: "Aplicación web · Datos meteorológicos", description: "Consulta el tiempo de cualquier ciudad mediante una API externa y presenta temperatura, sensación térmica, humedad, presión, nubosidad y viento en una interfaz clara, adaptable y disponible en español e inglés.", images: ["/projects/weather/valencia.webp", "/projects/weather/london.webp", "/projects/weather/english.webp", "/projects/weather/home.webp"], demo: "https://weather-app-dusky-six-72.vercel.app/", demoLabel: "Consultar el tiempo", code: "https://github.com/Juliams93/Weather-app" },
  { name: "Análisis de ventas", type: "Data analytics · Dashboard interactivo", description: "Análisis integral del dataset Superstore con limpieza y transformación de datos, filtros por región y segmento, KPIs comerciales, evolución mensual, productos destacados y una predicción sencilla de demanda. Convierte el histórico de ventas en conclusiones útiles para planificación y toma de decisiones.", images: ["/projects/sales/dashboard.webp", "/projects/sales/monthly-sales.webp", "/projects/sales/region-segment.webp", "/projects/sales/top-categories.webp"], code: "https://github.com/Juliams93/Analisis-ventas" },
  { name: "Tendencias Netflix", type: "Tableau · Análisis de contenido y usuarios", description: "Dos dashboards de Tableau que exploran la evolución del catálogo, películas frente a series, duración y clasificación por edades, junto con suscripciones, dispositivos, edades y distribución de usuarios. Un estudio visual para comprender qué se consume, quién lo consume y cómo ha evolucionado la plataforma.", images: ["/projects/netflix/content-dashboard.webp", "/projects/netflix/users-dashboard.webp", "/projects/netflix/content-types.webp", "/projects/netflix/subscriptions.webp"], code: "https://github.com/Juliams93/Proyecto-Netflix-Tableau" },
];

const capabilities = [
  { icon: Laptop, title: "Webs con identidad propia", text: "Me apasiona escuchar a cada cliente y convertir su esencia y sus necesidades en una web personalizada, útil y diferente." },
  { icon: BrainCircuit, title: "IA con propósito", text: "Exploro la IA como compañía y herramienta, con límites, privacidad y criterio humano." },
  { icon: ShieldCheck, title: "Privacidad desde el inicio", text: "Diseño separando datos sensibles, credenciales, interfaz pública y procesamiento local." },
];

const experience = [
  { period: "Actualidad", role: "IT & Digital Solutions", company: "EMR", summary: "Soporte tecnológico y mejora de procesos, uniendo atención a usuarios, herramientas corporativas y desarrollo de soluciones internas.", details: ["Soporte IT y Microsoft 365", "Gestión y apoyo con Navision", "Automatización y herramientas internas", "Rediseño y evolución de la web corporativa"] },
  { period: "Etapa anterior", role: "Helpdesk CAU Analyst", company: "Getronics · Entorno sanitario", summary: "Soporte técnico a centros de salud y acompañamiento a usuarios en el uso de aplicaciones corporativas.", details: ["Atención y resolución de incidencias", "Soporte sobre la aplicación SIP", "Comunicación con usuarios no técnicos", "Documentación y seguimiento"] },
  { period: "2017 — trayectoria previa", role: "Atención al cliente y operaciones", company: "Consum", summary: "Una etapa que consolidó mi capacidad de escuchar, resolver, adaptarme y trabajar con personas y equipos diversos.", details: ["Atención al cliente", "Organización y control de calidad", "Trabajo en equipo", "Adaptación operativa"] },
];

const skillGroups = [
  { icon: Code2, title: "Frontend", skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind", "Responsive"] },
  { icon: Database, title: "Backend & Data", skills: ["Node.js", "Express", "MongoDB", "Python", "SQL", "APIs"] },
  { icon: Palette, title: "UX/UI & Product", skills: ["Figma", "Prototipado", "Accesibilidad", "Arquitectura de información"] },
  { icon: Wrench, title: "IT & Tools", skills: ["Microsoft 365", "Navision", "SharePoint", "Git", "GitHub", "Postman"] },
];

const roadmap = [
  { year: "2025", title: "Full Stack + Data", text: "Base técnica en desarrollo web y análisis de datos.", state: "done" },
  { year: "2026", title: "IT · Development · UX/UI", text: "Experiencia profesional, producto digital y diseño centrado en las personas.", state: "now" },
  { year: "2026—27", title: "Azure · Product Engineering", text: "Cloud, despliegue, arquitectura e integración de producto.", state: "next" },
  { year: "2027", title: "Application Security", text: "OWASP, APIs seguras, autenticación, secretos y seguridad cloud.", state: "next" },
];

export default function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className="topbar">
      <a className="wordmark" href="#inicio" onClick={closeMenu} aria-label="Ir al inicio"><img className="wordmark-logo" src="/julia-tech-logo.png" alt=""/><span>Julia Marín</span></a>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navegación principal">
        <a href="#perfil" onClick={closeMenu}>Perfil</a><a href="#productos" onClick={closeMenu}>Proyectos</a><a href="#cv" onClick={closeMenu}>CV</a><a href="#roadmap" onClick={closeMenu}>Roadmap 2027</a><a href="#contacto" onClick={closeMenu}>Contacto</a>
      </nav>
      <div className="topbar-actions">
        <button className="icon-button" onClick={() => setDark(!dark)} aria-label={dark ? "Activar modo claro" : "Activar modo oscuro"}>{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
        <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </header>

    <main>
      <section className="hero section" id="inicio">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>Full Stack Development · IT · UX/UI · Data</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .08 }}>Construyo tecnología<br/><span>útil para la vida real.</span></motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .16 }}>Soy Julia Marín, desarrolladora y creadora de productos digitales. Combino diseño, código, datos e IA para convertir necesidades cotidianas en soluciones humanas.</motion.p>
          <motion.p className="current-profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .22 }}><span>Perfil actual</span> Full Stack Developer · IT & Digital Solutions · UX/UI</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .28 }}><a className="button primary" href="#productos">Ver proyectos <ArrowRight size={18} /></a><a className="button secondary" href="#cv">Explorar mi CV</a><a className="hero-icon-link" href="/curriculum.pdf" download aria-label="Descargar currículum"><ArrowDownToLine size={19}/></a><a className="hero-icon-link" href="https://github.com/Juliams93" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19}/></a><a className="hero-icon-link" href="https://linkedin.com/in/julia-marín-salas-b20167309" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19}/></a></motion.div>
        </div>
        <motion.div className="hero-object" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .2 }} aria-hidden="true">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core-card"><Sparkles size={22}/><strong>Ideas que cuidan</strong><span>Diseño · Desarrollo · IA</span></div><span className="floating-label label-one">Privacidad</span><span className="floating-label label-two">Experiencia</span><span className="floating-label label-three">Propósito</span>
        </motion.div>
      </section>

      <div className="process-strip" aria-label="Mi proceso de trabajo"><span>Design</span><ArrowRight size={16}/><span>Build</span><ArrowRight size={16}/><span>Secure</span><ArrowRight size={16}/><span>Improve</span></div>

      <section className="idea-map section" aria-labelledby="idea-map-title">
        <div className="idea-map-heading">
          <p className="eyebrow">Así nacen mis proyectos</p>
          <h2 id="idea-map-title">Mi mapa de ideas</h2>
          <p>No empiezo pensando en una tecnología. Empiezo observando algo que podría sentirse mejor.</p>
        </div>

        <div className="map-canvas">
          <svg className="map-lines" viewBox="0 0 1000 460" preserveAspectRatio="none" aria-hidden="true">
            <path d="M135 120 C 280 110, 295 220, 445 220 S 665 105, 820 125" />
            <path d="M140 350 C 285 355, 300 245, 445 240 S 675 350, 835 335" />
          </svg>

          <article className="idea-note note-care">
            <Heart size={22} />
            <span className="note-step">Observo</span>
            <strong>“Quiero cuidar a mi familia.”</strong>
          </article>
          <article className="idea-note note-walk">
            <Footprints size={22} />
            <span className="note-step">Escucho</span>
            <strong>“No quiero caminar sola.”</strong>
          </article>

          <div className="idea-center">
            <Lightbulb size={27} />
            <strong>¿Y si pudiera ayudar?</strong>
            <span>Investigo · dibujo · pruebo</span>
          </div>

          <article className="idea-result result-home">
            <span>La idea se convierte en</span>
            <strong>FamilyHOME</strong>
            <small>cuidar dentro de casa</small>
          </article>
          <article className="idea-result result-walk">
            <span>La idea se convierte en</span>
            <strong>SafeWalk</strong>
            <small>acompañar fuera de casa</small>
          </article>

          <div className="open-question">
            <Sparkles size={18} />
            <span>¿Qué problema cotidiano resolveré después?</span>
          </div>
          <span className="scribble scribble-one">aquí empieza todo ↗</span>
          <span className="scribble scribble-two">probar también es crear</span>
        </div>
      </section>

      <section className="lvx section" id="lvx">
        <div className="section-heading split-heading"><div><p className="eyebrow">Mi proyecto personal</p><h2>LVX Studio</h2></div><p>El lugar desde el que convierto problemas cercanos en productos digitales con identidad, intención y recorrido.</p></div>
        <div className="lvx-panel"><div className="lvx-monogram" aria-hidden="true">LVX</div><div className="lvx-copy"><p className="large-copy">No me interesa crear tecnología porque sí. Me interesa que alguien pueda usarla y pensar: <em>esto me ayuda de verdad.</em></p><div className="principles"><span><Check size={16}/> Necesidades reales</span><span><Check size={16}/> Diseño humano</span><span><Check size={16}/> Desarrollo responsable</span></div></div></div>
      </section>

      <section className="products section" id="productos">
        <div className="section-heading"><p className="eyebrow">Productos destacados</p><h2>Del problema a una solución que se puede usar.</h2></div>
        <div className="product-list">{products.map((product, index) => { const Icon = product.icon; return <motion.article className={`product-card ${product.tone}`} key={product.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }}>
          <div className="product-topline"><span>{product.number}</span><span className="status-dot">{product.status}</span></div>
          <div className="product-grid"><div className="product-intro"><div className="product-icon"><Icon size={28}/></div><p className="eyebrow">{product.eyebrow}</p><h3>{product.name}</h3><p className="product-summary">{product.summary}</p>{(product.url || product.code) && <div className="product-links">{product.url && <a className="text-link" href={product.url} target="_blank" rel="noreferrer">{product.demoLabel || "Ver proyecto"} <ArrowRight size={17}/></a>}{product.code && <a className="text-link" href={product.code} target="_blank" rel="noreferrer">Ver código <ArrowRight size={17}/></a>}</div>}</div>
          <div className="product-detail"><p className="detail-label">El reto</p><p>{product.challenge}</p><p className="detail-label">Lo que resuelve</p><ul>{product.features.map(feature => <li key={feature}><Check size={15}/> {feature}</li>)}</ul><div className="tags">{product.stack.map(item => <span key={item}>{item}</span>)}</div></div></div>
          {product.images && <details className="product-gallery-toggle"><summary><span>Galería</span><small>{product.images.length} imágenes</small><ChevronRight size={18}/></summary><div className="product-preview">{product.images.map((image, imageIndex) => <img key={image} src={image} alt={`${product.name}: vista ${imageIndex + 1}`} loading="lazy"/>)}</div></details>}
        </motion.article>; })}</div>
      </section>

      <section className="capabilities section" id="perfil">
        <div className="section-heading split-heading"><div><p className="eyebrow">Cómo trabajo ahora</p><h2>Más que una lista de herramientas.</h2></div><p>Investigo, diseño, construyo, pruebo y mejoro. La tecnología es el medio; la utilidad es el resultado.</p></div>
        <div className="capability-grid">{capabilities.map(({ icon: Icon, title, text }) => <article key={title}><Icon size={24}/><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="tool-line"><span>React</span><span>TypeScript</span><span>Node.js</span><span>APIs</span><span>Python</span><span>SQL</span><span>Vite</span><span>Figma</span><span>Vercel</span></div>
      </section>

      <section className="interactive-cv section" id="cv">
        <div className="section-heading split-heading"><div><p className="eyebrow">CV interactivo</p><h2>Una trayectoria que conecta personas y tecnología.</h2></div><p>Mi perfil no nace de una sola disciplina. Crece al unir soporte IT, desarrollo, datos, diseño y experiencia real con usuarios.</p></div>
        <div className="cv-layout">
          <div className="timeline" aria-label="Experiencia profesional">{experience.map((item, index) => <motion.details className="timeline-item" key={item.role} initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} open={index === 0}>
            <summary><span className="timeline-marker">{String(index + 1).padStart(2, "0")}</span><div><span className="timeline-period">{item.period}</span><h3>{item.role}</h3><p>{item.company}</p></div><ChevronRight size={20}/></summary>
            <div className="timeline-body"><p>{item.summary}</p><ul>{item.details.map(detail => <li key={detail}><Check size={15}/>{detail}</li>)}</ul></div>
          </motion.details>)}</div>
          <aside className="education-card"><p className="eyebrow">Formación</p><h3>Aprender también forma parte del trabajo.</h3><div><strong>Máster en Desarrollo Web Full Stack</strong><span>Neoland</span></div><div><strong>Bootcamp de Análisis de Datos</strong><span>Adalab · 2024—2025</span></div><div><strong>Contabilidad + SAP Finanzas</strong><span>Esneca Business School</span></div><div><strong>Asistencia a la Dirección</strong><span>IES Misericordia</span></div><a className="text-link" href="/curriculum.pdf" download>Descargar CV en PDF <ArrowDownToLine size={17}/></a></aside>
        </div>
        <div className="skills-heading"><p className="eyebrow">Trabajo con</p><h3>Herramientas conectadas a lo que construyo.</h3></div>
        <div className="skill-groups">{skillGroups.map(({ icon: Icon, title, skills }) => <article key={title}><Icon size={22}/><h4>{title}</h4><div>{skills.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}</div>
      </section>

      <section className="roadmap section" id="roadmap">
        <div className="roadmap-intro"><p className="eyebrow">My roadmap → 2027</p><h2>Lo que soy hoy.<br/><span>En lo que me estoy convirtiendo.</span></h2><p>Azure y Application Security aparecen aquí como aprendizaje y dirección profesional, no como experiencia ya adquirida.</p></div>
        <div className="roadmap-track">{roadmap.map((step, index) => <motion.article className={`roadmap-step ${step.state}`} key={step.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }}><span className="roadmap-year">{step.year}</span><span className="roadmap-node"/><div>{step.state === "now" && <small>YOU ARE HERE</small>}<h3>{step.title}</h3><p>{step.text}</p></div></motion.article>)}</div>
        <div className="destination"><Cloud size={26}/><div><span>Where I&apos;m going</span><strong>Product Engineer</strong><p>Development · UX/UI · Azure · Application Security</p></div></div>
        <div className="learning-now"><span>Currently building →</span><strong>Azure Fundamentals</strong><ArrowRight size={15}/><strong>Azure Developer</strong><ArrowRight size={15}/><strong>UX/UI</strong><ArrowRight size={15}/><strong>Application Security</strong></div>
      </section>

      <section className="journey section" id="trayectoria">
        <div className="section-heading split-heading"><div><p className="eyebrow">Archivo de proyectos</p><h2>Otros proyectos que forman parte del camino.</h2></div><p>Una selección compacta de experiencias web y análisis de datos. Abre cada tarjeta para ver el caso completo.</p></div>
        <div className="compact-projects">{archive.map(project => <details className={`compact-project ${project.name === "Ada y Byte" ? "compact-ada" : ""}`} key={project.name}>
          <summary><img src={project.images[0]} alt=""/><div><p className="archive-type">{project.type}</p><h3>{project.name}</h3></div><span className="expand-label">Ver caso <ChevronRight size={17}/></span></summary>
          <div className="compact-project-body"><div className="project-gallery"><img className="gallery-main" src={project.images[0]} alt={`${project.name}: panel principal`}/><div className="gallery-strip">{project.images.slice(1).map((image, index) => <img key={image} src={image} alt={`${project.name}: vista ${index + 2}`} loading="lazy"/>)}</div></div><div className="archive-copy"><p>{project.description}</p>{(project.demo || project.code) && <div className="archive-links">{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">{project.demoLabel || "Ver proyecto"} <ChevronRight size={15}/></a>}{project.code && <a href={project.code} target="_blank" rel="noreferrer">Ver código <ChevronRight size={15}/></a>}</div>}</div></div>
        </details>)}</div>
      </section>

      <section className="about section"><div className="about-portrait"><span className="portrait-orbit" aria-hidden="true"/><img src="/julia-tech-logo.png" alt="Retrato tecnológico de Julia Marín"/><span className="portrait-note">creatividad + tecnología</span></div><div className="about-copy"><p className="eyebrow">Beyond code</p><h2>La tecnología también necesita saber contar historias.</h2><p>Además de desarrollar, soy escritora independiente. Crear tramas, personajes y universos me ha enseñado a escuchar, ordenar ideas complejas y comunicar con intención.</p><p>Ese lado creativo vive también en mis productos: en cómo planteo una experiencia, explico una decisión y convierto una necesidad humana en una historia que se puede usar.</p><div className="writing-chips"><span><PenTool size={15}/> Storytelling</span><span>Autogestión editorial</span><span>Comunicación</span><span>Creatividad aplicada</span></div></div></section>

      <section className="contact section" id="contacto"><div className="contact-copy"><p className="eyebrow">Contacto</p><h2>¿Hay una necesidad que podamos convertir en una solución?</h2><p>Estoy abierta a proyectos, colaboraciones y conversaciones sobre tecnología útil, producto digital, datos e inteligencia artificial.</p></div><div className="contact-actions"><a className="button primary" href="mailto:jul.ms1193@gmail.com"><Mail size={18}/> Escribirme</a><a className="button secondary" href="https://wa.me/34665936645" target="_blank" rel="noreferrer"><MessageCircle size={18}/> WhatsApp</a><div className="social-links"><a href="https://github.com/Juliams93" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20}/></a><a href="https://linkedin.com/in/julia-marín-salas-b20167309" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a></div></div></section>
    </main>
    <footer><span>Julia Marín · jm-devdata.com</span><span>Fundadora de LVX Studio · Haciendo cosas útiles que nacen de necesidades reales.</span></footer>
  </div>;
}
