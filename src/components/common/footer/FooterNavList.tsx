import { LinkButton } from "@/components/composites/LinkButton";
import type { NavigationItem } from "@/types/navigation";

export function FooterNavList({ items }: { items: NavigationItem[] }) {
  return (
    <div>
      {items.map((item) => (
        <LinkButton href={item.href} key={item.href}>
          {item.title}
        </LinkButton>
      ))}
    </div>
  );
}
