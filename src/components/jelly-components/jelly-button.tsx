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
  const baseStyles = `jelly-surface squishy p-4 flex items-center justify-center ${circular ? "rounded-full h-10 w-10" : ""}`;
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
      <JellyShine></JellyShine>
    </button>
  );
};

export default JellyButton;
