import { RebelRecFaqPage } from "@/pages/rebelrec/RebelRecFaqPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/rebelrec/faq")({
  component: RebelRecFaqPage,
});
