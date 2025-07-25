'use client';

import { CATEGORY } from '@/constants/data';
import { CategoryCarousel, ProductCard } from '@components/customize';
import { Button } from '@components/ui/button';

interface PopularProps {}

const Popular: FC<PopularProps> = () => {
  return (
    <div className="text-center pt-16 bg-background px-3">
      {/* popular title */}
      <div className="flex flex-col gap-4">
        <h1 className="md:text-[32px] text-[25px] font-bold">موجود در بیش از ۵۰۰۰ محله</h1>
        <h3 className="">
          در آمستردام، اوترخت، روتردام، لاهه، آیندهوون، گرونینگن و بسیاری از جاهای دیگر...
        </h3>
        <Button className="text-blue-500 " variant="link">
          محله خود را پیدا کنید
        </Button>
      </div>

      {/* popular list */}
      <div className="mt-20">
        <h1 className="md:text-[32px] text-[25px] font-bold mb-5">محصولات مشترک و پرتکرار</h1>
        <CategoryCarousel categories={CATEGORY} />
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard
            image="https://picsum.photos/seed/picsum/200/300"
            price={100}
            freeToBorrow={false}
            title="دریل برقی"
            description="دریل برقی مناسب برای کارهای خانگی"
            userName="علی"
            userAvatar="https://picsum.photos/seed/picsum/200/300"
          />
          <ProductCard
            image="https://picsum.photos/seed/picsum/200/300"
            price={0}
            freeToBorrow={true}
            title="چادر مسافرتی"
            description="چادر ۴ نفره ضد آب"
            userName="زهرا"
            userAvatar="https://picsum.photos/seed/picsum/200/300"
          />
          <ProductCard
            image="https://picsum.photos/seed/picsum/200/300"
            price={50}
            freeToBorrow={false}
            title="دوچرخه کوهستان"
            description="دوچرخه مناسب مسیرهای خاکی"
            userName="محمد"
            userAvatar="https://picsum.photos/seed/picsum/200/300"
          />
          <ProductCard
            image="https://picsum.photos/seed/picsum/200/300"
            price={0}
            freeToBorrow={true}
            title="کتاب رمان"
            description="رمان پرفروش سال"
            userName="سارا"
            userAvatar="https://picsum.photos/seed/picsum/200/300"
          />
        </div>
      </div>
    </div>
  );
};

export default Popular;
