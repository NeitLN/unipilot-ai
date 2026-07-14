import { AlertCircle } from "lucide-react";
import { Button } from "./button";

export function ErrorState({ description, onRetry, retryLabel = "Try again", title = "Something went wrong" }: { description: string; onRetry?: () => void; retryLabel?: string; title?: string }) {
  return (
    <section className="rounded-[var(--radius-lg)] border border-[var(--color-error)] bg-[var(--color-error-bg)] p-6" role="alert" aria-labelledby="error-state-title">
      <AlertCircle className="size-6 text-[var(--color-error)]" aria-hidden="true" />
      <h2 id="error-state-title" className="mt-3 text-lg font-semibold text-[var(--color-ink)]">
        {title}
      </h2>
      <p className="mt-2 max-w-[65ch] text-sm text-[var(--color-text)]">{description}</p>
      {onRetry ? (
        <Button className="mt-5" variant="secondary" onClick={onRetry}>
          {retryLabel}
        </Button>
      ) : null}
    </section>
  );
}
