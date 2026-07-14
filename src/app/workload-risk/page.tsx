import type { Metadata } from "next";
import { FeatureFoundation } from "@/components/features/feature-foundation";

export const metadata: Metadata = { title: "Workload Risk" };

export default function WorkloadRiskPage() {
  return (
    <FeatureFoundation
      title="Workload-Risk Warning"
      description="The future planning view for understanding workload volume, overdue work, focus patterns, and suggested adjustments."
      futureCapabilities={[
        "Show Not Enough Data instead of estimating from incomplete information.",
        "Explain every contributing factor behind a recorded planning score.",
        "State clearly that workload risk is a planning aid, not a medical diagnosis.",
      ]}
    />
  );
}
