import { Blocks, Check } from "lucide-react";
import Link from "next/link";
import { buttonStyles, Container, EmptyState, PageHeader, Stack, StatusBadge } from "@/components/ui";

export type FeatureFoundationProps = {
  description: string;
  futureCapabilities: string[];
  title: string;
};

export function FeatureFoundation({ description, futureCapabilities, title }: FeatureFoundationProps) {
  return (
    <Container>
      <Stack gap="lg">
        <PageHeader
          title={title}
          description={description}
          badge={<StatusBadge variant="selected">Foundation ready</StatusBadge>}
        />
        <EmptyState
          icon={Blocks}
          title="Feature foundation ready"
          action={
            <Link href="/" className={buttonStyles({ variant: "secondary" })}>
              Return to dashboard
            </Link>
          }
        >
          <p>This route and its responsive shell are ready. Functional behavior is intentionally reserved for Phase 2.</p>
          <ul className="mx-auto mt-5 grid max-w-xl gap-2 text-left" aria-label={`Future ${title} capabilities`}>
            {futureCapabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-2 text-[var(--color-text)]">
                <Check className="mt-0.5 size-4 shrink-0 text-[var(--color-success)]" aria-hidden="true" />
                <span>{capability}</span>
              </li>
            ))}
          </ul>
        </EmptyState>
      </Stack>
    </Container>
  );
}
