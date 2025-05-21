import { AppLayout } from "@/components/common/AppLayout";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/(test)/_test")({
  component: TestLayoutComponent,
});

function TestLayoutComponent() {
  return (
    <AppLayout
      logo={<div>Logo</div>}
      actions={<div>Actions</div>}
      navigation={<div>Navigation</div>}
      mobileMenu={<div>Mobile</div>}
    >
      <Outlet />
    </AppLayout>
  );
}
