import { cn } from "./utils";

export function PageHeader({ action, badge, className, description, title }: { action?: React.ReactNode; badge?: React.ReactNode; className?: string; description?: string; title: string }) {
  return (
    <header className={cn("flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between", className)}>
      <div className="min-w-0 max-w-3xl">
        {badge ? <div className="mb-3">{badge}</div> : null}
        <h1 className="text-2xl font-bold tracking-[-0.025em] text-[var(--color-ink)] sm:text-3xl">{title}</h1>
        {description ? <p className="mt-2 max-w-[70ch] text-sm leading-6 text-[var(--color-text-muted)] sm:text-base">{description}</p> : null}
      </div>
      {action ? <div className="flex shrink-0 items-center gap-2">{action}</div> : null}
    </header>
  );
}
