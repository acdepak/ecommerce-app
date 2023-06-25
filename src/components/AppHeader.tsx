"use client";
import {
  BasketIcon,
  ChatBubbleIcon,
  CheveronDownIcon,
  CrossIcon,
  GiftIcon,
  SearchIcon,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const AppHeader = () => {
  return (
    <main className="flex flex-col gap-7  pt-6">
      <div className="flex flex-wrap justify-between px-20">
        <div className="flex items-center gap-5">
          <div className="flex items-center rounded-full border border-black px-4 ">
            <input
              type="text"
              placeholder="Search"
              className="h-9 font-mulish text-base leading-6"
            />
            <div className="h-5 w-5 ">
              <SearchIcon />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="h-4 w-5">
              <ChatBubbleIcon />
            </div>
            <p className="font-mulish text-base leading-6">Help Me</p>
          </div>

          <p className="font-mulish text-base leading-6">Blog</p>
        </div>

        <Link href="/" className="w-64">
          <div className="relative h-16 w-40 ">
            <Image
              src="/assets/images/Logo.png"
              alt="Sling for Babies"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </Link>

        <div className="flex items-center gap-5 ">
          <div className="flex items-center gap-2">
            <p className="font-mulish text-base leading-6">English</p>
            <div className="h-1 w-3">
              <CheveronDownIcon />
            </div>
          </div>

          <p className="font-mulish text-base leading-6">My Account</p>

          <div className="flex items-center gap-2">
            <div className="w-6">
              <BasketIcon />
            </div>
            <p className="font-mulish text-base leading-6">Basket&#40;3&#41;</p>
          </div>
        </div>
      </div>
      <Menu />
      <Offer />
    </main>
  );
};

const Menu = () => {
  const menuItems = [
    { id: 1, title: "Wraps", link: "#" },
    { id: 2, title: "Carriers", link: "#" },
    { id: 3, title: "Accessories", link: "#" },
    { id: 4, title: "For you", link: "#" },
    { id: 5, title: "Kids", link: "#" },
  ];
  return (
    <div className="flex items-center justify-center gap-12 pb-1 pt-5">
      <div className="flex items-center justify-center gap-12">
        {menuItems.map((item) => (
          <div key={item.id} className="flex items-center gap-2">
            <p className="font-mulish text-lg leading-7">{item.title}</p>
            <div className="h-1 w-3">
              <CheveronDownIcon />
            </div>
          </div>
        ))}
      </div>
      <Link href="#" className="font-mulish text-lg leading-7 text-red">
        Sale
      </Link>
      <Link href="#" className="font-mulish text-lg leading-7">
        New
      </Link>
      <Link href="#" className="flex items-center justify-center gap-2">
        <div className="h-3 w-4 ">
          <GiftIcon />
        </div>
        <p className="font-mulish text-lg leading-7">Mystery Box</p>
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
          <div className="h-3 w-3" onClick={() => setOfferShown(false)}>
            <CrossIcon />
          </div>
        </div>
      )}
    </>
  );
};
