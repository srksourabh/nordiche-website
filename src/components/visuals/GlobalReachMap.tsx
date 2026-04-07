"use client";

import { motion } from "framer-motion";

/**
 * Dot-matrix world map using a 120×60 equirectangular grid.
 * Each cell = 3° longitude × 3° latitude.
 * Land cells = "1", ocean cells = "0".
 *
 * Partner coordinates use equirectangular projection:
 *   px = (lon + 180) / 360 * mapWidth
 *   py = (90 - lat) / 180 * mapHeight
 */

// ---------------------------------------------------------------------------
// 120×60 world land mask (3°/cell equirectangular, row 0 = 90°N)
// Generated from a simplified land polygon dataset.
// Each string is one row of 120 characters.
// ---------------------------------------------------------------------------
const MAP_ROWS: string[] = [
  // Row 0 — 90°N (Arctic)
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // Row 1 — 87°N
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // Row 2 — 84°N
  "000000000000011000000000000000000000000000000000000000000001111100000000000000000000000000000000000000000000000000000000",
  // Row 3 — 81°N
  "000000000000111100000000000000000000000000000000001111111111111110000000000000000000000000000000000000000000000000000000",
  // Row 4 — 78°N (Greenland, Svalbard, N Canada)
  "000000011111111100000000000000000011111000000000011111111111111110000000000000000000000000000000000000000000000000000000",
  // Row 5 — 75°N
  "000001111111111110000000000000001111111100000000111111111111111110000000000000000000000000000000000000000000000000000000",
  // Row 6 — 72°N
  "000011111111111111000000000000011111111110000011111111111111111111000000000000000000000000000000000000000000000000000000",
  // Row 7 — 69°N (Greenland, N Canada, N Russia)
  "000111111111111111100000000000111111111110000111111111111111111111000001111111111111111111000000000000000000000000000000",
  // Row 8 — 66°N
  "000111111111111111100000000011111111111111011111111111111111111111100111111111111111111111111000000000000000000000000000",
  // Row 9 — 63°N (Alaska, Canada, Scandinavia, Russia)
  "011111111111111111100000000111111111111111111111111111111111111111111111111111111111111111111110000000000000000000000000",
  // Row 10 — 60°N
  "011111111111111111000000001111111111111111111111111111111111111111111111111111111111111111111111100000000000000000000000",
  // Row 11 — 57°N
  "011111111111111110000000011111111111111111111111111111111111111111111111111111111111111111111111100000000000000000000000",
  // Row 12 — 54°N (UK, N Europe, Russia, Canada)
  "001111111111111100000000111111111111111111111111111111111111111111111111111111111111111111111110000000000000000000000000",
  // Row 13 — 51°N (UK, C Europe, Russia)
  "001111111111111000000001111110111111111111111111111111111111111111111111111111111111111111111110000000000000000000000000",
  // Row 14 — 48°N (France, C Europe, Russia, Canada/USA border)
  "001111111111100000000011111001111111111111111111111111111111111111111111111111111111111111111100000000000000000000000000",
  // Row 15 — 45°N (N USA, S Europe, Russia/Mongolia, Japan)
  "001111111111100000000111110001111111111111111111111111111111111111111111111111111111111111111000000000000001100000000000",
  // Row 16 — 42°N
  "001111111111110000011111100001111111111111111111111111111111111111111111111111111111111111100000000000000011100000000000",
  // Row 17 — 39°N (USA, Spain, Turkey, China, Japan/Korea)
  "001111111111111001111111000001111111111111111111111111111111111111111111111111111111111110000000000000001111100000000000",
  // Row 18 — 36°N (USA, Mediterranean, Middle East, China)
  "001111111111111111111110000001111101111111111101111111111111111111111111111111111111110000000000000000111111000000000000",
  // Row 19 — 33°N
  "000111111111111111111100000001111001111111111001111111111111111111111111111111111111100000000000000001111110000000000000",
  // Row 20 — 30°N (Mexico, N Africa, Middle East, India, China)
  "000111111111111111111000000000111001111111110001011111111111111111111111111111111111000000000000000011111100000000000000",
  // Row 21 — 27°N
  "000011111111111111110000000000110001111111100001011111111111111111111111111111111100000000000000000111111000000000000000",
  // Row 22 — 24°N (Mexico, W Africa, Arabia, India, SE Asia)
  "000011111111111111100000000000100001111111100001011111111111111111111111111111111100000000000001001111110000000000000000",
  // Row 23 — 21°N
  "000001111111111111100000000000000001111111100001011111111111111111111111111111100100000000001111111111000000000000000000",
  // Row 24 — 18°N (Mexico/C.Am., W Africa, India, SE Asia)
  "000001111111111111100000000000000001111111000001011111111111111111111111111111001000000000011111111110000000000000000000",
  // Row 25 — 15°N
  "000000111111111111100000000000000001111111000001111111111111111111111111111110000000000001111111111000000000000000000000",
  // Row 26 — 12°N (Bangalore at row 26, col 86)
  "000000011111111111000000000000000001111111000001111111111111111111111111111100000000000011111111110000000000000000000000",
  // Row 27 — 9°N
  "000000011111111111000000000000000001111110000001111111111111111111111111111100000000000001111111100000000000000000000000",
  // Row 28 — 6°N (C. America, W Africa, SE Asia)
  "000000001111111110000000000000000001111110000001111111111111111111111111111000000000001101111111000000000000000000000000",
  // Row 29 — 3°N
  "000000001111111110000000000000000001111100000001111111111111111111111111110000000000001111111100000000000000000000000000",
  // Row 30 — 0° (Equator: S. America, W Africa, SE Asia, Borneo)
  "000000000111111110000000000000000001111100000001111111111111111111111111100000000000011111111000000000000000000000000000",
  // Row 31 — 3°S
  "000000000111111100000000000000000001111100000001111111111111111111111111000000000000111111110000000000000000000000000000",
  // Row 32 — 6°S (S. America, Africa narrows, SE Asia, Sulawesi)
  "000000000111111100000000000000000001111100000001111111111111111111111000000000000001111111100000000000000000000000000000",
  // Row 33 — 9°S
  "000000000111111000000000000000000001111000000001111111111111111111000000000000000011111111000000000000000000000000000000",
  // Row 34 — 12°S (S. America, Africa, N Australia hint)
  "000000000111111000000000000000000001111000000001111111111111111100000000000000001011111100000000000000000000000000000000",
  // Row 35 — 15°S
  "000000000011110000000000000000000001111000000001111111111111111000000000000000001111111000000000000000000000000000000000",
  // Row 36 — 18°S (S. America, Africa, N Australia)
  "000000000011110000000000000000000001110000000001111111111111100000000000000001001111110000000000000000000000000000000000",
  // Row 37 — 21°S
  "000000000011110000000000000000000001110000000001111111111111000000000000000001111111110000000000000000000000000000000000",
  // Row 38 — 24°S (S. America, Africa, C Australia)
  "000000000001110000000000000000000001100000000001111111111100000000000000000001111111110000000000000000000000000000000000",
  // Row 39 — 27°S
  "000000000001110000000000000000000000000000000001111111111000000000000000000001111111110000000000000000000000000000000000",
  // Row 40 — 30°S (S. America, S Africa, Australia)
  "000000000001110000000000000000000000000000000001111111110000000000000000000001111111100000000000000000000000000000000000",
  // Row 41 — 33°S
  "000000000000110000000000000000000000000000000001111111100000000000000000000001111111000000000000000000000000000000000000",
  // Row 42 — 36°S (S tip of S. America, S Africa, SE Australia)
  "000000000000110000000000000000000000000000000001111111000000000000000000000001111111000000000000000000000000000000000000",
  // Row 43 — 39°S
  "000000000000100000000000000000000000000000000000111110000000000000000000000001111100000000000000000000000000000000000000",
  // Row 44 — 42°S (Patagonia, New Zealand hint)
  "000000000000100000000000000000000000000000000000011100000000000000000000000001111000000000000000000001100000000000000000",
  // Row 45 — 45°S
  "000000000000100000000000000000000000000000000000000000000000000000000000000000110000000000000000000001110000000000000000",
  // Row 46 — 48°S
  "000000000000000000000000000000000000000000000000000000000000000000000000000000110000000000000000000000110000000000000000",
  // Row 47 — 51°S
  "000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000010000000000000000",
  // Row 48 — 54°S (Tierra del Fuego)
  "000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // Row 49 — 57°S
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // Row 50 — 60°S
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // Row 51 — 63°S (Antarctica starts)
  "000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  // Row 52 — 66°S
  "000000000001111111111111100000000000111111111111111111111100000000000000000000000000000000000000000000000000000000000000",
  // Row 53 — 69°S
  "000000001111111111111111111000011111111111111111111111111111110000000000000000000000000000000000000000000000000000000000",
  // Row 54 — 72°S
  "000000111111111111111111111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000000000",
  // Row 55 — 75°S
  "000011111111111111111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000000",
  // Row 56 — 78°S
  "001111111111111111111111111111111111111111111111111111111111111111110000000000000000000000000000000000000000000000000000",
  // Row 57 — 81°S
  "011111111111111111111111111111111111111111111111111111111111111111111000000000000000000000000000000000000000000000000000",
  // Row 58 — 84°S
  "111111111111111111111111111111111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000",
  // Row 59 — 87°S (South Pole)
  "111111111111111111111111111111111111111111111111111111111111111111111100000000000000000000000000000000000000000000000000",
];

const COLS = 120;
const ROWS = 60;

// SVG viewport dimensions
const MAP_W = 960;
const MAP_H = 480;
const DOT_R = 2.6;
const CELL_W = MAP_W / COLS; // 8px per cell
const CELL_H = MAP_H / ROWS; // 8px per cell

// ---------------------------------------------------------------------------
// Partner/HQ coordinates — equirectangular projection
//   px = (lon + 180) / 360 * MAP_W
//   py = (90 - lat) / 180 * MAP_H
// ---------------------------------------------------------------------------
function lonLatToXY(lon: number, lat: number): { x: number; y: number } {
  return {
    x: ((lon + 180) / 360) * MAP_W,
    y: ((90 - lat) / 180) * MAP_H,
  };
}

const HQ_COORDS = lonLatToXY(77.59, 12.97); // Bangalore

interface Location {
  label: string;
  sub: string;
  lon: number;
  lat: number;
  isHQ?: boolean;
}

const LOCATIONS: Location[] = [
  { label: "India", sub: "Bangalore", lon: 77.59, lat: 12.97, isHQ: true },
  { label: "Germany", sub: "Berlin", lon: 13.4, lat: 52.52 },
  { label: "Spain", sub: "Madrid", lon: -3.7, lat: 40.42 },
  { label: "Holland", sub: "Amsterdam", lon: 4.9, lat: 52.37 },
  { label: "UK", sub: "London", lon: -0.12, lat: 51.51 },
  { label: "USA", sub: "Las Vegas", lon: -115.14, lat: 36.17 },
];

const LOCATION_POINTS = LOCATIONS.map((loc) => ({
  ...loc,
  ...lonLatToXY(loc.lon, loc.lat),
}));

// ---------------------------------------------------------------------------
// Animated arc from HQ to each partner
// ---------------------------------------------------------------------------
interface ArcPathProps {
  from: { x: number; y: number };
  to: { x: number; y: number };
  delay: number;
}

function ArcPath({ from, to, delay }: ArcPathProps) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const dist = Math.sqrt(dx * dx + dy * dy);
  // Control point: midpoint lifted upward by a fraction of the distance
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 - dist * 0.28;
  const d = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <g>
      {/* Static arc trail */}
      <path
        d={d}
        fill="none"
        stroke="rgb(0 212 170 / 0.18)"
        strokeWidth="1"
        strokeDasharray="4 6"
      />
      {/* Moving particle */}
      <motion.circle
        r="2.5"
        fill="rgb(0 212 170)"
        filter="url(#node-glow)"
        animate={{
          cx: [from.x, midX, to.x],
          cy: [from.y, midY, to.y],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
      />
    </g>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function GlobalReachMap() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)]">
      {/* Title bar */}
      <div className="border-b border-[var(--color-nord-slate)] px-6 py-4">
        <h3
          className="font-[var(--font-display)] text-2xl font-bold uppercase text-[var(--color-nord-white)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Global Business Network
        </h3>
        <p className="text-sm text-[var(--color-nord-teal)]">
          Bangalore to the World
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_260px]">
        {/* ── MAP PANEL ── */}
        <div className="relative overflow-hidden">
          {/* Horizontal scan-line sweep */}
          <motion.div
            className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[rgb(0_212_170_/_0.25)] to-transparent"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />

          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="node-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="hq-glow" x="-150%" y="-150%" width="400%" height="400%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <radialGradient id="halo-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="rgb(0 212 170)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="rgb(0 212 170)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Ocean background */}
            <rect width={MAP_W} height={MAP_H} fill="#0a0c10" />

            {/* ── DOT-MATRIX LAND MASK ── */}
            <g>
              {MAP_ROWS.map((row, rowIdx) => {
                const cells = row.split("");
                return cells.map((cell, colIdx) => {
                  if (cell !== "1") return null;

                  const cx = colIdx * CELL_W + CELL_W / 2;
                  const cy = rowIdx * CELL_H + CELL_H / 2;

                  // Check if this dot is near a partner location — make it brighter
                  const isNearPartner = LOCATION_POINTS.some((p) => {
                    const dx = cx - p.x;
                    const dy = cy - p.y;
                    return Math.sqrt(dx * dx + dy * dy) < 28;
                  });

                  return (
                    <circle
                      key={`${rowIdx}-${colIdx}`}
                      cx={cx}
                      cy={cy}
                      r={DOT_R}
                      fill={
                        isNearPartner
                          ? "rgb(0 212 170 / 0.45)"
                          : "rgb(0 212 170 / 0.13)"
                      }
                    />
                  );
                });
              })}
            </g>

            {/* ── SUBTLE GRID LINES ── */}
            {[120, 240, 360, 480, 600, 720, 840].map((x) => (
              <line
                key={`v-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2={MAP_H}
                stroke="rgb(0 212 170 / 0.03)"
                strokeWidth="0.5"
              />
            ))}
            {[96, 192, 288, 384].map((y) => (
              <line
                key={`h-${y}`}
                x1="0"
                y1={y}
                x2={MAP_W}
                y2={y}
                stroke="rgb(0 212 170 / 0.03)"
                strokeWidth="0.5"
              />
            ))}

            {/* ── CONNECTION ARCS from Bangalore to each partner ── */}
            {LOCATION_POINTS.filter((p) => !p.isHQ).map((partner, i) => (
              <ArcPath
                key={partner.label}
                from={HQ_COORDS}
                to={{ x: partner.x, y: partner.y }}
                delay={i * 0.7}
              />
            ))}

            {/* ── PARTNER NODES ── */}
            {LOCATION_POINTS.map((loc, i) => (
              <g key={loc.label}>
                {/* Radial halo */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r="22"
                  fill="url(#halo-gradient)"
                />
                {/* Pulse ring */}
                <motion.circle
                  cx={loc.x}
                  cy={loc.y}
                  fill="none"
                  stroke="rgb(0 212 170 / 0.4)"
                  strokeWidth="1"
                  animate={{ r: [6, 20], opacity: [0.6, 0] }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.45,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
                {/* Core dot */}
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r={loc.isHQ ? 6 : 4}
                  fill="rgb(0 212 170)"
                  filter={loc.isHQ ? "url(#hq-glow)" : "url(#node-glow)"}
                />
                {/* HQ outer ring */}
                {loc.isHQ && (
                  <motion.circle
                    cx={loc.x}
                    cy={loc.y}
                    fill="none"
                    stroke="rgb(0 212 170)"
                    strokeWidth="1.5"
                    animate={{ r: [10, 24], opacity: [0.8, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
                {/* Country label */}
                <text
                  x={loc.x}
                  y={loc.y - 16}
                  textAnchor="middle"
                  fill="rgb(0 212 170)"
                  fontSize="11"
                  fontWeight="700"
                  fontFamily="Barlow Condensed, sans-serif"
                  letterSpacing="1"
                >
                  {loc.label.toUpperCase()}
                </text>
                {/* City label */}
                <text
                  x={loc.x}
                  y={loc.y + 22}
                  textAnchor="middle"
                  fill="rgb(132 148 176)"
                  fontSize="8.5"
                  fontFamily="DM Sans, sans-serif"
                >
                  {loc.sub}
                </text>
              </g>
            ))}
          </svg>
        </div>

        {/* ── LEGEND PANEL ── */}
        <div className="flex flex-col gap-2 border-t border-[var(--color-nord-slate)] p-4 lg:border-l lg:border-t-0">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.label}
              className="flex items-center gap-3 rounded-xl border border-[var(--color-nord-slate)] bg-[color:rgb(17_21_32_/_0.7)] px-4 py-3"
            >
              <span
                className="flex h-3 w-3 shrink-0 rounded-full"
                style={{
                  background: loc.isHQ
                    ? "var(--color-nord-teal)"
                    : "var(--color-nord-teal)",
                  boxShadow: loc.isHQ
                    ? "0 0 8px var(--color-nord-teal)"
                    : "none",
                }}
              />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.1em] text-[var(--color-nord-white)]">
                  {loc.label}
                  {loc.isHQ && (
                    <span className="ml-2 text-[10px] font-normal tracking-wider text-[var(--color-nord-teal)]">
                      HQ
                    </span>
                  )}
                </p>
                <p className="text-xs text-[var(--color-nord-mist)]">
                  {loc.sub}
                </p>
              </div>
            </div>
          ))}

          {/* Tech readout decoration */}
          <div className="mt-auto border-t border-[var(--color-nord-slate)] pt-3">
            <p
              className="text-[10px] text-[var(--color-nord-mist)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="text-[var(--color-nord-teal)]">SYS</span>{" "}
              NETWORK ACTIVE
            </p>
            <p
              className="text-[10px] text-[var(--color-nord-mist)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span className="text-[var(--color-nord-teal)]">NOD</span>{" "}
              {LOCATIONS.length} ENDPOINTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
