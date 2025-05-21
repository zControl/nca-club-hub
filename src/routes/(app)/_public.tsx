import { AppHeader } from "@/components/common/AppHeader";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_public")({
  component: PublicLayout,
});

function PublicLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
