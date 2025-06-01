import { RebelRecCupPage } from "@/pages/rebelrec/RebelRecCupPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/rebelrec/cup")({
  component: RebelRecCupPage,
});
