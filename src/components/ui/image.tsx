interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  srcSet?: string;
}

export function Image({
  src,
  alt,
  width,
  height,
  className,
  sizes,
  srcSet,
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      sizes={sizes}
      srcSet={srcSet}
    />
  );
}
