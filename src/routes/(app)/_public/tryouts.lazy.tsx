import { TryoutsPage } from "@/pages/tryouts/TryoutsPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/tryouts")({
  component: TryoutsPage,
});
