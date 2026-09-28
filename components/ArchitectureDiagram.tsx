"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Database, HardDrive, Server, Zap, Cloud, Layers } from "lucide-react";

interface NodeData {
  id: string;
  name: string;
  label: string;
  metric: string;
  sub: string;
  icon: typeof Server;
  xPercent: number;
  yPercent: number;
  floatDelay: number;
  duration: number;
  glowColor: string;
  svgType: "storage" | "compute" | "ai" | "s3" | "cache" | "database" | "ring";
}

// 7 nodes matching the reference spatial layout
const nodes: NodeData[] = [
  {
    id: "top-node",
    name: "GPU / Compute Cluster",
    label: "COMPUTE TIER",
    metric: "400 Gbps RoCE",
    sub: "Direct Memory Access to Shared NVMe",
    icon: Cpu,
    xPercent: 36,
    yPercent: 16,
    floatDelay: 0,
    duration: 4.2,
    glowColor: "rgba(239, 68, 68, 0.45)", // Coral/Red glow like reference
    svgType: "compute",
  },
  {
    id: "far-left-node",
    name: "Shared NVMe Pool",
    label: "SHARED STORAGE",
    metric: "0.08ms latency",
    sub: "Multi-writer POSIX-compliant tier",
    icon: HardDrive,
    xPercent: 18,
    yPercent: 44,
    floatDelay: 0.6,
    duration: 4.8,
    glowColor: "rgba(249, 115, 22, 0.45)", // Amber/Orange glow like reference
    svgType: "storage",
  },
  {
    id: "center-left-node",
    name: "AI / LLM Accelerators",
    label: "AI CORE",
    metric: "12.8 TB/s",
    sub: "High-speed checkpoint ingestion",
    icon: Zap,
    xPercent: 48,
    yPercent: 34,
    floatDelay: 1.2,
    duration: 4.5,
    glowColor: "rgba(56, 189, 248, 0.45)", // Cyan/Ice blue glow like reference
    svgType: "ai",
  },
  {
    id: "right-top-node",
    name: "Rocket / Launch Tier",
    label: "HIGH-THROUGHPUT",
    metric: "800 Gbps",
    sub: "Scale-out parallel pipeline",
    icon: Cloud,
    xPercent: 76,
    yPercent: 26,
    floatDelay: 0.4,
    duration: 5.0,
    glowColor: "rgba(168, 85, 247, 0.35)",
    svgType: "s3",
  },
  {
    id: "center-bottom-node",
    name: "Cluster Fabric Hub",
    label: "FABRIC MESH",
    metric: "Sub-100μs",
    sub: "Low-overhead peer-to-peer topology",
    icon: Layers,
    xPercent: 54,
    yPercent: 74,
    floatDelay: 1.4,
    duration: 4.6,
    glowColor: "rgba(217, 70, 239, 0.45)", // Magenta/Purple glow like reference
    svgType: "ring",
  },
  {
    id: "bottom-left-node",
    name: "Distributed Memory Cache",
    label: "HOT CACHE",
    metric: "Sub-100μs",
    sub: "Distributed coherent cache tier",
    icon: Server,
    xPercent: 32,
    yPercent: 70,
    floatDelay: 0.9,
    duration: 4.3,
    glowColor: "rgba(249, 115, 22, 0.35)",
    svgType: "cache",
  },
  {
    id: "bottom-right-node",
    name: "Milestone & Metadata Store",
    label: "METADATA STORE",
    metric: "5M IOPS",
    sub: "Real-time distributed checkpoint index",
    icon: Database,
    xPercent: 84,
    yPercent: 74,
    floatDelay: 1.6,
    duration: 4.7,
    glowColor: "rgba(168, 85, 247, 0.35)",
    svgType: "database",
  },
];

export function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<NodeData | null>(null);

  // SVG dimensions: 1000 x 600
  // Line paths connecting nodes with rounded 90-degree elbows matching user reference image
  const mainSpinePath =
    "M 0,265 L 150,265 Q 180,265 180,240 L 180,130 Q 180,95 215,95 L 330,95 Q 360,95 360,115 L 360,150 Q 360,185 395,185 L 450,185 Q 480,185 480,205 L 480,250 Q 480,270 460,290 L 460,380 Q 460,440 510,440 L 540,440";

  const lowerLoopPath =
    "M 540,440 Q 580,440 600,470 L 600,530 Q 600,560 635,560 L 650,560 Q 680,560 680,530 L 680,360 Q 680,330 710,330 L 760,330 Q 780,330 780,310 L 780,270";

  const cacheBranchPath =
    "M 180,265 L 180,380 Q 180,420 215,420 L 290,420 Q 320,420 320,440 L 320,470";

  const metaBranchPath =
    "M 680,440 L 780,440 Q 820,440 835,460 L 840,490";

  return (
    <section id="solutions" className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[950px] h-[500px] bg-gradient-to-r from-[#6e22e5]/10 via-[#f97316]/10 to-[#8b5cf6]/10 blur-[140px] rounded-full dark:opacity-75 opacity-30"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "100px" }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white"
          >
            System Architecture Diagram
          </motion.h2>
          <p className="mt-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-mono tracking-wider">
            [DISTRIBUTED HIGH-PERFORMANCE DATA PLANE]
          </p>
        </div>

        {/* Spatial Architecture Canvas */}
        <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[580px] mx-auto select-none rounded-2xl overflow-visible">
          {/* SVG Canvas for Floor Grid, Glowing Conduit Lines & Base Glows */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 1000 600"
            fill="none"
          >
            <defs>
              {/* Conduit Glow Filters */}
              <filter id="neon-glow-wide" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur1" />
                <feGaussianBlur stdDeviation="16" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="pipe-glow-medium" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Floor Perspective Grid Pattern */}
              <pattern id="iso-floor-grid" width="40" height="24" patternUnits="userSpaceOnUse">
                <path
                  d="M 0 12 L 20 0 L 40 12 L 20 24 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.6"
                  className="text-black/5 dark:text-white/[0.04]"
                />
              </pattern>

              {/* Glowing Line Gradients */}
              <linearGradient id="coral-amber-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" />
                <stop offset="35%" stopColor="#fb923c" />
                <stop offset="70%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#c084fc" />
              </linearGradient>

              <linearGradient id="purple-violet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>

            {/* Floor Perspective Grid Background */}
            <rect width="1000" height="600" fill="url(#iso-floor-grid)" opacity="0.9" />

            {/* Subtle isometric coordinate guide lines */}
            <g opacity="0.15" className="dark:opacity-20 text-purple-400">
              <line x1="0" y1="100" x2="1000" y2="400" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
              <line x1="0" y1="200" x2="1000" y2="500" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
              <line x1="0" y1="300" x2="1000" y2="600" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
              <line x1="200" y1="0" x2="600" y2="600" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
              <line x1="450" y1="0" x2="850" y2="600" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" />
            </g>

            {/* LAYER 1: Ambient Wide Glow on Floor (under glowing lines) */}
            <g opacity="0.4" className="dark:opacity-55" filter="url(#neon-glow-wide)">
              <path d={mainSpinePath} stroke="#ea580c" strokeWidth="18" fill="none" strokeLinecap="round" />
              <path d={lowerLoopPath} stroke="#f43f5e" strokeWidth="18" fill="none" strokeLinecap="round" />
              <path d={cacheBranchPath} stroke="#f97316" strokeWidth="16" fill="none" strokeLinecap="round" />
              <path d={metaBranchPath} stroke="#a855f7" strokeWidth="16" fill="none" strokeLinecap="round" />
            </g>

            {/* LAYER 2: Medium Luminous Conduit Sheath */}
            <g opacity="0.8" filter="url(#pipe-glow-medium)">
              <path d={mainSpinePath} stroke="url(#coral-amber-grad)" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d={lowerLoopPath} stroke="url(#purple-violet-grad)" strokeWidth="6" fill="none" strokeLinecap="round" />
              <path d={cacheBranchPath} stroke="#f97316" strokeWidth="5.5" fill="none" strokeLinecap="round" />
              <path d={metaBranchPath} stroke="#c084fc" strokeWidth="5.5" fill="none" strokeLinecap="round" />
            </g>

            {/* LAYER 3: Solid Sharp Pipe Body */}
            <g>
              <path d={mainSpinePath} stroke="#fdba74" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d={lowerLoopPath} stroke="#f472b6" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d={cacheBranchPath} stroke="#fdba74" strokeWidth="2.8" fill="none" strokeLinecap="round" />
              <path d={metaBranchPath} stroke="#e9d5ff" strokeWidth="2.8" fill="none" strokeLinecap="round" />
            </g>

            {/* LAYER 4: Brilliant White-Hot Glowing Core Line */}
            <g opacity="0.95">
              <path d={mainSpinePath} stroke="#ffffff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d={lowerLoopPath} stroke="#ffffff" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              <path d={cacheBranchPath} stroke="#ffffff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              <path d={metaBranchPath} stroke="#ffffff" strokeWidth="1.2" fill="none" strokeLinecap="round" />
            </g>

            {/* LAYER 5: Animated Streaming Light Data Packets */}
            <g opacity="0.9">
              <path
                d={mainSpinePath}
                stroke="#ffffff"
                strokeWidth="2.6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="24 160"
                className="animate-data-pulse"
              />
              <path
                d={lowerLoopPath}
                stroke="#ffffff"
                strokeWidth="2.6"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="24 160"
                className="animate-data-pulse-fast"
              />
            </g>

            {/* Elevated Base Pedestals with Localized Ambient Light Pools Under Nodes */}
            {nodes.map((node) => {
              const cx = (node.xPercent / 100) * 1000;
              const cy = (node.yPercent / 100) * 600 + 18;

              return (
                <g key={`base-${node.id}`}>
                  {/* Radial colored light pool on the floor */}
                  <ellipse
                    cx={cx}
                    cy={cy + 8}
                    rx="52"
                    ry="26"
                    fill={node.glowColor}
                    opacity="0.55"
                    filter="url(#neon-glow-wide)"
                  />
                  {/* Translucent glass/acrylic pedestal base plate */}
                  <polygon
                    points={`${cx},${cy - 12} ${cx + 46},${cy + 8} ${cx},${cy + 28} ${cx - 46},${cy + 8}`}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    className="text-black/20 dark:text-white/10"
                  />
                  {/* Subtle glossy bevel rim */}
                  <polygon
                    points={`${cx},${cy - 8} ${cx + 40},${cy + 9} ${cx},${cy + 24} ${cx - 40},${cy + 9}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeDasharray="3 3"
                    className="text-white/30 dark:text-white/20"
                  />
                </g>
              );
            })}
          </svg>

          {/* Floating Callout Badges Matching Reference Screenshot */}
          {/* Callout 1 (Top Center): WE PARTNER WITH YOU TO ENSURE SUCCESS */}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute top-[8%] left-[42%] -translate-x-1/2 z-20 pointer-events-none hidden sm:inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#120f1e]/90 dark:bg-black/90 border border-white/20 text-white shadow-xl backdrop-blur-md"
          >
            <span className="font-heading font-bold text-[10px] sm:text-[11px] tracking-wide text-zinc-100 uppercase">
              WE PARTNER WITH YOU TO ENSURE SUCCESS
            </span>
          </motion.div>

          {/* Callout 2 (Bottom Left): BREAK DOWN SILOS BETWEEN PRODUCT, DESIGN, AND ENGINEERING */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-[16%] left-[22%] -translate-x-1/2 z-20 pointer-events-none hidden sm:inline-flex items-center max-w-[240px] px-3.5 py-2 rounded-2xl bg-[#120f1e]/90 dark:bg-black/90 border border-white/20 text-white shadow-xl backdrop-blur-md"
          >
            <span className="font-heading font-bold text-[9px] sm:text-[10px] tracking-wide text-zinc-100 uppercase leading-snug">
              BREAK DOWN SILOS BETWEEN PRODUCT, DESIGN, AND ENGINEERING
            </span>
          </motion.div>

          {/* Render Isometric Hardware Nodes */}
          {nodes.map((node) => {
            const isHovered = activeNode?.id === node.id;
            return (
              <motion.div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                style={{
                  left: `${node.xPercent}%`,
                  top: `${node.yPercent}%`,
                }}
                animate={{
                  y: ["-5px", "5px", "-5px"],
                }}
                transition={{
                  duration: node.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: node.floatDelay,
                }}
                onMouseEnter={() => setActiveNode(node)}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => setActiveNode(activeNode?.id === node.id ? null : node)}
              >
                <div className="relative group transition-transform duration-300 hover:scale-110">
                  {/* Subtle drop shadow under node */}
                  <div
                    className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-black/40 dark:bg-black/85 blur-md rounded-full pointer-events-none transition-opacity duration-300 ${
                      isHovered ? "opacity-90 scale-125" : "opacity-60"
                    }`}
                  />

                  {/* Isometric Hardware Block SVG */}
                  <div className="relative filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)]">
                    <IsometricNodeGraphic type={node.svgType} isHovered={isHovered} />
                  </div>

                  {/* Active / Hover Tooltip Card */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.92 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.92 }}
                      transition={{ duration: 0.2 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 sm:w-56 p-3 rounded-xl bg-[#120d24]/95 border border-purple-500/30 text-white shadow-2xl backdrop-blur-md pointer-events-none z-30"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-purple-300 mb-1">
                        <span>{node.label}</span>
                        <span className="text-emerald-400 font-bold">{node.metric}</span>
                      </div>
                      <div className="text-xs font-bold text-zinc-100 font-heading">{node.name}</div>
                      <div className="text-[11px] text-zinc-400 mt-0.5 leading-snug">{node.sub}</div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * High-fidelity Isometric 3D Hardware Node SVG Graphic
 */
function IsometricNodeGraphic({
  type,
  isHovered,
}: {
  type: NodeData["svgType"];
  isHovered: boolean;
}) {
  return (
    <svg
      width="104"
      height="72"
      viewBox="0 0 104 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 sm:w-24 md:w-26 h-auto select-none"
    >
      <defs>
        <linearGradient id={`top-face-${type}`} x1="52" y1="2" x2="52" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#252038" />
          <stop offset="50%" stopColor="#151223" />
          <stop offset="100%" stopColor="#0d0b17" />
        </linearGradient>

        <linearGradient id={`left-bevel-${type}`} x1="0" y1="20" x2="52" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1e192c" />
          <stop offset="100%" stopColor="#090710" />
        </linearGradient>

        <linearGradient id={`right-bevel-${type}`} x1="104" y1="20" x2="52" y2="65" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2c263e" />
          <stop offset="100%" stopColor="#0e0c16" />
        </linearGradient>
      </defs>

      {/* 3D Base Drop Shadow */}
      <polygon points="52,68 8,46 52,24 96,46" fill="#040207" opacity="0.9" />

      {/* 3D Left Face */}
      <polygon
        points="8,44 52,66 52,50 8,28"
        fill={`url(#left-bevel-${type})`}
        stroke="#332c47"
        strokeWidth="0.75"
      />

      {/* 3D Right Face */}
      <polygon
        points="52,66 96,44 96,28 52,50"
        fill={`url(#right-bevel-${type})`}
        stroke="#413958"
        strokeWidth="0.75"
      />

      {/* Top Isometric Face */}
      <polygon
        points="52,6 96,28 52,50 8,28"
        fill={`url(#top-face-${type})`}
        stroke={isHovered ? "#9333ea" : "#3c3552"}
        strokeWidth={isHovered ? "1.5" : "1"}
        className="transition-colors duration-300"
      />

      {/* Inner Accent Ring on Top Face */}
      <polygon
        points="52,11 88,28 52,45 16,28"
        fill="none"
        stroke={isHovered ? "#a855f7" : "#282337"}
        strokeWidth="0.8"
        strokeDasharray="4 2"
      />

      {/* Surface Engraved Neon Circuits & Details */}
      {type === "compute" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          <polygon points="52,18 68,26 52,34 36,26" fill="#1b1430" stroke="#f43f5e" strokeWidth="1" />
          <circle cx="52" cy="26" r="2.5" fill="#ffffff" />
          <line x1="36" y1="26" x2="22" y2="28" stroke="#fb7185" strokeWidth="1" />
          <line x1="68" y1="26" x2="82" y2="28" stroke="#fb7185" strokeWidth="1" />
          <line x1="52" y1="18" x2="52" y2="12" stroke="#fb7185" strokeWidth="1" />
          <line x1="52" y1="34" x2="52" y2="40" stroke="#fb7185" strokeWidth="1" />
        </g>
      )}

      {type === "storage" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          {/* Storage Database Cylinder Rings matching user image */}
          <ellipse cx="52" cy="20" rx="14" ry="5.5" fill="#181329" stroke="#fb923c" strokeWidth="1" />
          <ellipse cx="52" cy="26" rx="14" ry="5.5" fill="none" stroke="#fb923c" strokeWidth="1" />
          <ellipse cx="52" cy="32" rx="14" ry="5.5" fill="none" stroke="#fdba74" strokeWidth="1" />
          <circle cx="52" cy="20" r="1.5" fill="#ffffff" />
        </g>
      )}

      {type === "ai" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          {/* Handshake / AI Mesh */}
          <circle cx="52" cy="26" r="3.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1" />
          <circle cx="38" cy="24" r="2" fill="#38bdf8" />
          <circle cx="66" cy="24" r="2" fill="#38bdf8" />
          <circle cx="44" cy="34" r="2" fill="#38bdf8" />
          <circle cx="60" cy="34" r="2" fill="#38bdf8" />
          <line x1="52" y1="26" x2="38" y2="24" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="52" y1="26" x2="66" y2="24" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="52" y1="26" x2="44" y2="34" stroke="#38bdf8" strokeWidth="0.8" />
          <line x1="52" y1="26" x2="60" y2="34" stroke="#38bdf8" strokeWidth="0.8" />
        </g>
      )}

      {type === "s3" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          {/* Rocket / Launch Icon */}
          <path d="M52 14 C56 18 58 24 57 32 L47 32 C46 24 48 18 52 14 Z" fill="#1a142e" stroke="#c084fc" strokeWidth="1" />
          <line x1="47" y1="32" x2="43" y2="38" stroke="#a855f7" strokeWidth="1" />
          <line x1="57" y1="32" x2="61" y2="38" stroke="#a855f7" strokeWidth="1" />
          <line x1="52" y1="32" x2="52" y2="40" stroke="#fb7185" strokeWidth="1" />
          <circle cx="52" cy="24" r="2" fill="#ffffff" />
        </g>
      )}

      {type === "cache" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          <ellipse cx="52" cy="26" rx="12" ry="5" fill="#151024" stroke="#f97316" strokeWidth="1" />
          <circle cx="52" cy="26" r="3" fill="#fb923c" />
          <circle cx="43" cy="26" r="1.5" fill="#fdba74" />
          <circle cx="61" cy="26" r="1.5" fill="#fdba74" />
          <circle cx="52" cy="22" r="1.5" fill="#ffffff" />
          <circle cx="52" cy="30" r="1.5" fill="#ffffff" />
        </g>
      )}

      {type === "ring" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          {/* Star Gear Ring cluster matching user image */}
          <ellipse cx="52" cy="26" rx="16" ry="7" fill="none" stroke="#e879f9" strokeWidth="1.2" strokeDasharray="4 2" />
          <circle cx="52" cy="26" r="4" fill="#a21caf" stroke="#ffffff" strokeWidth="1" />
          <circle cx="38" cy="26" r="1.8" fill="#f0abfc" />
          <circle cx="66" cy="26" r="1.8" fill="#f0abfc" />
          <circle cx="44" cy="22" r="1.5" fill="#f472b6" />
          <circle cx="60" cy="30" r="1.5" fill="#f472b6" />
        </g>
      )}

      {type === "database" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          {/* Milestone Flag on Mountain matching user image */}
          <polygon points="40,36 50,22 60,36" fill="#1b1430" stroke="#c084fc" strokeWidth="1" />
          <polygon points="56,36 64,28 72,36" fill="#1b1430" stroke="#a855f7" strokeWidth="1" />
          <line x1="50" y1="22" x2="50" y2="14" stroke="#ffffff" strokeWidth="1" />
          <polygon points="50,14 62,17 50,20" fill="#f43f5e" />
        </g>
      )}

      {/* Front Activity LED Indicator */}
      <circle
        cx="52"
        cy="52"
        r={isHovered ? "2.5" : "1.8"}
        fill={isHovered ? "#f43f5e" : "#e11d48"}
        className="transition-all duration-200"
      />
      <circle cx="52" cy="52" r="0.8" fill="#ffffff" />
    </svg>
  );
}
