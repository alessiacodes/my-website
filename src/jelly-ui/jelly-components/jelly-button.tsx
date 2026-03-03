import React, { useId } from "react";
import JellyShine from "./jelly-shine";
import { variantStyles, type Variant } from "../constants";

interface JellyButtonProps {
  contentSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  children: React.ReactNode;
  onClick?: () => void;
  styleVariant?: Variant;
  disabled?: boolean;
  className?: string;
  circular?: boolean;
}

const JellyButton: React.FC<JellyButtonProps> = ({
  children,
  onClick,
  styleVariant = "primary",
  disabled = false,
  className = "",
  circular = false,
  contentSize = "md",
}) => {
  const id = useId();
  const baseStyles = `jelly-surface squishy squishy-sm p-2 flex items-center justify-center ${circular ? "rounded-full h-10 w-10" : ""}`;

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[styleVariant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      <span className={`relative z-2 text-${contentSize}`}>{children}</span>
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <JellyShine
          className="relative top-0.5 left-1"
          height="35%"
          width="50%"
        />
      </div>
    </button>
  );
};

export default JellyButton;
