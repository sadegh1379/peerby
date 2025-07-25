import { CATEGORY } from '@/constants/data';
import Image from 'next/image';
import type { FC } from 'react';

interface CategoryCarouselProps {
  categories: typeof CATEGORY;
}

const CategoryCarousel: FC<CategoryCarouselProps> = ({ categories }) => {
  return (
    <div className="flex w-full grow-0 overflow-x-auto items-center gap-3 scrollbar-hide">
      {categories.map((category, index) => (
        <div
          key={index}
          className="border w-auto p-2 rounded-sm flex flex-col items-center gap-2 cursor-pointer min-w-[120px]"
        >
          <div className="w-[35px] h-[35px] rounded-sm overflow-hidden flex items-center justify-center mb-1">
            <Image
              src={'https://picsum.photos/seed/picsum/200/300'}
              width={35}
              height={35}
              className="object-cover w-full h-full"
              alt={''}
            />
          </div>
          <span className="whitespace-nowrap text-xs">{category.name}</span>
        </div>
      ))}
    </div>
  );
};

export { CategoryCarousel };
