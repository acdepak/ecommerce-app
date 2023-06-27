import Image from "next/image";
import { ShopAllProd } from "./ShopAllProd";

export const FeaturedSection = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 bg-cream py-16 lg:gap-52">
        <div className="flex w-full flex-col items-start justify-center gap-8 pl-10">
          <h2 className="max-w-sm font-josefin text-3xl font-semibold lg:text-5xl lg:leading-[60px]">
            Find your perfect baby carrier!
          </h2>
          <p className="max-w-sm font-mulish text-base leading-7 lg:text-lg">
            Babywearing is an amazing parenting tool but it can be overwhelming
            as a first time parent or caregiver. Our aim is to make your
            babywearing journey easy and enjoyable!
          </p>
          <ShopAllProd url="#" varient="featured" />
        </div>

        <div className="w-full pr-5">
          <div className="relative h-[438px] ">
            <Image
              src="/assets/images/image 106.png"
              alt="Gray Sling"
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover "
              quality={100}
            />
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-end gap-10 bg-darkblue py-16 lg:gap-52 ">
        <div className="w-full pl-5 lg:h-[668px] lg:w-[440px]">
          <div className="relative h-[45vh] lg:h-full">
            <Image
              src="/assets/images/image 107.png"
              alt="Red Sling"
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-cover "
              quality={100}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-8 pr-10 text-white">
          <h2 className="max-w-sm font-josefin text-3xl font-semibold lg:text-5xl lg:leading-[60px]">
            Parents know parenthood best
          </h2>
          <p className="max-w-sm  font-mulish text-base leading-7 md:hidden lg:block lg:text-lg">
            We&lsquo;re parents too, and we know how overwhelming it can feel to
            shop for baby products. That&lsquo;s why SFB was born—to create a
            no-brainer shopping experience for the next generation of parents
            where you can buy quality products at a price that actually makes
            sense.
          </p>
          <p className="max-w-sm font-mulish text-base leading-7 lg:hidden lg:text-lg">
            Babywearing is an amazing parenting tool but it can be overwhelming
            as a first time parent or caregiver. Our aim is to make your
            babywearing journey easy and enjoyable!
          </p>
          <ShopAllProd url="#" varient="hero" />
        </div>
      </div>
    </div>
  );
};
