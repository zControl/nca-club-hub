import { ThemeToggle } from "@/components/common/theme/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { LayoutDashboard, LogOut, Settings, Users } from "lucide-react";

export function UserDropDownMenu() {
  const { logout } = useAuth();
  const avatarSrc = "/test-image.png";
  const avatarFallback = "ZS";
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src={avatarSrc} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <ThemeToggle />
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <p>these dont work</p>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>My Dashboard</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Users className="mr-2 h-4 w-4" />
            <span>My Teams</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut className="mr-2 h-4 w-4" />
            <Button onClick={logout}>Logout</Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup></DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
