'use client';
import Banner from './banner';
import HowIsWork from './how-is.work';
import Popular from './popular';

const Home = () => {
  return (
    <div className="w-full  bg-cover bg-green-100 ">
      <div className="font-[family-name:var(--font-geist-sans)] pb-52 bg-background max-w-[1400px] mx-auto">
        {/* <SplashScreen/> */}
        <Banner />
        <Popular />
        <HowIsWork />
      </div>
    </div>
  );
};

export default Home;
