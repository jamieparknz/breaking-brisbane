/** Top-down drawing of a cypher: people in a circle, one breaker in the middle, tape on the floor. */
export function CypherPlan({ className }: { className?: string }) {
  const n = 14;
  const pts = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    return [200 + Math.cos(a) * 150, 200 + Math.sin(a) * 150, (a * 180) / Math.PI] as const;
  });
  return (
    <svg viewBox="0 0 400 400" className={className} role="img" aria-label="Drawing of a cypher seen from above: a circle of people around one dancer">
      <circle cx="200" cy="200" r="118" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 9" opacity=".6" />
      {pts.map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r - 90})`}>
          <path d="M-16 6 Q0 -10 16 6" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <circle r="7" cy="-6" className="fill-current" />
        </g>
      ))}
      <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="186" cy="176" r="13" />
        <path d="M196 188 L222 224 M206 202 L174 224 M206 202 L240 190 M222 224 L196 256 M222 224 L252 248" />
      </g>
      <rect x="150" y="312" width="100" height="10" className="fill-signal" transform="rotate(-4 200 317)" />
    </svg>
  );
}
