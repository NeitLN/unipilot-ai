import { cn } from "./utils";

export function Skeleton({ className, label = "Loading content" }: { className?: string; label?: string }) {
  return (
    <div role="status" aria-label={label} className={cn("animate-pulse rounded-[var(--radius-sm)] bg-[var(--color-loading)]/35", className)}>
      <span className="sr-only">{label}</span>
    </div>
  );
}
