import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowBigLeftIcon,
  ArrowBigRightIcon,
  IceCream2Icon,
  PlusCircleIcon,
} from "lucide-react";
export function ScenesCard() {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between">
        <div>
          <ArrowBigLeftIcon size={64} />
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="h-24 w-24 bg-blue-300 items-center flex justify-center">
            <IceCream2Icon size={64} />
          </div>
          <div className="h-24 w-24 bg-green-300 items-center flex justify-center">
            <PlusCircleIcon size={64} />
          </div>
        </div>
        <div>
          <ArrowBigRightIcon size={64} />
        </div>
      </CardContent>
    </Card>
  );
}
