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
    <header className="bg-header">
      <div className="flex flex-row justify-between">
        <div className="hidden md:flex flex-row items-center space-x-2 p-2">
          <div className="p-2">{logo}</div>
          <div>{name}</div>
        </div>
        <div className="hidden md:flex justify-end items-start mr-2 pt-1">
          {actions}
        </div>
        <nav className="block md:hidden p-4">{mobileMenu}</nav>
      </div>
      <nav className="hidden md:flex w-full items-baseline-last justify-center bg-header border-b-nca-red border-b-4">
        {navigation}
      </nav>
    </header>
  );
};
