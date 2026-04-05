"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

type AnimatedCounterProps = {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

export function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => value.toFixed(decimals));

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 1.6,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [count, target]);

  return (
    <motion.span className="stat-number">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  );
}
