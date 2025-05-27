import { Link } from "@tanstack/react-router";

export function AppLogo() {
  return (
    <Link to={"/"}>
      <img
        src={"/logos/nca-logo-blue-red.png"}
        alt="North County Alliance Red Blue Logo"
        height="96"
        width="96"
      />
    </Link>
  );
}
