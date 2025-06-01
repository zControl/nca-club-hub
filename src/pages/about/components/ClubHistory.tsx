import { ContentPane } from "@/components/common/page/ContentPane";
import { Header3 } from "@/components/ui/typography";

export function ClubHistory() {
  return (
    <ContentPane
      wrapperClassName="bg-nca-blue"
      contentClassName="bg-card min-h-80"
    >
      <Header3>Club History</Header3>
      <div>CREATE A TIMELINE OF THE CLUB HISTORY</div>
    </ContentPane>
  );
}
