import React, { useId } from "react";
import JellyShine from "./jelly-shine";

interface JellyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "danger"
    | "warning"
    | "success";
  disabled?: boolean;
  className?: string;
  circular?: boolean;
}

const JellyButton: React.FC<JellyButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  circular = false,
}) => {
  const id = useId();
  const baseStyles = `jelly-surface squishy squishy-sm p-2 flex items-center justify-center ${circular ? "rounded-full h-10 w-10" : ""}`;
  const variantStyles = {
    primary: "jelly-colour-primary",
    secondary: "",
    accent: "",
    danger: "",
    warning: "",
    success: "",
  };

  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      } ${className}`}
    >
      <span className="relative z-2 text-2xl">{children}</span>
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
