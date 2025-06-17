import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Header1 } from "@/components/ui/typography";
import { determineTeamFromBirthday } from "@/utils/getSeasonYear";
import { useState } from "react";

const birthdayFormSchema = z.object({
  month: z.string().min(1, { message: "Select month" }),
  day: z.string().min(1, { message: "Select day" }),
  year: z.string().min(4, { message: "Select year" }),
});
function BirthdayForm() {
  const [result, setResult] = useState<string>("No result yet.");

  const form = useForm<z.infer<typeof birthdayFormSchema>>({
    resolver: zodResolver(birthdayFormSchema),
    defaultValues: {
      month: "",
      day: "",
      year: "",
    },
  });

  // Generate arrays for months, days, and years
  const months = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
    { value: "8", label: "August" },
    { value: "9", label: "September" },
    { value: "10", label: "October" },
    { value: "11", label: "November" },
    { value: "12", label: "December" },
  ];

  const days = Array.from({ length: 31 }, (_, i) => ({
    value: String(i + 1),
    label: String(i + 1),
  }));

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 6;
  const endYear = currentYear - 17;
  const years = Array.from({ length: startYear - endYear + 1 }, (_, i) => ({
    value: String(startYear - i),
    label: String(startYear - i),
  }));

  function onSubmit(values: z.infer<typeof birthdayFormSchema>) {
    const { day, month, year } = values;
    const team = determineTeamFromBirthday(day, month, year);
    setResult(team);

    console.log(`Player should be on team: ${team}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 place-items-center py-6">
          <FormLabel>Select Player Birthdate</FormLabel>
          <div className="flex flex-col md:flex-row  gap-2">
            <FormField
              control={form.control}
              name="month"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Month</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month.value} value={month.value}>
                          {month.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="day"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Day</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="min-w-[80px]">
                        <SelectValue placeholder="Select day" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day.value} value={day.value}>
                          {day.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="min-w-[100px]">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year.value} value={year.value}>
                          {year.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button variant={"primary"} type="submit">
              CHECK AGE GROUP
            </Button>
          </div>
          <div className="flex flex-col px-4 text-center">
            <CardTitle>You should play with</CardTitle>
            <Header1 className="text-highlight">{result}</Header1>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default BirthdayForm;
