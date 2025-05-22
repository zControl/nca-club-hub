interface ImageBlockProps {
  alt: string;
  src: string;
  width: string;
  height: string;
}

export const ImageBlock = ({ alt, src, width, height }: ImageBlockProps) => {
  return (
    <div className="mx-auto">
      <div
        style={{
          position: "relative",
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <img
          alt={alt}
          src={src}
          sizes="100vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};
