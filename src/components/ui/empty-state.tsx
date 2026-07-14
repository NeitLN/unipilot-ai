import { Inbox } from "lucide-react";
import { cn } from "./utils";

export function EmptyState({
  action,
  children,
  className,
  icon: Icon = Inbox,
  title,
}: {
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
}) {
  return (
    <section className={cn("rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface)] px-5 py-10 text-center sm:px-8 sm:py-12", className)} aria-labelledby="empty-state-title">
      <span className="mx-auto flex size-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-primary-soft)] text-[var(--color-selected-text)]">
        <Icon className="size-6" aria-hidden={true} />
      </span>
      <h2 id="empty-state-title" className="mt-4 text-xl font-semibold text-[var(--color-ink)]">
        {title}
      </h2>
      <div className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[var(--color-text-muted)] sm:text-base">{children}</div>
      {action ? <div className="mt-6 flex justify-center">{action}</div> : null}
    </section>
  );
}
