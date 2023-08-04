"use client";
import {
  BronzeStarIcon,
  CheveronDownIcon,
  CheveronLeftIcon,
  CheveronRightIcon,
  DiamondIcon,
  GoldStarIcon,
  HeartIcon,
  PlatinumIcon,
  ProhibitionIcon,
  SilverStarIcon,
  TickIcon,
  TruckIcon,
} from "@/icons";
import { ShareIcon } from "@/icons/ShareIcon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { SetStateAction, createRef, useState } from "react";
import Slider from "react-slick";
import { Button } from "./Button";
import { Typography } from "./Typography";

interface GiftOptions {
  name: string;
  id: number;
  title: string;
  price: number;
  reference: string;
  stock: number;
  like: boolean;
  icon: JSX.Element;
}

const GiftOptions: GiftOptions[] = [
  {
    id: 1,
    title: "Bronze Box - value aprox. €85",
    price: 85,
    reference: "YREVTSLPRO61",
    stock: 10,
    like: true,
    name: "Bronze",
    icon: <BronzeStarIcon />,
  },
  {
    id: 2,
    title: "Silver Box - value aprox. €140",
    price: 140,
    reference: "YREVTSLPRO62",
    stock: 10,
    like: true,
    name: "Silver",
    icon: <SilverStarIcon />,
  },
  {
    id: 3,
    title: "Gold Box - value aprox. €195",
    price: 195,
    reference: "YREVTSLPRO63",
    stock: 10,
    like: true,
    name: "Gold",
    icon: <GoldStarIcon />,
  },
  {
    id: 4,
    title: "Platinum Box - value aprox. €295",
    price: 295,
    reference: "YREVTSLPRO64",
    stock: 10,
    like: true,
    name: "Platinum",
    icon: <PlatinumIcon />,
  },
  {
    id: 5,
    title: "Diamond Box - value aprox. €350",
    price: 350,
    reference: "YREVTSLPRO65",
    stock: 10,
    like: true,
    name: "Diamond",
    icon: <DiamondIcon />,
  },
];

export const ItemDisplaySection = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedGift, setSelectedGift] = useState(
    GiftOptions[GiftOptions.length - 1]
  );

  const showAllOptions = () => {
    setShowOptions(!showOptions);
  };

  const hideOptions = () => {
    setShowOptions(false);
  };

  const handleOptionSelect = (
    option: SetStateAction<{
      id: number;
      title: string;
      price: number;
      reference: string;
      stock: number;
      like: boolean;
      name: string;
      icon: JSX.Element;
    }>
  ) => {
    setSelectedGift(option);
    hideOptions();
  };

  const [value, setValue] = useState<number>(1);

  const [like, setLike] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-center gap-10 bg-gray py-20">
        <ImageSection />

        <div className="flex w-2/5 flex-col gap-5 ">
          <div>
            <Typography varient="body1" color="grayhard">
              Home / Mystery Box
            </Typography>

            <Typography varient="heading2" color="dark">
              {`SFB Mystery box - ${selectedGift.name}`}
            </Typography>

            <div className="flex w-3/4 justify-between">
              <div className="flex flex-col items-start">
                <Typography varient="social">€{selectedGift.price}</Typography>
                <Typography varient="body1" color="grayhard">
                  Tax Inc.
                </Typography>
              </div>

              {/*Stocked / out of Stock */}

              <div>
                <div className="flex items-center gap-2 ">
                  {selectedGift.stock == 0 ? (
                    <div className="h-4 w-4 rotate-90 stroke-2 text-red">
                      <ProhibitionIcon />
                    </div>
                  ) : (
                    <div className="h-4 w-4 stroke-2 text-sky">
                      <TickIcon />
                    </div>
                  )}

                  <Typography
                    varient="body1"
                    color={selectedGift.stock < 1 ? "red" : "sky"}
                  >
                    {selectedGift.stock < 1 ? "Out of Stock" : "In Stock"}
                  </Typography>
                </div>

                <Typography varient="body">
                  Reference:{" "}
                  <span className="font-semibold">
                    {selectedGift.reference}
                  </span>
                </Typography>
              </div>
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
              onClick={showAllOptions}
              className="flex items-center justify-between gap-5 border-2 border-grayhard px-5 py-3"
            >
              <div />
              {/* for alignment */}

              <div className="flex items-center gap-2">
                <div className="h-10 w-10">{selectedGift.icon}</div>
                {selectedGift.title}
              </div>

              <div className="h-1 w-3">
                <CheveronDownIcon />
              </div>
            </div>

            {showOptions && (
              <div className="absolute z-10 flex w-1/4 justify-center  ">
                <div className="flex flex-col items-start gap-2 ">
                  {GiftOptions?.map((option) => (
                    <div
                      key={option.id}
                      className="z-10 flex items-center gap-2 pl-5"
                      onClick={() => handleOptionSelect(option)}
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

          <div className="flex items-center gap-5 ">
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
            <Link href={selectedGift.stock < 1 ? "/notify" : "/addtocart"}>
              <Button varient="product">
                {selectedGift.stock < 1
                  ? "NOTIFY WHEN AVAILABLE"
                  : "ADD TO CART"}
              </Button>
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

      <DescriptionSection options={GiftOptions} onClick={handleOptionSelect} />
    </div>
  );
};

const ImageSection = () => {
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
};

const DescriptionSection: React.FC<{
  options: GiftOptions[];
  onClick: (option: GiftOptions) => void;
}> = ({ options, onClick }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start gap-5 ">
          <Typography
            varient="heading4"
            color="sky"
            className="underline underline-offset-8"
          >
            Description
          </Typography>

          <Typography varient="heading3"> More about product</Typography>
        </div>

        <Typography varient="body">
          Thank you for being interested in our Mystery Box!
          <br /> Are you up for a surprise or maybe a challenge?
        </Typography>

        <Typography varient="body" className="max-w-4xl">
          Our Mystery Boxes are for everyone, available in 5 different sizes. Do
          you have a hard time choosing a wrap or color or are you a thrill
          seeker who loves surprises? We are going to do best wee can to make
          the nicest and most beautiful Mystery Box ever, fitted for you. Order
          the Mystery Box you like, receive a e-mail with a form. By filling out
          this form, we get to know you more and hear your preferences. With
          this information, we hope to surprise you with a box that will
          dfinitely be a match for you.
        </Typography>

        <Typography varient="body" className="max-w-4xl">
          With the Mystery Box more valur than what you have paid is guranteed!
        </Typography>

        <div className="flex flex-col items-start gap-2 ">
          {options?.map((option) => (
            <div
              key={option.id}
              className="z-10 flex items-center gap-2 "
              onClick={() => onClick(option)}
            >
              <div className="h-10 w-10">{option.icon}</div>
              {option.title}
            </div>
          ))}
        </div>

        <Typography varient="body" className="max-w-4xl">
          Returning is possible, at your own costs. This has to be the whole
          box, not parts of it.
        </Typography>
      </div>
    </div>
  );
};
