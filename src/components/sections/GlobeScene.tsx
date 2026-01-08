import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import earthTexture from '@/assets/earth-texture.jpg';

// Realistic 3D Earth with texture
function TexturedEarth() {
  const earthRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, earthTexture);
  
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.8}
        metalness={0.1}
        emissive="#001122"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
}

// Atmospheric glow around Earth's edge
function AtmosphereGlow() {
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (atmosphereRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * 0.5) * 0.02 + 1;
      atmosphereRef.current.scale.setScalar(pulse);
    }
  });

  const atmosphereShader = useMemo(() => ({
    uniforms: {
      glowColor: { value: new THREE.Color('#00aaff') },
      coefficient: { value: 0.8 },
      power: { value: 3.5 },
    },
    vertexShader: `
      varying vec3 vNormal;
      varying vec3 vPositionNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPositionNormal = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform float coefficient;
      uniform float power;
      varying vec3 vNormal;
      varying vec3 vPositionNormal;
      void main() {
        float intensity = pow(coefficient - dot(vNormal, vPositionNormal), power);
        gl_FragColor = vec4(glowColor, intensity * 0.6);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  }), []);

  return (
    <>
      {/* Inner atmosphere */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[3.15, 64, 64]} />
        <shaderMaterial {...atmosphereShader} />
      </mesh>
      
      {/* Outer glow */}
      <mesh>
        <sphereGeometry args={[3.4, 64, 64]} />
        <meshBasicMaterial
          color="#0066aa"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      {/* Bright rim light */}
      <mesh>
        <sphereGeometry args={[3.08, 64, 64]} />
        <meshBasicMaterial
          color="#00ccff"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </>
  );
}

// Glowing network nodes that all pulse and animate
function GlowingNodes() {
  const nodesRef = useRef<THREE.Group>(null);
  const nodeCount = 80;
  
  const nodes = useMemo(() => {
    const nodeData: { position: THREE.Vector3; size: number; phase: number; speed: number }[] = [];
    const radius = 3.05;
    
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi + Math.random() * 0.5;
      
      const position = new THREE.Vector3(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
      
      nodeData.push({
        position,
        size: 0.03 + Math.random() * 0.04,
        phase: Math.random() * Math.PI * 2,
        speed: 1.5 + Math.random() * 2,
      });
    }
    return nodeData;
  }, []);

  useFrame(({ clock }) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = clock.getElapsedTime() * 0.08;
      
      // Animate each node's glow
      nodesRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Group) {
          const node = nodes[index];
          const time = clock.getElapsedTime();
          const pulse = 0.5 + 0.5 * Math.sin(time * node.speed + node.phase);
          
          // Scale the outer glow based on pulse
          const innerMesh = child.children[0] as THREE.Mesh;
          const outerMesh = child.children[1] as THREE.Mesh;
          
          if (innerMesh && innerMesh.material instanceof THREE.MeshBasicMaterial) {
            innerMesh.material.opacity = 0.7 + pulse * 0.3;
          }
          if (outerMesh) {
            outerMesh.scale.setScalar(1 + pulse * 0.5);
            if (outerMesh.material instanceof THREE.MeshBasicMaterial) {
              outerMesh.material.opacity = 0.3 + pulse * 0.4;
            }
          }
        }
      });
    }
  });

  return (
    <group ref={nodesRef}>
      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          {/* Core bright node */}
          <mesh>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshBasicMaterial
              color="#00ffff"
              transparent
              opacity={0.9}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
          {/* Outer glow */}
          <mesh>
            <sphereGeometry args={[node.size * 2.5, 16, 16]} />
            <meshBasicMaterial
              color="#00aaff"
              transparent
              opacity={0.4}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
          {/* Bloom effect */}
          <mesh>
            <sphereGeometry args={[node.size * 4, 8, 8]} />
            <meshBasicMaterial
              color="#0066ff"
              transparent
              opacity={0.15}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Animated connection lines between nodes
function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);
  const lineCount = 40;
  
  const connections = useMemo(() => {
    const connectionData: { 
      start: THREE.Vector3; 
      end: THREE.Vector3; 
      curve: THREE.Vector3[];
      phase: number;
      speed: number;
    }[] = [];
    const radius = 3.05;
    
    for (let i = 0; i < lineCount; i++) {
      const phi1 = Math.random() * Math.PI;
      const theta1 = Math.random() * Math.PI * 2;
      const phi2 = Math.random() * Math.PI;
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
      
      // Create curved path
      const curve: THREE.Vector3[] = [];
      const segments = 30;
      const arcHeight = 0.2 + Math.random() * 0.5;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const point = start.clone().lerp(end, t);
        const lift = Math.sin(t * Math.PI) * arcHeight;
        point.normalize().multiplyScalar(radius + lift);
        curve.push(point);
      }
      
      connectionData.push({
        start,
        end,
        curve,
        phase: Math.random() * Math.PI * 2,
        speed: 0.5 + Math.random() * 1.5,
      });
    }
    return connectionData;
  }, []);

  useFrame(({ clock }) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = clock.getElapsedTime() * 0.08;
      
      // Animate line opacity
      linesRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Line) {
          const connection = connections[index];
          const time = clock.getElapsedTime();
          const pulse = 0.3 + 0.7 * Math.abs(Math.sin(time * connection.speed + connection.phase));
          
          if (child.material instanceof THREE.LineBasicMaterial) {
            child.material.opacity = pulse * 0.6;
          }
        }
      });
    }
  });

  return (
    <group ref={linesRef}>
      {connections.map((connection, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(connection.curve);
        return (
          <primitive
            key={i}
            object={new THREE.Line(
              geometry,
              new THREE.LineBasicMaterial({
                color: '#00ccff',
                transparent: true,
                opacity: 0.4,
                blending: THREE.AdditiveBlending,
              })
            )}
          />
        );
      })}
    </group>
  );
}

// Network arcs with flowing animation
function FlowingArcs() {
  const arcsRef = useRef<THREE.Group>(null);
  
  const arcs = useMemo(() => {
    const arcData: { points: THREE.Vector3[]; dashOffset: number; speed: number }[] = [];
    const radius = 3;
    
    const arcConfigs = [
      { phi1: 0.3, theta1: 0.5, phi2: 0.7, theta2: 2.5, arcHeight: 1.5 },
      { phi1: 0.5, theta1: 1.2, phi2: 0.3, theta2: 4.0, arcHeight: 1.8 },
      { phi1: 0.25, theta1: 2.0, phi2: 0.6, theta2: 5.0, arcHeight: 1.3 },
      { phi1: 0.45, theta1: 3.5, phi2: 0.35, theta2: 0.8, arcHeight: 1.6 },
      { phi1: 0.35, theta1: 4.5, phi2: 0.55, theta2: 1.5, arcHeight: 2.0 },
      { phi1: 0.6, theta1: 0.2, phi2: 0.25, theta2: 3.2, arcHeight: 1.4 },
      { phi1: 0.4, theta1: 5.5, phi2: 0.5, theta2: 2.8, arcHeight: 1.7 },
      { phi1: 0.55, theta1: 1.8, phi2: 0.4, theta2: 4.5, arcHeight: 1.9 },
    ];
    
    arcConfigs.forEach((config) => {
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
      const segments = 80;
      
      for (let j = 0; j <= segments; j++) {
        const t = j / segments;
        const mid = start.clone().lerp(end, t);
        const arcLift = Math.sin(t * Math.PI) * config.arcHeight;
        mid.normalize().multiplyScalar(radius + arcLift);
        points.push(mid);
      }
      
      arcData.push({ 
        points, 
        dashOffset: 0,
        speed: 0.5 + Math.random() * 0.5,
      });
    });
    
    return arcData;
  }, []);

  useFrame(({ clock }) => {
    if (arcsRef.current) {
      arcsRef.current.rotation.y = clock.getElapsedTime() * 0.08;
      
      // Animate dash offset for flowing effect
      arcsRef.current.children.forEach((child, index) => {
        if (child instanceof THREE.Line) {
          const arc = arcs[index];
          if (child.material instanceof THREE.LineDashedMaterial) {
            child.material.dashSize = 0.2 + Math.sin(clock.getElapsedTime() * arc.speed) * 0.1;
          }
        }
      });
    }
  });

  return (
    <group ref={arcsRef}>
      {arcs.map((arc, i) => {
        const geometry = new THREE.BufferGeometry().setFromPoints(arc.points);
        const line = new THREE.Line(
          geometry,
          new THREE.LineDashedMaterial({
            color: '#00ddff',
            transparent: true,
            opacity: 0.8,
            dashSize: 0.2,
            gapSize: 0.15,
            blending: THREE.AdditiveBlending,
          })
        );
        line.computeLineDistances();
        
        return <primitive key={i} object={line} />;
      })}
    </group>
  );
}

// Wireframe overlay for futuristic look
function WireframeOverlay() {
  const wireRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (wireRef.current) {
      wireRef.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
  });

  return (
    <mesh ref={wireRef}>
      <icosahedronGeometry args={[3.02, 3]} />
      <meshBasicMaterial
        color="#0088ff"
        wireframe
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

// Ambient floating particles with bloom
function AmbientParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    return positions;
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.01;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions}>
      <PointMaterial
        transparent
        color="#00ccff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

// Lens flare effect at top
function LensFlare() {
  const flareRef = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (flareRef.current) {
      const pulse = 0.8 + 0.2 * Math.sin(clock.getElapsedTime() * 0.8);
      flareRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={flareRef} position={[0, 2.5, 1]}>
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshBasicMaterial
          color="#ffffff"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial
          color="#00ccff"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50, near: 0.1, far: 100 }}
        style={{ background: 'transparent' }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
        dpr={[1, 2]}
      >
        {/* Realistic lighting */}
        <ambientLight intensity={0.3} color="#003366" />
        
        {/* Key light - main illumination */}
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          color="#ffffff"
        />
        
        {/* Fill light - softer blue */}
        <pointLight position={[-5, 3, 3]} intensity={0.6} color="#0088ff" />
        
        {/* Rim light - edge glow */}
        <pointLight position={[0, -5, 5]} intensity={0.4} color="#00ccff" />
        
        {/* Top light for lens flare effect */}
        <pointLight position={[0, 6, 2]} intensity={0.5} color="#ffffff" />
        
        {/* Globe group */}
        <group position={[0, 0, 0]}>
          <TexturedEarth />
          <AtmosphereGlow />
          <WireframeOverlay />
          <GlowingNodes />
          <ConnectionLines />
          <FlowingArcs />
          <LensFlare />
        </group>
        
        <AmbientParticles />
      </Canvas>
    </div>
  );
}
