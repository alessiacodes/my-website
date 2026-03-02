export const VARIANTS = [
    "primary",
    "secondary",
    "accent",
    "danger",
    "warning",
    "success",
    "neutral",
] as const;

export type Variant = typeof VARIANTS[number];

export const variantStyles: Record<Variant, string> = {
    primary: "jelly-colour-primary",
    secondary: "jelly-colour-secondary",
    accent: "jelly-colour-accent",
    danger: "jelly-colour-danger",
    warning: "jelly-colour-warning",
    success: "jelly-colour-success",
    neutral: "jelly-colour-neutral",
};