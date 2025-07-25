'use client';

import Image from 'next/image';

interface ProductCardProps {
  image: string;
  price: number;
  freeToBorrow: boolean;
  title: string;
  description?: string;
  userName: string;
  userAvatar: string;
}

const ProductCard: FC<ProductCardProps> = ({
  freeToBorrow,
  image,
  price,
  title,
  userAvatar,
  userName,
  description
}) => {
  return (
    <div className="w-full rounded-sm border cursor-pointer">
      <div className="relative">
        <Image
          width={200}
          height={200}
          alt=""
          src={'https://picsum.photos/seed/picsum/200/300'}
          className="w-full h-[150px] md:h-[200px] "
        />
        <p className="absolute bottom-1 right-1 text-white text-sm">
          {freeToBorrow ? 'رایگان برای قرض گرفتن' : `${price} تومان`}
        </p>
      </div>
      <div className="p-2">
        <p className="text-right text-sm">{title}</p>
        <p className="text-right text-gray-400 text-xs">{description}</p>
        <span className="flex items-center mt-5 gap-2">
          <Image
            className="rounded-full size-[30px]"
            src={userAvatar}
            width={30}
            height={30}
            alt=""
          />
          <p className="text-xs">{userName}</p>
        </span>
      </div>
    </div>
  );
};

export { ProductCard };
