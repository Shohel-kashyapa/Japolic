"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export type ModelType = "checkpoint" | "storage" | "pipeline";

interface Card3DCanvasProps {
  type: ModelType;
  isVibrant?: boolean;
}

export function Card3DCanvas({ type, isVibrant = false }: Card3DCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 280;
    let height = container.clientHeight || 220;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.outline = "none";

    // Root model group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Keep track of disposable resources
    const disposables: (THREE.BufferGeometry | THREE.Material)[] = [];

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, isVibrant ? 1.5 : 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(
      isVibrant ? 0xffffff : 0x38bdf8,
      isVibrant ? 2.8 : 2.2
    );
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(
      isVibrant ? 0xc084fc : 0xa855f7,
      isVibrant ? 2.2 : 2.0
    );
    rimLight.position.set(-4, -3, -2);
    scene.add(rimLight);

    const centerLight = new THREE.PointLight(
      isVibrant ? 0x67e8f9 : 0xc084fc,
      isVibrant ? 3.8 : 2.8,
      6
    );
    centerLight.position.set(0, 0, 0);
    scene.add(centerLight);

    let updateModel: (elapsed: number) => void = () => {};

    if (type === "checkpoint") {
      // ========================================================
      // MODEL 1: AI / LLM Neural Weight Lattice & Checkpoint Core
      // ========================================================
      const coreGroup = new THREE.Group();
      rootGroup.add(coreGroup);

      // 1. Faceted Icosahedron Core
      const coreGeo = new THREE.IcosahedronGeometry(1.05, 1);
      const coreMat = new THREE.MeshPhysicalMaterial({
        color: 0x7e22ce,
        emissive: 0x3b0764,
        emissiveIntensity: 0.7,
        roughness: 0.15,
        metalness: 0.9,
        clearcoat: 0.5,
        transparent: true,
        opacity: 0.94,
      });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreGroup.add(coreMesh);
      disposables.push(coreGeo, coreMat);

      // 2. Holographic Outer Matrix Cage
      const cageGeo = new THREE.IcosahedronGeometry(1.18, 1);
      const cageMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const cageMesh = new THREE.Mesh(cageGeo, cageMat);
      coreGroup.add(cageMesh);
      disposables.push(cageGeo, cageMat);

      // 3. Inner Glowing Seed
      const seedGeo = new THREE.SphereGeometry(0.42, 24, 24);
      const seedMat = new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: 0.85,
      });
      const seedMesh = new THREE.Mesh(seedGeo, seedMat);
      coreGroup.add(seedMesh);
      disposables.push(seedGeo, seedMat);

      // 4. Orbital Ring 1
      const ring1Geo = new THREE.TorusGeometry(1.68, 0.018, 16, 100);
      const ring1Mat = new THREE.MeshBasicMaterial({
        color: 0xc084fc,
        transparent: true,
        opacity: 0.65,
      });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = Math.PI * 0.35;
      ring1.rotation.y = Math.PI * 0.15;
      rootGroup.add(ring1);
      disposables.push(ring1Geo, ring1Mat);

      // 5. Orbital Ring 2
      const ring2Geo = new THREE.TorusGeometry(1.95, 0.018, 16, 100);
      const ring2Mat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.55,
      });
      const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
      ring2.rotation.x = -Math.PI * 0.25;
      ring2.rotation.z = Math.PI * 0.4;
      rootGroup.add(ring2);
      disposables.push(ring2Geo, ring2Mat);

      // 6. Orbiting Checkpoint Token Nodes
      const tokenCount = 6;
      const tokens: THREE.Mesh[] = [];
      const tokenGeo = new THREE.SphereGeometry(0.08, 16, 16);
      const tokenMat = new THREE.MeshBasicMaterial({
        color: 0x00ffff,
      });
      disposables.push(tokenGeo, tokenMat);

      for (let i = 0; i < tokenCount; i++) {
        const token = new THREE.Mesh(tokenGeo, tokenMat);
        rootGroup.add(token);
        tokens.push(token);
      }

      // 7. Ambient Floating Neural Particle Swarm
      const particleCount = 75;
      const particlePositions = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const r = 1.35 + Math.random() * 1.1;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        particlePositions[i * 3 + 2] = r * Math.cos(phi);
      }
      const particleGeo = new THREE.BufferGeometry();
      particleGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(particlePositions, 3)
      );
      const particleMat = new THREE.PointsMaterial({
        color: 0xa855f7,
        size: 0.045,
        transparent: true,
        opacity: 0.75,
      });
      const particlePoints = new THREE.Points(particleGeo, particleMat);
      rootGroup.add(particlePoints);
      disposables.push(particleGeo, particleMat);

      updateModel = (elapsed) => {
        coreGroup.rotation.y = elapsed * 0.4;
        coreGroup.rotation.x = elapsed * 0.25;
        cageMesh.rotation.y = -elapsed * 0.3;
        cageMesh.rotation.z = elapsed * 0.2;

        const pulse = 1 + Math.sin(elapsed * 2.5) * 0.05;
        coreMesh.scale.set(pulse, pulse, pulse);
        const seedPulse = 1 + Math.sin(elapsed * 4.0) * 0.15;
        seedMesh.scale.set(seedPulse, seedPulse, seedPulse);

        ring1.rotation.z = elapsed * 0.5;
        ring2.rotation.y = -elapsed * 0.4;

        tokens.forEach((t, idx) => {
          const angle = elapsed * 0.9 + (idx * Math.PI * 2) / tokenCount;
          const radius = idx % 2 === 0 ? 1.68 : 1.95;
          const targetRing = idx % 2 === 0 ? ring1 : ring2;

          const localPos = new THREE.Vector3(
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            0
          );
          localPos.applyEuler(targetRing.rotation);
          t.position.copy(localPos);
        });

        particlePoints.rotation.y = elapsed * 0.1;
      };
    } else if (type === "storage") {
      // ========================================================
      // MODEL 2: Multi-Tier Shared NVMe Disk Stack Array
      // ========================================================
      const stackGroup = new THREE.Group();
      rootGroup.add(stackGroup);
      stackGroup.rotation.x = 0.44; // Forward isometric view

      const platterLevels = [-0.62, 0.0, 0.62];
      const platters: THREE.Group[] = [];

      platterLevels.forEach((yPos, pIdx) => {
        const platterSubGroup = new THREE.Group();
        platterSubGroup.position.y = yPos;
        stackGroup.add(platterSubGroup);
        platters.push(platterSubGroup);

        // Main metallic disc
        const discGeo = new THREE.CylinderGeometry(1.5, 1.5, 0.08, 48);
        const discMat = new THREE.MeshPhysicalMaterial({
          color: 0xede9fe,
          emissive: 0x4c1d95,
          emissiveIntensity: 0.35,
          metalness: 0.96,
          roughness: 0.12,
          clearcoat: 0.8,
        });
        const disc = new THREE.Mesh(discGeo, discMat);
        platterSubGroup.add(disc);
        disposables.push(discGeo, discMat);

        // Neon outer rim
        const outerRimGeo = new THREE.TorusGeometry(1.52, 0.022, 16, 64);
        const outerRimMat = new THREE.MeshBasicMaterial({
          color: pIdx === 1 ? 0x67e8f9 : 0xffffff,
          transparent: true,
          opacity: 0.9,
        });
        const outerRim = new THREE.Mesh(outerRimGeo, outerRimMat);
        outerRim.rotation.x = Math.PI / 2;
        platterSubGroup.add(outerRim);
        disposables.push(outerRimGeo, outerRimMat);

        // Concentric optical data track ring
        const trackGeo = new THREE.RingGeometry(0.85, 0.92, 48);
        const trackMat = new THREE.MeshBasicMaterial({
          color: 0x38bdf8,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8,
        });
        const track = new THREE.Mesh(trackGeo, trackMat);
        track.rotation.x = Math.PI / 2;
        track.position.y = 0.045;
        platterSubGroup.add(track);
        disposables.push(trackGeo, trackMat);

        // Inner glowing hub ring
        const innerRingGeo = new THREE.RingGeometry(0.42, 0.48, 36);
        const innerRingMat = new THREE.MeshBasicMaterial({
          color: 0x00f5ff,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.7,
        });
        const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
        innerRing.rotation.x = Math.PI / 2;
        innerRing.position.y = 0.045;
        platterSubGroup.add(innerRing);
        disposables.push(innerRingGeo, innerRingMat);
      });

      // Central Optical Spindle Column
      const spindleGeo = new THREE.CylinderGeometry(0.34, 0.34, 1.85, 32);
      const spindleMat = new THREE.MeshPhysicalMaterial({
        color: 0x00f5ff,
        emissive: 0x0284c7,
        emissiveIntensity: 0.85,
        roughness: 0.1,
        metalness: 0.7,
        transparent: true,
        opacity: 0.92,
      });
      const spindle = new THREE.Mesh(spindleGeo, spindleMat);
      stackGroup.add(spindle);
      disposables.push(spindleGeo, spindleMat);

      // Glowing top cap
      const capGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.08, 32);
      const capMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.1,
      });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.y = 0.96;
      stackGroup.add(cap);
      disposables.push(capGeo, capMat);

      // Orbiting High-Speed Data Packets (3 mini cubes)
      const cubesGroup = new THREE.Group();
      stackGroup.add(cubesGroup);
      const cubeCount = 4;
      const cubes: THREE.Mesh[] = [];
      const miniCubeGeo = new THREE.BoxGeometry(0.12, 0.12, 0.12);
      const miniCubeMat = new THREE.MeshPhysicalMaterial({
        color: 0x38bdf8,
        emissive: 0x00f5ff,
        emissiveIntensity: 0.9,
      });
      disposables.push(miniCubeGeo, miniCubeMat);

      for (let i = 0; i < cubeCount; i++) {
        const miniCube = new THREE.Mesh(miniCubeGeo, miniCubeMat);
        cubesGroup.add(miniCube);
        cubes.push(miniCube);
      }

      // Vertical Laser Data Stream Particles
      const laserCount = 40;
      const laserPositions = new Float32Array(laserCount * 3);
      for (let i = 0; i < laserCount; i++) {
        laserPositions[i * 3] = (Math.random() - 0.5) * 0.4;
        laserPositions[i * 3 + 1] = (Math.random() - 0.5) * 1.8;
        laserPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
      }
      const laserGeo = new THREE.BufferGeometry();
      laserGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(laserPositions, 3)
      );
      const laserMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.065,
        transparent: true,
        opacity: 0.95,
      });
      const laserParticles = new THREE.Points(laserGeo, laserMat);
      stackGroup.add(laserParticles);
      disposables.push(laserGeo, laserMat);

      // Actuator Read Head Arms
      const armGeo = new THREE.BoxGeometry(0.72, 0.04, 0.12);
      const armMat = new THREE.MeshStandardMaterial({
        color: 0x0284c7,
        metalness: 0.9,
        roughness: 0.2,
      });
      disposables.push(armGeo, armMat);

      const arm1 = new THREE.Mesh(armGeo, armMat);
      arm1.position.set(1.15, 0.12, 0.5);
      arm1.rotation.y = -0.4;
      stackGroup.add(arm1);

      const arm2 = new THREE.Mesh(armGeo, armMat);
      arm2.position.set(-1.15, -0.5, -0.4);
      arm2.rotation.y = 2.7;
      stackGroup.add(arm2);

      updateModel = (elapsed) => {
        platters[0].rotation.y = elapsed * 0.9;
        platters[1].rotation.y = -elapsed * 1.1;
        platters[2].rotation.y = elapsed * 0.75;

        const sPulse = 1 + Math.sin(elapsed * 5) * 0.06;
        spindle.scale.set(sPulse, 1, sPulse);

        // Orbiting data blocks
        cubes.forEach((c, idx) => {
          const angle = elapsed * 1.4 + (idx * Math.PI * 2) / cubeCount;
          const r = 1.78;
          c.position.set(
            Math.cos(angle) * r,
            Math.sin(angle * 2) * 0.25,
            Math.sin(angle) * r
          );
          c.rotation.x = elapsed * 2;
          c.rotation.y = elapsed * 2;
        });

        // Laser data flow
        const pos = laserGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < laserCount; i++) {
          pos[i * 3 + 1] += 0.028;
          if (pos[i * 3 + 1] > 0.9) {
            pos[i * 3 + 1] = -0.9;
          }
        }
        laserGeo.attributes.position.needsUpdate = true;

        arm1.rotation.y = -0.4 + Math.sin(elapsed * 3) * 0.12;
        arm2.rotation.y = 2.7 + Math.cos(elapsed * 2.5) * 0.14;
      };
    } else {
      // ========================================================
      // MODEL 3: Unified S3 & POSIX Pipeline Quantum Torus Knot
      // ========================================================
      const knotGroup = new THREE.Group();
      rootGroup.add(knotGroup);

      // 1. Sleek Torus Knot Solid Mesh
      const knotGeo = new THREE.TorusKnotGeometry(1.08, 0.28, 120, 24, 2, 3);
      const knotMat = new THREE.MeshPhysicalMaterial({
        color: 0x6d28d9,
        emissive: 0x3b0764,
        emissiveIntensity: 0.65,
        roughness: 0.15,
        metalness: 0.9,
        clearcoat: 0.7,
        transparent: true,
        opacity: 0.95,
      });
      const knotMesh = new THREE.Mesh(knotGeo, knotMat);
      knotGroup.add(knotMesh);
      disposables.push(knotGeo, knotMat);

      // 2. Wireframe Overlay tightly hugging the knot
      const wireGeo = new THREE.TorusKnotGeometry(1.09, 0.283, 80, 16, 2, 3);
      const wireMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.35,
      });
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      knotGroup.add(wireMesh);
      disposables.push(wireGeo, wireMat);

      // 3. Ambient Equatorial Horizon Ring
      const horizonGeo = new THREE.TorusGeometry(1.85, 0.015, 16, 80);
      const horizonMat = new THREE.MeshBasicMaterial({
        color: 0xc084fc,
        transparent: true,
        opacity: 0.55,
      });
      const horizonMesh = new THREE.Mesh(horizonGeo, horizonMat);
      horizonMesh.rotation.x = Math.PI / 2;
      rootGroup.add(horizonMesh);
      disposables.push(horizonGeo, horizonMat);

      // 4. Ingestion Stream Particle Cloud
      const pCount = 85;
      const pPos = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount; i++) {
        const u = Math.random() * Math.PI * 2;
        const r = 1.35 + (Math.random() - 0.5) * 0.5;
        pPos[i * 3] = r * Math.cos(u);
        pPos[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
        pPos[i * 3 + 2] = r * Math.sin(u);
      }
      const streamGeo = new THREE.BufferGeometry();
      streamGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(pPos, 3)
      );
      const streamMat = new THREE.PointsMaterial({
        color: 0x00f5ff,
        size: 0.05,
        transparent: true,
        opacity: 0.8,
      });
      const streamPoints = new THREE.Points(streamGeo, streamMat);
      rootGroup.add(streamPoints);
      disposables.push(streamGeo, streamMat);

      updateModel = (elapsed) => {
        knotGroup.rotation.x = elapsed * 0.35;
        knotGroup.rotation.y = elapsed * 0.5;
        knotGroup.rotation.z = elapsed * 0.15;

        wireMesh.rotation.x = elapsed * 0.35;
        wireMesh.rotation.y = elapsed * 0.5;
        wireMesh.rotation.z = elapsed * 0.15;

        horizonMesh.rotation.z = elapsed * 0.2;
        streamPoints.rotation.y = -elapsed * 0.45;
      };
    }

    // --- Visibility Check & Animation Loop ---
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    let animationFrameId: number;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const elapsed = (performance.now() - startTime) * 0.001;

      // Smooth mouse interpolation (spring lerp)
      const mouse = mousePosRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Base floating sine wave
      const floatY = Math.sin(elapsed * 1.8) * 0.08;
      rootGroup.position.y = floatY;

      // Cursor parallax tilt
      rootGroup.rotation.y = mouse.x * 0.5;
      rootGroup.rotation.x = -mouse.y * 0.35;

      // Run specific model animation
      updateModel(elapsed);

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handling ---
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 280;
      height = container.clientHeight || 220;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      resizeObserver.disconnect();

      disposables.forEach((item) => item.dispose());
      renderer.dispose();

      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
    };
  }, [type, isVibrant]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mousePosRef.current.targetX = x;
    mousePosRef.current.targetY = y;
  };

  const handlePointerLeave = () => {
    mousePosRef.current.targetX = 0;
    mousePosRef.current.targetY = 0;
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={handlePointerLeave}
      className="w-full h-full min-h-[200px] flex items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
      style={{ touchAction: "none" }}
    >
      {/* Subtle radial ambient reflection under model */}
      <div
        className={`pointer-events-none absolute w-[160px] h-[160px] rounded-full blur-[50px] transition-opacity duration-300 ${
          isHovered ? "opacity-90 scale-110" : "opacity-60 scale-100"
        } ${
          isVibrant
            ? "bg-cyan-400/25"
            : "bg-purple-500/20 dark:bg-purple-400/25"
        }`}
      />
    </div>
  );
}
