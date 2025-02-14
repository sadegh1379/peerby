import Image from "next/image";
import React, { useEffect, useState } from "react";

const SplashScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    isLoading && (
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-t from-green-800 to-green-300 flex justify-center items-center z-50">
        <div className="text-center animate-fadeIn">
          {/* Logo */}
          <div className="bg-white w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4 shadow-xl animate-bounce">
            <Image className="rounded-full" src="/assets/icons/images.png" width={100} height={100} alt="" />
          </div>
          {/* App Name */}
          <h1 className="text-white text-4xl font-semibold text-white">Peerby</h1>
        </div>
      </div>
    )
  );
};

export { SplashScreen };
