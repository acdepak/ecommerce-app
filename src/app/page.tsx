"use client";
import {
  ArrowIcon,
  CheveronLeftIcon,
  CheveronRightIcon,
  PlantStarIcon,
  ScrollIcon,
  SecurityIcon,
} from "@/icons";
import Image from "next/image";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 7000,
    fade: true,
    speed: 1000,
    lazyLoading: true,
    dots: false,
    infinite: true,
    arrows: false,
  };

  const heroImage = [
    { id: 1, link: "/assets/images/hero101.png", alt: "Hero1" },
    { id: 2, link: "/assets/images/hero103.png", alt: "Hero2" },
    { id: 3, link: "/assets/images/hero102.png", alt: "Hero3" },
  ];

  return (
    <main className="flex flex-col ">
      <div className="relative ">
        <Slider {...settings}>
          {heroImage?.map(({ id, link, alt }) => (
            <div className="h-[80vh]" key={id}>
              <Image
                src={link}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute bottom-0 right-72 top-0 my-auto h-fit">
          <div className="flex flex-col gap-5 text-white">
            <p className="font font-josefin text-5xl font-semibold leading-[65px]">
              King's Day 2023!
            </p>
            <p className="max-w-sm font-mulish text-lg leading-7">
              Our market starts at noon. You receive a 25% discount with the
              code SFG500 on selected wraps and ring slings.
            </p>
            <div className="flex items-center gap-3">
              <p className="font-josefin text-sm font-bold leading-[60px] tracking-wider">
                SHOP ALL PRODUCTS
              </p>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow">
                <div className="h-2 w-4">
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 top-0 my-auto h-fit w-full">
          <div className="flex justify-between px-10">
            <div className="h-10 w-10">
              <CheveronLeftIcon />
            </div>
            <div className="h-10 w-10">
              <CheveronRightIcon />
            </div>
          </div>
        </div>
      </div>
      <WorkFlowSection />
      Hello
    </main>
  );
}

const WorkFlowSection = () => {
  const works = [
    {
      id: 1,
      icon: <PlantStarIcon />,
      title: "BEST PRODUCT WORLDWIDE",
      des: "We know what to look for when we select baby carriers for our online store.",
    },
    {
      id: 2,
      icon: <ScrollIcon />,
      title: "BREATHABLE, STYLISH MATERIALS",
      des: "It's made from machine-washable, breathable air mesh, and comes in colors you actually want to wear.",
    },
    {
      id: 3,
      icon: <SecurityIcon />,
      title: "SECURE CHECKOUT",
      des: "We accept PayPal, MasterCard, Visa, and et al.: names you know and trust!",
    },
  ];
  return (
    <div className="grid w-full grid-cols-3 bg-cream px-48 py-14">
      {works.map((work) => (
        <div key={work.id} className="flex flex-col items-center">
          <div className="h-24 w-24 ">{work.icon}</div>
          <p className="text-center font-josefin text-lg font-bold leading-10">
            {work.title}
          </p>
          <p className="max-w-sm text-center font-mulish text-base leading-6">
            {work.des}
          </p>
        </div>
      ))}
    </div>
  );
};
