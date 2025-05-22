import { RebelRecPage } from "@/pages/rebelrec/RebelRecPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/rebelrec_")({
  component: RebelRecPage,
});
