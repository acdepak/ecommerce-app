import Image from "next/image";
import { ShopAllProd } from "./ShopAllProd";
import { Typography } from "./Typography";

export const FeaturedSection = () => {
  return (
    <div>
      {/*  */}
      <div className="flex flex-col-reverse items-center justify-center gap-10 bg-cream py-16 md:flex-row lg:gap-52 lg:py-40 ">
        {/*  */}
        <div className="flex w-full justify-end pl-10 lg:w-1/3">
          <div className="flex flex-col items-start gap-5 lg:gap-8 ">
            {/* <h2 className="max-w-sm font-josefin text-3xl font-semibold lg:text-5xl lg:leading-[60px]">
              Find your perfect baby carrier!
            </h2> */}
            <Typography varient="heading1" width="sm">
              Find your perfect baby carrier!
            </Typography>
            {/* <p className="max-w-sm font-mulish text-base lg:text-lg lg:leading-7">
              Babywearing is an amazing parenting tool but it can be
              overwhelming as a first time parent or caregiver. Our aim is to
              make your babywearing journey easy and enjoyable!
            </p> */}
            <Typography varient="body1" width="lg">
              Babywearing is an amazing parenting tool but it can be
              overwhelming as a first time parent or caregiver. Our aim is to
              make your babywearing journey easy and enjoyable!
            </Typography>
            <ShopAllProd url="#" varient="featured" />
          </div>
        </div>

        <div className="w-full md:pr-5 lg:w-1/2">
          <div className="relative h-[45vh] lg:w-[681px]">
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

      <div className="bg-darkblue py-16 lg:py-5 ">
        <div className="flex flex-col  items-center justify-center gap-5 md:flex-row lg:relative lg:bottom-20 lg:items-end lg:gap-52 lg:pl-40">
          {/*  */}
          <div className="w-full md:w-1/2 md:pl-5 lg:flex lg:w-1/3 lg:justify-end">
            <div className="relative h-[400px] lg:h-[668px] lg:w-[440px]">
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

          <div className="flex flex-col gap-5 pl-10 text-white md:pr-10 lg:w-1/2 lg:gap-8 lg:pb-10 lg:pl-0 ">
            {/* <h2 className="max-w-sm font-josefin text-3xl font-semibold lg:text-5xl lg:leading-[60px]">
              Parents know parenthood best
            </h2> */}
            <Typography varient="heading1" width="lg">
              Parents know parenthood best
            </Typography>
            <p className="hidden  max-w-sm font-mulish text-base leading-7 lg:block lg:text-lg">
              We&lsquo;re parents too, and we know how overwhelming it can feel
              to shop for baby products. That&lsquo;s why SFB was born—to create
              a no-brainer shopping experience for the next generation of
              parents where you can buy quality products at a price that
              actually makes sense.
            </p>
            <p className="max-w-sm font-mulish text-base leading-7 lg:hidden lg:text-lg">
              Babywearing is an amazing parenting tool but it can be
              overwhelming as a first time parent or caregiver. Our aim is to
              make your babywearing journey easy and enjoyable!
            </p>
            <ShopAllProd url="#" varient="hero" />
          </div>
          {/*  */}
        </div>
      </div>
      {/*  */}
    </div>
  );
};
