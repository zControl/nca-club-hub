import { cn } from "@/lib/utils";
import * as React from "react";

export type CoinProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
};

export function Coin({ className, value, ...props }: CoinProps) {
  return (
    <div
      className={cn(
        "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
        "bg-yellow-400 border-2 border-yellow-600",
        "shadow-inner shadow-yellow-300",
        "flex items-center justify-center",
        "font-bold text-yellow-800",
        className,
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-50"></div>
      <span className="relative z-10">{value}</span>
    </div>
  );
}

Coin.displayName = "Coin";
