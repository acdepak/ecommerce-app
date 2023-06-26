"use client";
import {
  ArrowIcon,
  CheveronLeftIcon,
  CheveronRightIcon,
  PlantStarIcon,
  ScrollIcon,
  SecurityIcon,
} from "@/icons";
import { useWindowWidth } from "@react-hook/window-size";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";

export default function Home() {
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    fade: true,
    speed: 1000,
    lazyLoading: true,
    dots: true,
    infinite: true,
  };

  const heroImage = [
    { id: 1, link: "/assets/images/hero101.png", alt: "Hero1" },
    { id: 2, link: "/assets/images/hero103.png", alt: "Hero2" },
    { id: 3, link: "/assets/images/hero102.png", alt: "Hero3" },
  ];

  return (
    <main className="flex flex-col ">
      <div className="relative h-[80vh] overflow-x-clip">
        <Slider {...settings}>
          {heroImage?.map(({ id, link, alt }) => (
            <div className="relative h-[80vh]" key={id}>
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
          <div className="flex flex-col gap-5 text-cream">
            <p className="font font-josefin text-5xl font-semibold leading-[65px]">
              King's Day 2023!
            </p>
            <p className="max-w-sm font-mulish text-lg leading-7">
              Our market starts at noon. You receive a 25% discount with the
              code SFG500 on selected wraps and ring slings.
            </p>
            <Link href={"#"} className="flex items-center gap-3">
              <p className="font-josefin text-sm font-bold leading-[60px] tracking-wider">
                SHOP ALL PRODUCTS
              </p>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow">
                <div className="h-2 w-4">
                  <ArrowIcon />
                </div>
              </div>
            </Link>
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
      <ProductSection />
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
    <div className="grid w-full grid-cols-1 gap-y-5 bg-cream px-5 py-14 md:grid-cols-3 lg:px-48">
      {works.map((work) => (
        <div
          key={work.id}
          className="flex flex-col items-center justify-center gap-1"
        >
          <div className="h-20 w-20 lg:h-24 lg:w-24">{work.icon}</div>
          <div className="flex flex-col gap-2">
            <p className="text-center font-josefin font-semibold lg:font-bold lg:leading-10">
              {work.title}
            </p>
            <p className="max-w-sm text-center font-mulish text-sm leading-6">
              {work.des}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const ProductSection = () => {
  const [isMobile, setIsMobile] = useState(true);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setIsMobile(windowWidth < 811);
  }, [windowWidth]);

  const collegeImg = [
    {
      id: 1,
      link: "/assets/images/image 102.png",
      linksm: "/assets/images/image 102.png",
      alt: "Image1",
      title: "Woven Wraps",
      des: "Woven wraps for children provide extreme comfort of carrying a baby in many ways!",
      position: "bottom",
      col: 1,
    },
    {
      id: 2,
      link: "/assets/images/hero102.png",
      linksm: "/assets/images/image 103.png",
      alt: "Image1",
      title: "Ring Sling",
      des: "Ring Slings are simple to use baby carriers suitable for newborn to toddler.",
      position: "center",
      col: 2,
    },
    {
      id: 3,
      link: "/assets/images/image104.png",
      linksm: "/assets/images/image 104.png",
      alt: "Image1",
      title: "Soft Structured Carrier",
      des: "The soft structured baby carrier has its own structure with padding, fabrics, straps and other accessories.",
      position: "left",
      col: 2,
    },
    {
      id: 4,
      link: "/assets/images/image 105.png",
      linksm: "/assets/images/image 105.png",
      alt: "Image1",
      title: "Accessories",
      des: "Accessorize your Ergobaby Carrier with matching Infant Inserts, Weather Covers and more.",
      position: "bottom",
      col: 1,
    },
  ];
  return (
    <div className="">
      <div className="grid grid-flow-row grid-cols-1 gap-5 px-5 pt-10 text-white md:grid-cols-2 lg:grid-cols-3 lg:px-48">
        {collegeImg?.map((img, id) => (
          <div
            className={`relative h-[45vh] ${
              img.col == 2 ? "col-span-1 lg:col-span-2 " : null
            }`}
            key={id}
          >
            <Image
              src={isMobile ? img.linksm : img.link}
              alt={img.alt}
              fill
              quality={100}
              sizes="(max-width: 768px) 100vw"
              className="object-cover "
            />
            <div className="absolute h-full w-full bg-black/20" />
            <div
              className={`absolute flex flex-col gap-2 ${
                img.position == "bottom"
                  ? "bottom-[10%] left-5 right-0 m-auto lg:left-0"
                  : img.position == "center"
                  ? "bottom-[10%] left-5 right-0 m-auto lg:right-20 lg:top-1/3 "
                  : "bottom-[10%] left-5 right-0 m-auto lg:left-20 lg:top-1/3 "
              }`}
            >
              <p className="font-josefin text-2xl font-semibold leading-10 lg:text-4xl">
                {img.title}
              </p>
              <p className="max-w-sm font-mulish text-base leading-6">
                {img.des}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center py-14">
        <Link href={"#"} className="rounded-full border border-black p-3 px-5">
          SHOP ALL PRODUCTS
        </Link>
      </div>
    </div>
  );
};
{
  /* <div className="relative h-[400px]">
          <Image
            src="/assets/images/image 102.png"
            alt="image1"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
          <div className="absolute">
            <p>Woven Wraps</p>
            <p>
              Woven wraps for children provide extreme comfort of carrying a
              baby in many ways!
            </p>
          </div>
        </div>
        <div className="relative col-span-2 h-[400px]">
          <Image
            src="/assets/images/hero102.png"
            alt="image2"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
          <div className="absolute">
            <p>Ring Sling</p>
            <p>
              Ring Slings are simple to use baby carriers suitable for newborn
              to toddler.
            </p>
          </div>
        </div>
        <div className="relative col-span-2 h-[400px]">
          <Image
            src="/assets/images/image104.png"
            alt="image3"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
          <div className="absolute">
            <p>Soft Structured Carrier</p>
            <p>
              The soft structured baby carrier has its own structure with
              padding, fabrics, straps and other accessories.{" "}
            </p>
          </div>
        </div> */
}
