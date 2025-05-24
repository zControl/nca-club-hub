import { cn } from "@/lib/utils";
import { type NavigationItem } from "@/types/navigation";
import { useEffect, useRef, useState } from "react";

import { NavigationMenuTrigger as OriginalNavigationMenuTrigger } from "@/components/ui/navigation-menu";

export function NavbarTrigger({ children }: { children: React.ReactNode }) {
  // This overrides the default NavigationMenuTrigger to prevent an initial click from closing the menu.
  // The "Original" Trigger is kept to provide consistent styling.
  const [disable, setDisable] = useState(false);

  const targetRef = useRef<HTMLButtonElement[]>([]);

  // Create observer on first render
  useEffect(() => {
    const observerCallback = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
        /* console.log(mutation.target); */
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-state" &&
          (mutation.target as HTMLElement).dataset.state === "open"
        ) {
          setDisable(true);
          const timeout = setTimeout(() => {
            setDisable(false);
            clearTimeout(timeout);
          }, 1000);
        }
      }
    };

    const observer = new MutationObserver(observerCallback);

    // Add ref nodes to observer watch
    targetRef.current.forEach((element) => {
      if (element) {
        observer.observe(element, {
          attributes: true,
        });
      }
    });

    // Disconnect on dismount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <OriginalNavigationMenuTrigger
      ref={(ref) => {
        if (ref) {
          targetRef.current[0] = ref;
        }
      }}
      onClick={(e) => {
        if (disable) {
          e.preventDefault();
        }
      }}
    >
      {children}
    </OriginalNavigationMenuTrigger>
  );
}

export function NavbarList({ items }: { items: NavigationItem[] }) {
  return (
    <div>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
        {items.map((item) => (
          <NavMenuListItem
            className="font-medium text-lg"
            key={item.title}
            title={item.title}
            href={item.href}
          >
            {item.description}
          </NavMenuListItem>
        ))}
      </ul>
    </div>
  );
}

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
