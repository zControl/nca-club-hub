import { BasicLayout } from "@/components/common/layout/BasicLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_public")({
  component: BasicLayout,
});
