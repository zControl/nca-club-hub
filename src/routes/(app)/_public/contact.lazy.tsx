import { ContactPage } from "@/pages/contact/ContactPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/contact")({
  component: ContactPage,
});
