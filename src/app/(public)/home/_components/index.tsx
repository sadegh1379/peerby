'use client';
import Banner from './banner';
import Footer from './footer';
import HowIsWork from './how-is-work';
import MembersLove from './members-love';
import Popular from './popular';

const Home = () => {
  return (
    <div className="w-full bg-cover bg-green-100 ">
      <div className="font-[family-name:var(--font-geist-sans)]  max-w-[1100px] mx-auto">
        {/* <SplashScreen/> */}
        <Banner />
        <Popular />
        <HowIsWork />
        <MembersLove />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
