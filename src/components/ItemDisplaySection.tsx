"use client";
import {
  BronzeStarIcon,
  CheveronDownIcon,
  DiamondIcon,
  GoldStarIcon,
  HeartIcon,
  PlatinumIcon,
  ProhibitionIcon,
  SilverStarIcon,
  TruckIcon,
} from "@/icons";
import { ShareIcon } from "@/icons/ShareIcon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import Slider from "react-slick";
import { Button } from "./Button";
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

  const GiftOptions = [
    {
      id: 1,
      title: "Bronze Box - value aprox. €85",
      icon: <BronzeStarIcon />,
    },
    {
      id: 2,
      title: "Silver Box - value aprox. €140",
      icon: <SilverStarIcon />,
    },
    {
      id: 3,
      title: "Gold Box - value aprox. €195",
      icon: <GoldStarIcon />,
    },
    {
      id: 4,
      title: "Platinum Box - value aprox. €295",
      icon: <PlatinumIcon />,
    },
    {
      id: 5,
      title: "Diamond Box - value aprox. €350",
      icon: <DiamondIcon />,
    },
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

  const [option, setOption] = useState("Diamond Box - value aprox. €350");
  const [giftId, setGiftId] = useState<number>(1);
  const [giftIcon, setGiftIcon] = useState(<DiamondIcon />);
  const [isClick, setIsClick] = useState(false);

  const [value, setValue] = useState<number>(1);

  const [like, setLike] = useState(false);

  useEffect(() => {
    console.log(giftId);
    setGiftId(giftId);
  });

  useEffect(() => {});

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

          {/* Option Box */}
          <div className="w-2/3 ">
            <div
              onClick={() => setIsClick(!isClick)}
              className="flex items-center justify-between gap-5 border-2 border-grayhard px-5 py-3"
            >
              <div className=""></div>

              <div className="flex items-center gap-2">
                <div className="h-10 w-10">{giftIcon}</div>
                {option}
              </div>

              <div className="h-1 w-3">
                <CheveronDownIcon />
              </div>
            </div>

            {isClick && (
              <div className="absolute z-10 flex w-1/4 justify-center  ">
                <div className="flex flex-col items-start gap-2 ">
                  {GiftOptions?.map((option) => (
                    <div
                      key={option.id}
                      className="z-10 flex items-center gap-2 pl-5"
                      onClick={() => setGiftId(option.id)}
                    >
                      <div className="h-10 w-10">{option.icon}</div>
                      {option.title}
                    </div>
                  ))}
                  <div className="absolute top-0 h-full w-3/4 bg-gray/90 " />
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-5">
            {/* increase decrease */}
            <div className="flex w-fit items-center border border-grayhard bg-white py-2">
              <div
                className="pl-4 text-4xl text-grayhard hover:cursor-pointer"
                onClick={() => value > 1 && setValue(value - 1)}
              >
                -
              </div>
              <p className="w-14 text-center text-lg">{value}</p>
              <div
                className="pr-4 text-4xl text-grayhard hover:cursor-pointer"
                onClick={() => setValue(value + 1)}
              >
                +
              </div>
            </div>

            {/* Button */}
            <Link href="#">
              <Button varient="product">NOTIFY WHEN AVAILABLE</Button>
            </Link>

            {/* Like */}
            <div
              onClick={() => setLike(!like)}
              className={clsx(
                "h-10 w-10 rounded-full border-2 border-grayhard p-2 text-dark hover:cursor-pointer",
                {
                  "border-red bg-red text-white": like,
                  "hover:bg-grayhard": !like,
                }
              )}
            >
              <HeartIcon />
            </div>
          </div>

          <Typography varient="body1" width="xl">
            Order the Mystery Box you like, receive a e-mail with a form. By
            filling out this form, we get to know you more and hear your
            preferences. With this information, we hope to surprise you with a
            box that will definitely be a match for you.
          </Typography>
        </div>
      </div>

      {/* Description */}
      <div>
        <div className="flex items-center justify-center gap-10 ">
          Description
          <div
            onClick={() => setLike(!like)}
            className={clsx(
              "h-96 w-96 rounded-full border-2 border-grayhard p-2 text-dark hover:cursor-pointer",
              {
                "border-red bg-red text-white": like,
                "hover:bg-grayhard": !like,
              }
            )}
          >
            <HeartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
