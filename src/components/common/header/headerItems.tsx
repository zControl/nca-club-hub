import type { NavigationItem } from "@/types/navigation";
import {
  BadgeHelpIcon,
  CalendarDaysIcon,
  CircleHelpIcon,
  CompassIcon,
  HandCoinsIcon,
  LayoutListIcon,
  MapPinnedIcon,
  NotepadTextIcon,
  PersonStandingIcon,
  TrophyIcon,
  UserPlusIcon,
  UsersIcon,
} from "lucide-react";

// Where should this file live?  The items are shared between the mobile and full NavMenu.

export const clubItems: NavigationItem[] = [
  {
    title: "About",
    short: "About",
    href: "/about",
    description: "Passion, Teamwork, Experience",
    icon: <BadgeHelpIcon />,
  },
  {
    title: "Our Mission Statement",
    short: "Mission",
    href: "/mission",
    description: "Passion, Teamwork, Experience",
    icon: <CompassIcon />,
  },
  {
    title: "The Kit",
    short: "Kit",
    href: "/kit",
    description: "Bold Blue and Rebel Red",
    icon: <PersonStandingIcon />,
  },
  {
    title: "The Fields",
    short: "Fields",
    href: "/fields",
    description: "Beautiful Lynden, Washington",
    icon: <MapPinnedIcon />,
  },
];

export const competitiveItems: NavigationItem[] = [
  {
    title: "Tryouts",
    short: "Tryouts",
    href: "/tryouts",
    description: "Roster spots still available",
    icon: <NotepadTextIcon />,
  },
  {
    title: "The Investment",
    short: "Investment",
    href: "/investment",
    description: "High quality soccer for everyone!",
    icon: <HandCoinsIcon />,
  },
  {
    title: "Schedule",
    short: "Schedule",
    href: "/schedule",
    description: "Events and Yearly Calendar",
    icon: <CalendarDaysIcon />,
  },
  {
    title: "Active Teams",
    short: "Teams",
    href: "/teams",
    description: "Our current teams.",
    icon: <UsersIcon />,
  },
];

export const recreationItems: NavigationItem[] = [
  {
    title: "About Rebel Rec",
    short: "Rebel Rec",
    href: "/rebelrec",
    description: "See what everyone is talking about!",
    icon: <CircleHelpIcon />,
  },
  {
    title: "Rebel Rec Cup",
    short: "Rebel Rec Cup",
    href: "/rebelrec/cup",
    description: "Exciting end of season tournament.",
    icon: <TrophyIcon />,
  },
  {
    title: "Frequently Asked Questions",
    short: "FAQ",
    href: "/rebelrec/faq",
    description: "Get answers about the program.",
    icon: <LayoutListIcon />,
  },
  {
    title: "Registration",
    short: "Registration",
    href: "/rebelrec/registration",
    description: "Register to secure your spot.",
    icon: <UserPlusIcon />,
  },
];
