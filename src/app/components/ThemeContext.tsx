"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "dark" | "light";

const ThemeContext = createContext({
  theme: "dark" as Theme,
  toggleTheme: () => {},
});

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] =
    useState<Theme>("dark");

  useEffect(() => {
    const saved =
      localStorage.getItem("theme") as Theme;

    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.className =
      theme;

    localStorage.setItem(
      "theme",
      theme
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark"
        ? "light"
        : "dark"
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () =>
  useContext(ThemeContext);