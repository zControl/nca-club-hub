import { cn } from "@/lib/utils";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  wrapperClassName?: string;
  contentClassName?: string;
}
export function Content({
  children,
  wrapperClassName,
  contentClassName,
  ...props
}: ContentProps) {
  return (
    <div className={cn("w-full", wrapperClassName)} {...props}>
      <div className={cn("mx-auto max-w-6xl", contentClassName)}>
        {children}
      </div>
    </div>
  );
}
