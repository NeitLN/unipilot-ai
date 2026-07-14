"use client";

import * as React from "react";

type ControlProps = {
  id?: string;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
};

interface FormFieldProps {
  children: React.ReactElement<ControlProps>;
  description?: string;
  error?: string;
  id?: string;
  label: string;
  required?: boolean;
}

export function FormField({ children, description, error, id, label, required = false }: FormFieldProps) {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;
  const descriptionId = description ? `${fieldId}-description` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const describedBy = [descriptionId, errorId].filter(Boolean).join(" ") || undefined;

  const control = React.cloneElement(children, {
    id: fieldId,
    required,
    "aria-describedby": describedBy,
    "aria-invalid": Boolean(error),
  });

  return (
    <div className="grid gap-2">
      <label htmlFor={fieldId} className="text-sm font-semibold text-[var(--color-ink)]">
        {label}
        {required ? (
          <span className="ml-1 text-[var(--color-error)]" aria-hidden="true">
            *
          </span>
        ) : null}
      </label>
      {control}
      {description ? (
        <p id={descriptionId} className="text-sm text-[var(--color-text-muted)]">
          {description}
        </p>
      ) : null}
      {error ? (
        <p id={errorId} className="flex items-start gap-2 text-sm font-medium text-[var(--color-error)]">
          <span aria-hidden="true">●</span>
          {error}
        </p>
      ) : null}
    </div>
  );
}
