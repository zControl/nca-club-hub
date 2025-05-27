import { ResourcesPage } from "@/pages/resources/ResourcesPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/resources")({
  component: ResourcesPage,
});
