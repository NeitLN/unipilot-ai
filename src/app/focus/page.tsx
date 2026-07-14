import type { Metadata } from "next";
import { FeatureFoundation } from "@/components/features/feature-foundation";

export const metadata: Metadata = { title: "Focus" };

export default function FocusPage() {
  return (
    <FeatureFoundation
      title="Focus Session"
      description="The future assignment-linked focus workspace for resilient 25-minute study intervals."
      futureCapabilities={[
        "Require one active assignment before a session can begin.",
        "Keep the countdown resilient across interruptions.",
        "Record completed and partial sessions without inflating streaks.",
      ]}
    />
  );
}
