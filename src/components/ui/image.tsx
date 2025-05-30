import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  responsive?: boolean;
  aspectRatio?: string;
  placeholder?: string;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      className,
      sizes = "100vw",
      srcSet,
      responsive = false,
      aspectRatio,
      placeholder = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", // 1x1 transparent gif
      onError,
      ...props
    },
    ref,
  ) => {
    const [imgSrc, setImgSrc] = React.useState(src);

    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setImgSrc(placeholder);
      if (onError) onError(e);
    };

    const responsiveClass = responsive ? "w-full h-auto" : "";
    const aspectRatioStyle = aspectRatio
      ? { aspectRatio, objectFit: "cover" as const }
      : {};

    return (
      <img
        ref={ref}
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(responsiveClass, className)}
        loading="lazy"
        sizes={sizes}
        srcSet={srcSet}
        onError={handleError}
        style={aspectRatioStyle}
        {...props}
      />
    );
  },
);

Image.displayName = "Image";
