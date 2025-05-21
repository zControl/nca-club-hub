import { AppLogo } from "@/components/common/AppLogo";
import { HeaderContainer } from "@/components/common/HeaderContainer";

export const AppHeader = () => {
  const renderNavigation = () => {
    return <div>Navigation</div>;
  };

  const renderActions = () => {
    return <div>Actions</div>;
  };

  return (
    <HeaderContainer
      logo={<AppLogo />}
      mobileMenu={<div>Mobile</div>}
      navigation={renderNavigation()}
      actions={<div className="flex items-center gap-4">{renderActions()}</div>}
    />
  );
};
