import { useEffect, useState } from "react";
import { ThemeProviderContext, type Theme } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

const DEFAULT_THEME = "system";

export const ThemeProvider = ({
  children,
  defaultTheme = DEFAULT_THEME,
  ...props
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("ui-mode") as Theme) || defaultTheme,
  );

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem("ui-mode", theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};
