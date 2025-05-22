import { cn } from "@/lib/utils";
import React from "react";

const GoalCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-background text-card-foreground", className)}
    {...props}
  />
));
GoalCard.displayName = "GoalCard";

const GoalCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-2xl font-semibold leading-none", className)}
    {...props}
  />
));
GoalCardTitle.displayName = "GoalCardTitle";

const GoalCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("py-2", className)} {...props} />
));
GoalCardContent.displayName = "GoalCardContent";

const GoalCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("bg-card text-card-foreground", className)}
    {...props}
  />
));
GoalCardImage.displayName = "GoalCardImage";

export { GoalCard, GoalCardContent, GoalCardImage, GoalCardTitle };
