import { motion } from 'framer-motion';

const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5,
}));

const lines = Array.from({ length: 6 }, (_, i) => ({
  id: i,
  x1: Math.random() * 100,
  y1: Math.random() * 100,
  angle: Math.random() * 360,
  length: Math.random() * 200 + 100,
  duration: Math.random() * 20 + 15,
  delay: Math.random() * 5,
}));

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% -10%, hsl(202 100% 61% / 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 100% 50%, hsl(213 85% 31% / 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 0% 80%, hsl(202 100% 61% / 0.06) 0%, transparent 50%),
            hsl(216 50% 6%)
          `
        }}
      />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(202 100% 61% / 0.1) 0%, transparent 70%)',
          top: '10%',
          left: '20%',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(213 85% 31% / 0.15) 0%, transparent 70%)',
          bottom: '10%',
          right: '10%',
        }}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-accent/40"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            boxShadow: '0 0 10px hsl(202 100% 61% / 0.4)',
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 20, -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {lines.map((line) => (
          <motion.line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x1 + 10}%`}
            y2={`${line.y1 + 10}%`}
            stroke="hsl(202 100% 61% / 0.3)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: line.duration,
              repeat: Infinity,
              delay: line.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(202 100% 61% / 0.4), transparent)',
        }}
        animate={{
          top: ['-5%', '105%'],
          opacity: [0, 0.5, 0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}