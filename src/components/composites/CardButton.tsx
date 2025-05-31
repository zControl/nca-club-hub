import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="border-nca-red border-4">
      <Header3>{header} </Header3>
      <CardContent>
        <Paragraph>{subText}</Paragraph>
        <Link className="flex justify-center mt-4" to={buttonUrl}>
          <Button variant="primary" size="lg">
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
