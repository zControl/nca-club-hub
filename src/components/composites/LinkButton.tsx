import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";
import { useNavigate } from "@tanstack/react-router";
import { type VariantProps } from "class-variance-authority";

interface LinkButtonProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const LinkButton = ({
  href,
  children,
  icon,
  className,
  variant = "link",
  size,
  ...props
}: LinkButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("flex items-center mx-0 p-2 text-lg", className)}
      onClick={() => navigate({ to: href })}
      {...props}
    >
      {icon}
      {children}
    </Button>
  );
};
