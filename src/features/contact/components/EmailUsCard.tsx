import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Header4 } from "@/components/ui/typography";

export const EmailUsCard = () => {
  return (
    <Card className="px-4 py-2 border-8 border-ncaSecondary flex flex-col space-y-4 justify-around">
      <img
        className="mx-auto"
        src="/logos/nca-logo-blue-red.png"
        alt="NCA Red Blue Logo"
        height={100}
        width={100}
      />
      <a href="mailto:rebels@ncalliancefc.com" className="text-xl text-center">
        <Header4>Have Questions? </Header4>
        <Button className="font-semibold" variant={"link"}>
          rebels@ncalliancefc.com
        </Button>
      </a>
    </Card>
  );
};
