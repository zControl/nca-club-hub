import type { NavigationItem } from "@/types/navigation";

// Where should this file live?  The items are shared between the mobile and full NavMenu.

export const clubItems: NavigationItem[] = [
  {
    title: "About",
    short: "About",
    href: "/about",
    description: "Passion, Teamwork, Experience",
  },
  {
    title: "Our Mission Statement",
    short: "Mission",
    href: "/mission",
    description: "Passion, Teamwork, Experience",
  },
  {
    title: "The Kit",
    short: "Kit",
    href: "/kit",
    description: "Bold Blue and Rebel Red",
  },
  {
    title: "The Fields",
    short: "Fields",
    href: "/fields",
    description: "Beautiful Lynden, Washington",
  },
];

export const competitiveItems: NavigationItem[] = [
  {
    title: "Tryouts",
    short: "Tryouts",
    href: "/tryouts",
    description: "Roster spots still available",
  },
  {
    title: "The Investment",
    short: "Investment",
    href: "/investment",
    description: "High quality soccer for everyone!",
  },
  {
    title: "Schedule",
    short: "Schedule",
    href: "/schedule",
    description: "Events and Yearly Calendar",
  },
  {
    title: "Active Teams",
    short: "Teams",
    href: "/teams",
    description: "Our current teams.",
  },
];

export const recreationItems: NavigationItem[] = [
  {
    title: "About Rebel Rec",
    short: "Rebel Rec",
    href: "/rebelrec",
    description: "See what everyone is talking about!",
  },
  {
    title: "Rebel Rec Cup",
    short: "Rebel Rec Cup",
    href: "/rebelrec/cup",
    description: "Exciting end of season tournament.",
  },
  {
    title: "Frequently Asked Questions",
    short: "FAQ",
    href: "/rebelrec/faq",
    description: "Get answers about the program.",
  },
  {
    title: "Registration",
    short: "Registration",
    href: "/rebelrec/registration",
    description: "Register to secure your spot.",
  },
];
