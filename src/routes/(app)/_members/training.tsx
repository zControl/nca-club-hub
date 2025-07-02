import { TrainingPage } from "@/pages/training/TrainingPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_members/training")({
  component: TrainingPage,
});
