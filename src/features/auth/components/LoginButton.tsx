import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const LoginButton = () => {
  return (
    <Button variant={"ghostHighlight"}>
      <Link to="/login">Login</Link>
    </Button>
  );
};
