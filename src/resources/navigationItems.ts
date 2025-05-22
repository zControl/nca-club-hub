export interface NavigationItems {
title: string;
short: string;
href: string;
description: string
}

export const clubItems: NavigationItems[] = [
    {
      title: "About North County Alliance",
      short: "About",
      href: "/about",
      description: "Experience being a rebel!",
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

  export const competitiveItems: NavigationItems[] = [
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
      short: "schedule",
      href: "/schedule",
      description: "Events and Yearly Calendar",
    },
    {
      title: "Active Teams",
      short: "Teams",
      href: "/teams",
      description: "Our current teams."
    },
  ];

  export const recreationItems: NavigationItems[] = [
    {
      title: "About Rebel Rec",
      short: "About",
      href: "/rebelrec",
      description: "See what everyone is talking about!",
    },
    {
      title: "Registration",
      short: "Registration",
      href: "/rebelrec/register",
      description: "Register to secure your spot.",
    },
    {
      title: "Frequently Asked Questions",
      short: "FAQ",
      href: "/rebelrec/faq",
      description: "Get answers about the program.",
    },
    {
      title: "Rebel Rec Cup",
      short: "Rebel Rec Cup",
      href: "/rebelrec/cup",
      description: "Exciting end of season tournament.",
    },
  ];