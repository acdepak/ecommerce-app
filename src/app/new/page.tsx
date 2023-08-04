"use client";
import { CheveronLeftIcon, CheveronRightIcon } from "@/icons";
import Image from "next/image";
import { createRef } from "react";
import Slider from "react-slick";

export default function page() {
  const baseUrl = "/assets/gift";
  const Images = [
    { id: 1, link: "/assets/images/giftImg1.png", alt: "Img1" },
    { id: 2, link: "/assets/images/giftImg2.png", alt: "Img2" },
    { id: 3, link: "/assets/images/giftImg3.png", alt: "Img3" },
    { id: 4, link: "/assets/images/MysteryBox.png", alt: "MysteryBox" },
  ];

  const TopSettingRef = createRef<Slider>();

  const TopSettings = {
    customPaging: function (i: number) {
      return (
        <div className="">
          <Image
            src={`${baseUrl}/giftImg${i + 1}.png`}
            alt="Hello"
            fill
            sizes="(max-width: 768px) 100vw)"
            className="object-cover"
            quality={100}
          />
        </div>
      );
    },
    dots: true,
    dotsClass: "slick-dots !flex flex-col right-28 top-5 h-fit ",
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    fade: true,
    speed: 1000,
    lazyLoading: true,
    infinite: true,
    arrows: false,
  };

  const nextImg = () => {
    TopSettingRef?.current && TopSettingRef?.current.slickNext();
  };
  const previousImg = () => {
    TopSettingRef?.current && TopSettingRef?.current.slickPrev();
  };
  return (
    <div className="mystery flex items-center justify-center gap-5">
      <div
        className="h-7 w-7 text-dark hover:cursor-pointer hover:text-red lg:h-10 lg:w-10"
        onClick={previousImg}
      >
        <CheveronLeftIcon />
      </div>

      <div className="relative h-[790px] w-[526px] bg-amber-400">
        <Slider ref={TopSettingRef} {...TopSettings}>
          {Images?.map(({ id, link, alt }) => (
            <div key={id} className="relative h-[790px] w-[526px]">
              <Image
                src={link}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw)"
                className="object-cover"
                quality={100}
              />
            </div>
          ))}
        </Slider>
      </div>

      <div
        className="h-7 w-7 text-dark hover:cursor-pointer hover:text-red lg:h-10 lg:w-10"
        onClick={nextImg}
      >
        <CheveronRightIcon />
      </div>
    </div>
  );
}
