"use client";

import { motion } from "framer-motion";

/**
 * Circular charging cycle animation showing the lifecycle:
 * Charge → Discharge → Rest → Repeat
 * with animated arc progress and pulsing center metric.
 */
export function ChargingCycleAnimation({ className = "" }: { className?: string }) {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-[2rem] border border-[var(--color-nord-slate)] bg-[var(--color-nord-black)] p-8 ${className}`}>
      <div className="relative">
        <svg viewBox="0 0 200 200" className="h-48 w-48" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="arc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d4aa" />
              <stop offset="50%" stopColor="#f5a623" />
              <stop offset="100%" stopColor="#00d4aa" />
            </linearGradient>
          </defs>

          {/* Background circle */}
          <circle cx="100" cy="100" r={radius} fill="none" stroke="rgb(42 53 73)" strokeWidth="6" />

          {/* Animated arc */}
          <motion.circle
            cx="100" cy="100" r={radius}
            fill="none" stroke="url(#arc-grad)" strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{
              strokeDashoffset: [circumference, 0, 0, circumference],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.4, 0.6, 1],
            }}
            style={{ transform: "rotate(-90deg)", transformOrigin: "100px 100px" }}
          />

          {/* Inner pulsing glow */}
          <motion.circle
            cx="100" cy="100" r="40"
            fill="rgb(0 212 170 / 0.05)"
            animate={{
              r: [35, 45, 35],
              fill: ["rgb(0 212 170 / 0.03)", "rgb(0 212 170 / 0.1)", "rgb(0 212 170 / 0.03)"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Center metric */}
          <text x="100" y="95" textAnchor="middle" fill="rgb(0 212 170)" fontSize="24" fontFamily="var(--font-display)" fontWeight="800">
            3000+
          </text>
          <text x="100" y="115" textAnchor="middle" fill="rgb(132 148 176)" fontSize="9" fontFamily="monospace">
            CYCLE LIFE
          </text>

          {/* Rotating dots around circle */}
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="3" fill="rgb(0 212 170)"
              animate={{
                cx: [
                  100 + radius * Math.cos(-Math.PI / 2),
                  100 + radius * Math.cos(Math.PI / 2),
                  100 + radius * Math.cos(-Math.PI / 2),
                ],
                cy: [
                  100 + radius * Math.sin(-Math.PI / 2),
                  100 + radius * Math.sin(Math.PI / 2),
                  100 + radius * Math.sin(-Math.PI / 2),
                ],
              }}
              transition={{
                duration: 4,
                delay: i * 1.3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </svg>

        {/* Surrounding labels */}
        <motion.div
          className="absolute -right-20 top-4 rounded-full border border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] px-3 py-1 text-[10px] font-[var(--font-mono)] text-[var(--color-nord-teal)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          CHARGE
        </motion.div>
        <motion.div
          className="absolute -left-24 bottom-4 rounded-full border border-[var(--color-nord-slate)] bg-[var(--color-nord-deep)] px-3 py-1 text-[10px] font-[var(--font-mono)] text-[var(--color-nord-amber)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, delay: 1.5, repeat: Infinity }}
        >
          DISCHARGE
        </motion.div>
      </div>
    </div>
  );
}
