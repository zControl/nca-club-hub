import { ButtonLink } from "@/components/composites/ButtonLink";
import type { NavigationItem } from "@/types/navigation";

export function FooterNavList({ items }: { items: NavigationItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <ButtonLink href={item.href} key={item.title} className="text-nca-blue">
          {item.short}
        </ButtonLink>
      ))}
    </div>
  );
}
