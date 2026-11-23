import { cn } from "@/lib/utils";

/**
 * Hand-drawn line figures: toprock, go down, freeze. One round in three frames.
 * Pure SVG, inherits currentColor; the floor tape uses the accent.
 */
export function MoveStrip({ className, labels = true }: { className?: string; labels?: boolean }) {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 620 270" className={cn("w-full", className)} role="img" aria-label="Line drawing of a breaking round in three frames: toprock, go down, freeze">
      {/* motion paths */}
      <path d="M128 52 Q 200 0 250 104" {...s} strokeWidth={2.5} strokeDasharray="3 10" opacity={0.55} />
      <path d="M342 150 Q 420 60 520 128" {...s} strokeWidth={2.5} strokeDasharray="3 10" opacity={0.55} />
      {/* toprock */}
      <circle cx="80" cy="38" r="15" {...s} />
      <path d="M80 56 L78 122" {...s} />
      <path d="M79 72 L52 94 L38 72" {...s} />
      <path d="M79 72 L108 86 L124 64" {...s} />
      <path d="M78 122 L58 170 L66 222 L50 222" {...s} />
      <path d="M78 122 L102 166 L86 222 L104 222" {...s} />
      {/* go down */}
      <circle cx="258" cy="120" r="15" {...s} />
      <path d="M272 132 L314 160" {...s} />
      <path d="M278 140 L264 182 L262 222" {...s} />
      <path d="M294 148 L322 128 L340 136" {...s} />
      <path d="M314 160 L352 186 L374 222" {...s} />
      <path d="M314 160 L300 198 L334 222" {...s} />
      {/* freeze */}
      <circle cx="468" cy="200" r="15" {...s} />
      <path d="M484 194 L522 160" {...s} />
      <path d="M498 182 L504 222" {...s} />
      <path d="M486 198 L458 222" {...s} />
      <path d="M522 160 L548 110 L582 92" {...s} />
      <path d="M522 160 L562 150 L572 118" {...s} />
      {/* floor + tape */}
      <path d="M10 230 L610 230" {...s} strokeWidth={2} />
      <rect x="452" y="226" width="96" height="9" className="fill-signal" />
      {labels && (
        <g className="fill-current font-sans" style={{ fontSize: 15, fontWeight: 500 }}>
          <text x="40" y="262">Toprock</text>
          <text x="262" y="262">Go down</text>
          <text x="478" y="262">Freeze</text>
        </g>
      )}
    </svg>
  );
}
