import { Spinner } from "@/components/ui/spinner";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface InfoCardProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icon?: React.ReactElement<{ className: string }>;
  footer?: React.ReactNode;
  loading?: boolean;
}

export const InfoCard = ({
  title,
  description,
  icon,
  children,
  footer,
  loading,
}: InfoCardProps) => {
  return (
    <Card className="bg-nca-blue text-nca-blue-foreground">
      <CardHeader>
        <div className="flex flex-row gap-4 items-center">
          {icon && (
            <div className="flex items-center justify-center bg-nca-red p-4 text-nca-red-foreground rounded-full">
              {React.cloneElement(icon, {
                className: "w-12 h-12 text-nca-red-foreground",
              })}
            </div>
          )}
          <div className="flex flex-col space-y-1 text-left">
            <CardTitle className="text-3xl font-semibold">{title}</CardTitle>
            <CardDescription className="text-lg text-nca-blue-foreground">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-start">
        {loading ? <Spinner size="lg" /> : children}
      </CardContent>
      {footer && <CardFooter className="mx-auto">{footer}</CardFooter>}
    </Card>
  );
};
