import type { Metadata } from "next";
import { FeatureFoundation } from "@/components/features/feature-foundation";

export const metadata: Metadata = { title: "Assignments" };

export default function AssignmentsPage() {
  return (
    <FeatureFoundation
      title="Assignment Management"
      description="The future home for creating, prioritizing, tracking, and reviewing coursework deadlines."
      futureCapabilities={[
        "Create and validate assignments with subject, due date, weight, and priority.",
        "Distinguish overdue work from high-priority work without relying on color alone.",
        "Support reminders, editing, completion, and safe deletion once behavior is defined.",
      ]}
    />
  );
}
