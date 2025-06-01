import { Link } from "@tanstack/react-router";
import logo from "/logos/nca-logo-blue-red.png";

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
