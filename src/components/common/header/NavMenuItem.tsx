import { cn } from "@/lib/utils";

interface NavMenuListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
}

export function NavMenuListItem({
  className,
  title,
  children,
  ...props
}: NavMenuListItemProps) {
  return (
    <li>
      <a
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className,
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
}
