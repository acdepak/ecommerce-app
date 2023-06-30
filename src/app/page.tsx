"use client";
import { Button, FeaturedSection, ShopAllProd } from "@/components";
import {
  CheveronLeftIcon,
  CheveronRightIcon,
  FacebookIcon,
  LikeIcon,
  PlantStarIcon,
  ScrollIcon,
  SecurityIcon,
} from "@/icons";
import { useWindowWidth } from "@react-hook/window-size";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import Slider from "react-slick";

export default function Home() {
  return (
    <main className="!flex flex-col ">
      <HeroSection />
      <WorkFlowSection />
      <ProductSection />
      <FeaturedSection />
      <SocialSection />
      <BlogSection />
    </main>
  );
}

const HeroSection = () => {
  const settingsRef = createRef<Slider>();

  const settings = {
    dotsClass: "slick-dots !flex gap-8 !pb-10 justify-center items-center ",
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

  const nextImg = () => {
    settingsRef?.current && settingsRef?.current.slickPrev();
  };

  const PreviousImg = () => {
    settingsRef?.current && settingsRef?.current.slickNext();
  };
  return (
    <>
      <div className="hero relative overflow-x-clip md:h-[450px] lg:h-[800px]">
        <Slider ref={settingsRef} {...settings}>
          {heroImage?.map(({ id, link, alt }) => (
            <div className="relative h-[450px] lg:h-[800px]" key={id}>
              <Image
                src={link}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
              <div className="absolute top-0 h-full w-full bg-black/50 md:hidden" />
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-14 left-0 right-0 top-0 m-auto h-fit md:bottom-0 md:left-auto md:right-10 lg:right-72">
          <div className="flex flex-col items-center gap-5 text-cream md:items-start">
            <h1 className="font font-josefin text-3xl font-semibold lg:text-5xl lg:leading-[65px]">
              King's Day 2023!
            </h1>
            <p className="max-w-xs font-mulish text-base md:max-w-sm lg:text-lg lg:leading-7">
              Our market starts at noon. You receive a 25% discount with the
              code SFG500 on selected wraps and ring slings.
            </p>
            <ShopAllProd url="/" varient="hero" />
          </div>
        </div>
        <div className="absolute bottom-0 top-0 my-auto h-fit w-full">
          <div className="flex justify-between px-4 lg:px-10">
            <div
              className="h-7 w-7 hover:cursor-pointer hover:text-red lg:h-10 lg:w-10"
              onClick={PreviousImg}
            >
              <CheveronLeftIcon />
            </div>
            <div
              className="h-7 w-7 hover:cursor-pointer hover:text-red lg:h-10 lg:w-10"
              onClick={nextImg}
            >
              <CheveronRightIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

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
                  ? "bottom-[10%] left-5 right-0 m-auto lg:left-10"
                  : img.position == "center"
                  ? "bottom-[10%] left-5 right-0 m-auto lg:left-auto lg:right-20 lg:top-1/3 "
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

      <div className="flex justify-center py-14">
        <Link href={"#"}>
          <Button varient="primary">SHOP ALL PRODUCTS</Button>
        </Link>
      </div>
    </div>
  );
};

const SocialSection = () => {
  const posts = [
    {
      id: 1,
      link: "/assets/images/image 108.png",
      alt: "image 108",
      text: "Likes",
      likes: "14,900",
      icon: <LikeIcon />,
      tag: "@SlingForBabies",
      color: "red",
    },
    {
      id: 2,
      link: "/assets/images/image 107.png",
      alt: "image 107",
      text: "Likes",
      likes: "14,900",
      icon: <LikeIcon />,
      tag: "@SlingForBabies",
      color: "red",
    },
    {
      id: 3,
      link: "/assets/images/image 109.png",
      alt: "image 109",
      text: "Likes",
      likes: "14,900",
      icon: <LikeIcon />,
      tag: "@SlingForBabies",
      color: "red",
    },
    {
      id: 4,
      link: "/assets/images/image 110.png",
      alt: "image 110",
      text: "Likes",
      likes: "14,900",
      icon: <LikeIcon />,
      tag: "@SlingForBabies",
      color: "red",
    },
    {
      id: 5,
      link: "/assets/images/image 111.png",
      alt: "image 111",
      text: "People Follow Us",
      likes: "10,264",
      icon: <FacebookIcon />,
      tag: "@SlingForBabies",
      color: "darkblue",
    },
    {
      id: 6,
      link: "/assets/images/image 112.png",
      alt: "image 112",
      text: "People Follow Us",
      likes: "10,264",
      icon: <FacebookIcon />,
      tag: "@SlingForBabies",
      color: "darkblue",
    },
    {
      id: 7,
      link: "/assets/images/image 105.png",
      alt: "image 105",
      text: "People Follow Us",
      likes: "10,264",
      icon: <FacebookIcon />,
      tag: "@SlingForBabies",
      color: "darkblue",
    },
    {
      id: 8,
      link: "/assets/images/image 113.png",
      alt: "image 113",
      text: "People Follow Us",
      likes: "10,264",
      icon: <FacebookIcon />,
      tag: "@SlingForBabies",
      color: "darkblue",
    },
  ];
  return (
    <div>
      <h3 className="py-10 text-center font-mulish text-4xl">
        Follow us on Facebook @SlingsForBabies
      </h3>
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4">
        {posts?.map((post, id) => (
          <>
            <div
              key={id}
              className="relative h-[200px] w-[220px] lg:h-[440px] lg:w-[480px] "
            >
              <Image
                src={post.link}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
              <div className="absolute top-0 h-[200px] w-[220px] lg:h-[440px] lg:w-[480px] ">
                <div
                  className={clsx(
                    "flex h-full w-full flex-col items-center justify-center gap-3 text-white opacity-0 hover:opacity-100 lg:gap-6",
                    {
                      "hover:bg-red": post.color === "red",
                      "hover:bg-darkblue": post.color === "darkblue",
                    }
                  )}
                >
                  <div className="h-7 w-7 text-white lg:h-14 lg:w-14">
                    {post.icon}
                  </div>
                  <div className="flex flex-col items-center gap-1 lg:gap-3">
                    <p className="lg:text:2xl font-josefin text-lg font-normal lg:text-2xl">
                      {post.likes}
                    </p>
                    <p className="font-mulish text-sm font-normal lg:text-base">
                      {post.text}
                    </p>
                  </div>
                  <Link
                    href="https://www.facebook.com/slingforbabies"
                    className="font-mulish text-xs font-normal lg:text-base"
                  >
                    {post.tag}
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Happy International Babywearing week!",
      des: "Hear from experienced babywearing mamas...",
      src: "/assets/images/image 114.png",
    },
    {
      id: 2,
      title: "8 Tips for New Moms: Surviving the First Weeks",
      des: "The first few weeks at home with a newborn baby can be a roller coaster—physically, emotionally, and mentally. Here are our uncut, unfiltered tips for new moms for surviving those first couple of weeks with your newborn.",
      src: "/assets/images/image 115.png",
    },
  ];
  return (
    <div className="px-5 pt-16 lg:px-48">
      <h3 className="py-10 text-center font-josefin text-base font-semibold uppercase leading-7">
        Popular Articles in Our Parents magazine
      </h3>

      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {articles?.map((article, id) => (
            <div>
              <div key={id} className="relative h-72 lg:h-[500px]">
                <Image
                  src={article.src}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="py-4 font-josefin text-lg font-normal lg:text-2xl lg:leading-10">
                  {article.title}
                </h1>
                <p className="font-mulish text-sm font-normal lg:text-base ">
                  {article.des}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>

      <Link href={"#"} className="flex justify-center py-14">
        <Button varient="primary">READ ALL ARTICLES</Button>
      </Link>
    </div>
  );
};
