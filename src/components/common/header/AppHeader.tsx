import { AppLogo } from "@/components/common/header/AppLogo";
import { AppName } from "@/components/common/header/AppName";
import { HeaderContainer } from "@/components/common/header/HeaderContainer";
import { NavMenuFull } from "@/components/common/header/HeaderNavFull";
import { NavMenuMobile } from "@/components/common/header/HeaderNavMobile";
import { UserActions } from "@/components/common/header/UserActions";
import { SocialButtons } from "@/features/contact/components/SocialButtons";

function HeaderActions() {
  return (
    <div className="flex flex-row items-center space-x-2">
      <SocialButtons />
      <UserActions />
    </div>
  );
}
export const AppHeader = () => {
  return (
    <HeaderContainer
      logo={<AppLogo />}
      name={<AppName />}
      mobileMenu={<NavMenuMobile />}
      navigation={<NavMenuFull />}
      actions={<HeaderActions />}
    />
  );
};
