import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header3, Header4 } from "@/components/ui/typography";

export const EmailUsCard = () => {
  return (
    <Card className="border-4 border-nca-red rounded-none">
      <CardContent>
        <img
          className="mx-auto"
          src="/logos/nca-logo-blue-red.png"
          alt="NCA Red Blue Logo"
        />
        <a
          href="mailto:rebels@ncalliancefc.com"
          className="text-xl text-center"
        >
          <Header3 className="pb-0">Have Questions?</Header3>
          <Header4 className="pt-0">Email Us</Header4>
          <Button
            className="font-semibold text-xl"
            variant={"link"}
            size={"lg"}
          >
            rebels@ncalliancefc.com
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};
