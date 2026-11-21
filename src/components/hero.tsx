"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Tbc } from "@/components/tbc";

const words = ["Learn", "to", "break."];
const ring = ["Toprock", "Footwork", "Freezes", "Power", "Cypher", "Music"];

function CypherRing() {
  // Circular text: the cypher, the circle every breaker steps into.
  const r = 150;
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
      <defs>
        <path id="ring" d={`M200,200 m-${r},0 a${r},${r} 0 1,1 ${r * 2},0 a${r},${r} 0 1,1 -${r * 2},0`} />
      </defs>
      <circle cx="200" cy="200" r="186" fill="none" stroke="currentColor" strokeOpacity="0.14" />
      <circle cx="200" cy="200" r="118" fill="none" stroke="currentColor" strokeOpacity="0.14" strokeDasharray="2 8" />
      <g className="cypher-spin">
        <text className="fill-current font-display uppercase" style={{ fontSize: 31, letterSpacing: "0.08em" }}>
          <textPath href="#ring" textLength={2 * Math.PI * r - 8} lengthAdjust="spacing">
            {ring.map((w) => `${w}  /  `).join("")}
          </textPath>
        </text>
      </g>
      <circle cx="200" cy="200" r="36" className="fill-signal" />
    </svg>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="hero-title" className="dark relative overflow-hidden bg-ink text-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pt-12 pb-16 sm:px-6 md:grid-cols-[1.2fr_1fr] md:items-center md:pt-24 md:pb-28">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-signal" aria-hidden />
            Weekend classes, {site.area}
          </p>
          <h1 id="hero-title" className="text-display text-[clamp(5rem,17vw,11.5rem)]">
            {words.map((w, i) => (
              <span key={w} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "105%", rotate: i % 2 ? -4 : 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.08 + i * 0.12 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            Breaking classes for kids, teens and adult beginners, taught by {site.instructor}. Toprock, footwork,
            freezes and the culture behind them. No experience needed.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 bg-signal px-6 text-base text-ink hover:bg-signal/90">
              <Link href="/#register">Register interest</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-6 text-base">
              <Link href="/classes/">See classes and prices</Link>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Day and time <Tbc value={site.dayTime} />, venue <Tbc value={site.venue} />
          </p>
        </div>
        <motion.div
          className="mx-auto aspect-square w-full max-w-[17rem] text-foreground sm:max-w-[22rem] md:max-w-[28rem]"
          initial={reduce ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
        >
          <CypherRing />
        </motion.div>
      </div>
    </section>
  );
}
