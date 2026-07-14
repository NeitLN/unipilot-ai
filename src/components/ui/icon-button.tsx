import * as React from "react";
import { cn } from "./utils";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: "md" | "lg";
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { children, className, label, size = "md", type = "button", ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] text-[var(--color-text)] transition-colors duration-200 hover:bg-[var(--color-surface-muted)] active:bg-[var(--color-primary-soft)] disabled:cursor-not-allowed disabled:bg-[var(--color-disabled-bg)] disabled:text-[var(--color-disabled-text)]",
        size === "md" ? "size-11" : "size-12",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
});
