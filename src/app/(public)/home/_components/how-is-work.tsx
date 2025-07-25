import { Button } from '@components/ui/button';
import Image from 'next/image';

interface HowIsWorkProps {}

const HowIsWork: FC<HowIsWorkProps> = () => {
  return (
    <div className="mt-2 bg-background flex flex-col justify-center items-center text-center p-2">
      <h1 className="md:text-[32px] text-[25px] mt-10">پیربی چگونه کار می‌کند؟</h1>
      <div className="mt-5 grid gap-10 m-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        <div className="bg-gray-100 rounded-md overflow-hidden p-3 border">
          <Image
            src={'/assets/images/how-is-work-1.png'}
            className="w-full rounded-md"
            width={200}
            height={200}
            alt=""
          />
          <span className="flex flex-col gap-1 p-2">
            <p className="text-sm">۱. جستجو</p>
            <p className="text-xs text-gray-600 ">جستجوی محصول در نزدیکی شما</p>
          </span>
        </div>
        <div className="bg-gray-100 rounded-md overflow-hidden p-3 border">
          <Image
            src={'/assets/images/how-is-work-2.png'}
            className="w-full rounded-md"
            width={200}
            height={200}
            alt=""
          />
          <span className="flex flex-col gap-1 p-2">
            <p className="text-sm">۲. تأیید کنید</p>
            <p className="text-xs text-gray-600 ">
              برای عضویت در انجمن اشتراک‌گذاری محلی، پروفایل خود را تأیید کنید
            </p>
          </span>
        </div>
        <div className="bg-gray-100 rounded-md overflow-hidden p-3 border">
          <Image
            src={'/assets/images/how-is-work-3.png'}
            className="w-full rounded-md"
            width={200}
            height={200}
            alt=""
          />
          <span className="flex flex-col gap-1 p-2">
            <p className="text-sm">۳. درخواست</p>
            <p className="text-xs text-gray-600 ">درخواست از همسایه، مشاهده موجودی و رزرو</p>
          </span>
        </div>
        <div className="bg-gray-100 rounded-md overflow-hidden p-3 border">
          <Image
            src={'/assets/images/how-is-work-4.png'}
            className="w-full rounded-md"
            width={200}
            height={200}
            alt=""
          />
          <span className="flex flex-col gap-1 p-2">
            <p className="text-sm">۴. لذت ببرید</p>
            <p className="text-xs text-gray-600 ">
              از کالا استفاده کنید، لذت ببرید و در زمان مقرر آن را برگردانید
            </p>
          </span>
        </div>
      </div>
      <Button variant="link" className="text-blue-800">
        برای کسب اطلاعات بیشتر، سوالات متداول ما را بخوانید
      </Button>

      <Button className="my-5 bg-green-400 text-white" variant="outline">
        شروع به قرض گرفتن کنید
      </Button>
    </div>
  );
};

export default HowIsWork;
