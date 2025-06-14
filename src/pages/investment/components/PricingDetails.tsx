import { Header1, Header2, Header4 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface PricingDetailsProps {
  backgroundImage: string;
  color: "red" | "blue";
  title: string;
  ageGroup: string;
  description: string;
  included: string;
  price: string;
  coverage: string[];
  kitItems: string[];
  action: React.ReactNode;
}
export function PricingDetails({
  backgroundImage,
  color,
  title,
  ageGroup,
  description,
  price,
  included,
  coverage,
  kitItems,
  action,
}: PricingDetailsProps) {
  const colorClass =
    color === "red"
      ? "bg-nca-red/60 text-nca-red-foreground"
      : "bg-nca-blue/60 text-nca-blue-foreground";
  return (
    <div
      className="flex flex-col bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={cn("flex flex-col min-h-256 text-center", colorClass)}>
        <Header2 color={color}>{title}</Header2>
        <Header2 color={color}>{ageGroup}</Header2>
        <Header4 color={color}>{description}</Header4>
        <Header1 color={color} className="my-8">
          {price}
        </Header1>
        <div className="my-2">{included}</div>
        <div className="my-4">
          <Header4 color={color}>Club Fees Cover:</Header4>
          <ul className="list-disc list-inside text-lg">
            {coverage.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="my-4">
          <Header4 color={color}>Kit Includes:</Header4>
          <ul className="list-disc list-inside text-lg">
            {kitItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="my-2">Scolarships are available for those in need.</div>
        <div className="mt-auto mb-8">{action}</div>
      </div>
    </div>
  );
}
