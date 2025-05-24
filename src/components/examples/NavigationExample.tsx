import { PageSections } from "@/components/common/page/PageSections";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  ChevronDown,
  Copy,
  CopyCheck,
  CopyPlus,
  IceCream2Icon,
  IceCreamBowlIcon,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { ActionModal } from "@/components/composites/ActionModal";
import { NavBarVertical } from "@/components/composites/NavbarVertical";
import { NavbarList, NavbarTrigger } from "@/components/ui/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { NavigationItem } from "@/types/navigation";

const mockNavigationItems: NavigationItem[] = [
  {
    title: "Title 1",
    href: "/title1",
    description: "This is the title 1 description.",
    tooltip: "TT Title 1",
    icon: <IceCream2Icon />,
  },
  {
    title: "Title 2",
    href: "/title2",
    description: "This is the title 2 description.",
    tooltip: "TT Title 2",
    icon: <IceCreamBowlIcon />,
  },
];

const TabbedItemsExampleContent = () => {
  // TODO: Make this into a resuable component
  return (
    <div className="grid grid-cols-1 w-[340px]">
      <Tabs defaultValue="tab-1" className="w-full p-2">
        <TabsList className="w-full">
          <TabsTrigger value="tab-1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab-2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab-3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <p>Tab 1 Content</p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p>Tab 2 Content</p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p>Tab 3 Content</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export const PopoverCommandExample = () => {
  // TODO: Make this into a resuable component
  return (
    <nav className="flex flex-row justify-start items-center space-x-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            Create <ChevronDown className="ml-1" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto" align="end">
          <Command>
            <CommandList>
              <CommandGroup>
                <CommandItem>
                  <ActionModal
                    title="New thing"
                    trigger={
                      <span className="flex flex-row items-center">
                        <Plus className="mr-4 h-8 w-8" />
                        New Thing
                      </span>
                    }
                    description="Create a new thing"
                    onCancel={() => console.log("Cancel")}
                    onConfirm={() => console.log("Confirm")}
                  >
                    <p>New thing form here.</p>
                  </ActionModal>
                </CommandItem>
                <CommandItem>
                  <ActionModal
                    title="New from existing"
                    trigger={
                      <span className="flex flex-row items-center">
                        <Copy className="mr-4 h-8 w-8" />
                        New From Existing
                      </span>
                    }
                    description="Duplicate an existing thing"
                    onCancel={() => console.log("Cancel")}
                    onConfirm={() => console.log("Confirm")}
                  >
                    <p>Form to select the thing to copy from</p>
                  </ActionModal>
                </CommandItem>
                <CommandItem>
                  <ActionModal
                    title="New from template"
                    trigger={
                      <span className="flex flex-row items-center">
                        <CopyCheck className="mr-4 h-8 w-8" />
                        New From Template
                      </span>
                    }
                    description="Create a new thing from a template"
                    onCancel={() => console.log("Cancel")}
                    onConfirm={() => console.log("Confirm")}
                  >
                    <p>
                      Form to select the template and then customize the
                      properties
                    </p>
                  </ActionModal>
                </CommandItem>
                <CommandItem>
                  <ActionModal
                    title="Create new template"
                    trigger={
                      <span className="flex flex-row items-center">
                        <CopyPlus className="mr-4 h-8 w-8" />
                        Create Template
                      </span>
                    }
                    description="Create a new tempalate that can resused for other things."
                    onCancel={() => console.log("Cancel")}
                    onConfirm={() => console.log("Confirm")}
                  >
                    <p>Form to build out the new template.</p>
                  </ActionModal>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

function NavbarHorizontalManual() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavbarTrigger>Item List</NavbarTrigger>
          <NavigationMenuContent>
            <NavbarList items={mockNavigationItems} />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavbarTrigger>Tabs</NavbarTrigger>
          <NavigationMenuContent>
            <TabbedItemsExampleContent />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <PopoverCommandExample />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavbarVerticalTile() {
  return <NavBarVertical items={mockNavigationItems} />;
}
function ContextMenuTile() {
  return <div>menubar tile</div>;
}

const sections = [
  {
    id: "navbar-horizontal-manual",
    title: "Navbar Horizontal Manual",
    children: <NavbarHorizontalManual />,
  },
  {
    id: "navbar-vertical",
    title: "Navbar Vertical",
    children: <NavbarVerticalTile />,
  },
  { id: "context-menu", title: "Context Menu", children: <ContextMenuTile /> },
];
export const NavigationExample = () => {
  return <PageSections sections={sections} />;
};
