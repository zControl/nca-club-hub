import { SectionDescription, SectionTitle } from "@/components/ui/typography";

export function AppName() {
  return (
    <div className="flex flex-col">
      <SectionTitle className="text-4xl font-semibold">
        NORTH COUNTY ALLIANCE FC
      </SectionTitle>
      <SectionDescription className="text-lg">
        High Quality Select Soccer at an unbelievable price
      </SectionDescription>
    </div>
  );
}
