import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Holographic network rings
function HolographicRings() {
  const ringsRef = useRef<THREE.Group>(null);
  
  const rings = useMemo(() => {
    return [
      { radius: 2.0, segments: 64, tiltX: 0, tiltY: 0, opacity: 0.4 },
      { radius: 2.0, segments: 64, tiltX: Math.PI / 2, tiltY: 0, opacity: 0.3 },
      { radius: 2.0, segments: 64, tiltX: Math.PI / 4, tiltY: Math.PI / 4, opacity: 0.25 },
      { radius: 2.0, segments: 64, tiltX: -Math.PI / 4, tiltY: Math.PI / 4, opacity: 0.2 },
      { radius: 2.3, segments: 48, tiltX: Math.PI / 6, tiltY: 0, opacity: 0.15 },
      { radius: 2.5, segments: 48, tiltX: -Math.PI / 3, tiltY: Math.PI / 6, opacity: 0.1 },
    ];
  }, []);

  useFrame(({ clock }) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.y = clock.getElapsedTime() * 0.03;
      ringsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.02) * 0.05;
    }
  });

  return (
    <group ref={ringsRef}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[ring.tiltX, ring.tiltY, 0]}>
          <torusGeometry args={[ring.radius, 0.008, 8, ring.segments]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#00d4ff" : "#8b5cf6"}
            transparent
            opacity={ring.opacity}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

// Digital mesh sphere (AI brain look)
function DigitalMesh() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.025;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Inner core */}
      <mesh>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshBasicMaterial
          color="#7c3aed"
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      {/* Middle layer */}
      <mesh>
        <icosahedronGeometry args={[1.2, 2]} />
        <meshBasicMaterial
          color="#00d4ff"
          transparent
          opacity={0.2}
          wireframe
        />
      </mesh>
      
      {/* Outer mesh */}
      <mesh>
        <icosahedronGeometry args={[1.8, 3]} />
        <meshBasicMaterial
          color="#06b6d4"
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>
      
      {/* Glow sphere */}
      <mesh>
        <sphereGeometry args={[1.9, 32, 32]} />
        <meshBasicMaterial
          color="#0ea5e9"
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

// Network nodes on surface
function NetworkNodes() {
  const nodesRef = useRef<THREE.Points>(null);
  
  const { positions, colors } = useMemo(() => {
    const count = 100;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const colorPalette = [
      [0.0, 0.83, 1.0],    // Cyan
      [0.0, 0.65, 0.89],   // Blue
      [0.55, 0.23, 0.93],  // Purple
      [0.93, 0.27, 0.27],  // Red (minimal)
      [1.0, 0.45, 0.2],    // Orange (minimal)
    ];
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const radius = 1.85 + Math.random() * 0.1;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Weight colors: 70% blue/cyan, 20% purple, 10% red/orange
      const colorWeight = Math.random();
      let colorIndex;
      if (colorWeight < 0.4) colorIndex = 0;
      else if (colorWeight < 0.7) colorIndex = 1;
      else if (colorWeight < 0.9) colorIndex = 2;
      else if (colorWeight < 0.95) colorIndex = 3;
      else colorIndex = 4;
      
      const color = colorPalette[colorIndex];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }
    return { positions, colors };
  }, []);

  useFrame(({ clock }) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = clock.getElapsedTime() * 0.025;
    }
  });

  return (
    <Points ref={nodesRef} positions={positions}>
      <PointMaterial
        vertexColors
        transparent
        size={0.06}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Magnetic attraction particles
function MagneticParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const velocitiesRef = useRef<Float32Array>();
  const targetRadius = 2.2;
  const maxRadius = 7;
  
  const { positions, colors, velocities } = useMemo(() => {
    const count = 800;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    const colorPalette = [
      [0.0, 0.83, 1.0],    // Cyan
      [0.0, 0.56, 0.89],   // Blue  
      [0.49, 0.27, 0.93],  // Purple
      [0.93, 0.2, 0.2],    // Red (minimal)
      [1.0, 0.4, 0.15],    // Orange (minimal)
    ];
    
    for (let i = 0; i < count; i++) {
      // Start particles at random positions outside the globe
      const radius = 3 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Initial velocities toward center
      velocities[i * 3] = 0;
      velocities[i * 3 + 1] = 0;
      velocities[i * 3 + 2] = 0;
      
      // Color distribution: 60% blue/cyan, 25% purple, 15% red/orange
      const colorWeight = Math.random();
      let colorIndex;
      if (colorWeight < 0.35) colorIndex = 0;
      else if (colorWeight < 0.6) colorIndex = 1;
      else if (colorWeight < 0.85) colorIndex = 2;
      else if (colorWeight < 0.93) colorIndex = 3;
      else colorIndex = 4;
      
      const color = colorPalette[colorIndex];
      colors[i * 3] = color[0];
      colors[i * 3 + 1] = color[1];
      colors[i * 3 + 2] = color[2];
    }
    
    return { positions, colors, velocities };
  }, []);

  velocitiesRef.current = velocities;

  useFrame(({ clock }) => {
    if (!pointsRef.current || !velocitiesRef.current) return;
    
    const positionArray = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const vel = velocitiesRef.current;
    const time = clock.getElapsedTime();
    
    for (let i = 0; i < positionArray.length / 3; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;
      
      const x = positionArray[ix];
      const y = positionArray[iy];
      const z = positionArray[iz];
      
      const distance = Math.sqrt(x * x + y * y + z * z);
      
      // Direction toward center
      const dx = -x / distance;
      const dy = -y / distance;
      const dz = -z / distance;
      
      // Magnetic attraction force (stronger when far, weaker when close)
      const attractionStrength = 0.0008 * Math.max(0, (distance - targetRadius) / 3);
      
      // Add some spiral motion
      const spiralStrength = 0.0003;
      const sx = -z * spiralStrength;
      const sz = x * spiralStrength;
      
      // Update velocities
      vel[ix] += dx * attractionStrength + sx;
      vel[iy] += dy * attractionStrength;
      vel[iz] += dz * attractionStrength + sz;
      
      // Apply damping
      vel[ix] *= 0.995;
      vel[iy] *= 0.995;
      vel[iz] *= 0.995;
      
      // Update positions
      positionArray[ix] += vel[ix];
      positionArray[iy] += vel[iy];
      positionArray[iz] += vel[iz];
      
      // Reset if too close to center or too far
      const newDistance = Math.sqrt(
        positionArray[ix] ** 2 + 
        positionArray[iy] ** 2 + 
        positionArray[iz] ** 2
      );
      
      if (newDistance < targetRadius || newDistance > maxRadius) {
        const resetRadius = 4 + Math.random() * 3;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        
        positionArray[ix] = resetRadius * Math.sin(phi) * Math.cos(theta);
        positionArray[iy] = resetRadius * Math.sin(phi) * Math.sin(theta);
        positionArray[iz] = resetRadius * Math.cos(phi);
        
        vel[ix] = 0;
        vel[iy] = 0;
        vel[iz] = 0;
      }
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.01;
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        vertexColors
        transparent
        size={0.025}
        sizeAttenuation
        depthWrite={false}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Data stream lines flowing toward globe
function DataStreams() {
  const groupRef = useRef<THREE.Group>(null);
  
  const streams = useMemo(() => {
    const streamData: THREE.Vector3[][] = [];
    
    for (let i = 0; i < 16; i++) {
      const theta = (i / 16) * Math.PI * 2 + Math.random() * 0.3;
      const phi = Math.PI / 4 + Math.random() * Math.PI / 2;
      
      const points: THREE.Vector3[] = [];
      const startRadius = 5 + Math.random() * 2;
      const endRadius = 2.2;
      
      for (let j = 0; j <= 20; j++) {
        const t = j / 20;
        const radius = startRadius - (startRadius - endRadius) * t * t;
        const spiralOffset = t * 0.5;
        
        points.push(new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta + spiralOffset),
          radius * Math.sin(phi) * Math.sin(theta + spiralOffset),
          radius * Math.cos(phi)
        ));
      }
      
      streamData.push(points);
    }
    return streamData;
  }, []);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  const streamColors = ['#00d4ff', '#0ea5e9', '#8b5cf6', '#06b6d4'];

  return (
    <group ref={groupRef}>
      {streams.map((points, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const color = streamColors[i % streamColors.length];
        
        return (
          <primitive
            key={i}
            object={new THREE.Line(
              geometry,
              new THREE.LineBasicMaterial({
                color,
                transparent: true,
                opacity: 0.12,
                blending: THREE.AdditiveBlending
              })
            )}
          />
        );
      })}
    </group>
  );
}

// Ambient floating particles (background depth)
function AmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const count = 300;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.005;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        transparent
        color="#06b6d4"
        size={0.01}
        sizeAttenuation
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

// Outer glow aura
function GlowAura() {
  const auraRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (auraRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * 0.5) * 0.02 + 1;
      auraRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <mesh ref={auraRef}>
      <sphereGeometry args={[2.8, 32, 32]} />
      <meshBasicMaterial
        color="#7c3aed"
        transparent
        opacity={0.02}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.75 }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 1.5]}
      >
        {/* Subtle ambient light */}
        <ambientLight intensity={0.2} />
        
        {/* Key lights */}
        <pointLight position={[5, 3, 5]} intensity={0.3} color="#00d4ff" />
        <pointLight position={[-5, -3, 3]} intensity={0.2} color="#8b5cf6" />
        <pointLight position={[0, 5, -3]} intensity={0.15} color="#06b6d4" />
        
        {/* Core elements */}
        <DigitalMesh />
        <HolographicRings />
        <NetworkNodes />
        
        {/* Particle effects */}
        <MagneticParticles />
        <DataStreams />
        <AmbientParticles />
        
        {/* Atmosphere */}
        <GlowAura />
      </Canvas>
    </div>
  );
}
