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
        <AlertDialogHeader>
          <AlertDialogTitle>Age Group Calculator</AlertDialogTitle>
          <AlertDialogDescription>
            Determine a players age group based on their date of birth.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <BirthdayForm />
        <AlertDialogFooter>
          <AlertDialogCancel>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
