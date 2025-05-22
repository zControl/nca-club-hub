import { RebelRecRegistrationPage } from "@/pages/rebelrec/RebelRecRegistrationPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute(
  "/(app)/_public/rebelrec/registration",
)({
  component: RebelRecRegistrationPage,
});
