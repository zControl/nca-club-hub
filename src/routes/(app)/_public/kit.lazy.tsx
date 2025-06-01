import { KitPage } from "@/pages/kit/KitPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/kit")({
  component: KitPage,
});
