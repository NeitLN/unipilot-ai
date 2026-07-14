import Link from "next/link";
import { buttonStyles, Container, EmptyState } from "@/components/ui";

export default function NotFound() {
  return (
    <Container>
      <EmptyState
        title="Page not found"
        action={
          <Link href="/" className={buttonStyles()}>
            Go to dashboard
          </Link>
        }
      >
        This destination is not part of the UniPilot AI foundation.
      </EmptyState>
    </Container>
  );
}
