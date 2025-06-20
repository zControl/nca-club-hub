import { ContentPane } from "@/components/common/page/ContentPane";
import { Header3 } from "@/components/ui/typography";
import { AgeGroupCalculator } from "@/features/ages/components/AgeGroupCalculator";
import { scheduleColumns } from "@/pages/tryouts/components/TryoutScheduleColumns";
import { TryoutScheduleTable } from "@/pages/tryouts/components/TryoutScheduleTable";
import { mockTryoutSchedule } from "@/pages/tryouts/data/getTryoutSchedule";

export function TryoutScheduleTile() {
  return (
    <ContentPane
      wrapperClassName="bg-nca-blue"
      contentClassName="bg-card rounded-md p-6"
    >
      <div className="text-center text-lg font-semibold mb-4 flex flex-col gap-4">
        <AgeGroupCalculator />
        <div>
          <Header3>Girls Tryout Dates</Header3>
          <TryoutScheduleTable
            columns={scheduleColumns}
            data={mockTryoutSchedule}
          />
        </div>
        <div>
          <Header3>Boys Tryout Dates</Header3>
          <TryoutScheduleTable
            columns={scheduleColumns}
            data={mockTryoutSchedule}
          />
        </div>
      </div>
    </ContentPane>
  );
}
