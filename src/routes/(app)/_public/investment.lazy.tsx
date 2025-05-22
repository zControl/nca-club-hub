import { InvestmentPage } from "@/pages/investment/InvestmentPage";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/(app)/_public/investment")({
  component: InvestmentPage,
});
