import { Link } from "@tanstack/react-router";

export function FooterLegal() {
  return (
    <div className="flex flex-wrap justify-center text-xs gap-4">
      <Link to="/terms">Terms</Link>
      <Link to="/privacy">Privacy</Link>
      <Link to="/status">Status</Link>
    </div>
  );
}
