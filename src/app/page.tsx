import {
  ArrowRight,
  BookOpenCheck,
  CalendarDays,
  CircleGauge,
  Clock3,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import {
  Alert,
  Card,
  CardHeader,
  Container,
  PageHeader,
  ResponsiveGrid,
  SectionHeader,
  Stack,
  StatusBadge,
} from "@/components/ui";

const modules = [
  {
    href: "/assignments",
    title: "Assignment Management",
    description: "Organize coursework, due dates, priorities, and reminders.",
    icon: BookOpenCheck,
  },
  {
    href: "/study-plan",
    title: "AI Study Planning",
    description: "Prepare reviewable study-plan drafts around real availability.",
    icon: Sparkles,
  },
  {
    href: "/schedule",
    title: "Class Schedule",
    description: "Bring class time and linked academic work into one view.",
    icon: CalendarDays,
  },
  {
    href: "/focus",
    title: "Focus Session",
    description: "Run assignment-linked focus intervals and retain honest logs.",
    icon: Clock3,
  },
  {
    href: "/gpa",
    title: "GPA Tracking",
    description: "Record course results and understand weighted progress.",
    icon: GraduationCap,
  },
  {
    href: "/workload-risk",
    title: "Workload-Risk Warning",
    description: "Review planning signals and contributing workload factors.",
    icon: CircleGauge,
  },
];

export default function DashboardPage() {
  return (
    <Container>
      <Stack gap="lg">
        <PageHeader
          title="A calmer academic workspace"
          description="UniPilot AI now has a responsive, accessible foundation for coursework, planning, focus, and academic progress. Feature logic will arrive in later phases."
          badge={<StatusBadge variant="success">Phase 1 foundation</StatusBadge>}
        />

        <Alert title="What is ready" variant="info">
          Navigation, design tokens, responsive layouts, and shared interface components are in place. No academic data or automated behavior is being simulated.
        </Alert>

        <ResponsiveGrid>
          <Card>
            <CardHeader>
              <SectionHeader
                title="Academic modules"
                description="Each destination is available as an honest foundation route for the next implementation phase."
              />
            </CardHeader>
            <ul className="divide-y divide-[var(--color-border)]">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <li key={module.href}>
                    <Link
                      href={module.href}
                      className="group flex min-h-20 items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-[var(--color-surface-muted)] sm:px-6"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-primary-soft)] text-[var(--color-selected-text)]">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-semibold text-[var(--color-ink)]">{module.title}</span>
                        <span className="mt-1 block text-sm text-[var(--color-text-muted)]">{module.description}</span>
                      </span>
                      <ArrowRight className="size-5 shrink-0 text-[var(--color-text-muted)] transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Card>

          <aside className="self-start rounded-[var(--radius-lg)] bg-[var(--color-primary-soft)] p-5 text-[var(--color-selected-text)] sm:p-6" aria-labelledby="foundation-principles-title">
            <h2 id="foundation-principles-title" className="text-lg font-semibold text-current">
              Foundation principles
            </h2>
            <ul className="mt-4 grid gap-4 text-sm leading-6">
              <li>
                <strong className="block">Actions stay clear</strong>
                Structure and state carry meaning before decoration.
              </li>
              <li>
                <strong className="block">Intelligence stays honest</strong>
                Future AI output will remain reviewable and explicitly confirmed.
              </li>
              <li>
                <strong className="block">Risk stays in context</strong>
                Workload Risk is a planning aid, never a medical diagnosis.
              </li>
            </ul>
          </aside>
        </ResponsiveGrid>
      </Stack>
    </Container>
  );
}
