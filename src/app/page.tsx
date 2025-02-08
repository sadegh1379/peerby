"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const HomePage = () => {
  const { setTheme, theme } = useTheme();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme}</Button>
    </div>
  );
}

export default HomePage;
