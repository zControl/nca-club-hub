import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./useTheme";

export const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <Button
          size="icon"
          variant="ghostHighlight"
          onClick={() => setTheme("dark")}
        >
          <MoonIcon />
        </Button>
      ) : (
        <Button
          size="icon"
          variant="ghostHighlight"
          onClick={() => setTheme("light")}
        >
          <SunIcon />
        </Button>
      )}
    </>
  );
};
