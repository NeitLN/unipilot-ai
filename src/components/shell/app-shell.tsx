import { DesktopNavigation, MobileNavigation } from "./navigation";
import { TopHeader } from "./top-header";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-grid">
      <DesktopNavigation />
      <div className="app-column">
        <TopHeader />
        <main id="main-content" className="page-main" tabIndex={-1}>
          {children}
        </main>
      </div>
      <MobileNavigation />
    </div>
  );
}
