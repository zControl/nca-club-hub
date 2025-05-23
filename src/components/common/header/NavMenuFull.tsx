import { NavMenuListItem } from "@/components/common/header/NavMenuItem";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  clubItems,
  competitiveItems,
  recreationItems,
} from "@/resources/navigationItems";

export function NavMenuFull() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-xl">
            The Club
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {clubItems.map((item) => (
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
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-xl">
            Competitive
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {competitiveItems.map((item) => (
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
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="font-semibold text-xl">
            Rebel Rec
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {recreationItems.map((item) => (
                <NavMenuListItem
                  className="font-medium text-lg "
                  key={item.title}
                  title={item.title}
                  href={item.href}
                >
                  {item.description}
                </NavMenuListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/join"
            className="font-semibold text-xl block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Join
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/resources"
            className="font-semibold text-xl block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          >
            Resources
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
