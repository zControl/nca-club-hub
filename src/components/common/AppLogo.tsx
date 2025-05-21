import { Link } from "@tanstack/react-router";

const AppLogo = () => {
  return (
    <Link to="/">
      <div className="flex items-center space-x-2">
        <p className="text-xl font-semibold">APP LOGO</p>
      </div>
    </Link>
  );
};

export { AppLogo };
