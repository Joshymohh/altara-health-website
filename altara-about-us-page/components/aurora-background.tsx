"use client"

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Bone off-white base */}
      <div className="absolute inset-0 bg-[#F5F5F0]" />

      {/* Subtle radial white gradient for depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.9) 0%, rgba(245,245,240,0) 70%)",
        }}
      />
    </div>
  )
}
