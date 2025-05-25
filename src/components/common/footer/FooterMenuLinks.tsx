import { FooterNavHeading } from "@/components/common/footer/FooterNavHeading";
import { FooterNavList } from "@/components/common/footer/FooterNavList";
import { SocialButtons } from "@/features/contact/components/SocialButtons";
import { type NavigationItem } from "@/types/navigation";

const clubItems: NavigationItem[] = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Mission Statement",
    href: "/mission",
  },
  {
    title: "The Kit",
    href: "/kit",
  },
];

const competitiveItems: NavigationItem[] = [
  {
    title: "Tryouts",
    href: "/tryouts",
  },
  {
    title: "Investment",
    href: "/investment",
  },
  {
    title: "Schedule",
    href: "/schedule",
  },
  {
    title: "Active Teams",
    href: "/teams",
  },
];

const recreationItems: NavigationItem[] = [
  {
    title: "Rebel Rec",
    href: "/rebelrec",
  },
  {
    title: "Rebel Rec Cup",
    href: "/rebelrec/cup",
  },
  {
    title: "FAQ",
    href: "/rebelrec/faq",
  },
  {
    title: "Registration",
    href: "/rebelrec/registration",
  },
];

export function FooterMenuLinks() {
  return (
    <div className="md:flex md:flex-row md:justify-evenly sm:flex-col sm:justify-center mb-6 p-2">
      <div>
        <FooterNavHeading text="Club" />
        <FooterNavList items={clubItems} />
      </div>
      <div>
        <FooterNavHeading text="Competitive" />
        <FooterNavList items={competitiveItems} />
      </div>
      <div>
        <FooterNavHeading text="Recreation" />
        <FooterNavList items={recreationItems} />
      </div>
      <div>
        <FooterNavHeading text="Social" />
        <SocialButtons />
      </div>
    </div>
  );
}
