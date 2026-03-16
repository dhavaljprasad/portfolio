"use client";

// theme functions
export function toggleTheme(): "light" | "dark" {
  const root = document.documentElement;
  root.classList.toggle("dark");

  const isDark = root.classList.contains("dark");
  const theme = isDark ? "dark" : "light";

  localStorage.setItem("theme", theme);

  return theme;
}

export function getCurrentTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
