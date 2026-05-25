import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariantMap = {
  default:
    "bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90 hover:shadow-primary/40",
  outline:
    "border border-border bg-transparent text-foreground hover:border-primary/50 hover:bg-secondary",
  ghost: "bg-transparent text-foreground hover:bg-secondary",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
} as const;

const buttonSizeMap = {
  sm: "h-8 px-4 text-xs",
  default: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
} as const;

export type ButtonVariant = keyof typeof buttonVariantMap;
export type ButtonSize = keyof typeof buttonSizeMap;

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    "disabled:pointer-events-none disabled:opacity-50",
    buttonVariantMap[variant],
    buttonSizeMap[size],
    className
  );
}
