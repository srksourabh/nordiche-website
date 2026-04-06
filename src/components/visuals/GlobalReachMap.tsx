"use client";

import { motion } from "framer-motion";

/**
 * SVG world map showing NES partner locations with animated
 * connection arcs from Bangalore (HQ) to each partner country.
 *
 * Uses a simplified Mercator-like projection.
 * viewBox coordinates are approximate to a 1000×500 world map.
 */

const HQ = { x: 720, y: 270, label: "Bangalore", sub: "HQ" };

const PARTNERS = [
  { x: 720, y: 260, label: "India", sub: "Bangalore" },
  { x: 510, y: 170, label: "Germany", sub: "Berlin" },
  { x: 480, y: 205, label: "Spain", sub: "Madrid" },
  { x: 505, y: 160, label: "Holland", sub: "Amsterdam" },
  { x: 475, y: 150, label: "UK", sub: "London" },
  { x: 220, y: 190, label: "USA", sub: "Las Vegas" },
];

function ArcPath({ from, to, delay }: { from: { x: number; y: number }; to: { x: number; y: number }; delay: number }) {
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - Math.abs(from.x - to.x) * 0.15 - 30;
  const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <g>
      <path d={d} fill="none" stroke="rgb(0 212 170 / 0.15)" strokeWidth="1.5" />
      <motion.circle
        r="3"
        fill="rgb(0 212 170)"
        filter="url(#map-glow)"
        animate={{
          cx: [from.x, midX, to.x],
          cy: [from.y, midY, to.y],
        }}
        transition={{ duration: 3, delay, repeat: Infinity, ease: "easeInOut" }}
      />
    </g>
  );
}

export function GlobalReachMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)]">
      {/* Title bar */}
      <div className="border-b border-[var(--color-nord-slate)] px-6 py-4">
        <h3 className="font-[var(--font-display)] text-2xl font-bold uppercase text-[var(--color-nord-white)]">
          Global Business Network
        </h3>
        <p className="text-sm text-[var(--color-nord-teal)]">Bangalore to the World</p>
      </div>

      <svg viewBox="0 0 1000 500" className="w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="map-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="dot-gradient">
            <stop offset="0%" stopColor="rgb(0 212 170)" />
            <stop offset="100%" stopColor="rgb(0 212 170 / 0)" />
          </radialGradient>
        </defs>

        {/* Dark background */}
        <rect width="1000" height="500" fill="#0a0c10" />

        {/* Simplified continent outlines */}
        {/* North America */}
        <path d="M 80 80 L 120 70 L 180 75 L 250 90 L 290 120 L 300 160 L 280 200 L 260 230 L 240 260 L 200 280 L 180 300 L 160 310 L 150 280 L 130 250 L 100 200 L 80 160 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* Central America */}
        <path d="M 200 280 L 220 290 L 230 310 L 240 330 L 230 340 L 220 335 L 210 320 L 200 300 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* South America */}
        <path d="M 250 330 L 280 320 L 310 340 L 320 370 L 310 400 L 290 430 L 270 450 L 260 440 L 250 410 L 240 380 L 235 350 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* Europe */}
        <path d="M 440 80 L 470 70 L 510 75 L 540 80 L 550 100 L 540 130 L 520 150 L 510 170 L 490 180 L 470 190 L 450 185 L 440 170 L 435 140 L 430 110 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* UK/Ireland */}
        <path d="M 455 120 L 465 110 L 475 115 L 478 130 L 470 140 L 460 138 L 455 130 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* Africa */}
        <path d="M 470 210 L 510 200 L 550 210 L 580 230 L 590 270 L 580 320 L 560 370 L 540 400 L 520 410 L 500 400 L 490 370 L 480 330 L 470 290 L 460 250 L 465 220 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* Middle East */}
        <path d="M 580 200 L 620 190 L 650 200 L 660 220 L 640 240 L 610 245 L 590 230 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* India */}
        <path d="M 680 200 L 720 190 L 750 210 L 740 250 L 720 280 L 700 290 L 690 270 L 680 240 L 675 220 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* Southeast Asia */}
        <path d="M 750 220 L 800 210 L 830 230 L 840 260 L 820 280 L 790 270 L 760 250 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* China/East Asia */}
        <path d="M 740 120 L 800 100 L 860 110 L 880 140 L 870 170 L 840 190 L 800 200 L 760 195 L 740 180 L 730 150 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* Russia */}
        <path d="M 540 50 L 600 40 L 700 35 L 800 40 L 880 50 L 900 70 L 880 90 L 800 95 L 730 100 L 650 90 L 580 80 L 550 70 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* Australia */}
        <path d="M 820 370 L 870 360 L 910 370 L 920 400 L 900 420 L 860 430 L 830 420 L 815 400 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />
        {/* Japan */}
        <path d="M 870 140 L 880 130 L 890 140 L 885 160 L 875 155 Z" fill="#1c2333" stroke="#2a3549" strokeWidth="0.8" />

        {/* Grid lines */}
        {[100, 200, 300, 400].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="1000" y2={y} stroke="rgb(0 212 170 / 0.04)" strokeWidth="0.5" />
        ))}
        {[200, 400, 600, 800].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="500" stroke="rgb(0 212 170 / 0.04)" strokeWidth="0.5" />
        ))}

        {/* Connection arcs from Bangalore to each partner */}
        {PARTNERS.filter((p) => p.label !== "India").map((partner, i) => (
          <ArcPath key={partner.label} from={HQ} to={partner} delay={i * 0.6} />
        ))}

        {/* Partner location dots */}
        {PARTNERS.map((partner, i) => (
          <g key={partner.label}>
            {/* Pulse ring */}
            <motion.circle
              cx={partner.x} cy={partner.y}
              fill="none" stroke="rgb(0 212 170 / 0.3)"
              animate={{ r: [6, 16, 6], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }}
            />
            {/* Core dot */}
            <circle cx={partner.x} cy={partner.y} r="5" fill="rgb(0 212 170)" filter="url(#map-glow)" />
            {/* Glow */}
            <circle cx={partner.x} cy={partner.y} r="12" fill="url(#dot-gradient)" opacity="0.4" />
            {/* Label */}
            <text
              x={partner.x}
              y={partner.y - 14}
              textAnchor="middle"
              fill="rgb(0 212 170)"
              fontSize="12"
              fontFamily="var(--font-display)"
              fontWeight="700"
            >
              {partner.label}
            </text>
            <text
              x={partner.x}
              y={partner.y + 22}
              textAnchor="middle"
              fill="rgb(132 148 176)"
              fontSize="9"
              fontFamily="sans-serif"
            >
              {partner.sub}
            </text>
          </g>
        ))}

        {/* HQ special marker */}
        <motion.circle
          cx={HQ.x} cy={HQ.y} r="8"
          fill="none" stroke="rgb(0 212 170)" strokeWidth="2"
          animate={{ r: [8, 20, 8], opacity: [0.8, 0, 0.8] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
      </svg>
    </div>
  );
}
