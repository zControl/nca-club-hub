import { AppLayout } from "@/components/common/AppLayout";
import { NotFound } from "@/components/common/NotFound";
import { ThemeToggle } from "@/components/common/theme/ThemeToggle";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  createFileRoute,
  Link,
  Outlet,
  useLocation,
} from "@tanstack/react-router";
import {
  AppWindowIcon,
  BookTextIcon,
  BoxIcon,
  ComponentIcon,
  DatabaseIcon,
  DollarSignIcon,
  HomeIcon,
  LetterTextIcon,
  LoaderPinwheelIcon,
  PaletteIcon,
  ShipWheelIcon,
  Table2Icon,
} from "lucide-react";

export const Route = createFileRoute("/(test)/_examples")({
  component: ExamplesLayout,
  notFoundComponent: NotFound,
});

const basics = [
  {
    title: "Overview",
    url: "/examples",
    icon: HomeIcon,
  },
  {
    title: "Basic",
    url: "/examples/basic",
    icon: ComponentIcon,
  },
  {
    title: "Colors",
    url: "/examples/colors",
    icon: PaletteIcon,
  },
  {
    title: "Typography",
    url: "/examples/typography",
    icon: LetterTextIcon,
  },
  {
    title: "Containers",
    url: "/examples/containers",
    icon: BoxIcon,
  },
  {
    title: "Loaders",
    url: "/examples/loaders",
    icon: LoaderPinwheelIcon,
  },
  {
    title: "Navigation",
    url: "/examples/navigation",
    icon: ShipWheelIcon,
  },
  {
    title: "Dialogs",
    url: "/examples/dialogs",
    icon: AppWindowIcon,
  },
  {
    title: "Forms",
    url: "/examples/forms",
    icon: BookTextIcon,
  },
  {
    title: "Tables",
    url: "/examples/tables",
    icon: Table2Icon,
  },
  {
    title: "useQuery",
    url: "/examples/query",
    icon: DollarSignIcon,
  },
  {
    title: "Database",
    url: "/examples/database",
    icon: DatabaseIcon,
  },
];

function ExamplesSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {basics.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      {<item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
function ExamplesLayout() {
  return (
    <SidebarProvider>
      <ExamplesSidebar />
      <AppLayout
        logo={
          <div className="flex gap-1 items-center">
            <ThemeToggle />
          </div>
        }
      >
        <Outlet />
      </AppLayout>
    </SidebarProvider>
  );
}
