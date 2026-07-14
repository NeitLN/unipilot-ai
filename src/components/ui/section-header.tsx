import { cn } from "./utils";

export function SectionHeader({ action, className, description, title }: { action?: React.ReactNode; className?: string; description?: string; title: string }) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="min-w-0">
        <h2 className="text-lg font-semibold tracking-[-0.015em] text-[var(--color-ink)]">{title}</h2>
        {description ? <p className="mt-1 max-w-[70ch] text-sm text-[var(--color-text-muted)]">{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
