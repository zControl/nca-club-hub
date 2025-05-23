import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const ButtonLink = ({
  href,
  children,
  icon,
  className,
}: ButtonLinkProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="link"
      className={cn("flex items-center mx-0 p-2 text-lg", className)}
      onClick={() => navigate({ to: href })}
    >
      {icon}
      {children}
    </Button>
  );
};
