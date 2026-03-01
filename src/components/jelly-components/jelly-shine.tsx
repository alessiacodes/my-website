import { useId } from "react";

export default function JellyShine({
  color = "white",
  width = "100%",
  height = "100%",
  cx = 100,
  cy = 125,
  rx = 100,
  ry = 70,
  blur = 10,
  intensity = 0.75,
  className = "",
}) {
  const id = useId();
  const gradientId = `shineGradient-${id}`;
  const filterId = `softBlur-${id}`;

  return (
    <svg
      className={`jelly-shine ${className}`}
      viewBox="0 0 200 300"
      preserveAspectRatio="none"
      width={width}
      height={height}
    >
      <defs>
        <radialGradient id={gradientId}>
          <stop offset="0%" stopColor={color} stopOpacity={intensity} />
          <stop offset="45%" stopColor={color} stopOpacity={intensity * 0.45} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>

        <filter id={filterId}>
          <feGaussianBlur stdDeviation={blur} />
        </filter>
      </defs>

      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill={`url(#${gradientId})`}
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}