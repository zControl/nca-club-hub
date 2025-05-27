interface CarouselImageItemProps {
  src: string;
  alt: string;
  cta?: React.ReactNode;
}

export function CarouselImageItem({ src, alt, cta }: CarouselImageItemProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img
          src={src}
          alt={alt}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      {cta && <div>{cta}</div>}
    </div>
  );
}
