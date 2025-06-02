import logo from "@/assets/logos/nca-logo-blue-red.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header3, Header4 } from "@/components/ui/typography";

export const EmailUsCard = () => {
  return (
    <Card className="border-4 border-nca-red rounded-none">
      <CardContent className="flex flex-col justify-center items-center gap-6">
        <img className="mx-auto" src={logo} alt="NCA Red Blue Logo" />
        <Header3 className="pb-0">Have Questions?</Header3>
        <Header4 className="pt-0">Email Us</Header4>
        <a
          href="mailto:rebels@ncalliancefc.com"
          className="text-xl text-center"
        >
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
