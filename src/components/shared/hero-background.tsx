const line = "color-mix(in srgb, var(--primary) 14%, transparent)";
const gridFade =
  "radial-gradient(ellipse 70% 60% at 50% 45%, black 0%, transparent 100%)";
const floorFade =
  "linear-gradient(to bottom, transparent 0%, black 55%, transparent 100%)";

// evenly spaced bottom points; lines converge at the top center (600, 0)
const bottoms = Array.from({ length: 13 }, (_, i) => -600 + i * 200);

export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
          backgroundPosition: "center top",
          maskImage: gridFade,
          WebkitMaskImage: gridFade,
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 h-80 w-full text-primary/25"
        viewBox="0 0 1200 320"
        preserveAspectRatio="xMidYMax slice"
        style={{ maskImage: floorFade, WebkitMaskImage: floorFade }}
      >
        <g stroke="currentColor" strokeWidth="1" fill="none">
          {bottoms.map((x) => (
            <path
              key={x}
              d={`M600 0 L${x} 320`}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}