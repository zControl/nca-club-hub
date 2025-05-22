import { FieldsPage } from "@/pages/fields/FieldsPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/fields")({
  component: FieldsPage,
});
