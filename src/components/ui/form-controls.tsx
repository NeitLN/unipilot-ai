import * as React from "react";
import { cn } from "./utils";

const controlStyles =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-border-strong)] bg-[var(--color-surface-raised)] text-[var(--color-ink)] shadow-[var(--shadow-low)] transition-[border-color,background-color] duration-200 placeholder:text-[var(--color-text-muted)] hover:border-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none disabled:cursor-not-allowed disabled:border-[var(--color-border)] disabled:bg-[var(--color-disabled-bg)] disabled:text-[var(--color-disabled-text)] aria-invalid:border-[var(--color-error)]";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return <input ref={ref} className={cn(controlStyles, "min-h-11 px-3 py-2", className)} {...props} />;
  },
);

export const Select = React.forwardRef<HTMLSelectElement, React.SelectHTMLAttributes<HTMLSelectElement>>(
  function Select({ children, className, ...props }, ref) {
    return (
      <select ref={ref} className={cn(controlStyles, "min-h-11 px-3 py-2", className)} {...props}>
        {children}
      </select>
    );
  },
);

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, rows = 4, ...props }, ref) {
    return <textarea ref={ref} rows={rows} className={cn(controlStyles, "min-h-28 resize-y px-3 py-2", className)} {...props} />;
  },
);
