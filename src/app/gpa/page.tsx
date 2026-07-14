import type { Metadata } from "next";
import { FeatureFoundation } from "@/components/features/feature-foundation";

export const metadata: Metadata = { title: "GPA" };

export default function GpaPage() {
  return (
    <FeatureFoundation
      title="GPA Tracking"
      description="The future academic-progress workspace for course results, weighted GPA, and transparent target forecasting."
      futureCapabilities={[
        "Validate final grade points and positive credit hours.",
        "Show semester, cumulative, and per-course weighted contributions.",
        "Explain the required average for a target GPA without hiding the formula.",
      ]}
    />
  );
}
