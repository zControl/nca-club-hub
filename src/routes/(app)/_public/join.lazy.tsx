import { JoinPage } from "@/pages/join/JoinPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/join")({
  component: JoinPage,
});
