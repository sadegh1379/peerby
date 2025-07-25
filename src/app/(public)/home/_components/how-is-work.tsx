import { Button } from '@components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';

interface HowIsWorkProps {}

const HowIsWork: FC<HowIsWorkProps> = () => {
  return (
    <div className="mt-2 bg-background flex flex-col justify-center items-center text-center p-2">
      <h1 className="md:text-[32px] text-[25px] mt-10">پیربی چگونه کار می‌کند؟</h1>
      <Tabs defaultValue="account" className="w-full mt-10 ">
        <TabsList className="w-[300px] mx-auto">
          <TabsTrigger className="px-6 py-3" value="lend">
            قرض دادن
          </TabsTrigger>
          <TabsTrigger value="barrow">قرض گرفتن</TabsTrigger>
        </TabsList>
        <TabsContent value="barrow">
          <div className="mt-5 grid gap-3 grid-cols-2 md:grid-cols-4 ">
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
        </TabsContent>
        <TabsContent value="lend">
          <div className="mt-5 grid gap-3 grid-cols-2 md:grid-cols-4 ">
            <div className="bg-gray-100 rounded-md overflow-hidden p-3 border">
              <Image
                src={'/assets/images/how-is-work-5.png'}
                className="w-full rounded-md"
                width={200}
                height={200}
                alt=""
              />
              <span className="flex flex-col gap-1 p-2">
                <p className="text-sm">۱. آیا شما ... دارید؟</p>
                <p className="text-xs text-gray-600 ">
                  اقلامی را پیشنهاد دهید یا ببینید همسایگانتان به دنبال چه چیزی هستند
                </p>
              </span>
            </div>
            <div className="bg-gray-100 rounded-md overflow-hidden p-3 border">
              <Image
                src={'/assets/images/how-is-work-6.png'}
                className="w-full rounded-md"
                width={200}
                height={200}
                alt=""
              />
              <span className="flex flex-col gap-1 p-2">
                <p className="text-sm">۲. بپذیرید</p>
                <p className="text-xs text-gray-600 ">
                  دریافت درخواست از همسایگان؛ در صورت امکان، قبول کنید برای عضویت در انجمن
                </p>
              </span>
            </div>
            <div className="bg-gray-100 rounded-md overflow-hidden p-3 border">
              <Image
                src={'/assets/images/how-is-work-7.png'}
                className="w-full rounded-md"
                width={200}
                height={200}
                alt=""
              />
              <span className="flex flex-col gap-1 p-2">
                <p className="text-sm">3. انتخاب</p>
                <p className="text-xs text-gray-600 ">
                  خودتان انتخاب کنید که آیا برای پول قرض می‌دهید یا برای خشنود کردن کسی
                </p>
              </span>
            </div>
            <div className="bg-gray-100 rounded-md overflow-hidden p-3 border">
              <Image
                src={'/assets/images/how-is-work-8.png'}
                className="w-full rounded-md"
                width={200}
                height={200}
                alt=""
              />
              <span className="flex flex-col gap-1 p-2">
                <p className="text-sm">ضمانت</p>
                <p className="text-xs text-gray-600 ">
                  حوادث نادر هستند، اما اگر اتفاقی بیفتد، ضمانت پیربی وجود دارد. از کالا استفاده
                </p>
              </span>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <Button variant="link" className="mt-3">
        برای کسب اطلاعات بیشتر، سوالات متداول ما را بخوانید
      </Button>

      <Button className="my-3" variant="outline">
        شروع به قرض گرفتن کنید
      </Button>
    </div>
  );
};

export default HowIsWork;
