import { ContentPane } from "@/components/common/page/ContentPane";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCalendarEvents } from "@/pages/schedule/hooks/useCalendarEvents";
import { formatDateFromTo } from "@/utils/formatDateTime";
import { useState } from "react";

export function EventCalendar() {
  const [date, setDate] = useState<Date>(new Date());
  const [month, setMonth] = useState<Date | undefined>(new Date());
  const { events, isLoading, fetchEventsByDate } = useCalendarEvents(date);

  const handleDateClick = (date: Date) => {
    setDate(date);
    fetchEventsByDate(date);
  };

  return (
    <ContentPane wrapperClassName="bg-nca-red">
      <Card className="w-fit py-4 mx-auto">
        <CardHeader>
          <CardTitle>Club Calendar</CardTitle>
          <CardDescription>See upcoming events</CardDescription>
          <CardAction>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setMonth(new Date());
                setDate(new Date());
              }}
            >
              Today
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="px-4">
          <Calendar
            mode="single"
            month={month}
            onMonthChange={setMonth}
            selected={date}
            onSelect={handleDateClick}
            className="bg-transparent p-0 [--cell-size:--spacing(11)] md:[--cell-size:--spacing(16)]"
            required
          />
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-3 border-t px-4 !pt-4">
          <div className="flex w-full items-center justify-between px-1">
            <div className="text-sm font-medium">
              {date?.toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>
          <div className="flex w-full flex-col gap-2">
            {isLoading && <p>Loading events...</p>}
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-muted after:bg-primary/70 relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full"
              >
                <div className="font-medium">{event.title}</div>
                <div className="text-muted-foreground text-xs">
                  {formatDateFromTo(new Date(event.from), new Date(event.to))}
                </div>
              </div>
            ))}
          </div>
        </CardFooter>
      </Card>
    </ContentPane>
  );
}
