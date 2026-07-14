import { AlertCircle, CheckCircle2, Circle, Info, LoaderCircle, TriangleAlert } from "lucide-react";
import { cn } from "./utils";

type BadgeVariant = "neutral" | "selected" | "success" | "warning" | "error" | "info" | "loading";

const styles: Record<BadgeVariant, string> = {
  neutral: "bg-[var(--color-surface-muted)] text-[var(--color-text)]",
  selected: "bg-[var(--color-selected-bg)] text-[var(--color-selected-text)]",
  success: "bg-[var(--color-success-bg)] text-[var(--color-success)]",
  warning: "bg-[var(--color-warning-bg)] text-[var(--color-warning)]",
  error: "bg-[var(--color-error-bg)] text-[var(--color-error)]",
  info: "bg-[var(--color-info-bg)] text-[var(--color-info)]",
  loading: "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]",
};

const icons = {
  neutral: Circle,
  selected: CheckCircle2,
  success: CheckCircle2,
  warning: TriangleAlert,
  error: AlertCircle,
  info: Info,
  loading: LoaderCircle,
};

export function StatusBadge({ children, className, variant = "neutral" }: { children: React.ReactNode; className?: string; variant?: BadgeVariant }) {
  const Icon = icons[variant];
  return (
    <span className={cn("inline-flex min-h-7 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold", styles[variant], className)}>
      <Icon className={cn("size-3.5", variant === "loading" && "animate-spin")} aria-hidden="true" />
      {children}
    </span>
  );
}
