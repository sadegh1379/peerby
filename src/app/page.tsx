"use client";

import { Search, User, UserRound } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { setTheme, theme } = useTheme();
  const router = useRouter();

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* <SplashScreen/> */}
      {/* <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme}</Button> */}
      {/* header */}
      <div style={{ backgroundImage: "url(assets/pages/home/landing-bg.jpg)", backgroundPosition:"cover" }} className="w-full h-[400px] bg-cover">
        <div className="max-w-6xl  mx-auto">
          {/* navbar */}
          <div className="flex justify-between p-4 bg-green-600">
            {/* avatar */}
            <div className="flex gap-2 items-center">
              <Image className="rounded-full" width={40} height={40} src="/assets/icons/images.png" alt="" />
              <h1 className="text-2xl font-semibold">Peerby</h1>
            </div>
            {/* search box */}
            <div className="bg-white w-[400px] flex px-4 py-2 rounded-lg items-center ">
              <Search size={20} className="text-muted-foreground" />
              <p className="text-muted-foreground ml-3">Wat wil je lenen?</p>
            </div>
            {/* login profile */}
            <UserRound strokeWidth={3} size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
