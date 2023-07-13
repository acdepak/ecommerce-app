"use client";
import { ProhibitionIcon, TruckIcon } from "@/icons";
import { ShareIcon } from "@/icons/ShareIcon";
import Image from "next/image";
import Link from "next/link";
import { createRef } from "react";
import Slider from "react-slick";
import { Typography } from "./Typography";

export const ItemDisplaySection = ({
  path,
  title,
  price,
}: {
  path: string;
  title: string;
  price: string;
}) => {
  const Images = [
    { id: 1, src: "/assets/images/giftImg1.png" },
    { id: 2, src: "/assets/images/giftImg2.png" },
    { id: 3, src: "/assets/images/giftImg3.png" },
    { id: 4, src: "/assets/images/MysteryBox.png" },
  ];
  const TopSettingRef = createRef<Slider>();

  const TopSettings = {
    customPaging: function () {
      return <div className="h-full w-full" />;
    },
    // dotsClass: "slick-dots !flex gap-10 justify-center ",
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    fade: true,
    speed: 1000,
    lazyLoading: true,
    dots: true,
    infinite: true,
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-10 bg-gray py-20">
        <div className="mystery flex w-2/5 gap-5 ">
          {/* <Slider ref={TopSettingRef} {...TopSettings}> */}
          {/* {Images?.map((image, id) => ( */}
          <div className="flex flex-col gap-5">
            <div className="relative h-24 w-24">
              <Image
                src="/assets/images/giftImg1.png"
                alt="MysteryBox.png"
                fill
                sizes="(max-width: 768px) 100vw)"
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative h-24 w-24">
              <Image
                src="/assets/images/giftImg2.png"
                alt="MysteryBox.png"
                fill
                sizes="(max-width: 768px) 100vw)"
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="relative h-24 w-24">
              <Image
                src="/assets/images/giftImg3.png"
                alt="MysteryBox.png"
                fill
                sizes="(max-width: 768px) 100vw)"
                className="object-cover"
                quality={100}
              />
            </div>
          </div>
          <div className=" relative h-[790px] w-[526px]">
            <Image
              src="/assets/images/MysteryBox.png"
              alt="MysteryBox.png"
              fill
              sizes="(max-width: 768px) 100vw)"
              className="object-cover"
              quality={100}
            />
          </div>
          {/* ))} */}
          {/* </Slider> */}
        </div>

        <div className="flex w-2/5 flex-col gap-5">
          <Typography varient="body1" color="grayhard">
            {path}
          </Typography>

          <Typography varient="heading2" color="dark">
            {title}
          </Typography>

          <div className="flex w-full justify-between">
            <div className="flex flex-col">
              <Typography varient="social">€{price}</Typography>
              <Typography varient="body1" color="grayhard">
                Tax Inc.
              </Typography>
            </div>
            {/* out of Stock */}
            <div>
              <div className="flex items-center gap-2 ">
                <div className="h-4 w-4 rotate-90 stroke-2 text-red">
                  <ProhibitionIcon />
                </div>

                <Typography varient="body1" color="red">
                  Out of Stock
                </Typography>
              </div>

              <Typography varient="body">
                Reference: <span className="font-semibold">YREVTSLPRO65</span>
              </Typography>
            </div>
          </div>
          {/* Truck icon */}
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 ">
              <TruckIcon />
            </div>

            <Typography varient="body1" color="dark">
              Netherlands, Belgium - ordered before 23:00,{" "}
              <span className="font-bold">shipped the same day!</span>
            </Typography>
          </div>
          {/* Link */}
          <Link href="/gift" className="flex items-center gap-3">
            <div className="h-6 w-7">
              <ShareIcon />
            </div>
            <Typography varient="body1" color="sky" className="underline">
              Send Link to a Friend
            </Typography>
          </Link>
        </div>
      </div>

      <DescriptionSection />
    </div>
  );
};

const DescriptionSection = () => {
  return (
    <div>
      <div>Description</div>
    </div>
  );
};
