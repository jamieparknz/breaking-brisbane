import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Learn to break. Weekend breaking classes, Brisbane north side.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#09090b", color: "#f3f3f0", padding: 72, justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 900, lineHeight: 0.88, letterSpacing: -4, textTransform: "uppercase", display: "flex", flexDirection: "column" }}>
            <span>Learn</span><span>to break.</span>
          </div>
          <div style={{ fontSize: 34, marginTop: 36, color: "#a1a1aa" }}>Weekend breaking classes, Brisbane north side</div>
        </div>
        <div style={{ width: 260, height: 260, borderRadius: 999, border: "2px solid #3f3f46", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 72, height: 72, borderRadius: 999, background: "#ffd60a" }} />
        </div>
      </div>
    ),
    size,
  );
}
