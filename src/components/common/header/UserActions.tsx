import { UserDropDownMenu } from "@/components/common/header/UserDropdownMenu";
import { LoginButton } from "@/features/auth/components/LoginButton";
import { useAuth } from "@/features/auth/hooks/useAuth";

export function UserActions() {
  const { isAuthenticated, user } = useAuth();
  console.log(isAuthenticated);
  console.log(user);

  return <>{isAuthenticated ? <UserDropDownMenu /> : <LoginButton />}</>;
}
