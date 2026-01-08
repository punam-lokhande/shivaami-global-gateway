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
  const springX = useSpring(mouseX, { stiffness: 30, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 40 });

  useEffect(() => {
    const colors: ('blue' | 'cyan' | 'purple')[] = ['blue', 'cyan', 'purple'];
    const newParticles: Particle[] = [];
    // More particles for richer effect
    for (let i = 0; i < 80; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.3,
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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Deep gradient background for glassmorphism effect */}
      <div className="absolute inset-0 glass-hero-gradient" />
      
      {/* Animated mesh gradient overlay */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-0"
      >
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 10% 20%, hsl(202 100% 61% / 0.25) 0%, transparent 50%),
              radial-gradient(ellipse 60% 80% at 90% 80%, hsl(202 100% 61% / 0.2) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 50% 50%, hsl(213 85% 31% / 0.3) 0%, transparent 60%)
            `,
          }}
        />
      </motion.div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Large floating glass orbs */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(202 100% 61% / 0.15) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      </motion.div>

      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-[40%] right-[10%] w-[600px] h-[600px] rounded-full"
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(202 100% 61% / 0.2) 0%, transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{ 
            background: 'radial-gradient(circle, hsl(202 100% 61% / 0.25) 0%, transparent 60%)',
            filter: 'blur(50px)',
          }}
        />
      </motion.div>

      {/* Floating particles with glow */}
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
              boxShadow: `0 0 ${particle.size * 4}px ${particle.size * 2}px ${getParticleColor(particle.color)}`,
              opacity: particle.opacity,
            }}
            animate={{
              x: [0, particle.speedX * 150, 0],
              y: [0, particle.speedY * 150, 0],
              scale: [1, 1.5, 1],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Subtle connection lines between particles */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(202 100% 61%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(202 100% 61%)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="hsl(202 100% 61%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated scanning lines */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={`scan-${i}`}
            x1="0%"
            y1={`${15 + i * 18}%`}
            x2="100%"
            y2={`${15 + i * 18}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 5,
              delay: i * 0.8,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </svg>

      {/* Top glass reflection */}
      <div 
        className="absolute top-0 left-0 right-0 h-[40%]"
        style={{
          background: 'linear-gradient(180deg, hsl(0 0% 100% / 0.03) 0%, transparent 100%)',
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(213 90% 10% / 0.4) 100%)',
        }}
      />
    </div>
  );
}
