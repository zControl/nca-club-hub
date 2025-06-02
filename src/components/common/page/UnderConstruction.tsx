import construction from "@/assets/logos/under-construction.png";
import { Image } from "@/components/ui/image";
import { Header3 } from "@/components/ui/typography";

interface UnderConstructionProps {
  message?: string;
  items?: { title: string; description: string }[];
}
export function UnderConstruction({
  message = "This section is still being built. Stay tuned!",
  items,
}: UnderConstructionProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={construction}
        alt="Under Construction"
        height={200}
        width={600}
      />
      {message && <div>{message}</div>}
      <div className="py-8 max-w-1/2">
        {items && (
          <ul className="space-y-8">
            {items.map((item, index) => (
              <li key={index} className="text-center">
                <Header3>{item.title}</Header3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
