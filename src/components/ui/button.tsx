import { LoaderCircle } from "lucide-react";
import * as React from "react";
import { cn } from "./utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[var(--color-primary)] text-[var(--color-on-primary)] hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]",
  secondary:
    "border-[var(--color-border-strong)] bg-[var(--color-surface-raised)] text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)] active:bg-[var(--color-primary-soft)]",
  ghost:
    "border-transparent bg-transparent text-[var(--color-text)] hover:bg-[var(--color-surface-muted)] active:bg-[var(--color-primary-soft)]",
  danger:
    "border-transparent bg-[var(--color-error)] text-white hover:brightness-90 active:brightness-80",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-11 px-3 text-sm",
  md: "min-h-11 px-4 text-sm",
  lg: "min-h-12 px-5 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "relative inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-sm)] border font-semibold transition-[background-color,border-color,color,filter] duration-200 ease-out focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-focus)] disabled:pointer-events-none disabled:border-transparent disabled:bg-[var(--color-disabled-bg)] disabled:text-[var(--color-disabled-text)]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, disabled, loading = false, size = "md", variant = "primary", type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={buttonStyles({ variant, size, className })}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      <span className={cn("inline-flex items-center gap-2", loading && "invisible")}>{children}</span>
      {loading ? (
        <LoaderCircle className="absolute size-5 animate-spin" aria-hidden="true" />
      ) : null}
    </button>
  );
});
