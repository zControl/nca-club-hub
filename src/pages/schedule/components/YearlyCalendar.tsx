import { ContentPane } from "@/components/common/page/ContentPane";
import { Tile } from "@/components/composites/Tile";
import { BulletList } from "@/components/ui/bullet-list";
import { Header1, Paragraph } from "@/components/ui/typography";

interface CalendarEvent {
  name: string;
}

interface MonthData {
  month: string;
  events: CalendarEvent[];
}

export function YearlyCalendar() {
  const calendarData: MonthData[] = [
    {
      month: "APR - MAY",
      events: [{ name: "Tryouts" }],
    },
    {
      month: "JUN - JULY - AUG",
      events: [
        {
          name: "Summer Tournaments",
        },
      ],
    },
    {
      month: "SEPT - OCT - NOV",
      events: [{ name: "Fall Season" }],
    },
    {
      month: "DEC - JAN",
      events: [{ name: "Winter Break" }],
    },
    {
      month: "FEB - MAR",
      events: [{ name: "Spring Season" }],
    },
  ];
  return (
    <ContentPane
      wrapperClassName="bg-nca-blue"
      contentClassName="bg-card rounded-md p-4"
    >
      <Header1>CLUB CALENDAR</Header1>
      <Paragraph>
        What does a season look like for year round teams?
        <BulletList
          items={[
            "Tryouts",
            "Summer Tournaments",
            "Fall League Play",
            "Winter Break",
            "Spring League Play",
            "State Cup Tournament",
          ]}
        />
      </Paragraph>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {calendarData.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col">
            <div className="p-2 bg-nca-blue text-nca-blue-foreground font-bold text-center border-b-2 border-foreground">
              {item.month}
            </div>
            <div className="px-2 py-6 bg-nca-red text-nca-red-foreground flex flex-grow flex-col">
              {item.events.map((event, eventIndex) => (
                <Tile title="Hello" description="World" key={eventIndex}>
                  {event.name}
                </Tile>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ContentPane>
  );
}
