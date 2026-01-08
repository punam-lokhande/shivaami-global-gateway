import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      {/* Inner globe with glow */}
      <Sphere ref={globeRef} args={[2, 64, 64]}>
        <meshBasicMaterial 
          color="#00a0e3" 
          transparent 
          opacity={0.1}
        />
      </Sphere>
      
      {/* Wireframe overlay */}
      <Sphere ref={wireframeRef} args={[2.02, 32, 32]}>
        <meshBasicMaterial 
          color="#00a0e3" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </Sphere>

      {/* Outer glow */}
      <Sphere args={[2.3, 32, 32]}>
        <meshBasicMaterial 
          color="#00a0e3" 
          transparent 
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const radius = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#00a0e3"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  const lines = useMemo(() => {
    const lineData: { start: THREE.Vector3; end: THREE.Vector3 }[] = [];
    for (let i = 0; i < 15; i++) {
      const startTheta = Math.random() * Math.PI * 2;
      const startPhi = Math.acos((Math.random() * 2) - 1);
      const endTheta = Math.random() * Math.PI * 2;
      const endPhi = Math.acos((Math.random() * 2) - 1);
      
      const radius = 2.05;
      
      lineData.push({
        start: new THREE.Vector3(
          radius * Math.sin(startPhi) * Math.cos(startTheta),
          radius * Math.sin(startPhi) * Math.sin(startTheta),
          radius * Math.cos(startPhi)
        ),
        end: new THREE.Vector3(
          radius * Math.sin(endPhi) * Math.cos(endTheta),
          radius * Math.sin(endPhi) * Math.sin(endTheta),
          radius * Math.cos(endPhi)
        ),
      });
    }
    return lineData;
  }, []);

  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => {
        const curve = new THREE.QuadraticBezierCurve3(
          line.start,
          new THREE.Vector3(
            (line.start.x + line.end.x) * 0.5 * 1.5,
            (line.start.y + line.end.y) * 0.5 * 1.5,
            (line.start.z + line.end.z) * 0.5 * 1.5
          ),
          line.end
        );
        const points = curve.getPoints(30);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <primitive key={i} object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#00a0e3', transparent: true, opacity: 0.2 }))} />
        );
      })}
    </group>
  );
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.6 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Globe />
        <ParticleField />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
