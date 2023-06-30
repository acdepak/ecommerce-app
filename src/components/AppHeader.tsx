"use client";
import {
  BasketIcon,
  ChatBubbleIcon,
  CheveronDownIcon,
  CrossIcon,
  GiftIcon,
  MenuIcon,
  SearchIcon,
} from "@/icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { id: 1, title: "Wraps", link: "#" },
  { id: 2, title: "Carriers", link: "#" },
  { id: 3, title: "Accessories", link: "#" },
  { id: 4, title: "For you", link: "#" },
  { id: 5, title: "Kids", link: "#" },
];

export const AppHeader = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const SearchBox = () => {
    return (
      <div className="flex items-center rounded-full border border-black bg-white px-4">
        <input
          type="text"
          placeholder="Search"
          className="h-9 font-mulish text-base leading-6 focus:outline-none"
        />
        <div className="h-5 w-5 hover:text-red" onClick={Search}>
          <SearchIcon />
        </div>
      </div>
    );
  };
  const Search = () => {}; // What and How to search

  return (
    <main className="relative flex flex-col gap-7 pt-6">
      <div className="flex px-5 pb-5 lg:px-10  lg:pb-0 xl:px-20">
        {/* top left section */}
        <div className="hidden w-full items-center justify-start gap-5 lg:flex ">
          <SearchBox />

          <Link href="/" className="flex items-center gap-2 hover:text-red">
            <div className="h-4 w-5">
              <ChatBubbleIcon />
            </div>
            <p className="font-mulish text-base leading-6 ">Help&nbsp;Me</p>
          </Link>

          <Link
            href="/"
            className="font-mulish text-base hover:text-red lg:leading-6"
          >
            Blog
          </Link>
        </div>
        {/* sm: Menu */}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex w-full items-center justify-start gap-2 lg:hidden"
        >
          <div className="h-7 w-7 hover:text-red">
            <MenuIcon />
          </div>
          <p className="font-mulish  font-semibold md:text-lg">MENU</p>
        </div>

        {/* Logo Image */}
        <Link href="/" className=" flex justify-center md:pr-2 lg:pl-2 lg:pr-1">
          <div className="relative h-12 w-28 md:h-16 md:w-40 ">
            <Image
              src="/assets/images/Logo.png"
              alt="Sling for Babies"
              fill
              sizes="(max-width: 768px) 100vw"
              className="object-contain"
              quality={100}
            />
          </div>
        </Link>

        {/* top right section */}
        <div className="flex w-full items-center justify-end gap-5 ">
          {/* sm: Search icon  */}
          <div
            onClick={() => setOpenSearch(!openSearch)}
            className="h-5 w-5 hover:text-red md:hidden"
          >
            <SearchIcon />
          </div>

          {/* md: Search box  */}
          <div className="hidden md:block lg:hidden ">
            <SearchBox />
          </div>

          {/* lg: top right section; md: basket icon */}
          <div className="hidden items-center gap-2 hover:text-red lg:flex">
            <p className="font-mulish text-base leading-6 ">English</p>
            <div className="h-1 w-3">
              <CheveronDownIcon />
            </div>
          </div>

          <p className="hidden font-mulish text-base leading-6 hover:text-red lg:block">
            My Account
          </p>
          {/* Basket */}
          <Link href="/" className="flex items-center gap-2 hover:text-red">
            <div className="w-6">
              <BasketIcon />
            </div>
            <p className=" hidden font-mulish text-base leading-6 lg:block ">
              Basket&#40;{3}&#41;
            </p>
          </Link>
        </div>
      </div>

      <div className="hidden lg:block">
        <Menu />
      </div>

      <Offer />

      {/* sm:Search Bar appear/disappear */}
      <div
        className={clsx("fixed top-0 z-10 flex min-h-screen w-full md:hidden", {
          hidden: !openSearch,
        })}
      >
        <div className="relative left-0 right-0 top-24 z-10 mx-auto h-fit">
          <SearchBox />
        </div>
        <div
          onClick={() => setOpenSearch(false)}
          className="absolute top-0 min-h-screen w-full bg-black/20"
        />
      </div>

      {/* sm:Menu */}
      <div
        className={clsx("fixed top-0 z-10 flex h-full w-full", {
          hidden: !openMenu,
        })}
      >
        <div className="z-50 min-h-screen w-3/4 bg-white">
          <div className="flex flex-col items-start gap-20 px-10 pt-10">
            <Link href="/" className="flex justify-center ">
              <div className="relative h-16 w-40 ">
                <Image
                  src="/assets/images/Logo.png"
                  alt="Sling for Babies"
                  fill
                  sizes="(max-width: 768px) 100vw"
                  className="object-contain"
                  quality={100}
                />
              </div>
            </Link>

            <div>
              {menuItems?.map((item, id) => (
                <div
                  key={id}
                  className="flex items-center gap-2 py-2 hover:cursor-pointer hover:text-red"
                >
                  <p className="font-mulish text-lg leading-7 ">{item.title}</p>
                  <div className="h-1 w-3">
                    <CheveronDownIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          onClick={() => setOpenMenu(false)}
          className="absolute top-0 h-full w-full bg-black/50"
        />
      </div>
    </main>
  );
};

const Menu = () => {
  return (
    <div className="flex items-center justify-center gap-12 pb-1 pt-5 ">
      <div className="flex items-center justify-center gap-12">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 hover:cursor-pointer hover:text-red"
          >
            <p className="font-mulish text-lg leading-7 ">{item.title}</p>
            <div className="h-1 w-3">
              <CheveronDownIcon />
            </div>
          </div>
        ))}
      </div>
      <Link href="#" className="font-mulish text-lg leading-7 hover:text-red">
        Sale
      </Link>
      <Link href="#" className="font-mulish text-lg leading-7 hover:text-red">
        New
      </Link>
      <Link
        href="#"
        className="flex items-center justify-center gap-2 hover:text-red"
      >
        <div className="h-3 w-4 ">
          <GiftIcon />
        </div>
        <p className="font-mulish text-lg leading-7 hover:text-red">
          Mystery Box
        </p>
      </Link>
    </div>
  );
};

const Offer = () => {
  const [offerShown, setOfferShown] = useState(true);
  return (
    <>
      {offerShown && (
        <div className="flex items-center bg-darkblue px-5">
          <p className="w-full text-center font-mulish text-sm leading-10 text-white">
            Free Shopping this week only!
          </p>
          <div
            className="h-3 w-3 text-white hover:text-red"
            onClick={() => setOfferShown(false)}
          >
            <CrossIcon />
          </div>
        </div>
      )}
    </>
  );
};
