import { Button } from "@/components/ui/button";
import { Header3, Paragraph } from "@/components/ui/typography";
import { Link } from "@tanstack/react-router";

interface CardButtonProps {
  header: string;
  subText: string;
  buttonUrl: string;
  buttonText: string;
}

export const CardButton = ({
  header,
  subText,
  buttonText,
  buttonUrl,
}: CardButtonProps) => {
  return (
    <div className="rounded-lg border-4 border-ncaSecondary bg-muted p-4 max-w-md">
      <Header3>{header} </Header3>
      <Paragraph>{subText}</Paragraph>
      <Link className="flex justify-center mt-4" to={buttonUrl}>
        <Button variant="primary" size="lg">
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};
