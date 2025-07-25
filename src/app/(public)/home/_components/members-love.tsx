import { Button } from '@components/ui/button';
import Image from 'next/image';

interface MembersLoveProps {}

const MembersLove: FC<MembersLoveProps> = () => {
  return (
    <div className="mt-2 bg-background flex flex-col justify-center items-center text-center p-2">
      <h1 className="md:text-[32px] text-[25px] mt-10">چرا اعضا پیربی را دوست دارند؟</h1>
      <div className="mt-5 grid gap-5 m-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        <div className="bg-gray-100 flex flex-col justify-between rounded-md overflow-hidden p-3 border">
          <p className="text-xs text-gray-600 ">
            « من پیربی را به خاطر سهولت استفاده‌اش دوست دارم. همچنین عاشق این هستم که با قرض دادن
            چیزهایی که در غیر این صورت استفاده نمی‌شوند، مردم را خوشحال کنم .»
          </p>
          <span className="flex items-center mt-5 gap-2">
            <Image
              className="rounded-full size-[30px]"
              src={'https://picsum.photos/seed/picsum/200/300'}
              width={30}
              height={30}
              alt=""
            />
            <p className="text-xs">{'صادق'}</p>
          </span>
        </div>
        <div className="bg-gray-100 flex flex-col justify-between rounded-md overflow-hidden p-3 border">
          <p className="text-xs text-gray-600 ">
            « من یک پازل را در عرض ۳۰ دقیقه، در فاصله پیاده‌روی، پیدا کردم. برای اولین تلاش بد نیست.
            »
          </p>
          <span className="flex items-center mt-5 gap-2">
            <Image
              className="rounded-full size-[30px]"
              src={'https://picsum.photos/seed/picsum/200/300'}
              width={30}
              height={30}
              alt=""
            />
            <p className="text-xs">{'صادق'}</p>
          </span>
        </div>
        <div className="bg-gray-100 flex flex-col justify-between rounded-md overflow-hidden p-3 border">
          <p className="text-xs text-gray-600 ">
            « کمک به مردم با قرض دادن وسایلم به آنها، حس خیلی خوبی به من می‌دهد. بنابراین این یک
            موقعیت برد-برد است. »
          </p>
          <span className="flex items-center mt-5 gap-2">
            <Image
              className="rounded-full size-[30px]"
              src={'https://picsum.photos/seed/picsum/200/300'}
              width={30}
              height={30}
              alt=""
            />
            <p className="text-xs">{'صادق'}</p>
          </span>
        </div>
      </div>
      <Button variant="link" className="text-blue-800">
        خودتان متوجه شوید
      </Button>
    </div>
  );
};

export default MembersLove;
