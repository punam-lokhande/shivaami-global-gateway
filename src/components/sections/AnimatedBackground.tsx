import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: 'blue' | 'cyan' | 'purple';
}

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const colors: ('blue' | 'cyan' | 'purple')[] = ['blue', 'cyan', 'purple'];
    const newParticles: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x * 40);
        mouseY.set(y * 40);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const getParticleColor = (color: 'blue' | 'cyan' | 'purple') => {
    switch (color) {
      case 'blue': return 'hsl(210 100% 60%)';
      case 'cyan': return 'hsl(185 100% 50%)';
      case 'purple': return 'hsl(270 100% 65%)';
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-background">
      {/* Deep midnight base */}
      <div className="absolute inset-0" style={{ background: 'hsl(222 47% 5%)' }} />
      
      {/* Geometric grid pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 hex-pattern opacity-60" />

      {/* Neon glow orbs */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full"
      >
        <div 
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{ 
            background: 'radial-gradient(circle, hsl(210 100% 60% / 0.25) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/2 right-1/3 w-[500px] h-[500px] rounded-full"
      >
        <div 
          className="absolute inset-0 rounded-full blur-[100px] animate-pulse-soft"
          style={{ 
            background: 'radial-gradient(circle, hsl(185 100% 50% / 0.2) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
      >
        <div 
          className="absolute inset-0 rounded-full blur-[100px] animate-pulse-soft"
          style={{ 
            background: 'radial-gradient(circle, hsl(270 100% 65% / 0.15) 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
      </motion.div>

      {/* Neon grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        <defs>
          <linearGradient id="neonLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(210 100% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(185 100% 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(270 100% 65%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="horizontalGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(210 100% 60%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(210 100% 60%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(210 100% 60%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Vertical scanning lines */}
        {[...Array(6)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${15 + i * 15}%`}
            y1="0%"
            x2={`${15 + i * 15}%`}
            y2="100%"
            stroke="url(#neonLineGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{
              duration: 5,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
        
        {/* Horizontal pulse lines */}
        {[...Array(4)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${20 + i * 20}%`}
            x2="100%"
            y2={`${20 + i * 20}%`}
            stroke="url(#horizontalGlow)"
            strokeWidth="1"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 0.4, 0], pathLength: [0, 1, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.8 + 1,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          />
        ))}
      </svg>

      {/* Floating neon particles */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: particle.size,
              height: particle.size,
              backgroundColor: getParticleColor(particle.color),
              boxShadow: `0 0 ${particle.size * 3}px ${getParticleColor(particle.color)}`,
              opacity: particle.opacity,
            }}
            animate={{
              x: [0, particle.speedX * 100, 0],
              y: [0, particle.speedY * 100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Corner glow accents */}
      <div 
        className="absolute top-0 left-0 w-96 h-96"
        style={{
          background: 'radial-gradient(circle at top left, hsl(210 100% 60% / 0.1) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96"
        style={{
          background: 'radial-gradient(circle at bottom right, hsl(185 100% 50% / 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Scan line effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(210 100% 60% / 0.03) 50%, transparent 100%)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(222 47% 5% / 0.8) 100%)',
        }}
      />
    </div>
  );
}
