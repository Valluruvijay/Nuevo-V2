"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageLoader() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // Hide once the window is fully loaded, with a small min display time
    const minTime = setTimeout(() => {
      if (document.readyState === "complete") setLoading(false);
    }, 600);

    const onLoad = () => setLoading(false);
    window.addEventListener("load", onLoad);

    // Safety: never trap the user
    const safety = setTimeout(() => setLoading(false), 3500);

    return () => {
      clearTimeout(minTime);
      clearTimeout(safety);
      window.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] grid place-items-center bg-brand-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* animated mesh bg */}
          <div className="animate-mesh absolute inset-0 opacity-70" />
          <div className="absolute inset-0 bg-grid-dark opacity-30" />

          <div className="relative flex flex-col items-center gap-6">
            {/* Dual ring spinner */}
            <div className="relative h-16 w-16">
              <span className="loader-ring absolute inset-0 rounded-full border-2 border-brand-400/20 border-t-brand-400" />
              <span
                className="loader-ring absolute inset-2 rounded-full border-2 border-saffron-500/20 border-t-saffron-500"
                style={{ animationDirection: "reverse", animationDuration: "1.4s" }}
              />
            </div>

            {/* Brand mark + name */}
            <div className="flex flex-col items-center gap-2">
              <svg viewBox="0 0 64 64" className="h-9 w-9">
                <path d="M14 24 L32 15 L50 24 L32 33 Z" fill="#ffffff" />
                <path d="M18 28 L18 44 L32 51 L32 33 Z" fill="#5eead4" />
                <path d="M46 28 L46 44 L32 51 L32 33 Z" fill="#fb923c" />
                <circle cx="50" cy="20" r="4" fill="#f97316" />
              </svg>
              <p className="font-display text-lg font-extrabold tracking-tight text-white">
                Nuevo<span className="text-saffron-400">SC</span>
              </p>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
                Loading supply chain…
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
