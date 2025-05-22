import Copyright from "@/components/common/Copyright";
import { SocialButtons } from "@/features/contact/components/SocialButtons";
import {
  clubItems,
  competitiveItems,
  recreationItems,
  type NavigationItems,
} from "@/resources/navigationItems";
import { Link } from "@tanstack/react-router";

function FooterHeading({ text }: { text: string }) {
  return (
    <h4 className="px-2 mb-2 font-bold text-xl text-ncaPrimary-foreground underline">
      {text}
    </h4>
  );
}

function FooterNavList({ items }: { items: NavigationItems[] }) {
  return (
    <ul className="w-[200px] px-2">
      {items.map((item) => (
        <li key={item.title} className="hover:text-ncaGold">
          <Link to={item.href}>{item.short}</Link>
        </li>
      ))}
    </ul>
  );
}

function FooterNavLinks() {
  return (
    <div className="md:flex md:flex-row md:justify-evenly sm:flex-col sm:justify-center mb-6">
      <div>
        <FooterHeading text="The Club" />
        <FooterNavList items={clubItems} />
      </div>
      <div>
        <FooterHeading text="Competitive" />
        <FooterNavList items={competitiveItems} />
      </div>
      <div>
        <FooterHeading text="Recreaction" />
        <FooterNavList items={recreationItems} />
      </div>
      <div>
        <FooterHeading text="Connect" />
        <SocialButtons />
      </div>
    </div>
  );
}
export const AppFooter = () => {
  return (
    <footer className="bg-accent text-accent-foreground p-2">
      <FooterNavLinks />
      <div className="container mx-auto w-1/2">
        <div className="flex flex-wrap justify-center text-xs gap-4">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/status">Status</Link>
        </div>
        <div className="flex justify-center items-center">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};
