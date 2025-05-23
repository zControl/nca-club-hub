export interface HeaderContainerProps {
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  mobileMenu?: React.ReactNode;
  actions?: React.ReactNode;
}
export const HeaderContainer = ({
  logo,
  navigation,
  mobileMenu,
  actions,
}: HeaderContainerProps) => {
  return (
    <>
      <header className="bg-header border border-b-header-foreground/40 px-4">
        <div className="flex flex-row items-center justify-between py-4 md:space-x-10">
          <div className="text-4xl font-bold">{logo}</div>
          <nav className="hidden md:flex">{navigation}</nav>
          <div className="block md:hidden">{mobileMenu}</div>
          <div className="hidden items-center justify-end md:flex text-header-foreground">
            {actions}
          </div>
        </div>
      </header>
    </>
  );
};
