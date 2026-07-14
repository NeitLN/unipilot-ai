"use client";

import { TriangleAlert } from "lucide-react";
import * as React from "react";
import { Button } from "./button";

export function ConfirmDialog({
  cancelLabel = "Cancel",
  confirmLabel = "Confirm",
  description,
  loading = false,
  onCancel,
  onConfirm,
  open,
  title,
  tone = "default",
}: {
  cancelLabel?: string;
  confirmLabel?: string;
  description: string;
  loading?: boolean;
  onCancel: () => void;
  onConfirm: () => void;
  open: boolean;
  title: string;
  tone?: "default" | "danger";
}) {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="dialog-backdrop m-auto w-[min(32rem,calc(100%-2rem))] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-0 text-[var(--color-text)] shadow-[var(--shadow-raised)]"
      onCancel={(event) => {
        event.preventDefault();
        onCancel();
      }}
      onClose={() => {
        if (open) onCancel();
      }}
      aria-labelledby="confirm-dialog-title"
      aria-describedby="confirm-dialog-description"
    >
      <div className="p-5 sm:p-6">
        {tone === "danger" ? (
          <TriangleAlert className="mb-4 size-6 text-[var(--color-error)]" aria-hidden="true" />
        ) : null}
        <h2 id="confirm-dialog-title" className="text-xl font-semibold text-[var(--color-ink)]">
          {title}
        </h2>
        <p id="confirm-dialog-description" className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
          {description}
        </p>
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="secondary" onClick={onCancel} disabled={loading}>
            {cancelLabel}
          </Button>
          <Button variant={tone === "danger" ? "danger" : "primary"} onClick={onConfirm} loading={loading}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </dialog>
  );
}
