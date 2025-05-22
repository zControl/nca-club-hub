import { SchedulePage } from "@/pages/schedule/SchedulePage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/schedule")({
  component: SchedulePage,
});
