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

  // Brand colors: Deep Blue #0C4594 and Picton Blue #38B6FF
  const getParticleColor = (color: 'blue' | 'cyan' | 'purple') => {
    switch (color) {
      case 'blue': return 'hsl(213 85% 31%)'; // Cool Deep Blue
      case 'cyan': return 'hsl(202 100% 61%)'; // Picton Blue
      case 'purple': return 'hsl(213 70% 45%)'; // Lighter Deep Blue
    }
  };

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-background">
      {/* White/light base with subtle brand color accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Hexagon pattern overlay */}
      <div className="absolute inset-0 hex-pattern opacity-40" />

      {/* Brand color glow orbs */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full"
      >
        <div 
          className="absolute inset-0 rounded-full blur-[120px]"
          style={{ 
            background: 'radial-gradient(circle, hsl(213 85% 31% / 0.12) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, hsl(202 100% 61% / 0.15) 0%, transparent 70%)',
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
            background: 'radial-gradient(circle, hsl(213 70% 45% / 0.1) 0%, transparent 70%)',
            animationDelay: '2s'
          }}
        />
      </motion.div>

      {/* Subtle grid lines with brand colors */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="brandLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(213 85% 31%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(202 100% 61%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(213 85% 31%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="horizontalBrandGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(202 100% 61%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(202 100% 61%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(202 100% 61%)" stopOpacity="0" />
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
            stroke="url(#brandLineGradient)"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
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
            stroke="url(#horizontalBrandGlow)"
            strokeWidth="1"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: [0, 0.3, 0], pathLength: [0, 1, 0] }}
            transition={{
              duration: 4,
              delay: i * 0.8 + 1,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          />
        ))}
      </svg>

      {/* Floating brand particles */}
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
              boxShadow: `0 0 ${particle.size * 2}px ${getParticleColor(particle.color)}`,
              opacity: particle.opacity * 0.6,
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
          background: 'radial-gradient(circle at top left, hsl(213 85% 31% / 0.08) 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96"
        style={{
          background: 'radial-gradient(circle at bottom right, hsl(202 100% 61% / 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Subtle scan line effect overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(213 85% 31% / 0.02) 50%, transparent 100%)',
          backgroundSize: '100% 4px',
        }}
      />

      {/* Bottom gradient fade to white */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.8) 100%)',
        }}
      />
    </div>
  );
}
