"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMemo } from "react";

type OrbitSceneProps = {
  variant?: "default" | "spheres" | "badge" | "coming" | "atom" | "swirl" | "ring";
};

export default function OrbitScene({ variant = "default" }: OrbitSceneProps) {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#6ae2ff" />
        <Scene variant={variant} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}

function Scene({ variant }: { variant: OrbitSceneProps["variant"] }) {
  const colorStops = useMemo(
    () => ["#00c2b2", "#1fd6d4", "#1b8fff"],
    []
  );

  switch (variant) {
    case "badge":
    case "coming":
      return (
        <group>
          <OrbitingSpheres count={6} radius={2.2} colors={colorStops} />
          <Ring radius={1.2} />
        </group>
      );
    case "atom":
      return (
        <group>
          <OrbitingSpheres count={4} radius={2.8} colors={colorStops} />
          <Ring radius={1.6} tilt={0.7} />
          <Ring radius={2.2} tilt={-0.5} />
        </group>
      );
    case "swirl":
      return <Swirl colors={colorStops} />;
    case "ring":
      return <Ring radius={2} />;
    case "spheres":
      return <OrbitingSpheres count={10} radius={3} colors={colorStops} />;
    default:
      return (
        <group>
          <OrbitingSpheres count={8} radius={2.6} colors={colorStops} />
          <Ring radius={1.8} />
        </group>
      );
  }
}

function OrbitingSpheres({ count, radius, colors }: { count: number; radius: number; colors: string[] }) {
  const spheres = useMemo(() => new Array(count).fill(0).map((_, i) => i), [count]);
  return (
    <group>
      {spheres.map((i) => {
        const angle = (i / count) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const color = colors[i % colors.length];
        return (
          <mesh key={i} position={[x, y, 0]}>
            <sphereGeometry args={[0.18, 32, 32]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
          </mesh>
        );
      })}
    </group>
  );
}

function Ring({ radius, tilt = 0 }: { radius: number; tilt?: number }) {
  return (
    <mesh rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.03, 16, 180]} />
      <meshStandardMaterial color="#1b8fff" emissive="#1b8fff" emissiveIntensity={0.2} />
    </mesh>
  );
}

function Swirl({ colors }: { colors: string[] }) {
  const lines = useMemo(() => new Array(3).fill(0).map((_, i) => i), []);
  return (
    <group>
      {lines.map((i) => (
        <mesh key={i} rotation={[i * 0.2, 0, i * 0.2]}>
          <torusKnotGeometry args={[1.4, 0.05, 120, 16]} />
          <meshStandardMaterial color={colors[i % colors.length]} emissive={colors[i % colors.length]} emissiveIntensity={0.15} />
        </mesh>
      ))}
    </group>
  );
}


