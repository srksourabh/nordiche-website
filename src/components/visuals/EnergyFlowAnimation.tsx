"use client";

import { motion } from "framer-motion";

/**
 * Animated SVG showing electricity flowing through a battery circuit.
 * Particles travel along paths with glowing teal trails.
 */
export function EnergyFlowAnimation({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)] ${className}`}>
      <svg viewBox="0 0 600 300" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(0 212 170 / 0)" />
            <stop offset="50%" stopColor="rgb(0 212 170 / 0.9)" />
            <stop offset="100%" stopColor="rgb(0 212 170 / 0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-strong">
            <feGaussianBlur stdDeviation="6" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background grid */}
        <pattern id="grid-pattern" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgb(0 212 170 / 0.06)" strokeWidth="0.5" />
        </pattern>
        <rect width="600" height="300" fill="url(#grid-pattern)" />

        {/* Circuit paths */}
        <path d="M 80 150 L 200 150" stroke="rgb(42 53 73)" strokeWidth="2" fill="none" />
        <path d="M 200 150 L 300 80 L 400 150" stroke="rgb(42 53 73)" strokeWidth="2" fill="none" />
        <path d="M 200 150 L 300 220 L 400 150" stroke="rgb(42 53 73)" strokeWidth="2" fill="none" />
        <path d="M 400 150 L 520 150" stroke="rgb(42 53 73)" strokeWidth="2" fill="none" />

        {/* Battery icon (left) */}
        <rect x="40" y="120" width="40" height="60" rx="4" fill="none" stroke="rgb(0 212 170 / 0.5)" strokeWidth="2" />
        <rect x="55" y="112" width="10" height="8" rx="2" fill="rgb(0 212 170 / 0.5)" />
        {/* Battery fill animation */}
        <motion.rect
          x="44" y="140" width="32" rx="2"
          fill="rgb(0 212 170 / 0.3)"
          animate={{ height: [0, 36, 36, 0], y: [176, 140, 140, 176] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Load icon (right) */}
        <circle cx="540" cy="150" r="24" fill="none" stroke="rgb(245 166 35 / 0.5)" strokeWidth="2" />
        <motion.circle
          cx="540" cy="150" r="24"
          fill="none" stroke="rgb(245 166 35 / 0.8)" strokeWidth="2"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Lightning bolt in load */}
        <path d="M 536 140 L 542 148 L 538 148 L 544 160 L 538 152 L 542 152 Z" fill="rgb(245 166 35 / 0.8)" />

        {/* Flowing particles - top path */}
        {[0, 0.8, 1.6].map((delay, i) => (
          <motion.circle
            key={`top-${i}`}
            r="4" fill="rgb(0 212 170)" filter="url(#glow)"
            animate={{
              cx: [80, 200, 300, 400, 520],
              cy: [150, 150, 80, 150, 150],
            }}
            transition={{ duration: 3, delay, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Flowing particles - bottom path */}
        {[0.4, 1.2, 2.0].map((delay, i) => (
          <motion.circle
            key={`bottom-${i}`}
            r="3" fill="rgb(0 212 170 / 0.7)" filter="url(#glow)"
            animate={{
              cx: [80, 200, 300, 400, 520],
              cy: [150, 150, 220, 150, 150],
            }}
            transition={{ duration: 3.5, delay, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* BMS node (center) */}
        <motion.rect
          x="275" y="135" width="50" height="30" rx="6"
          fill="rgb(0 212 170 / 0.1)" stroke="rgb(0 212 170 / 0.4)" strokeWidth="1.5"
          animate={{ stroke: ["rgb(0 212 170 / 0.4)", "rgb(0 212 170 / 0.8)", "rgb(0 212 170 / 0.4)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <text x="300" y="155" textAnchor="middle" fill="rgb(0 212 170)" fontSize="9" fontFamily="monospace">BMS</text>

        {/* Labels */}
        <text x="60" y="105" textAnchor="middle" fill="rgb(132 148 176)" fontSize="10" fontFamily="sans-serif">CELL ARRAY</text>
        <text x="540" y="105" textAnchor="middle" fill="rgb(132 148 176)" fontSize="10" fontFamily="sans-serif">LOAD</text>
        <text x="300" y="50" textAnchor="middle" fill="rgb(0 212 170 / 0.6)" fontSize="10" fontFamily="monospace">48 parameters monitored</text>
        <text x="300" y="270" textAnchor="middle" fill="rgb(0 212 170 / 0.6)" fontSize="10" fontFamily="monospace">CAN 2.0B / Modbus / Cloud</text>
      </svg>
    </div>
  );
}
