import { PageSections } from "@/components/common/page/PageSections";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLinkItem
} from "@/components/ui/navigation-menu";

import {
  BrainCircuit,
  Cable,
  ClipboardList,
  Container,
  Network,
  SmartphoneCharging, ChevronDown, Plus, Copy, CopyCheck, CopyPlus
} from "lucide-react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem, CommandList } from "@/components/ui/command";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { NavigationItem } from "@/components/navigation/types/navigationItem";
import { ActionModal } from "@/components/composites/ActionModal";
import { NavBarVertical } from "@/components/navigation/NavbarVertical";
import { NavbarTrigger } from "../navigation/NavbarTrigger";

const TabbedItemsExampleContent = () => {
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

const NavigationExampleMockContent: NavigationItem[] = [
  {
    title: "Info",
    href: "/info",
    description: "This is the info page that has information about this project.",
    tooltip: "Information",
    icon: <Container />
  },
  {
    title: "Network",
    href: "/network",
    description: "This is the network page that has network information.",
    tooltip: "Network",
    icon: <Network />
  },
  {
    title: "Systems",
    href: "/systems",
    description: "This is the systems page that has system information.",
    tooltip: "Systems",
    icon: <BrainCircuit />
  },
  {
    title: "Points",
    href: "/points",
    description: "This is the points page that has information about all the points.",
    tooltip: "Points",
    icon: <Cable />
  },
  {
    title: "Panels",
    href: "/panels",
    description: "This is the panels page that shows the enclosures and panels on the project.",
    tooltip: "Panels",
    icon: <SmartphoneCharging />
  },
  {
    title: "BOM",
    href: "/bom",
    description: "This is the BOM page that shows the bill of materials.",
    tooltip: "BOM",
    icon: <ClipboardList />
  }
];

export { TabbedItemsExampleContent, NavigationExampleMockContent };

function SidebarTile() {
  return <div>sidebar tile</div>;
}

function BreadcrumbTile() {
  return <div>breadcrum tile</div>;
}

//! This is just for example, we would make this into a resuable component.
export const PopoverCommandExample = () => {
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
                    <p>Form to select the template and then customize the properties</p>
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

function NavbarHorizontalTile() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavbarTrigger>Link List</NavbarTrigger>
          <NavigationMenuContent>
            <ul className="grid grid-cols-1">
              {NavigationExampleMockContent.map((item) => (
                <NavigationMenuLinkItem
                  key={item.title}
                  title={item.title}
                  href={item.href}
                ></NavigationMenuLinkItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavbarTrigger>Item List</NavbarTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {NavigationExampleMockContent.map((item) => (
                <NavigationMenuLinkItem key={item.title} title={item.title} href={item.href}>
                  {item.description}
                </NavigationMenuLinkItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavbarTrigger>Tabs</NavbarTrigger>
          <NavigationMenuContent>
            <TabbedItemsExampleContent />
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Button variant={"secondary"}>Button</Button>{" "}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <PopoverCommandExample />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function NavbarVerticalTile() {
  return <NavBarVertical items={NavigationExampleMockContent} />;
};
function ContextMenuTile() {
  return <div>menubar tile</div>;
}

function TabContentTile() {
  return <div>tab content tile</div>;
}


const sections = [
  { id: "sidebar", title: "Sidebar", children: <SidebarTile /> },
  { id: "breadcrumb", title: "Breadcrumb", children: <BreadcrumbTile /> },
  { id: "navbar-horizontal", title: "Navbar Horizontal", children: <NavbarHorizontalTile /> },
  { id: "navbar-vertical", title: "Navbar Vertical", children: <NavbarVerticalTile /> },
  { id: "context-menu", title: "Context Menu", children: <ContextMenuTile /> },
  { id: "tab-content", title: "Tab Content", children: <TabContentTile /> },
];
export const NavigationExample = () => {
  return <PageSections sections={sections} />;
};
