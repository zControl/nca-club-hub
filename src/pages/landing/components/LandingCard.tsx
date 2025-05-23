import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Header3, Paragraph } from "@/components/ui/typography";
export function LandingCard({
  header,
  content,
}: {
  header: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <Header3 className="text-center">{header}</Header3>
      </CardHeader>
      <CardContent>
        <Paragraph className="text-card-foreground/60">{content}</Paragraph>
      </CardContent>
    </Card>
  );
}
