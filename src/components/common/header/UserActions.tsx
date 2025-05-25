import { UserDropDownMenu } from "@/components/common/header/UserDropdownMenu";
import { ThemeToggle } from "@/components/common/theme/ThemeToggle";
import { LoginButton } from "@/features/auth/components/LoginButton";
import { useAuth } from "@/features/auth/hooks/useAuth";

export function UserActions() {
  const { isAuthenticated, user } = useAuth();
  console.log(isAuthenticated);
  console.log(user);

  return (
    <div className="flex items-center space-x-2">
      <ThemeToggle />
      {isAuthenticated ? <UserDropDownMenu /> : <LoginButton />}
    </div>
  );
}
