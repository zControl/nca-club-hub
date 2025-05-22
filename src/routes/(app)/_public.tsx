import { BasicLayout } from "@/components/layout/BasicLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_public")({
  component: BasicLayout,
});
