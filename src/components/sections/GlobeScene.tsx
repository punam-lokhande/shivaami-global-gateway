import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Glowing data nodes on the globe surface
function DataNodes() {
  const nodesRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 80;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 2.03;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Cyan to white color variation
      const intensity = 0.7 + Math.random() * 0.3;
      colors[i * 3] = 0.2 * intensity;
      colors[i * 3 + 1] = 0.8 * intensity;
      colors[i * 3 + 2] = 1.0 * intensity;
    }
    return { positions, colors };
  }, []);

  useFrame(({ clock }) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Points ref={nodesRef} positions={positions}>
      <PointMaterial
        vertexColors
        transparent
        size={0.08}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Main globe with enhanced materials
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const innerGlowRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.05; // Slow, premium rotation
    if (globeRef.current) {
      globeRef.current.rotation.y = time;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = time;
    }
    if (innerGlowRef.current) {
      innerGlowRef.current.rotation.y = time * 0.8;
    }
  });

  return (
    <group>
      {/* Inner core glow */}
      <Sphere ref={innerGlowRef} args={[1.5, 32, 32]}>
        <meshBasicMaterial 
          color="#0066cc" 
          transparent 
          opacity={0.15}
        />
      </Sphere>

      {/* Main globe body with gradient effect */}
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshBasicMaterial 
          color="#003366" 
          transparent 
          opacity={0.2}
        />
      </Sphere>
      
      {/* Primary network grid - horizontal lines */}
      <Sphere args={[2.01, 48, 24]}>
        <meshBasicMaterial 
          color="#00b4d8" 
          wireframe 
          transparent 
          opacity={0.15}
        />
      </Sphere>

      {/* Secondary network grid - finer detail */}
      <Sphere ref={wireframeRef} args={[2.02, 32, 32]}>
        <meshBasicMaterial 
          color="#48cae4" 
          wireframe 
          transparent 
          opacity={0.25}
        />
      </Sphere>

      {/* Outer atmosphere glow */}
      <Sphere args={[2.4, 32, 32]}>
        <meshBasicMaterial 
          color="#00a0e3" 
          transparent 
          opacity={0.03}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Soft outer halo */}
      <Sphere args={[2.8, 32, 32]}>
        <meshBasicMaterial 
          color="#90e0ef" 
          transparent 
          opacity={0.015}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

// Floating particles in space
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const { positions, sizes } = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      sizes[i] = Math.random() * 0.5 + 0.5;
    }
    return { positions, sizes };
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.015;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.05) * 0.05;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#90e0ef"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Animated connection arcs between nodes
function ConnectionArcs() {
  const groupRef = useRef<THREE.Group>(null);
  
  const arcs = useMemo(() => {
    const arcData: { curve: THREE.QuadraticBezierCurve3; speed: number }[] = [];
    
    for (let i = 0; i < 12; i++) {
      const startTheta = Math.random() * Math.PI * 2;
      const startPhi = Math.acos((Math.random() * 2) - 1);
      const endTheta = startTheta + (Math.random() - 0.5) * Math.PI;
      const endPhi = Math.acos((Math.random() * 2) - 1);
      
      const radius = 2.04;
      
      const start = new THREE.Vector3(
        radius * Math.sin(startPhi) * Math.cos(startTheta),
        radius * Math.sin(startPhi) * Math.sin(startTheta),
        radius * Math.cos(startPhi)
      );
      
      const end = new THREE.Vector3(
        radius * Math.sin(endPhi) * Math.cos(endTheta),
        radius * Math.sin(endPhi) * Math.sin(endTheta),
        radius * Math.cos(endPhi)
      );
      
      const midPoint = new THREE.Vector3()
        .addVectors(start, end)
        .multiplyScalar(0.5)
        .normalize()
        .multiplyScalar(radius * 1.3);
      
      arcData.push({
        curve: new THREE.QuadraticBezierCurve3(start, midPoint, end),
        speed: 0.5 + Math.random() * 0.5
      });
    }
    return arcData;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {arcs.map((arc, i) => {
        const points = arc.curve.getPoints(40);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <primitive 
            key={i} 
            object={new THREE.Line(
              geometry, 
              new THREE.LineBasicMaterial({ 
                color: '#48cae4', 
                transparent: true, 
                opacity: 0.3,
                blending: THREE.AdditiveBlending
              })
            )} 
          />
        );
      })}
    </group>
  );
}

// Orbital ring effect
function OrbitalRing({ radius, tilt, speed, opacity }: { radius: number; tilt: number; speed: number; opacity: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.005, 8, 100]} />
      <meshBasicMaterial 
        color="#00b4d8" 
        transparent 
        opacity={opacity}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Floating data streams
function DataStreams() {
  const streamsRef = useRef<THREE.Group>(null);
  
  const streams = useMemo(() => {
    const streamData: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const y = (Math.random() - 0.5) * 4;
      const radius = 2.5 + Math.random() * 0.5;
      
      streamData.push({
        start: new THREE.Vector3(
          Math.cos(angle) * radius,
          y,
          Math.sin(angle) * radius
        ),
        end: new THREE.Vector3(
          Math.cos(angle + 0.3) * radius,
          y + (Math.random() - 0.5) * 0.5,
          Math.sin(angle + 0.3) * radius
        )
      });
    }
    return streamData;
  }, []);

  useFrame(({ clock }) => {
    if (streamsRef.current) {
      streamsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <group ref={streamsRef}>
      {streams.map((stream, i) => {
        const points = [stream.start, stream.end];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <primitive 
            key={i} 
            object={new THREE.Line(
              geometry, 
              new THREE.LineBasicMaterial({ 
                color: '#90e0ef', 
                transparent: true, 
                opacity: 0.15 
              })
            )} 
          />
        );
      })}
    </group>
  );
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }}>
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ 
          alpha: true, 
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]}
      >
        {/* Soft ambient lighting */}
        <ambientLight intensity={0.3} />
        
        {/* Key light for highlights */}
        <pointLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
        
        {/* Fill light */}
        <pointLight position={[-5, -5, 5]} intensity={0.2} color="#00b4d8" />
        
        {/* Rim light for glow effect */}
        <pointLight position={[0, 0, -5]} intensity={0.3} color="#48cae4" />
        
        <Globe />
        <DataNodes />
        <ParticleField />
        <ConnectionArcs />
        <DataStreams />
        
        {/* Orbital rings for tech feel */}
        <OrbitalRing radius={2.6} tilt={Math.PI * 0.15} speed={0.02} opacity={0.15} />
        <OrbitalRing radius={3.0} tilt={-Math.PI * 0.1} speed={-0.015} opacity={0.1} />
        <OrbitalRing radius={2.8} tilt={Math.PI * 0.5} speed={0.01} opacity={0.08} />
      </Canvas>
    </div>
  );
}
