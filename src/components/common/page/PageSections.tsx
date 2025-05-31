import { PageSectionNav, type PageSection } from "./PageSectionNav";

interface PageSectionsProps {
  sections: PageSection[];
  layout?: "flex" | "grid";
  columns?: number;
  hasNavigation?: boolean;
}
export const PageSections = ({
  sections,
  layout = "flex",
  columns,
  hasNavigation,
}: PageSectionsProps) => {
  const layoutClass =
    layout === "flex"
      ? "flex flex-col"
      : `grid grid-cols-1 md:grid-cols-${columns}`;
  return (
    <div className="flex flex-col flex-grow mx-auto">
      {hasNavigation && <PageSectionNav sections={sections} />}
      <div className={layoutClass}>
        {sections.map((section) => (
          <section key={section.id} id={section.id}>
            {section.children}
          </section>
        ))}
      </div>
    </div>
  );
};
