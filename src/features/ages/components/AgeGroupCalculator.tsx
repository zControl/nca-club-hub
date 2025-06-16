import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import BirthdayForm from "@/features/ages/components/BirthdayForm";

export function AgeGroupCalculator() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className="w-auto  mx-auto">
        <Button variant={"highlight"} size={"lg"}>
          Age Group Calculator
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <ScrollArea className="max-h-[80vh]">
          <AlertDialogHeader>
            <AlertDialogTitle>Determine Player Age Group</AlertDialogTitle>
            <AlertDialogDescription>
              Enter player's birthday to determine their age group.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <BirthdayForm />
        </ScrollArea>
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
