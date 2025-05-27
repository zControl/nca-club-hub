import { Button } from "@/components/ui/button";
import { useRouter } from "@tanstack/react-router";

export interface PageSection {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface PageSectionNavProps {
  sections: PageSection[];
}

export const PageSectionNav = ({ sections }: PageSectionNavProps) => {
  const router = useRouter();

  const handleNavigation = (id: string) => {
    router.navigate({
      hash: `${id}`,
    });
  };
  return (
    <nav className="sticky top-0 z-10 px-4 py-2 flex flex-row space-x-2 items-center justify-center">
      {sections.map((section) => (
        <Button
          variant={"primary"}
          key={section.id}
          onClick={() => handleNavigation(section.id)}
        >
          {section.title}
        </Button>
      ))}
    </nav>
  );
};
