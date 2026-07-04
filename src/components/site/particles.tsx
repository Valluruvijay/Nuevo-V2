"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Ambient floating particles for dark hero/section backgrounds.
 * Purely decorative — pointer-events: none, aria-hidden.
 */
export function Particles({
  count = 14,
  className,
  color = "rgba(94,234,212,0.5)",
}: {
  count?: number;
  className?: string;
  color?: string;
}) {
  const dots = React.useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => {
        const size = 2 + Math.random() * 4;
        return {
          id: i,
          left: Math.random() * 100,
          bottom: -10 - Math.random() * 20,
          size,
          duration: 14 + Math.random() * 18,
          delay: -Math.random() * 20,
          opacity: 0.2 + Math.random() * 0.5,
        };
      }),
    [count],
  );

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {dots.map((d) => (
        <span
          key={d.id}
          className="animate-drift absolute rounded-full"
          style={{
            left: `${d.left}%`,
            bottom: `${d.bottom}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            background: color,
            opacity: d.opacity,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            boxShadow: `0 0 ${d.size * 2}px ${color}`,
          }}
        />
      ))}
    </div>
  );
}
