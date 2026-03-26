"use client";

import { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 80;
const RADIUS = 2.6;
const MAX_DISTANCE = 0.42;

function ParticleSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const mouse = useRef(new THREE.Vector2(0, 0));
  const targetRotation = useRef(new THREE.Vector2(0, 0));

  // Golden spiral sphere distribution
  const basePositions = useMemo(() => {
    const pos: THREE.Vector3[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5));

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const y = 1 - (i / (PARTICLE_COUNT - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;

      pos.push(
        new THREE.Vector3(
          Math.cos(theta) * radius * RADIUS,
          y * RADIUS,
          Math.sin(theta) * radius * RADIUS
        )
      );
    }

    return pos;
  }, []);

  const [positions, initialLines] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      pos[i * 3] = basePositions[i].x;
      pos[i * 3 + 1] = basePositions[i].y;
      pos[i * 3 + 2] = basePositions[i].z;
    }

    const lines = new Float32Array(PARTICLE_COUNT * 10 * 3);

    return [pos, lines];
  }, [basePositions]);

  const pointMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#FBBF24",
        size: 0.06,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  const lineGeom = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(initialLines, 3));

    const colors = new Float32Array(PARTICLE_COUNT * 10 * 3);
    geom.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    return geom;
  }, [initialLines]);

  const lineMat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity: 1,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;

      targetRotation.current.x = mouse.current.y * 0.15;
      targetRotation.current.y = mouse.current.x * 0.15;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0008;
      groupRef.current.rotation.x += 0.0004;

      groupRef.current.rotation.x +=
        (targetRotation.current.x - groupRef.current.rotation.x) * 0.03;

      groupRef.current.rotation.y +=
        (targetRotation.current.y - groupRef.current.rotation.y) * 0.03;
    }

    if (pointsRef.current && linesRef.current) {
      const positionsAttr = pointsRef.current.geometry.attributes.position;
      const posArray = positionsAttr.array as Float32Array;

      let lineIndex = 0;

      const lineArray =
        linesRef.current.geometry.attributes.position.array as Float32Array;

      const colorArray =
        linesRef.current.geometry.attributes.color.array as Float32Array;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const idx = i * 3;
        const base = basePositions[i];

        const driftX = Math.sin(t * 0.4 + i) * 0.08;
        const driftY = Math.cos(t * 0.3 + i * 2) * 0.08;
        const driftZ = Math.sin(t * 0.35 + i * 3) * 0.08;

        const tx = base.x + driftX;
        const ty = base.y + driftY;
        const tz = base.z + driftZ;

        posArray[idx] = tx;
        posArray[idx + 1] = ty;
        posArray[idx + 2] = tz;
      }

      positionsAttr.needsUpdate = true;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const ix = posArray[i * 3];
          const iy = posArray[i * 3 + 1];
          const iz = posArray[i * 3 + 2];

          const jx = posArray[j * 3];
          const jy = posArray[j * 3 + 1];
          const jz = posArray[j * 3 + 2];

          const distSq =
            (ix - jx) ** 2 + (iy - jy) ** 2 + (iz - jz) ** 2;

          if (distSq < MAX_DISTANCE * MAX_DISTANCE) {
            if (lineIndex * 2 >= lineArray.length) break;

            lineArray[lineIndex] = ix;
            lineArray[lineIndex + 1] = iy;
            lineArray[lineIndex + 2] = iz;

            lineArray[lineIndex + 3] = jx;
            lineArray[lineIndex + 4] = jy;
            lineArray[lineIndex + 5] = jz;

            const alpha =
              (1 - Math.sqrt(distSq) / MAX_DISTANCE) * 0.7;

            for (let k = 0; k < 2; k++) {
              colorArray[lineIndex + k * 3] = 0.98 * alpha;
              colorArray[lineIndex + k * 3 + 1] = 0.75 * alpha;
              colorArray[lineIndex + k * 3 + 2] = 0.14 * alpha;
            }

            lineIndex += 6;
          }
        }
      }

      linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} material={pointMaterial}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
      </points>

      <lineSegments ref={linesRef} geometry={lineGeom} material={lineMat} />
    </group>
  );
}

export default function HeroParticleSphere() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "40%",
        width: "60%",
        height: "100%",
        zIndex: 0,
        opacity: 0.9,
        pointerEvents: "none",
      }}
    >
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ParticleSphere />
      </Canvas>
    </div>
  );
}