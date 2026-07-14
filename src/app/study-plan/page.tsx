import type { Metadata } from "next";
import { FeatureFoundation } from "@/components/features/feature-foundation";

export const metadata: Metadata = { title: "Study Plan" };

export default function StudyPlanPage() {
  return (
    <FeatureFoundation
      title="AI Study Plan"
      description="A future review-and-confirm workflow for realistic study sessions based on workload and availability."
      futureCapabilities={[
        "Collect positive availability and verify that pending assignments exist.",
        "Generate an editable draft without activating it automatically.",
        "Validate class conflicts and daily capacity before explicit confirmation.",
      ]}
    />
  );
}
