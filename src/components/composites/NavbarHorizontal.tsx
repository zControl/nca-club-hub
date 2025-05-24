import { NavbarTrigger } from "@/components/ui/navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLinkItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import type { NavigationItem } from "@/types/navigation";

//! This component isn't actually useful, since the triggers and items will be different.
const NavBarHorizontal = ({
  triggers,
  items,
}: {
  triggers: NavigationItem[];
  items: NavigationItem[];
}) => {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          {triggers.map((trigger, index) => (
            <NavigationMenuItem key={index}>
              <NavbarTrigger>
                {trigger.icon && <span className="mr-2">{trigger.icon}</span>}
                {trigger.title}
              </NavbarTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-1 w-[200px]">
                  {items.map((item) => (
                    <NavigationMenuLinkItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    ></NavigationMenuLinkItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export { NavBarHorizontal };
