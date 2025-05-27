import { Header2, SectionDescription } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import type React from "react";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  backgroundImageUrl?: string;
  sectionTitle?: React.ReactNode;
  sectionDescription?: string;
  className?: string;
}
export function Hero({
  children,
  backgroundImageUrl,
  sectionTitle,
  sectionDescription,
  className,
  ...props
}: HeroProps) {
  return (
    <section
      className={cn(
        "w-full bg-cover bg-center bg-no-repeat flex flex-col items-center text-center",
        className,
      )}
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      {...props}
    >
      {sectionTitle && <Header2>{sectionTitle}</Header2>}
      {sectionDescription && (
        <SectionDescription>{sectionDescription}</SectionDescription>
      )}
      <div className="w-full py-4">{children}</div>
    </section>
  );
}
