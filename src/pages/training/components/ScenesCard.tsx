import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { IceCream2Icon, PlusCircleIcon } from "lucide-react";
export function ScenesCard() {
  return (
    <Card>
      <CardTitle className="text-center">SCENES</CardTitle>
      <CardContent className="flex flex-row gap-2 items-center justify-center">
        <div className="h-24 w-24 bg-blue-300 flex items-center justify-center">
          <IceCream2Icon size={64} />
        </div>
        <div className="h-24 w-24 bg-green-300 items-center flex justify-center">
          <PlusCircleIcon size={64} />
        </div>
      </CardContent>
    </Card>
  );
}
