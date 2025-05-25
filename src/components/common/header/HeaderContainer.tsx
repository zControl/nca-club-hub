export interface HeaderContainerProps {
  logo?: React.ReactNode;
  name?: React.ReactNode;
  navigation?: React.ReactNode;
  mobileMenu?: React.ReactNode;
  actions?: React.ReactNode;
}
export const HeaderContainer = ({
  logo,
  name,
  navigation,
  mobileMenu,
  actions,
}: HeaderContainerProps) => {
  return (
    <header className="bg-background">
      <div className="flex flex-row justify-between ml-6">
        <div className="flex flex-row items-center space-x-2 pt-4">
          <div>{logo}</div>
          <div className="hidden md:block">{name}</div>
        </div>
        <div className="hidden md:flex mr-2">{actions}</div>
        <nav className="block md:hidden">{mobileMenu}</nav>
      </div>
      <nav className="hidden md:flex w-full justify-center bg-background border-b-nca-red border-b-4 pt-6 pb-2">
        {navigation}
      </nav>
    </header>
  );
};
