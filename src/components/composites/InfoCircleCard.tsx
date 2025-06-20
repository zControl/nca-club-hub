import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useIsMobile } from "@/hooks/useIsMobile";
import { type LucideIcon } from "lucide-react";
import React from "react";

interface InfoCircleCardProps {
  icon: LucideIcon;
  description: React.ReactNode;
  action: React.ReactNode;
}
export function InfoCircleCard({
  icon: Icon,
  description,
  action,
}: InfoCircleCardProps) {
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 72 : 96;
  const iconWithSize = React.cloneElement(<Icon />, { size: iconSize });
  const cardSizeClasses = isMobile ? "h-64 w-64" : "h-72 w-72";

  return (
    <Card
      className={`border-nca-red rounded-full border-4 gap-2 py-4 ${cardSizeClasses}`}
    >
      <CardContent className="flex flex-col justify-between items-center gap-6">
        <div>{iconWithSize}</div>
        <CardDescription className="w-full max-h-24 text-center line-clamp-4">
          {description}
        </CardDescription>
        <CardAction className="self-center">{action}</CardAction>
      </CardContent>
    </Card>
  );
}
