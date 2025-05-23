import { AppFooter } from "@/components/common/footer/AppFooter";
import { AppHeader } from "@/components/common/header/AppHeader";
import { Outlet } from "@tanstack/react-router";

export function BasicLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <div className="flex-grow">
        <Outlet />
      </div>
      <AppFooter />
    </div>
  );
}
