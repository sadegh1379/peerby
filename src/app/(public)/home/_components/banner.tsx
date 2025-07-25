'use client';

import { LoginModal } from '@components/customize';
import { Button } from '@components/ui/button';
import { useModal } from '@hooks/use-modal';
import { Search, UserRound } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface BannerProps {}

const Banner: FC<BannerProps> = () => {
  const { setTheme, theme } = useTheme();
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal();

  const changeThemeHandler = (theme: 'light' | 'dark') => {
    setTheme(theme);
  };

  return (
    <>
      <div className="">
        {/* navbar */}
        <div className="flex justify-between items-center p-3  bg-[#00c473] text-white ">
          {/* avatar */}
          <div className="flex gap-2 items-center">
            <Image
              className="rounded-full"
              width={50}
              height={50}
              src="/assets/icons/images.png"
              alt=""
            />
            <h1 className="text-xl font-semibold hidden sm:flex">Peerby</h1>
          </div>
          {/* search box */}
          <div className="bg-white w-[200px] sm:w-[400px] flex px-4 py-3 rounded-lg items-center ">
            <Search size={20} className="text-muted-foreground" />
            <p className="text-muted-foreground ml-3 text-sm">چه چیزی میخوای?</p>
          </div>
          {/* login profile */}
          <div className="flex items-center gap-2">
            <UserRound
              onClick={openLoginModal}
              className="cursor-pointer"
              strokeWidth={3}
              size={30}
            />
            {/* {theme === 'dark' ? (
                <Sun className="cursor-pointer" onClick={() => changeThemeHandler('light')} />
              ) : (
                <Moon className="cursor-pointer" onClick={() => changeThemeHandler('dark')} />
              )} */}
          </div>
        </div>

        {/* body */}
        <div
          className="items-center h-[60vh] md:h-[95vh] text-center relative flex flex-col justify-center gap-3"
          style={{
            backgroundImage:
              "url('/assets/images/ill_landing.jpg'), linear-gradient(180deg, #23b781 24.58%, #C8FFB5 68.5%, #FFE4AE 82.3%)",
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom'
          }}
        >
          <div className="absolute inset-0 bg-black/30 z-0" />
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="md:text-[42px] text-3xl font-extrabold text-white">
              از طریق اشتراک گذاری وصل شوید
            </h3>
            <p className="md:text-xl mt-5 text-lg  text-gray-100">
              از افراد نزدیکتان چیزهای مفید قرض دهید، قرض بگیرید و اجاره کنید
            </p>
            <Button size="lg" className="bg-green-700 text-white mt-4">
              به محله خود بپیوندید
            </Button>
          </div>
        </div>
      </div>
      <LoginModal isOpen={isOpenLoginModal} onClose={closeLoginModal} />
    </>
  );
};

export default Banner;
