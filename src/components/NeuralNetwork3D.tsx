"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 40;
const LAYER_COUNT = 4;
const NODES_PER_LAYER = NODE_COUNT / LAYER_COUNT;

function generateNetwork() {
  const nodes: THREE.Vector3[] = [];
  const lines: THREE.Vector3[] = [];

  const spreadX = 5;
  const spreadY = 3.5;
  const spreadZ = 2.5;

  // Generate layered nodes spreading horizontally and vertically
  for (let i = 0; i < LAYER_COUNT; i++) {
    for (let j = 0; j < NODES_PER_LAYER; j++) {
      nodes.push(new THREE.Vector3(
        (i - (LAYER_COUNT / 2)) * (spreadX / LAYER_COUNT) * 1.5 + (Math.random() - 0.5), 
        (Math.random() - 0.5) * spreadY,
        (Math.random() - 0.5) * spreadZ
      ));
    }
  }

  // Connect lines primarily between adjacent layers to simulate neural pathways
  for (let i = 0; i < LAYER_COUNT - 1; i++) {
    const layerAStart = i * NODES_PER_LAYER;
    const layerBStart = (i + 1) * NODES_PER_LAYER;
    
    for (let a = 0; a < NODES_PER_LAYER; a++) {
      for (let b = 0; b < NODES_PER_LAYER; b++) {
        // Only connect a small percentage of nodes to avoid a blinding mess (probability 0.25)
        if (Math.random() > 0.75) {
          lines.push(nodes[layerAStart + a]);
          lines.push(nodes[layerBStart + b]);
        }
      }
    }
  }
  
  return { nodes, lines };
}

function Network() {
  const groupRef = useRef<THREE.Group>(null);
  // Memoize geometry so it's calculated exactly once and never impacts performance
  const { nodes, lines } = useMemo(() => generateNetwork(), []);
  
  const lineGeometry = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(lines);
  }, [lines]);

  const materials = useMemo(() => {
    return {
      node: new THREE.MeshStandardMaterial({
        color: "#FBBF24", // Warm amber/gold theme
        emissive: "#F59E0B",
        emissiveIntensity: 0.6,
        roughness: 0.2,
      }),
      line: new THREE.LineBasicMaterial({
        color: "#B45309", 
        transparent: true,
        opacity: 0.2,
      })
    };
  }, []);

  useFrame((state: any) => {
    if (groupRef.current) {
      const t = state.clock.getElapsedTime();
      // Extremely slow rotation mimicking an artificial brain exploring data
      groupRef.current.rotation.y = t * 0.03; 
      groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.05; 
      groupRef.current.position.y = Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* High-performance batch rendered thin lines */}
      <lineSegments geometry={lineGeometry} material={materials.line} />
      
      {/* Individually instanced glowing spheres for network nodes */}
      {nodes.map((pos, idx) => (
        <mesh key={idx} position={pos} material={materials.node}>
          <sphereGeometry args={[0.08, 16, 16]} />
        </mesh>
      ))}
    </group>
  );
}

export default function NeuralNetwork3D() {
  return (
    // Opacity dropped and pointer events ignored so the user can easily click into the inputs!
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none", opacity: 0.4 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Soft immersive ambient lighting */}
        <ambientLight intensity={0.4} />
        {/* Warm highlighting pulses aimed closely at the neural net */}
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#FBBF24" />
        <pointLight position={[-5, -5, -5]} intensity={0.4} color="#EA580C" />
        <Network />
      </Canvas>
    </div>
  );
}
