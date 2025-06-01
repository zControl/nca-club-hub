import { type NavigationItem } from "@/types/navigation";
import { useEffect, useRef, useState } from "react";

import {
  NavigationMenuLink,
  NavigationMenuTrigger as OriginalNavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "@tanstack/react-router";

function NavbarTrigger({ children }: { children: React.ReactNode }) {
  // This overrides the default NavigationMenuTrigger to prevent an initial click from closing the menu.
  // The "Original" Trigger is kept to provide consistent styling.
  const [disable, setDisable] = useState(false);

  const targetRef = useRef<HTMLButtonElement[]>([]);

  // Create observer on first render
  useEffect(() => {
    const observerCallback = (mutationsList: MutationRecord[]) => {
      for (const mutation of mutationsList) {
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
      className="hover:cursor-pointer"
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

function NavbarList({ items }: { items: NavigationItem[] }) {
  return (
    <div>
      <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] ">
        {items.map((item) => (
          <li key={item.title}>
            <NavigationMenuLink asChild>
              <Link
                to={item.href}
                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-highlight/40 hover:text-accent-foreground focus:bg-highlight/40 focus:text-accent-foreground"
              >
                <div className="flex items-center gap-4">
                  <div>{item.icon}</div>
                  <div>
                    <div className="text-md font-medium leading-none">
                      {item.title}
                    </div>
                    <p className="line-clamp-2 text-md leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { NavbarList, NavbarTrigger };
