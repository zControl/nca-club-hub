import { Image } from "@/components/ui/image";
import { Link } from "@tanstack/react-router";

interface ImageButtonProps {
  url: string;
  src: string;
  alt: string;
  text: string;
}

export function ImageButton({ url, src, alt, text }: ImageButtonProps) {
  return (
    <Link to={url}>
      <div className="flex flex-col items-center gap-4 p-2">
        {/* <div>
          <div
            className={cn(
              "h-48 w-48 bg-cover bg-center bg-no-repeat rounded-full",
            )}
            style={{ backgroundImage: `url(${src})` }}
          />
        </div> */}
        <Image
          src={src}
          alt={alt}
          width={128}
          height={128}
          className="rounded-full"
        />
        <div className="text-2xl font-bold font-montserrat text-center uppercase underline tracking-wide text-nca-red-foreground">
          {text}
        </div>
      </div>
    </Link>
  );
}
