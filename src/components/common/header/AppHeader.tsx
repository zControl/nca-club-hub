import { HeaderContainer } from "@/components/common/header/HeaderContainer";
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
  const renderNavigation = () => {
    return <div>Navigation</div>;
  };

  const renderMobileNavigation = () => {
    return <div>Mobile Navigation</div>;
  };

  const renderActions = () => {
    return <div>Actions</div>;
  };

  return (
    <HeaderContainer
      logo={<HeaderLogo />}
      mobileMenu={renderMobileNavigation()}
      navigation={renderNavigation()}
      actions={renderActions()}
    />
  );
};
