"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

function WireframeSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (groupRef.current && !hovered) {
      // Slow auto-rotate when not hovering
      groupRef.current.rotation.y += 0.003;
      groupRef.current.rotation.x += 0.001;
    }
  });

  // Create sphere geometry for wireframe
  const radius = 2;
  const segments = 50;

  return (
    <group
      ref={groupRef}
      scale={1} // Removed the scale change on hover
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setHovered(false);
      }}
    >
      {/* Wireframe sphere */}
      <lineSegments>
        <edgesGeometry
          attach="geometry"
          args={[new THREE.SphereGeometry(radius, segments, segments)]}
        />
        <lineBasicMaterial
          color={hovered ? "#1fd6d4" : "#00c2b2"}
          linewidth={2}
          transparent
          opacity={hovered ? 1 : 0.85}
        />
      </lineSegments>
    </group>
  );
}

export default function SphereWireframe() {
  return (
    <div className="relative h-full w-full bg-black">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00c2b2" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1b8fff" />
        
        <WireframeSphere />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={1}
          dampingFactor={0.08}
          enableDamping={true}
        />
      </Canvas>
    </div>
  );
}
