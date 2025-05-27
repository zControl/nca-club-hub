import {
  clubItems,
  competitiveItems,
  recreationItems,
} from "@/components/common/header/headerItems";
import { ButtonLink } from "@/components/composites/ButtonLink";
import { NavbarList, NavbarTrigger } from "@/components/ui/navbar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function NavMenuFull() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavbarTrigger>The Club</NavbarTrigger>
          <NavigationMenuContent>
            <NavbarList items={clubItems} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavbarTrigger>Competitive</NavbarTrigger>
          <NavigationMenuContent>
            <NavbarList items={competitiveItems} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavbarTrigger>Rebel Rec</NavbarTrigger>
          <NavigationMenuContent>
            <NavbarList items={recreationItems} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ButtonLink href="/join">Join</ButtonLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ButtonLink href="/resources">Resources</ButtonLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
