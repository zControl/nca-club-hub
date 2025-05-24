import React from "react";
import type { NavigationItem } from "../../types/navigation";
import { ButtonLink } from "./ButtonLink";

const NavBarVertical = ({ items }: { items: NavigationItem[] }) => {
  return (
    <nav className="w-max grid grid-cols-1 gap-y-4 bg-card border-2 border-muted py-4 px-2">
      {items.map((item, index) => {
        return (
          <ButtonLink key={index} href={`/${item.href}`}>
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              {item.icon && React.cloneElement(item.icon, { size: 36 })}
              <span className="mt-1 text-sm">{item.title}</span>
            </div>
          </ButtonLink>
        );
      })}
    </nav>
  );
};

export { NavBarVertical };
