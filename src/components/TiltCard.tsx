"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

export function TiltCard({
  children,
  className = "",
  glowColor = "rgba(79, 158, 40, 0.15)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth 3D tilt
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 250,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 250,
    damping: 25,
  });

  // Radial highlight follow relative coords
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), {
    stiffness: 250,
    damping: 25,
  });
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), {
    stiffness: 250,
    damping: 25,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative group overflow-hidden ${className}`}
    >
      {/* 3D Glass Gloss / Glow overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(280px circle at ${gx}% ${gy}%, ${glowColor}, transparent 80%)`
          ),
        }}
      />
      {/* Border glow highlights */}
      <div className="absolute inset-0 rounded-[inherit] border border-white/20 dark:border-white/5 pointer-events-none z-20 group-hover:border-brand-500/30 dark:group-hover:border-brand-400/20 transition-colors duration-300" />
      
      {/* Content wrapper with preserve-3d */}
      <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }} className="h-full w-full">
        {children}
      </div>
    </motion.div>
  );
}
