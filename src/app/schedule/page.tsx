import type { Metadata } from "next";
import { FeatureFoundation } from "@/components/features/feature-foundation";

export const metadata: Metadata = { title: "Schedule" };

export default function SchedulePage() {
  return (
    <FeatureFoundation
      title="Class Schedule"
      description="The future calendar workspace for classes, linked assignments, and trustworthy synchronization status."
      futureCapabilities={[
        "Offer task-appropriate Day, Week, and Month views.",
        "Show linked assignments in the context of each class.",
        "Keep cached data and the last synchronization time visible when sync fails.",
      ]}
    />
  );
}
