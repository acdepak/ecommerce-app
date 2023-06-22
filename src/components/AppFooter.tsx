import {
  ArrowIcon,
  BelgiumFlagIcon,
  EuIcon,
  ExclamationIcon,
  GermanyFlagIcon,
  GiftIcon,
  NethelandFlagIcon,
  WorldwideIcon,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";

export const AppFooter = () => {
  return (
    <div className="flex flex-col">
      <DeliverySection />
      <BrandsSection />
      <FooterFooter />
    </div>
  );
};

const DeliverySection = () => {
  return (
    <div className="flex flex-col gap-14 bg-[#F8F2EC] py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="font-josefin text-2xl">Delivery Price</p>
        <p className="font-mulish text-base">
          We ship our products to most countries in the World
        </p>
      </div>

      <div className="flex items-center justify-center gap-40">
        <div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-5">
              <div className="h-12 w-16">
                <BelgiumFlagIcon />
              </div>
              <div className="h-12 w-16">
                <NethelandFlagIcon />
              </div>
              <div className="h-12 w-16">
                <GermanyFlagIcon />
              </div>
            </div>
            <p className="font-mulish text-base">
              Belgium, Netherlands, Germany
            </p>
            <p className="font-mulish text-lg font-bold">€4,95</p>
            <p className="text-sky">Free from €90</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-5">
              <div className="h-12 w-16">
                <EuIcon />
              </div>
            </div>
            <p className="font-mulish text-base">European Union</p>
            <p className="flex items-center gap-2 font-mulish text-lg font-bold">
              €9,95
              <span className="h-5 w-5">
                <ExclamationIcon />
              </span>
            </p>
            <p className="text-sky">Free from €150</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-5">
              <div className="h-12 w-16 ">
                <WorldwideIcon />
              </div>
            </div>
            <p className="font-mulish text-base">WorldWide</p>
            <p className="font-mulish text-lg font-bold ">€24</p>
            <p className="text-sky">Free from €200</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const BrandsSection = () => {
  const brands = [
    { id: 1, src: "/assets/images/brand1.png", alt: "brand1" },
    { id: 2, src: "/assets/images/brand2.png", alt: "brand2" },
    { id: 3, src: "/assets/images/brand3.png", alt: "brand3" },
    { id: 4, src: "/assets/images/brand4.png", alt: "brand4" },
    { id: 5, src: "/assets/images/brand5.png", alt: "brand5" },
    { id: 6, src: "/assets/images/brand6.png", alt: "brand6" },
  ];
  return (
    <div className="flex flex-col gap-8 bg-darkblue pb-20 pt-9 text-center">
      <p className="font font-josefin text-base font-semibold text-white">
        OUR MOST VALUABLE BRANDS
      </p>

      <div className="flex items-center justify-center gap-32">
        {brands?.map((brand) => (
          <div key={brand?.id} className="relative h-20 w-24">
            <Image
              src={brand?.src}
              alt={brand?.alt}
              fill
              className="object-contain"
              sizes="(maxwidth: 768) 100vw"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterFooter = () => {
  const Abouts = [
    { id: 1, link: "#", title: "Specials" },
    { id: 2, link: "#", title: "New products" },
    { id: 3, link: "#", title: "Best sellers" },
    { id: 4, link: "#", title: "Contact us" },
    { id: 5, link: "#", title: "About us" },
    { id: 6, link: "#", title: "Conditions of use" },
    { id: 7, link: "#", title: "Shipping &ldquo; Returns" },
    { id: 8, link: "#", title: "FAQ" },
  ];

  const Shops = [
    { id: 1, link: "#", title: "Wraps" },
    { id: 2, link: "#", title: "Carriers" },
    { id: 3, link: "#", title: "Accessories" },
    { id: 4, link: "#", title: "For you" },
    { id: 5, link: "#", title: "Kids" },
    { id: 6, link: "#", title: "Sale" },
    { id: 7, link: "#", title: "New" },
  ];
  return (
    <div className="flex items-center justify-center pb-10 pt-20">
      <div className="container flex flex-col items-center gap-10 divide-y divide-gray-300 px-28">
        <div className="grid w-full grid-flow-row grid-cols-3 justify-center gap-x-52">
          <div>
            <p className="pb-5 font-josefin text-base font-semibold leading-7">
              ABOUT
            </p>
            {Abouts?.map((about, id) => (
              <div key={id} className="font-mulish text-base leading-8">
                <Link href={about.link}>{about.title}</Link>
              </div>
            ))}
          </div>

          <div>
            <p className="pb-5 font-josefin text-base font-semibold">SHOP</p>
            {Shops?.map((item, id) => (
              <div key={id} className="font-mulish text-base leading-8">
                <Link href={item.link}>{item.title}</Link>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-josefin text-base font-semibold leading-7">
              JOIN THE SFB COMMUNITY!
            </p>
            <button className="rounded-full bg-sky p-4 px-10 text-center text-white">
              SIGN UP FOR NEWSLETTERS
            </button>

            <div className="flex flex-col justify-start">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5">
                  <GiftIcon />
                </div>
                <Link
                  href={"#"}
                  className="font-mulish text-sm font-bold leading-7"
                >
                  TRY OUR MISTRY BOX
                </Link>
                <div className="flex h-5 w-5 justify-center">
                  <ArrowIcon />
                </div>
              </div>
              <p className="max-w-xs px-8 font-mulish text-sm">
                We surprise you with a box that will definitely be a match for
                you.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between pt-10">
          <div className="relative h-[26px] w-[460px]">
            <Image
              src="/assets/images/visa.png"
              alt="VISA"
              fill
              className="object-contain"
              sizes="(maxwidth: 768) 100vw"
              quality={100}
            />
          </div>
          <div className="relative h-[35px] w-[276px]">
            <Image
              src="/assets/images/visa2.png"
              alt="VISA"
              fill
              className="object-contain"
              sizes="(maxwidth: 768) 100vw"
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};