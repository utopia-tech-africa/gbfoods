"use client";

import { useCallback, useEffect, useState } from "react";

export function InteractiveOrangeBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);

  const onMove = useCallback((e: MouseEvent) => {
    setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
  }, []);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [onMove]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0e0e0f]">
      {/* Dot grid pattern - brand orange, slow drift */}
      <div
        className="pattern-drift pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,89,0,0.5) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden
      />
      {/* Floating particles - small orbs moving across the screen */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="bg-particle particle-1" />
        <div className="bg-particle particle-2" />
        <div className="bg-particle particle-3" />
        <div className="bg-particle particle-4" />
        <div className="bg-particle particle-5" />
        <div className="bg-particle particle-6" />
      </div>
      {/* Mouse-follow glow - brand orange */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50 transition-opacity duration-300"
        style={{
          background: mounted
            ? `radial-gradient(circle 40vmax at ${mouse.x * 100}% ${mouse.y * 100}%, rgba(255,89,0,0.15), transparent 60%)`
            : "none",
        }}
        aria-hidden
      />
      {/* Floating blobs - slow drift for ambient motion */}
      <div className="absolute inset-0" aria-hidden>
        <div className="bg-blob blob-1" />
        <div className="bg-blob blob-2" />
        <div className="bg-blob blob-3" />
        <div className="bg-blob blob-4" />
        <div className="bg-blob blob-5" />
      </div>
      {/* Soft noise/grain overlay for depth */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
    </div>
  );
}
