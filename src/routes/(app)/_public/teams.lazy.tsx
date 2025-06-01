import { TeamsPage } from "@/pages/teams/TeamsPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/teams")({
  component: TeamsPage,
});
