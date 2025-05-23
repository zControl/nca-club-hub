import { ErrorPage } from "@/components/common/error/ErrorPage";
import { Toaster } from "@/components/ui/sonner";
import type { AuthContext } from "@/features/auth/AuthContext";
import { NotFoundPage } from "@/pages/NotFoundPage";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../index.css";

interface AppRouterContext {
  auth: AuthContext;
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<AppRouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
  errorComponent: ErrorPage,
});

function RootLayout() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      <Toaster />
    </>
  );
}
