import { cn } from "@/lib/utils";
import type { AnchorHTMLAttributes } from "react";

interface LinkTextProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  openInNewTab?: boolean;
}

export function LinkText({
  href,
  children,
  className,
  openInNewTab = false,
  ...props
}: LinkTextProps) {
  return (
    <a
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      className={cn(
        "text-lg text-highlight/80 font-bold",
        "hover:text-highlight hover:underline",
        "hover:bg-highlight/10 rounded",
        "transition-all duration-200 ease-in-out",
        "px-2",
        "inline-flex items-center",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}
