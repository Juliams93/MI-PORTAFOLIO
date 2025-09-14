import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = ({ isDarkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 60, density: { enable: true, area: 800 } },
          color: { value: isDarkMode ? '#a78bfa' : '#7c3aed' },
          shape: { type: 'circle' },
          opacity: { value: 0.3 },
          size: { value: 3, random: true },
          move: { enable: true, speed: 1, direction: 'none', outModes: { default: 'out' } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: 'repulse' },
            resize: true,
          },
          modes: {
            repulse: { distance: 80, duration: 0.4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
