import { colorVariants } from "@/components/ui/color-variants";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

interface ColorChipProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

export function ColorChip({
  className,
  value,
  color,
  size,
  ...props
}: ColorChipProps & VariantProps<typeof colorVariants>) {
  return (
    <div
      className={cn(
        "relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full",
        "flex items-center justify-center font-bold",
        colorVariants({ color, size }),
        className,
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{value}</span>
    </div>
  );
}
