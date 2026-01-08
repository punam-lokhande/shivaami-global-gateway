import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Earth surface with dotted continents effect
function DottedEarth() {
  const earthRef = useRef<THREE.Group>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 4000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const radius = 3;
    
    // Create dots distributed on sphere surface with continent-like patterns
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      // Simulate continent patterns with noise
      const noise1 = Math.sin(phi * 5) * Math.cos(theta * 4);
      const noise2 = Math.sin(phi * 8 + 1) * Math.cos(theta * 6 + 2);
      const noise3 = Math.sin(phi * 3) * Math.cos(theta * 2);
      const combinedNoise = (noise1 + noise2 * 0.5 + noise3 * 0.3) / 1.8;
      
      if (combinedNoise > -0.2 && Math.random() < 0.7) {
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.cos(phi);
        positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
        
        // Blue gradient colors
        const intensity = 0.6 + Math.random() * 0.4;
        colors[i * 3] = 0.0;
        colors[i * 3 + 1] = 0.6 * intensity;
        colors[i * 3 + 2] = 1.0 * intensity;
      }
    }
    return { positions, colors };
  }, []);

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={earthRef}>
      <Points positions={positions}>
        <PointMaterial
          vertexColors
          transparent
          size={0.025}
          sizeAttenuation
          depthWrite={false}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// Network mesh lines on the globe surface
function NetworkMesh() {
  const meshRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const lineData: { points: THREE.Vector3[]; opacity: number }[] = [];
    const radius = 3.02;
    
    for (let i = 0; i < 50; i++) {
      const phi1 = Math.random() * Math.PI;
      const theta1 = Math.random() * Math.PI * 2;
      const phi2 = phi1 + (Math.random() - 0.5) * 0.5;
      const theta2 = theta1 + (Math.random() - 0.5) * 0.5;
      
      const points: THREE.Vector3[] = [];
      const segments = 15;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const phi = phi1 + (phi2 - phi1) * t;
        const theta = theta1 + (theta2 - theta1) * t;
        
        points.push(new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        ));
      }
      
      lineData.push({ points, opacity: 0.15 + Math.random() * 0.15 });
    }
    return lineData;
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={meshRef}>
      {lines.map((line, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(line.points);
        return (
          <primitive
            key={i}
            object={new THREE.Line(
              geometry,
              new THREE.LineBasicMaterial({
                color: '#0099ff',
                transparent: true,
                opacity: line.opacity,
                blending: THREE.AdditiveBlending
              })
            )}
          />
        );
      })}
    </group>
  );
}

// Vertical connection pins rising from globe surface
function ConnectionPins() {
  const pinsRef = useRef<THREE.Group>(null);
  
  const pins = useMemo(() => {
    const pinData: { base: THREE.Vector3; top: THREE.Vector3; height: number }[] = [];
    const radius = 3;
    
    for (let i = 0; i < 60; i++) {
      // Focus pins more on the visible hemisphere
      const phi = Math.PI * 0.15 + Math.random() * Math.PI * 0.5;
      const theta = Math.random() * Math.PI * 2;
      
      const base = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
      
      const direction = base.clone().normalize();
      const height = 0.2 + Math.random() * 0.8;
      const top = base.clone().add(direction.multiplyScalar(height));
      
      pinData.push({ base, top, height });
    }
    return pinData;
  }, []);

  useFrame(({ clock }) => {
    if (pinsRef.current) {
      pinsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={pinsRef}>
      {pins.map((pin, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints([pin.base, pin.top]);
        
        return (
          <group key={i}>
            {/* Pin line */}
            <primitive
              object={new THREE.Line(
                geometry,
                new THREE.LineBasicMaterial({
                  color: '#00ccff',
                  transparent: true,
                  opacity: 0.6,
                  blending: THREE.AdditiveBlending
                })
              )}
            />
            {/* Pin tip glow */}
            <mesh position={pin.top}>
              <sphereGeometry args={[0.04 + Math.random() * 0.02, 12, 12]} />
              <meshBasicMaterial
                color="#00e5ff"
                transparent
                opacity={0.95}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

// Network arcs connecting points (curved dashed lines over the globe)
function NetworkArcs() {
  const arcsRef = useRef<THREE.Group>(null);
  
  const arcs = useMemo(() => {
    const arcData: { points: THREE.Vector3[]; color: string }[] = [];
    const radius = 3;
    
    // Create prominent arcing connections
    const arcConfigs = [
      { phi1: 0.4, theta1: 0.5, phi2: 0.6, theta2: 2.5, arcHeight: 1.2 },
      { phi1: 0.5, theta1: 1.2, phi2: 0.3, theta2: 4.0, arcHeight: 1.5 },
      { phi1: 0.35, theta1: 2.0, phi2: 0.55, theta2: 5.0, arcHeight: 1.0 },
      { phi1: 0.45, theta1: 3.5, phi2: 0.4, theta2: 0.8, arcHeight: 1.3 },
      { phi1: 0.3, theta1: 4.5, phi2: 0.5, theta2: 1.5, arcHeight: 1.4 },
      { phi1: 0.55, theta1: 0.2, phi2: 0.35, theta2: 3.2, arcHeight: 1.1 },
    ];
    
    arcConfigs.forEach((config, idx) => {
      const start = new THREE.Vector3(
        radius * Math.sin(config.phi1 * Math.PI) * Math.cos(config.theta1),
        radius * Math.cos(config.phi1 * Math.PI),
        radius * Math.sin(config.phi1 * Math.PI) * Math.sin(config.theta1)
      );
      
      const end = new THREE.Vector3(
        radius * Math.sin(config.phi2 * Math.PI) * Math.cos(config.theta2),
        radius * Math.cos(config.phi2 * Math.PI),
        radius * Math.sin(config.phi2 * Math.PI) * Math.sin(config.theta2)
      );
      
      const points: THREE.Vector3[] = [];
      const segments = 60;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const mid = start.clone().lerp(end, t);
        
        // Create smooth arc
        const arcLift = Math.sin(t * Math.PI) * config.arcHeight;
        mid.normalize().multiplyScalar(radius + arcLift);
        
        points.push(mid);
      }
      
      arcData.push({ 
        points, 
        color: idx % 2 === 0 ? '#00ccff' : '#0099ff'
      });
    });
    
    return arcData;
  }, []);

  useFrame(({ clock }) => {
    if (arcsRef.current) {
      arcsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={arcsRef}>
      {arcs.map((arc, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(arc.points);
        const line = new THREE.Line(
          geometry,
          new THREE.LineDashedMaterial({
            color: arc.color,
            transparent: true,
            opacity: 0.7,
            dashSize: 0.15,
            gapSize: 0.08,
            blending: THREE.AdditiveBlending
          })
        );
        line.computeLineDistances();
        
        return <primitive key={i} object={line} />;
      })}
    </group>
  );
}

// Bright horizon glow effect
function HorizonGlow() {
  const glowRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (glowRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * 0.3) * 0.02 + 1;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={glowRef}>
      {/* Core glow sphere */}
      <mesh>
        <sphereGeometry args={[3.05, 64, 64]} />
        <meshBasicMaterial
          color="#0088dd"
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Bright horizon line */}
      <mesh position={[0, 1.8, 0]} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[2.5, 0.3, 16, 100]} />
        <meshBasicMaterial
          color="#00ccff"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Lens flare effect */}
      <mesh position={[0.5, 2.2, 1]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Secondary flare */}
      <mesh position={[-0.2, 2.0, 1.2]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color="#00ddff"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Outer atmosphere */}
      <mesh>
        <sphereGeometry args={[3.5, 64, 64]} />
        <meshBasicMaterial
          color="#004488"
          transparent
          opacity={0.04}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// Ambient floating particles
function AmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const count = 150;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.008;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        transparent
        color="#00aaff"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, -2, 6], fov: 55, near: 0.1, far: 100 }}
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        {/* Ambient light */}
        <ambientLight intensity={0.2} />
        
        {/* Blue lighting for the globe */}
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00ccff" />
        <pointLight position={[-5, 3, 3]} intensity={0.4} color="#0088ff" />
        <pointLight position={[0, -3, 5]} intensity={0.3} color="#00aaff" />
        <pointLight position={[2, 4, -2]} intensity={0.3} color="#00ddff" />
        
        {/* Globe positioned to show horizon view */}
        <group position={[0, -1, 0]}>
          <DottedEarth />
          <NetworkMesh />
          <ConnectionPins />
          <NetworkArcs />
          <HorizonGlow />
        </group>
        
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
