import { useEffect, useRef, useState } from "react";

import { NavigationMenuTrigger as OriginalNavigationMenuTrigger } from "@/components/ui/navigation-menu";

// This overrides the default NavigationMenuTrigger to prevent an initial click from closing the menu.
// The "Original" Trigger is kept to provide consistent styling.
export function NavbarTrigger({ children }: { children: React.ReactNode }) {
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
          attributes: true
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