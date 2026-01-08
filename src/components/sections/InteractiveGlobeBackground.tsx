import { useRef, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  trail: { x: number; y: number }[];
}

interface Node {
  x: number;
  y: number;
  angle: number;
  radius: number;
  speed: number;
  size: number;
  pulseOffset: number;
}

const COLORS = {
  blue: 'rgba(0, 150, 255, ',
  cyan: 'rgba(0, 220, 255, ',
  purple: 'rgba(130, 80, 255, ',
  red: 'rgba(255, 80, 80, ',
  orange: 'rgba(255, 140, 50, ',
};

export default function InteractiveGlobeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const timeRef = useRef(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    const colorKeys = Object.keys(COLORS) as (keyof typeof COLORS)[];
    
    for (let i = 0; i < 80; i++) {
      const colorKey = colorKeys[Math.floor(Math.random() * 3)]; // Mostly blue, cyan, purple
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 2.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.3,
        color: COLORS[colorKey],
        trail: [],
      });
    }
    
    // Add a few accent particles (red/orange)
    for (let i = 0; i < 8; i++) {
      const colorKey = i < 4 ? 'red' : 'orange';
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.3 + 0.2,
        color: COLORS[colorKey],
        trail: [],
      });
    }
    
    return particles;
  }, []);

  const initNodes = useCallback((centerX: number, centerY: number, radius: number) => {
    const nodes: Node[] = [];
    const rings = [0.6, 0.75, 0.9, 1.0, 1.1];
    
    rings.forEach((ringMultiplier, ringIndex) => {
      const nodeCount = 8 + ringIndex * 4;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2 + ringIndex * 0.3;
        nodes.push({
          x: centerX + Math.cos(angle) * radius * ringMultiplier,
          y: centerY + Math.sin(angle) * radius * ringMultiplier * 0.5,
          angle,
          radius: radius * ringMultiplier,
          speed: 0.0003 + Math.random() * 0.0002,
          size: 2 + Math.random() * 2,
          pulseOffset: Math.random() * Math.PI * 2,
        });
      }
    });
    
    return nodes;
  }, []);

  const drawGlobe = useCallback((
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    time: number,
    parallaxX: number,
    parallaxY: number
  ) => {
    const adjustedCenterX = centerX + parallaxX * 20;
    const adjustedCenterY = centerY + parallaxY * 15;

    // Outer glow
    const outerGlow = ctx.createRadialGradient(
      adjustedCenterX, adjustedCenterY, radius * 0.5,
      adjustedCenterX, adjustedCenterY, radius * 1.5
    );
    outerGlow.addColorStop(0, 'rgba(0, 150, 255, 0.15)');
    outerGlow.addColorStop(0.5, 'rgba(100, 50, 200, 0.08)');
    outerGlow.addColorStop(1, 'transparent');
    ctx.fillStyle = outerGlow;
    ctx.beginPath();
    ctx.arc(adjustedCenterX, adjustedCenterY, radius * 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Main globe gradient
    const globeGradient = ctx.createRadialGradient(
      adjustedCenterX - radius * 0.3, adjustedCenterY - radius * 0.3, 0,
      adjustedCenterX, adjustedCenterY, radius
    );
    globeGradient.addColorStop(0, 'rgba(0, 100, 180, 0.4)');
    globeGradient.addColorStop(0.5, 'rgba(40, 60, 140, 0.25)');
    globeGradient.addColorStop(0.8, 'rgba(80, 40, 160, 0.15)');
    globeGradient.addColorStop(1, 'rgba(0, 80, 160, 0.05)');
    
    ctx.fillStyle = globeGradient;
    ctx.beginPath();
    ctx.arc(adjustedCenterX, adjustedCenterY, radius, 0, Math.PI * 2);
    ctx.fill();

    // Mesh lines - horizontal
    ctx.strokeStyle = 'rgba(0, 180, 255, 0.15)';
    ctx.lineWidth = 0.5;
    for (let i = -4; i <= 4; i++) {
      const yOffset = (i / 4) * radius * 0.8;
      const lineWidth = Math.sqrt(1 - Math.pow(i / 5, 2)) * radius;
      const waveOffset = Math.sin(time * 0.001 + i * 0.5) * 3;
      
      ctx.beginPath();
      ctx.ellipse(
        adjustedCenterX + waveOffset, 
        adjustedCenterY + yOffset, 
        lineWidth, 
        lineWidth * 0.15, 
        0, 0, Math.PI * 2
      );
      ctx.stroke();
    }

    // Mesh lines - vertical (longitude)
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI + time * 0.0002;
      ctx.beginPath();
      ctx.ellipse(
        adjustedCenterX,
        adjustedCenterY,
        Math.abs(Math.cos(angle)) * radius,
        radius * 0.9,
        0, 0, Math.PI * 2
      );
      ctx.stroke();
    }

    // Inner highlight
    const highlight = ctx.createRadialGradient(
      adjustedCenterX - radius * 0.4, adjustedCenterY - radius * 0.4, 0,
      adjustedCenterX, adjustedCenterY, radius * 0.8
    );
    highlight.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
    highlight.addColorStop(1, 'transparent');
    ctx.fillStyle = highlight;
    ctx.beginPath();
    ctx.arc(adjustedCenterX, adjustedCenterY, radius, 0, Math.PI * 2);
    ctx.fill();

    // Edge glow
    ctx.strokeStyle = 'rgba(0, 200, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(adjustedCenterX, adjustedCenterY, radius, 0, Math.PI * 2);
    ctx.stroke();

    return { adjustedCenterX, adjustedCenterY };
  }, []);

  const drawWaves = useCallback((
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    time: number
  ) => {
    for (let w = 0; w < 3; w++) {
      const waveRadius = radius * (1.2 + w * 0.15) + Math.sin(time * 0.002 + w) * 10;
      const opacity = 0.1 - w * 0.03;
      
      ctx.strokeStyle = `rgba(0, 180, 255, ${opacity})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, waveRadius, 0, Math.PI * 2);
      ctx.stroke();
    }
  }, []);

  const drawNodes = useCallback((
    ctx: CanvasRenderingContext2D,
    nodes: Node[],
    centerX: number,
    centerY: number,
    time: number,
    parallaxX: number,
    parallaxY: number
  ) => {
    const adjustedCenterX = centerX + parallaxX * 20;
    const adjustedCenterY = centerY + parallaxY * 15;

    // Update and draw nodes
    nodes.forEach((node, index) => {
      node.angle += node.speed;
      const x = adjustedCenterX + Math.cos(node.angle) * node.radius;
      const y = adjustedCenterY + Math.sin(node.angle) * node.radius * 0.5;
      
      const pulse = Math.sin(time * 0.003 + node.pulseOffset) * 0.5 + 0.5;
      const size = node.size * (0.8 + pulse * 0.4);
      
      // Node glow
      const glow = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
      glow.addColorStop(0, `rgba(0, 200, 255, ${0.4 * pulse})`);
      glow.addColorStop(0.5, `rgba(100, 100, 255, ${0.2 * pulse})`);
      glow.addColorStop(1, 'transparent');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, size * 4, 0, Math.PI * 2);
      ctx.fill();

      // Node core
      ctx.fillStyle = `rgba(200, 240, 255, ${0.7 + pulse * 0.3})`;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();

      // Connect to nearby nodes
      nodes.slice(index + 1).forEach((otherNode) => {
        const ox = adjustedCenterX + Math.cos(otherNode.angle) * otherNode.radius;
        const oy = adjustedCenterY + Math.sin(otherNode.angle) * otherNode.radius * 0.5;
        const dist = Math.hypot(x - ox, y - oy);
        
        if (dist < 120) {
          const opacity = (1 - dist / 120) * 0.3;
          ctx.strokeStyle = `rgba(0, 180, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(ox, oy);
          ctx.stroke();
        }
      });
    });
  }, []);

  const drawParticles = useCallback((
    ctx: CanvasRenderingContext2D,
    particles: Particle[],
    width: number,
    height: number,
    mouseX: number,
    mouseY: number,
    mouseActive: boolean
  ) => {
    particles.forEach((particle) => {
      // Mouse interaction
      if (mouseActive) {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          particle.x -= (dx / dist) * force * 2;
          particle.y -= (dy / dist) * force * 2;
        }
      }

      // Return to base position slowly
      particle.x += (particle.baseX - particle.x) * 0.01;
      particle.y += (particle.baseY - particle.y) * 0.01;

      // Movement
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Bounds
      if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
      if (particle.y < 0 || particle.y > height) particle.speedY *= -1;

      // Update base position slowly for wandering
      particle.baseX += particle.speedX * 0.5;
      particle.baseY += particle.speedY * 0.5;
      if (particle.baseX < 0 || particle.baseX > width) particle.speedX *= -1;
      if (particle.baseY < 0 || particle.baseY > height) particle.speedY *= -1;

      // Trail
      particle.trail.push({ x: particle.x, y: particle.y });
      if (particle.trail.length > 8) particle.trail.shift();

      // Draw trail
      particle.trail.forEach((point, i) => {
        const trailOpacity = (i / particle.trail.length) * particle.opacity * 0.3;
        ctx.fillStyle = `${particle.color}${trailOpacity})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw particle
      const glow = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 3
      );
      glow.addColorStop(0, `${particle.color}${particle.opacity})`);
      glow.addColorStop(1, `${particle.color}0)`);
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `${particle.color}${particle.opacity + 0.2})`;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
      
      const centerX = canvas.width * 0.6;
      const centerY = canvas.height * 0.5;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;
      
      particlesRef.current = initParticles(canvas.width, canvas.height);
      nodesRef.current = initNodes(centerX, centerY, radius);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
      mouseX.set((e.clientX - rect.left - canvas.width / 2) / canvas.width);
      mouseY.set((e.clientY - rect.top - canvas.height / 2) / canvas.height);
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseX.set(0);
      mouseY.set(0);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      timeRef.current += 16;
      const time = timeRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width * 0.6;
      const centerY = canvas.height * 0.5;
      const radius = Math.min(canvas.width, canvas.height) * 0.35;

      const parallaxX = springX.get();
      const parallaxY = springY.get();

      // Draw waves behind globe
      drawWaves(ctx, centerX + parallaxX * 20, centerY + parallaxY * 15, radius, time);

      // Draw globe
      const { adjustedCenterX, adjustedCenterY } = drawGlobe(
        ctx, centerX, centerY, radius, time, parallaxX, parallaxY
      );

      // Draw nodes
      drawNodes(ctx, nodesRef.current, centerX, centerY, time, parallaxX, parallaxY);

      // Draw particles
      drawParticles(
        ctx,
        particlesRef.current,
        canvas.width,
        canvas.height,
        mouseRef.current.x,
        mouseRef.current.y,
        mouseRef.current.active
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [initParticles, initNodes, drawGlobe, drawWaves, drawNodes, drawParticles, mouseX, mouseY, springX, springY]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-[1]">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: 0.9 }}
      />
      {/* Additional ambient glow layers */}
      <motion.div
        className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,150,255,0.15) 0%, rgba(100,50,200,0.08) 40%, transparent 70%)',
          x: springX,
          y: springY,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
