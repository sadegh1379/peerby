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
      <div className="w-full bg-green-300 bg-cover">
        <div className="max-w-6xl  mx-auto">
          {/* navbar */}
          <div className="flex justify-between items-center p-4 bg-green-400 text-white">
            {/* avatar */}
            <div className="flex gap-2 items-center">
              <Image className="rounded-full" width={30} height={30} src="/assets/icons/images.png" alt="" />
              <h1 className="text-xl font-semibold">Peerby</h1>
            </div>
            {/* search box */}
            <div className="bg-white w-[400px] flex px-4 py-2 rounded-lg items-center ">
              <Search size={20} className="text-muted-foreground" />
              <p className="text-muted-foreground ml-3">چه چیزی میخوای?</p>
            </div>
            {/* login profile */}
            <UserRound strokeWidth={3} size={20} />
          </div>

          {/* body */}
          <div className="text-center bg-green-400 pt-14">
            <h3 className="text-3xl font-extrabold text-white">از طریق اشتراک گذاری وصل شوید</h3>
            <p className="mt-3 text-muted text-white">از افراد نزدیکتان چیزهای مفید قرض دهید، قرض بگیرید و اجاره کنید</p>
          </div>
        </div>
      </div>


    </div>
  );
};

export default HomePage;
