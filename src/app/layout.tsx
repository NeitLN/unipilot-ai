import type { Metadata } from "next";
import { AppShell } from "@/components/shell/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "UniPilot AI",
    template: "%s · UniPilot AI",
  },
  description: "A practical student productivity workspace for coursework, planning, focus, and academic progress.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
