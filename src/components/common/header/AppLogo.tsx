import logo from "@/assets/logos/nca-logo-blue-red.png";
import { Link } from "@tanstack/react-router";

export function AppLogo() {
  return (
    <Link to={"/"}>
      <img
        src={logo}
        alt="North County Alliance Red Blue Logo"
        height="96"
        width="96"
      />
    </Link>
  );
}
