import { Link } from "@tanstack/react-router";

type ImageButtonProps = {
  url: string;
  src: string;
  alt: string;
  text: string;
};

export function ImageButton({ url, src, alt, text }: ImageButtonProps) {
  return (
    <Link to={url}>
      <div className="flex flex-col items-center gap-4">
        <img
          src={src}
          alt={alt}
          height={220}
          width={220}
          className="rounded-full object-cover"
        />
        <div className="text-xl text-center">{text}</div>
      </div>
    </Link>
  );
}
