import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Header1,
  Header2,
  Header3,
  Paragraph,
} from "@/components/ui/typography";
import { Link } from "@tanstack/react-router";

const LandingCard = ({
  header,
  content,
}: {
  header: React.ReactNode;
  content: React.ReactNode;
}) => {
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
};

export const LandingHero = () => {
  return (
    <>
      <section className="container w-full mx-auto px-4 py-16 flex flex-col md:flex-row items-center space-x-4">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <Header1 className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            APP NAME AND CATCHPHRASE
          </Header1>
          <Paragraph className="text-blue-500">
            Some description of the app, or what it does.
          </Paragraph>
          <div className="my-8 flex flex-row justify-center items-center space-x-8">
            <Button variant={"primary"} size={"huge"}>
              Explore the Features
            </Button>
            <Button variant={"outline"} size={"huge"}>
              See what other are saying
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <p>BIG IMAGE HERE</p>
        </div>
      </section>
      <section className="bg-background py-16">
        <div className="mb-8 w-1/3">
          <Header2 className="text-3xl">Tag Line</Header2>
          <Paragraph>Some paragraph</Paragraph>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <LandingCard header="Card Title" content="Card Description" />
            <LandingCard header="Card Title" content="Card Description" />
            <LandingCard header="Card Title" content="Card Description" />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto flex flex-col items-center gap-6">
          <Header2>Ready to get started?</Header2>
          <Link to="/login">Login</Link>
        </div>
      </section>
    </>
  );
};
