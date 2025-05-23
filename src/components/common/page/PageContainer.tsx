import { cn } from "@/lib/utils";
import React from "react";

export interface PageContainerProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  className?: string;
}

export const PageContainer = ({
  children,
  title,
  description,
  keywords,
  className,
}: PageContainerProps) => {
  return (
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <main
        className={cn(
          "max-w-[1680px] mx-auto p-1 md:p-2 lg:p-4 flex-1",
          className,
        )}
      >
        {children}
      </main>
    </>
  );
};
