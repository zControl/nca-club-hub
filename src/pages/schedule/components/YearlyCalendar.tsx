import { ContentPane } from "@/components/common/page/ContentPane";
import { BulletList } from "@/components/ui/bullet-list";
import { Header1, Paragraph } from "@/components/ui/typography";

interface CalendarEvent {
  title: string;
}

interface MonthData {
  month: string;
  events: CalendarEvent[];
}

export function YearlyCalendar() {
  const calendarData: MonthData[] = [
    {
      month: "MAY",
      events: [{ title: "TRYOUTS" }],
    },
    {
      month: "JUNE",
      events: [
        { title: "BEGIN TRAINING" },
        { title: "FIRECRACKER TOURNAMENT" },
      ],
    },
    {
      month: "JULY",
      events: [
        {
          title: "WEEKLY TRAINING",
        },
        {
          title: "ADDITIONAL TOURNAMENTS",
        },
      ],
    },
    {
      month: "AUGUST",
      events: [
        {
          title: "WEEKLY TRAINING",
        },
        {
          title: "BOYS HS SEASON STARTS",
        },
      ],
    },
    {
      month: "SEPTEMBER",
      events: [
        {
          title: "WEEKLY TRAINING",
        },
        {
          title: "U11-U14 FALL SEASON STARTS",
        },
      ],
    },
    {
      month: "OCTOBER",
      events: [
        {
          title: "WEEKLY TRAINING",
        },
        { title: "FALL SEASON CONTINUES" },
      ],
    },
    {
      month: "NOVEMBER",
      events: [{ title: "FALL SEASON ENDS" }, { title: "BOYS HS STATE CUP" }],
    },
    {
      month: "DECEMBER",
      events: [{ title: "WINTER BREAK" }, { title: "GIRLS HS LEAGUE STARTS" }],
    },
    {
      month: "JANUARY",
      events: [{ title: "GIRLS HS LEAGUE STARTS" }],
    },
    {
      month: "FEBRUARY",
      events: [
        { title: "WEEKLY TRAINING" },
        { title: "U11-U14 SPRING SEASON STARTS" },
      ],
    },
    {
      month: "MARCH",
      events: [
        { title: "GIRLS HS LEAGUE ENDS" },
        { title: "U11-U14 SPRING SEASON" },
      ],
    },
    {
      month: "APRIL",
      events: [{ title: "GIRLS HS STATE CUP" }, { title: "U11-U14 STATE CUP" }],
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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {calendarData.map((item, index) => (
          <div key={index} className="flex-1 flex flex-col">
            <div className="p-2 bg-nca-blue text-nca-blue-foreground text-2xl font-bold text-center border-b-2 border-foreground">
              {item.month}
            </div>
            <div className="flex flex-grow flex-col">
              {item.events.map((event, eventIndex) => (
                <div
                  className="p-4 bg-nca-red text-nca-red-foreground text-xl font-semibold h-full flex-grow"
                  key={eventIndex}
                >
                  {event.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ContentPane>
  );
}
