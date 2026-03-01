import React, { useId, type ReactNode } from "react";
import JellyShine from "../jelly-components/jelly-shine";

interface JellyIconBaseProps {
  path?: string;
  children?: ReactNode;
  clipChildren?: ReactNode;
  width?: number;
  height?: number;
  shineHeight?: string;
  shineWidth?: string;
  className?: string;
  shineX?: number;
  shineY?: number;
}

export const JellyIconBase: React.FC<JellyIconBaseProps> = ({
  path,
  children,
  clipChildren,
  width = 48,
  height = 48,
  shineHeight = "10px",
  shineWidth = "7px",
  shineX = 3,
  shineY = 3,
  className
}) => {
  const id = useId();
  const gradientId = `glassGradient-${id}`;
  const strokeBlurId = `strokeBlur-${id}`;
  const bottomStrokeBlurId = `bottomStrokeBlur-${id}`;
  const clipId = `clip-${id}`;
  const strokeGradId = `strokeGrad-${id}`;
  const bottomStrokeGradId = `bottomStrokeGrad-${id}`;

  return (
    <svg className={`squishy overflow-hidden ${className}`} viewBox="0 0 24 24" width={width} height={height}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,181,226,0.6)" />
          <stop offset="50%" stopColor="rgba(0,181,226,0.6)" />
          <stop offset="100%" stopColor="rgba(8,90,212,0.6)" />
        </linearGradient>

        <linearGradient id={strokeGradId} x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="0%"  stopColor="white" stopOpacity="0.5" />
          <stop offset="35%" stopColor="white" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={bottomStrokeGradId} x1="0" y1="0" x2="0" y2="24" gradientUnits="userSpaceOnUse">
          <stop offset="65%" stopColor="rgba(0,3,120,0)" />
          <stop offset="100%" stopColor="rgba(0,3,120,0.6)" />
        </linearGradient>

        {/* Blur filters — only used for path-based usage */}
        <filter id={strokeBlurId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>

        <filter id={bottomStrokeBlurId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="0.6" />
        </filter>

        <clipPath id={clipId}>
          {path && <path d={path} />}
          {clipChildren ?? children}
        </clipPath>
      </defs>

      {/* path-based usage */}
      {path && (
        <>
          <path d={path} fill={`url(#${gradientId})`} />
          <path
            d={path}
            fill="none"
            stroke={`url(#${strokeGradId})`}
            strokeWidth="2"
            filter={`url(#${strokeBlurId})`}
            clipPath={`url(#${clipId})`}
          />
          <path
            d={path}
            fill="none"
            stroke={`url(#${bottomStrokeGradId})`}
            strokeWidth="2"
            filter={`url(#${bottomStrokeBlurId})`}
            clipPath={`url(#${clipId})`}
          />
        </>
      )}

      {children && (
        <>
          <g fill={`url(#${gradientId})`}>
            {children}
          </g>

          <g clipPath={`url(#${clipId})`} style={{ filter: "blur(0.4px)" }}>
            <g
              fill="none"
              stroke={`url(#${strokeGradId})`}
              strokeWidth="2"
            >
              {children}
            </g>
            <g
              fill="none"
              stroke={`url(#${bottomStrokeGradId})`}
              strokeWidth="2"
            >
              {children}
            </g>
          </g>
        </>
      )}

      <g transform={`translate(${shineX}, ${shineY})`}>
        <JellyShine height={shineHeight} width={shineWidth} />
      </g>
    </svg>
  );
};