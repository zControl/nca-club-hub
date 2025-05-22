import { MissionPage } from "@/pages/mission/MissionPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/mission")({
  component: MissionPage,
});
