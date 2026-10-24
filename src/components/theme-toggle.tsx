"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full cursor-pointer"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="size-5 rotate-0 scale-100 transition-transform duration-500 ease-in-out dark:-rotate-180 dark:scale-0" />
      <Moon className="absolute size-5 rotate-180 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
