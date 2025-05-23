import { HeaderContainer } from "@/components/common/header/HeaderContainer";
import { NavMenuFull } from "@/components/common/header/NavMenuFull";
import { NavMenuMobile } from "@/components/common/header/NavMenuMobile";
import { UserActions } from "@/components/common/header/UserActions";
import { Link } from "@tanstack/react-router";

function HeaderLogo() {
  return (
    <Link to={"/"}>
      <img
        src={"/logos/nca-logo-blue-red.png"}
        alt="North County Alliance Red Blue Logo"
        height="72"
        width="72"
      />
    </Link>
  );
}
export const AppHeader = () => {
  return (
    <HeaderContainer
      logo={<HeaderLogo />}
      mobileMenu={<NavMenuMobile />}
      navigation={<NavMenuFull />}
      actions={<UserActions />}
    />
  );
};
