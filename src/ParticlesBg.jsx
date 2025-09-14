import { useEffect } from 'react'
import './ParticlesBg.css'

// Number of particles (adjust for performance/visuals)
const PARTICLE_COUNT = 18

function random(min, max) {
  return Math.random() * (max - min) + min
}

export default function ParticlesBg({ isDarkMode }) {
  useEffect(() => {
    // No-op, just for possible future dynamic effects
  }, [isDarkMode])

  return (
    <div className="particles-bg" aria-hidden="true">
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        // Randomize size, position, delay, duration, and movement
        const size = random(18, 38) // px
        const left = random(2, 98) // %
        const top = random(5, 95) // %
        const delay = random(0, 18) // s
        const duration = random(12, 28) // s
        // Movimiento aleatorio en X/Y (zigzag/flotante)
        const xMove = random(-40, 40) // px
        const yMove = random(-60, 60) // px
        const animName = `particleMoveXY${i}`
        // Insertar keyframes únicos para cada partícula
        if (typeof window !== 'undefined' && !document.getElementById(animName)) {
          const style = document.createElement('style')
          style.id = animName
          style.innerHTML = `@keyframes ${animName} {\n0% { transform: translate(0,0) scale(1); }\n100% { transform: translate(${xMove}px, ${yMove}px) scale(1.15); }\n}`
          document.head.appendChild(style)
        }
        return (
          <div
            key={i}
            className="particle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              animationName: animName,
              opacity: isDarkMode ? 0.13 : 0.18,
            }}
          />
        )
      })}
    </div>
  )
}
