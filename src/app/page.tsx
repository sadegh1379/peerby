"use client";

import { Button } from "@/components/ui/button";
import { SplashScreen } from "@/components/ui/splash-screen";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HomePage = () => {
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setTheme("light");
  }, []);

  return (
    <div className=" font-[family-name:var(--font-geist-sans)] text-center mt-10">
      <SplashScreen/>
      <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme}</Button>
      <br />
      <Button onClick={() => router.push("/login")} variant="link" className="mt-5">
        Login For Free
      </Button>
    </div>
  );
};

export default HomePage;
