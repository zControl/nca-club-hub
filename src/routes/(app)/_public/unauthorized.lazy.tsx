import { UnauthorizedPage } from "@/components/common/page/UnauthorizedPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/unauthorized")({
  component: UnauthorizedPage,
});
