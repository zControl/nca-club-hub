import { ContentPane } from "@/components/common/page/ContentPane";
import { UnderConstruction } from "@/components/common/page/UnderConstruction";
import { Header3 } from "@/components/ui/typography";

export function ClubHistory() {
  return (
    <ContentPane
      wrapperClassName="bg-nca-blue"
      contentClassName="bg-card min-h-80"
    >
      <Header3>Club History</Header3>
      <UnderConstruction
        items={[
          {
            title: "Timeline Component",
            description:
              "Create a timeline of the club history with significant milestones.",
          },
        ]}
      />
    </ContentPane>
  );
}
