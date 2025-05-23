import { PageContainer } from "@/components/common/page/PageContainer";
import { RebelRecFaqAccordian } from "@/pages/rebelrec/components/RebelRecFaqAccordian";
export function RebelRecFaqPage() {
  return (
    <PageContainer
      title="RebelRec | FAQ"
      description="Frequently Asked Questions"
    >
      <RebelRecFaqAccordian />
    </PageContainer>
  );
}
