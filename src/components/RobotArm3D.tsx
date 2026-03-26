"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Colors for the industrial KUKA-style arm
const ORANGE = "#EA580C"; // Deep industrial orange
const DARK_METAL = "#1a1a1c";
const GOLD_HIGHLIGHT = "#FBBF24";

function KukaBase() {
  return (
    <group position={[0, -3, 0]}>
      {/* Floor mount */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2, 2.2, 0.4, 32]} />
        <meshStandardMaterial color={DARK_METAL} metalness={0.8} roughness={0.4} />
      </mesh>
      {/* Orange Turret Base */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[1.5, 1.8, 1.6, 32]} />
        <meshStandardMaterial color={ORANGE} metalness={0.3} roughness={0.6} />
      </mesh>
    </group>
  );
}

function KukaArmSystem() {
  const turretRef = useRef<THREE.Group>(null);
  const lowerArmRef = useRef<THREE.Group>(null);
  const upperArmRef = useRef<THREE.Group>(null);
  
  useFrame((state: any) => {
    const t = state.clock.getElapsedTime();
    
    // Extremely slow, realistic industrial sweeping motions
    if (turretRef.current) turretRef.current.rotation.y = Math.sin(t * 0.05) * 0.1;
    // Keep internal structural angles but add micro-movements
    if (lowerArmRef.current) lowerArmRef.current.rotation.z = Math.sin(t * 0.08) * 0.05 + 0.5; // Angled forward
    if (upperArmRef.current) upperArmRef.current.rotation.z = Math.cos(t * 0.06) * 0.05 - 1.2; // Angled down
  });

  return (
    <group ref={turretRef} position={[0, -1.2, 0]}>
      {/* First Joint (Turret to Lower Arm) */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.2, 1.2, 1.8, 32]} />
        <meshStandardMaterial color={DARK_METAL} metalness={0.7} roughness={0.5} />
      </mesh>
      
      {/* Lower Arm Pivot Group */}
      <group ref={lowerArmRef} position={[0, 0, 0]}>
        {/* Lower Arm Body (Orange) */}
        <mesh position={[0, 2.5, 0]}>
          <boxGeometry args={[1.4, 5, 1.2]} />
          <meshStandardMaterial color={ORANGE} metalness={0.3} roughness={0.6} />
        </mesh>

        {/* Middle Joint */}
        <mesh position={[0, 5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1, 1, 1.5, 32]} />
          <meshStandardMaterial color={DARK_METAL} metalness={0.7} roughness={0.5} />
        </mesh>

        {/* Upper Arm Pivot Group */}
        <group ref={upperArmRef} position={[0, 5, 0]}>
          {/* Upper Arm Body (Orange) */}
          <mesh position={[0, 2, 0]}>
            <boxGeometry args={[1, 4, 1]} />
            <meshStandardMaterial color={ORANGE} metalness={0.3} roughness={0.6} />
          </mesh>
          
          {/* Wrist Joint */}
          <mesh position={[0, 4.2, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.8, 0.8, 1.2, 32]} />
            <meshStandardMaterial color={DARK_METAL} metalness={0.7} roughness={0.5} />
          </mesh>
          
          {/* Tool Head / Extruder */}
          <group position={[0, 4.8, 0]}>
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.6, 0.6, 1, 32]} />
              <meshStandardMaterial color={DARK_METAL} metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0, 0.6, 0]}>
              <cylinderGeometry args={[0.2, 0.6, 0.4, 16]} />
              <meshStandardMaterial color={GOLD_HIGHLIGHT} metalness={0.9} roughness={0.2} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

export default function RobotArm3D() {
  return (
    // Lower opacity and blur to push it perfectly into the background
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", opacity: 0.35, filter: "blur(2px)" }}>
      <Canvas camera={{ position: [5, 2, 10], fov: 45 }}>
        {/* Soft lighting with subtle warm gold highlights to match the aesthetic */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-5, 0, 5]} intensity={0.4} color="#FBBF24" />
        
        {/* 
            NOTE: If you have a real external .glb file ready, you can easily mount it instead using:
            
            import { useGLTF } from '@react-three/drei'
            const { scene } = useGLTF('/your_industrial_robot.glb')
            <primitive object={scene} />
        */}

        {/* Positioned on the right side, scaled down, and showing mostly the articulated upper portion */}
        <group position={[8, -3, -4]} rotation={[0, -Math.PI / 5, 0]} scale={0.45}>
          <KukaBase />
          <KukaArmSystem />
        </group>
      </Canvas>
    </div>
  );
}
