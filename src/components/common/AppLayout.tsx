import { AppFooter } from "./AppFooter";
import { HeaderContainer, type HeaderContainerProps } from "./HeaderContainer";

interface AppLayoutProps extends HeaderContainerProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children, ...props }: AppLayoutProps) => {
  return (
    <div id="content-layout" className="w-full flex flex-col">
      <HeaderContainer {...props} />
      {children}
      <AppFooter />
    </div>
  );
};
