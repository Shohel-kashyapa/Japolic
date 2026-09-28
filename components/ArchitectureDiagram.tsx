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
  svgType: "storage" | "compute" | "ai" | "s3" | "cache" | "database" | "ring";
}

// 7 nodes arranged spatially matching the reference screenshot
const nodes: NodeData[] = [
  {
    id: "top-node",
    name: "GPU / Compute Cluster",
    label: "COMPUTE TIER",
    metric: "400 Gbps RoCE",
    sub: "Direct Memory Access to Shared NVMe",
    icon: Cpu,
    xPercent: 50,
    yPercent: 18,
    floatDelay: 0,
    duration: 4.2,
    svgType: "compute",
  },
  {
    id: "far-left-node",
    name: "Shared NVMe Pool",
    label: "SHARED STORAGE",
    metric: "0.08ms latency",
    sub: "Multi-writer POSIX-compliant tier",
    icon: HardDrive,
    xPercent: 20,
    yPercent: 36,
    floatDelay: 0.6,
    duration: 4.8,
    svgType: "storage",
  },
  {
    id: "center-left-node",
    name: "AI / LLM Accelerators",
    label: "AI CORE",
    metric: "12.8 TB/s",
    sub: "High-speed checkpoint ingestion",
    icon: Zap,
    xPercent: 41,
    yPercent: 42,
    floatDelay: 1.2,
    duration: 4.5,
    svgType: "ai",
  },
  {
    id: "right-node",
    name: "S3 Object Bridge",
    label: "S3 FABRIC",
    metric: "Sync Engine",
    sub: "Zero-copy bi-directional replication",
    icon: Cloud,
    xPercent: 78,
    yPercent: 46,
    floatDelay: 0.4,
    duration: 5.0,
    svgType: "s3",
  },
  {
    id: "bottom-left-node",
    name: "Distributed Memory Cache",
    label: "HOT CACHE",
    metric: "Sub-100μs",
    sub: "Distributed coherent cache layer",
    icon: Server,
    xPercent: 35,
    yPercent: 66,
    floatDelay: 0.9,
    duration: 4.3,
    svgType: "cache",
  },
  {
    id: "center-bottom-ring",
    name: "High-Speed Ring Fabric",
    label: "CROSS-BAR MESH",
    metric: "800 Gbps",
    sub: "Low-overhead peer-to-peer ring topology",
    icon: Layers,
    xPercent: 50,
    yPercent: 74,
    floatDelay: 1.4,
    duration: 4.6,
    svgType: "ring",
  },
  {
    id: "bottom-right-node",
    name: "Metadata & Index Store",
    label: "METADATA STORE",
    metric: "5M IOPS",
    sub: "Real-time distributed index",
    icon: Database,
    xPercent: 72,
    yPercent: 72,
    floatDelay: 1.6,
    duration: 4.7,
    svgType: "database",
  },
];

export function ArchitectureDiagram() {
  const [activeNode, setActiveNode] = useState<NodeData | null>(null);

  return (
    <section id="solutions" className="relative pt-8 pb-16 md:pt-12 md:pb-20 overflow-hidden">
      {/* Background glow behind diagram */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[850px] h-[450px] bg-gradient-to-r from-[#6e22e5]/10 via-[#8b5cf6]/15 to-[#3b82f6]/10 blur-[130px] rounded-full dark:opacity-75 opacity-30"
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

        {/* Spatial Architecture Visualization Canvas */}
        <div className="relative w-full max-w-4xl aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[540px] mx-auto select-none">
          {/* Subtle connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20 dark:opacity-25"
            viewBox="0 0 1000 600"
            fill="none"
          >
            <defs>
              <radialGradient id="arch-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#7928ca" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#7928ca" stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="500" cy="340" rx="380" ry="170" stroke="url(#arch-glow)" strokeWidth="1" strokeDasharray="5 5" />
            <path d="M500 130 L220 230" stroke="#7928ca" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
            <path d="M500 130 L420 265" stroke="#7928ca" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
            <path d="M500 130 L760 280" stroke="#7928ca" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
            <path d="M220 230 L360 410" stroke="#7928ca" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
            <path d="M420 265 L500 450" stroke="#7928ca" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
            <path d="M760 280 L710 440" stroke="#7928ca" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 3" />
            <path d="M360 410 L500 450" stroke="#7928ca" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
            <path d="M500 450 L710 440" stroke="#7928ca" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 3" />
          </svg>

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
                      <div className="text-xs font-bold text-zinc-100">{node.name}</div>
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
          <polygon points="52,18 68,26 52,34 36,26" fill="#1b1430" stroke="#c084fc" strokeWidth="1" />
          <circle cx="52" cy="26" r="2.5" fill="#ffffff" />
          <line x1="36" y1="26" x2="22" y2="28" stroke="#a855f7" strokeWidth="1" />
          <line x1="68" y1="26" x2="82" y2="28" stroke="#a855f7" strokeWidth="1" />
          <line x1="52" y1="18" x2="52" y2="12" stroke="#a855f7" strokeWidth="1" />
          <line x1="52" y1="34" x2="52" y2="40" stroke="#a855f7" strokeWidth="1" />
        </g>
      )}

      {type === "storage" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          <polygon points="46,18 70,26 62,30 38,22" fill="#181329" stroke="#9333ea" strokeWidth="0.9" />
          <polygon points="42,24 66,32 58,36 34,28" fill="#181329" stroke="#c084fc" strokeWidth="0.9" />
          <circle cx="41" cy="20" r="1.5" fill="#ffffff" />
          <circle cx="37" cy="26" r="1.5" fill="#67e8f9" />
        </g>
      )}

      {type === "ai" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          <circle cx="52" cy="26" r="3.5" fill="#6025e6" stroke="#ffffff" strokeWidth="1" />
          <circle cx="38" cy="24" r="2" fill="#c084fc" />
          <circle cx="66" cy="24" r="2" fill="#c084fc" />
          <circle cx="44" cy="34" r="2" fill="#c084fc" />
          <circle cx="60" cy="34" r="2" fill="#c084fc" />
          <line x1="52" y1="26" x2="38" y2="24" stroke="#c084fc" strokeWidth="0.8" />
          <line x1="52" y1="26" x2="66" y2="24" stroke="#c084fc" strokeWidth="0.8" />
          <line x1="52" y1="26" x2="44" y2="34" stroke="#c084fc" strokeWidth="0.8" />
          <line x1="52" y1="26" x2="60" y2="34" stroke="#c084fc" strokeWidth="0.8" />
        </g>
      )}

      {type === "s3" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          <ellipse cx="52" cy="23" rx="14" ry="6" fill="#1a142e" stroke="#c084fc" strokeWidth="1" />
          <ellipse cx="52" cy="29" rx="14" ry="6" fill="none" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="52" cy="23" r="2" fill="#ffffff" />
        </g>
      )}

      {type === "cache" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          <ellipse cx="52" cy="26" rx="12" ry="5" fill="#151024" stroke="#9333ea" strokeWidth="1" />
          <circle cx="52" cy="26" r="3" fill="#a855f7" />
          <circle cx="43" cy="26" r="1.5" fill="#38bdf8" />
          <circle cx="61" cy="26" r="1.5" fill="#38bdf8" />
          <circle cx="52" cy="22" r="1.5" fill="#ffffff" />
          <circle cx="52" cy="30" r="1.5" fill="#ffffff" />
        </g>
      )}

      {type === "ring" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          <ellipse cx="52" cy="26" rx="16" ry="7" fill="none" stroke="#a855f7" strokeWidth="1.2" strokeDasharray="4 2" />
          <circle cx="52" cy="26" r="4" fill="#6025e6" stroke="#ffffff" strokeWidth="1" />
          <circle cx="38" cy="26" r="1.5" fill="#ffffff" />
          <circle cx="66" cy="26" r="1.5" fill="#ffffff" />
        </g>
      )}

      {type === "database" && (
        <g opacity={isHovered ? "1" : "0.9"}>
          <polygon points="44,20 52,24 48,27 40,23" fill="#6025e6" />
          <polygon points="56,20 64,24 60,27 52,23" fill="#a855f7" />
          <polygon points="40,25 48,29 44,32 36,28" fill="#38bdf8" />
          <polygon points="52,25 60,29 56,32 48,28" fill="#ffffff" />
        </g>
      )}

      {/* Front Activity LED Indicator */}
      <circle
        cx="52"
        cy="52"
        r={isHovered ? "2.5" : "1.8"}
        fill={isHovered ? "#a855f7" : "#5b21b6"}
        className="transition-all duration-200"
      />
      <circle cx="52" cy="52" r="0.8" fill="#ffffff" />
    </svg>
  );
}
