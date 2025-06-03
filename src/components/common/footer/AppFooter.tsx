import Copyright from "@/components/common/footer/Copyright";
import { FooterLegal } from "@/components/common/footer/FooterLegal";
import { FooterMenuLinks } from "@/components/common/footer/FooterMenuLinks";

export const AppFooter = () => {
  return (
    <footer className="bg-nca-sky text-nca-blue p-2">
      <FooterMenuLinks />
      <div className="container mx-auto w-1/2">
        <FooterLegal />
        <div className="flex justify-center items-center">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};
