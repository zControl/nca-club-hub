import { Image } from "@/components/ui/image";
import { BlockQuote, Header2, Paragraph } from "@/components/ui/typography";
import React from "react";

interface ImageInfoCardProps {
  title: string;
  img: string;
  description: React.ReactNode;
  details: React.ReactNode;
  layout?: "left" | "right";
}

export function ImageInfoCard({
  title,
  img,
  description,
  details,
  layout = "left",
}: ImageInfoCardProps) {
  const isLeft = layout === "left";
  const ImageComp = () => {
    return (
      <div className="flex flex-col items-center w-full md:w-1/2 h-auto">
        <Header2 className="text-4xl font-roboto underline">{title}</Header2>
        <Image
          src={img}
          alt={title}
          className="object-cover"
          width={400}
          height={400}
        />
      </div>
    );
  };
  return (
    <>
      <div className="flex flex-col md:flex-row items-start p-6 bg-card mb-12">
        {isLeft && <ImageComp />}
        <div className="flex flex-col gap-6 md:w-1/2 pt-16">
          <BlockQuote className="text-xl">{description}</BlockQuote>
          <Paragraph className="text-card-foreground/80">{details}</Paragraph>
        </div>
        {!isLeft && <ImageComp />}
      </div>
    </>
  );
}
