import React, { useId } from "react";
import JellyShine from "./jelly-shine";
import { variantStyles, type Variant } from "../constants";

interface JellyDivProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
}

const JellyDiv: React.FC<JellyDivProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const id = useId();
  const baseStyles = `jelly-surface squishy ${className}`;

  return (
    <div id={id} className={`${baseStyles} ${variantStyles[variant]}`}>
      {children}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <JellyShine
          className="relative top-0.5 left-1"
          height="15px"
          width="50%"
        />
      </div>
    </div>
  );
};

export default JellyDiv;
