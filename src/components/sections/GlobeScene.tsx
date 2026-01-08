import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Earth surface with dotted continents effect
function DottedEarth() {
  const earthRef = useRef<THREE.Group>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const radius = 2;
    
    // Create dots distributed on sphere surface
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      // Add some randomness to simulate continent patterns
      const noise = Math.sin(phi * 8) * Math.cos(theta * 6) * 0.3 + 0.7;
      
      if (Math.random() < noise) {
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.cos(phi);
        positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
        
        // Gradient color from cyan to blue
        const intensity = 0.5 + Math.random() * 0.5;
        colors[i * 3] = 0.0 * intensity;
        colors[i * 3 + 1] = 0.7 * intensity;
        colors[i * 3 + 2] = 1.0 * intensity;
      }
    }
    return { positions, colors };
  }, []);

  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={earthRef}>
      <Points positions={positions}>
        <PointMaterial
          vertexColors
          transparent
          size={0.03}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

// Network mesh on the globe surface
function NetworkMesh() {
  const meshRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const lineData: { points: THREE.Vector3[]; opacity: number }[] = [];
    const radius = 2.02;
    
    // Create network connections on the surface
    for (let i = 0; i < 30; i++) {
      const phi1 = Math.random() * Math.PI;
      const theta1 = Math.random() * Math.PI * 2;
      const phi2 = phi1 + (Math.random() - 0.5) * 0.8;
      const theta2 = theta1 + (Math.random() - 0.5) * 0.8;
      
      const points: THREE.Vector3[] = [];
      const segments = 20;
      
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
      
      lineData.push({ points, opacity: 0.1 + Math.random() * 0.2 });
    }
    return lineData;
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.05;
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
                color: '#00b4ff',
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
    const pinData: { base: THREE.Vector3; height: number; phi: number; theta: number }[] = [];
    const radius = 2;
    
    for (let i = 0; i < 40; i++) {
      const phi = Math.random() * Math.PI;
      const theta = Math.random() * Math.PI * 2;
      
      const base = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
      
      pinData.push({
        base,
        height: 0.3 + Math.random() * 0.6,
        phi,
        theta
      });
    }
    return pinData;
  }, []);

  useFrame(({ clock }) => {
    if (pinsRef.current) {
      pinsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={pinsRef}>
      {pins.map((pin, i) => {
        const direction = pin.base.clone().normalize();
        const end = pin.base.clone().add(direction.multiplyScalar(pin.height));
        const geometry = new THREE.BufferGeometry().setFromPoints([pin.base, end]);
        
        return (
          <group key={i}>
            {/* Pin line */}
            <primitive
              object={new THREE.Line(
                geometry,
                new THREE.LineBasicMaterial({
                  color: '#00d4ff',
                  transparent: true,
                  opacity: 0.4,
                  blending: THREE.AdditiveBlending
                })
              )}
            />
            {/* Pin tip */}
            <mesh position={end}>
              <sphereGeometry args={[0.03, 8, 8]} />
              <meshBasicMaterial
                color="#00d4ff"
                transparent
                opacity={0.9}
                blending={THREE.AdditiveBlending}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

// Network arcs connecting cities (curved lines over the globe)
function NetworkArcs() {
  const arcsRef = useRef<THREE.Group>(null);
  
  const arcs = useMemo(() => {
    const arcData: THREE.Vector3[][] = [];
    const radius = 2;
    
    // Create arcing connections between random points
    for (let i = 0; i < 12; i++) {
      const phi1 = Math.PI * 0.2 + Math.random() * Math.PI * 0.6;
      const theta1 = Math.random() * Math.PI * 2;
      const phi2 = Math.PI * 0.2 + Math.random() * Math.PI * 0.6;
      const theta2 = Math.random() * Math.PI * 2;
      
      const start = new THREE.Vector3(
        radius * Math.sin(phi1) * Math.cos(theta1),
        radius * Math.cos(phi1),
        radius * Math.sin(phi1) * Math.sin(theta1)
      );
      
      const end = new THREE.Vector3(
        radius * Math.sin(phi2) * Math.cos(theta2),
        radius * Math.cos(phi2),
        radius * Math.sin(phi2) * Math.sin(theta2)
      );
      
      const points: THREE.Vector3[] = [];
      const segments = 50;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const mid = start.clone().lerp(end, t);
        
        // Create arc by lifting the midpoint
        const arcHeight = Math.sin(t * Math.PI) * (0.5 + Math.random() * 0.5);
        mid.normalize().multiplyScalar(radius + arcHeight);
        
        points.push(mid);
      }
      
      arcData.push(points);
    }
    return arcData;
  }, []);

  useFrame(({ clock }) => {
    if (arcsRef.current) {
      arcsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  const arcColors = ['#00d4ff', '#0099ff', '#00b4ff'];

  return (
    <group ref={arcsRef}>
      {arcs.map((points, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const color = arcColors[i % arcColors.length];
        
        return (
          <primitive
            key={i}
            object={new THREE.Line(
              geometry,
              new THREE.LineDashedMaterial({
                color,
                transparent: true,
                opacity: 0.5,
                dashSize: 0.1,
                gapSize: 0.05,
                blending: THREE.AdditiveBlending
              })
            )}
          />
        );
      })}
    </group>
  );
}

// Glowing horizon effect
function HorizonGlow() {
  const glowRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (glowRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * 0.5) * 0.05 + 1;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      {/* Inner glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshBasicMaterial
          color="#00a0ff"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Outer atmosphere */}
      <mesh>
        <sphereGeometry args={[2.3, 64, 64]} />
        <meshBasicMaterial
          color="#0066aa"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Horizon rim light */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.9, 2.2, 64]} />
        <meshBasicMaterial
          color="#00ccff"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
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
    const count = 200;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        transparent
        color="#00b4ff"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.85 }}>
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 1.5]}
      >
        {/* Ambient light */}
        <ambientLight intensity={0.3} />
        
        {/* Key lights for blue glow effect */}
        <pointLight position={[3, 2, 3]} intensity={0.4} color="#00d4ff" />
        <pointLight position={[-3, -1, 2]} intensity={0.3} color="#0088ff" />
        <pointLight position={[0, 3, -2]} intensity={0.2} color="#00ccff" />
        
        {/* Globe elements */}
        <DottedEarth />
        <NetworkMesh />
        <ConnectionPins />
        <NetworkArcs />
        <HorizonGlow />
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
