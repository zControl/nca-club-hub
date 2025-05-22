import { AboutPage } from "@/pages/about/AboutPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/about")({
  component: AboutPage,
});
