import { AlertCircle, CheckCircle2, Info, TriangleAlert } from "lucide-react";
import { cn } from "./utils";

type AlertVariant = "info" | "success" | "warning" | "error";

const styles: Record<AlertVariant, string> = {
  info: "border-[var(--color-info)] bg-[var(--color-info-bg)] text-[var(--color-info)]",
  success: "border-[var(--color-success)] bg-[var(--color-success-bg)] text-[var(--color-success)]",
  warning: "border-[var(--color-warning)] bg-[var(--color-warning-bg)] text-[var(--color-warning)]",
  error: "border-[var(--color-error)] bg-[var(--color-error-bg)] text-[var(--color-error)]",
};

const icons = { info: Info, success: CheckCircle2, warning: TriangleAlert, error: AlertCircle };

export function Alert({ children, className, title, variant = "info" }: { children: React.ReactNode; className?: string; title: string; variant?: AlertVariant }) {
  const Icon = icons[variant];
  return (
    <div
      className={cn("flex items-start gap-3 rounded-[var(--radius-md)] border p-4", styles[variant], className)}
      role={variant === "error" ? "alert" : "status"}
    >
      <Icon className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
      <div className="min-w-0">
        <p className="font-semibold text-current">{title}</p>
        <div className="mt-1 text-sm text-[var(--color-text)]">{children}</div>
      </div>
    </div>
  );
}
