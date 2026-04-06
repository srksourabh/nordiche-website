"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PILLAR_IMAGES = [
  { src: "/images/pillar-energy-density.png", alt: "High Energy Density" },
  { src: "/images/pillar-safety.png", alt: "Enhanced Safety" },
  { src: "/images/pillar-lifecycle.png", alt: "Extended Lifecycle" },
  { src: "/images/pillar-bms.png", alt: "Intelligent BMS" },
  { src: "/images/pillar-thermal.png", alt: "Thermal Management" },
  { src: "/images/pillar-sustainability.png", alt: "Sustainability" },
];

/**
 * Animated particle network with connecting lines overlaid on
 * a 3x2 collage of the six engineering pillar images.
 */
export function ParticleNetwork({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 80, y: 60, label: "Al-G", size: 10 },
    { x: 200, y: 40, label: "BMS", size: 8 },
    { x: 320, y: 70, label: "Grid", size: 9 },
    { x: 140, y: 140, label: "EV", size: 9 },
    { x: 260, y: 160, label: "LUC", size: 8 },
    { x: 380, y: 130, label: "IoT", size: 7 },
    { x: 50, y: 170, label: "R&D", size: 7 },
    { x: 420, y: 50, label: "H₂", size: 8 },
  ];

  const edges = [
    [0, 1], [1, 2], [0, 3], [3, 4], [4, 5], [2, 5], [1, 4], [6, 0], [6, 3], [2, 7], [5, 7],
  ];

  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] ${className}`}>
      {/* 3x2 image collage background */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2">
        {PILLAR_IMAGES.map((img) => (
          <div key={img.alt} className="relative overflow-hidden">
            <Image
              alt={img.alt}
              className="h-full w-full object-cover"
              fill
              sizes="33vw"
              src={img.src}
            />
          </div>
        ))}
      </div>

      {/* Dark overlay so the animation remains visible */}
      <div className="absolute inset-0 bg-[color:rgb(10_12_16_/_0.72)]" />

      {/* Animated SVG network on top */}
      <svg viewBox="0 0 460 220" className="relative z-10 h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges with flowing particles */}
        {edges.map(([a, b], i) => (
          <g key={`edge-${i}`}>
            <line
              x1={nodes[a].x} y1={nodes[a].y}
              x2={nodes[b].x} y2={nodes[b].y}
              stroke="rgb(0 212 170 / 0.18)" strokeWidth="1"
            />
            <motion.circle
              r="2.5"
              fill="rgb(0 212 170)" filter="url(#node-glow)"
              animate={{
                cx: [nodes[a].x, nodes[b].x],
                cy: [nodes[a].y, nodes[b].y],
              }}
              transition={{
                duration: 2 + i * 0.3,
                delay: i * 0.4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </g>
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`}>
            <motion.circle
              cx={node.x} cy={node.y} r={node.size + 6}
              fill="none" stroke="rgb(0 212 170 / 0.25)"
              animate={{
                r: [node.size + 4, node.size + 12, node.size + 4],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
            />
            <motion.circle
              cx={node.x} cy={node.y} r={node.size}
              fill="rgb(0 212 170 / 0.2)"
              stroke="rgb(0 212 170 / 0.7)"
              strokeWidth="1.5"
              filter="url(#node-glow)"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
            />
            <text
              x={node.x} y={node.y + 3.5}
              textAnchor="middle"
              fill="rgb(0 212 170)"
              fontSize="7"
              fontFamily="monospace"
              fontWeight="600"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
