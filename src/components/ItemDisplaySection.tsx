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
import { InputIncreaseDecrease } from "./InputIncreaseDecrease";
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
    stock: 5,
    like: false,
    name: "Silver",
    icon: <SilverStarIcon />,
  },
  {
    id: 3,
    title: "Gold Box - value aprox. €195",
    price: 195,
    reference: "YREVTSLPRO63",
    stock: 0,
    like: false,
    name: "Gold",
    icon: <GoldStarIcon />,
  },
  {
    id: 4,
    title: "Platinum Box - value aprox. €295",
    price: 295,
    reference: "YREVTSLPRO64",
    stock: 7,
    like: true,
    name: "Platinum",
    icon: <PlatinumIcon />,
  },
  {
    id: 5,
    title: "Diamond Box - value aprox. €350",
    price: 350,
    reference: "YREVTSLPRO65",
    stock: 9,
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

  const [like, setLike] = useState(false);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-5 bg-gray px-5 py-20 md:flex-row lg:gap-10">
        <ImageSection />

        <div className="flex flex-col gap-5 md:w-1/2 lg:w-2/5">
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

          {/* Link to Friend */}
          <div>
            <LinktoFriend />
          </div>

          {/* Option Box */}
          <div className="bg-white lg:w-2/3">
            <div
              onClick={() => setShowOptions(!showOptions)}
              className="flex items-center justify-between gap-5 border-2 border-grayhard px-5 py-3"
            >
              <div className="hidden lg:block" />
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
              <div className="absolute z-10 flex justify-center lg:w-1/4  ">
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
                  <div className="absolute top-0 h-full w-full bg-gray/90 lg:w-3/4 " />
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-evenly gap-5 lg:flex-row lg:justify-start ">
            <InputIncreaseDecrease
              stock={selectedGift.stock}
              name={selectedGift.name}
            />

            {/* Button */}
            <Link
              href={selectedGift.stock < 1 ? "/notify" : "/addtocart"}
              className="order-last lg:order-none"
            >
              <Button varient="product">
                {selectedGift.stock < 1 ? (
                  <p>NOTIFY WHEN AVAILABLE</p>
                ) : (
                  <p className="px-12">ADD TO CART</p>
                )}
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

      <DescriptionSection options={GiftOptions} />
    </div>
  );
};

const ImageSection = () => {
  const baseUrl = "/assets/gift";
  const Images = [
    { id: 4, link: "/assets/images/MysteryBox.png", alt: "MysteryBox" },
    { id: 1, link: "/assets/images/giftImg1.png", alt: "Img1" },
    { id: 2, link: "/assets/images/giftImg2.png", alt: "Img2" },
    { id: 3, link: "/assets/images/giftImg3.png", alt: "Img3" },
  ];

  const TopSettingRef = createRef<Slider>();

  const TopSettings = {
    customPaging: function (i: number) {
      return (
        <div
          className={clsx("invisible lg:visible", {
            hidden: i === 3,
          })}
        >
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
    dotsClass: "slick-dots !flex flex-col right-24 top-5 h-fit ",
    slidesToScroll: 1,
    slidesToShow: 1,
    autoplay: false,
    fade: true,
    speed: 500,
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
    <div className="mystery relative flex items-center justify-center gap-5 md:w-1/2 lg:w-2/5">
      <div
        className="absolute left-0 z-10 h-7 w-7 rounded-full bg-white text-dark hover:cursor-pointer hover:text-red lg:h-10 lg:w-10 "
        onClick={previousImg}
      >
        <CheveronLeftIcon />
      </div>

      <div className="flex w-[355px] justify-end lg:w-[630px]">
        <div className="relative h-[532px] w-[355px] lg:h-[790px] lg:w-[526px] ">
          <Slider ref={TopSettingRef} {...TopSettings}>
            {Images?.map(({ id, link, alt }) => (
              <div
                key={id}
                className="relative h-[532px] w-[355px] lg:h-[790px] lg:w-[526px]"
              >
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
      </div>

      <div
        className="absolute right-0 h-7 w-7 rounded-full bg-white text-dark hover:cursor-pointer hover:text-red lg:block lg:h-10 lg:w-10 "
        onClick={nextImg}
      >
        <CheveronRightIcon />
      </div>
    </div>
  );
};

const LinktoFriend = () => {
  return (
    <Link href="/gift" className="flex items-center gap-3">
      <div className="h-6 w-7">
        <ShareIcon />
      </div>
      <Typography varient="body1" color="sky" className="underline">
        Send Link to a Friend
      </Typography>
    </Link>
  );
};

const DescriptionSection: React.FC<{
  options: GiftOptions[];
}> = ({ options }) => {
  const [selectedTab, setSelectedTab] = useState("Features");
  return (
    <div className="flex flex-col items-center justify-center gap-5 px-10 py-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-start gap-5 ">
          <div className="flex gap-5">
            <Typography
              varient="heading4"
              className={clsx("text-grayhard hover:cursor-pointer", {
                "text-sky underline underline-offset-8":
                  selectedTab == "Features",
              })}
              onClick={() => setSelectedTab("Features")}
            >
              Features
            </Typography>

            <Typography
              varient="heading4"
              className={clsx("text-grayhard hover:cursor-pointer", {
                "text-sky underline underline-offset-8":
                  selectedTab == "Description",
              })}
              onClick={() => setSelectedTab("Description")}
            >
              Description
            </Typography>
          </div>

          <Typography varient="heading3"> More about product</Typography>
        </div>

        <div
          className={clsx("flex flex-col gap-5", {
            hidden: selectedTab !== "Description",
          })}
        >
          <Typography varient="body">
            Thank you for being interested in our Mystery Box!
            <br /> Are you up for a surprise or maybe a challenge?
          </Typography>

          <Typography varient="body" className="max-w-4xl">
            Our Mystery Boxes are for everyone, available in 5 different sizes.
            Do you have a hard time choosing a wrap or color or are you a thrill
            seeker who loves surprises? We are going to do best wee can to make
            the nicest and most beautiful Mystery Box ever, fitted for you.
            Order the Mystery Box you like, receive a e-mail with a form. By
            filling out this form, we get to know you more and hear your
            preferences. With this information, we hope to surprise you with a
            box that will dfinitely be a match for you.
          </Typography>

          <Typography varient="body" width="4xl">
            With the Mystery Box more valur than what you have paid is
            guranteed!
          </Typography>

          <div className="flex flex-col items-start gap-2 ">
            {options?.map((option) => (
              <div key={option.id} className="z-10 flex items-center gap-2 ">
                <div className="h-10 w-10">{option.icon}</div>
                {option.title}
              </div>
            ))}
          </div>

          <Typography varient="body" width="4xl">
            Returning is possible, at your own costs. This has to be the whole
            box, not parts of it.
          </Typography>
        </div>

        <div
          className={clsx("flex flex-col gap-5", {
            hidden: selectedTab !== "Features",
          })}
        >
          <Typography varient="body" width="4xl">
            Follow these steps to order your Yaro Flex modular carrier:
            <ol type="1">
              <li>1. Order Hip Belt - one size for all.</li>
              <li>
                2. Choose either Half Buckle shoulder straps or &#40;and&#41;
                Full Buckle shoulder straps. Full buckle shoulder straps come in
                sizes S, M, L.
              </li>
              <li>3. Choose Baby or &#40;and&#41; Toddler back panel.</li>
            </ol>
          </Typography>

          <Typography varient="body">
            Different sizes of back panels:
            <br />
            Baby panel:
            <ul>
              <li>
                - dimensions: width - 39cm &#40;15,4&quot;&#41;, height - 47 cm
                &#40;18.5&quot;&#41;
              </li>
              <li>
                - for children between 7 lbs and 33 lbs &#40;3.2 kg and
                15kg&#41;
              </li>
              <li>- for body length up to 85 cm</li>
            </ul>
          </Typography>

          <Typography varient="body">
            <li>1. Order Hip Belt - one size for all.</li>
            <li>2. Choose either Half Buckle shoulder straps</li>
            <li>3. Choose Baby or &#40;and&#41; Toddler back panel.</li>
          </Typography>
        </div>
      </div>
    </div>
  );
};
