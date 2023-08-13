"use client";
import {
  BasketIcon,
  ChatBubbleIcon,
  CheveronDownIcon,
  CrossIcon,
  GiftIcon,
  SearchIcon,
} from "@/icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MenuAnimation } from "./MenuAnimation";

const menuItems = [
  {
    id: 11,
    title: "Wraps",
    icon: <CheveronDownIcon />,
    subMenu: [
      { id: 111, title: "Woven wrap", link: "/wrap" },
      { id: 112, title: "Stretchy wrap", link: "/wrap" },
      { id: 113, title: "Ring sling", link: "/wrap" },
      { id: 114, title: "Baby Wrap", link: "/wrap" },
    ],
  },
  {
    id: 12,
    title: "Carriers",
    icon: <CheveronDownIcon />,
    subMenu: [
      { id: 121, title: "Yaro Flex", link: "#" },
      { id: 122, title: "Tula", link: "#" },
      { id: 123, title: "Storchewiege", link: "#" },
      { id: 124, title: "Marsupi", link: "#" },
      { id: 125, title: "Bondolino", link: "#" },
    ],
  },
  {
    id: 13,
    title: "Accessories",
    icon: <CheveronDownIcon />,
    subMenu: [
      { id: 131, title: "Bondolino", link: "#" },
      { id: 132, title: "My Sol", link: "#" },
    ],
  },
  {
    id: 14,
    title: "For you",
    icon: <CheveronDownIcon />,
    subMenu: [
      { id: 141, title: "Tula", link: "#" },
      { id: 142, title: "Storchewiege", link: "#" },
    ],
  },
  {
    id: 15,
    title: "Kids",
    icon: <CheveronDownIcon />,
    link: "/kids",
    subMenu: [
      { id: 151, title: "Bondolino", link: "#" },
      { id: 152, title: "Marsupi", link: "#" },
    ],
  },
  {
    id: 16,
    title: "Sale",
    icon: null,
    link: "/sale",
  },
  {
    id: 17,
    title: "New",
    icon: null,
    link: "/new",
  },
  {
    id: 18,
    title: "Mystery Box",
    icon: <GiftIcon />,
    link: "/gift",
  },
];

export const AppHeader = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const Search = () => {}; // What and How to search
  const SearchBox = () => {
    return (
      <div className="flex items-center rounded-full border border-black bg-white px-4">
        <input
          type="text"
          placeholder="Search"
          className="h-9 font-mulish text-base leading-6 focus:outline-none"
        />
        <div
          className="h-5 w-5 hover:cursor-pointer hover:text-red"
          onClick={Search}
        >
          <SearchIcon />
        </div>
      </div>
    );
  };

  return (
    <main className="relative flex flex-col pt-6">
      <div className="flex px-5 pb-5 lg:px-10 lg:pb-0 xl:px-20">
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

        {/* sm: Menu show hide*/}
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="flex w-full items-center justify-start gap-2 lg:hidden"
        >
          <div className="hover:text-red">
            <MenuAnimation />
          </div>
          <p className="font-mulish font-semibold md:text-lg">MENU</p>
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
          <div className="hidden lg:block">
            <Language />
          </div>

          <Link
            href={"/account"}
            className="hidden font-mulish text-base leading-6 hover:text-red lg:block"
          >
            My Account
          </Link>
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

      <div
        className={clsx("hidden lg:block", {
          hidden: openSearch,
        })}
      >
        <Menu />
      </div>

      <Offer />

      {/* sm:Search Bar appear/disappear */}
      <div
        className={clsx("fixed top-0 z-20 flex min-h-screen w-full md:hidden", {
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
      <SmallScreenMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </main>
  );
};

const Language = () => {
  const Language = [
    { id: 100, lang: "English", action: "#" },
    { id: 101, lang: "English - AUS", action: "#" },
    { id: 102, lang: "English - India", action: "#" },
    { id: 103, lang: "English - UK", action: "#" },
    { id: 104, lang: "English - US", action: "#" },
  ];
  return (
    <div className="group flex flex-col ">
      <div className="flex items-center gap-2 hover:cursor-pointer hover:text-red">
        <p className="font-mulish text-lg leading-6 lg:text-base">
          <span className="inline no-underline lg:hidden">Language: </span>{" "}
          <span className="text-sky underline lg:text-black lg:no-underline">
            English
          </span>
        </p>
        <div className="hidden h-1 w-3 lg:block">
          <CheveronDownIcon />
        </div>
      </div>
      <div className="absolute mt-6 hidden flex-col rounded-lg bg-gray py-3 pl-2 pr-5 font-josefin group-hover:flex ">
        {Language.map((item, id) => (
          <div className=" hover:cursor-pointer hover:text-red" key={id}>
            {item.lang}
          </div>
        ))}
      </div>
    </div>
  );
};

interface SmallScreenMenuProps {
  openMenu: boolean;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const SmallScreenMenu: React.FC<SmallScreenMenuProps> = ({
  openMenu,
  setOpenMenu,
}) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean[]>(
    menuItems.map(() => false)
  );

  const toggleSubMenu = (id: number) => {
    const updatedSubMenu = [...isSubMenuOpen];
    updatedSubMenu[id] = !updatedSubMenu[id];
    setIsSubMenuOpen(updatedSubMenu);
  };
  return (
    <div
      className={clsx(
        "fixed top-[8.2%] z-10 flex h-full w-full flex-col lg:hidden",
        {
          hidden: !openMenu,
        }
      )}
    >
      <div className="z-50 min-h-screen w-3/4 bg-white">
        <div className="flex flex-col items-start gap-7 px-10 pt-10">
          <div className="flex flex-col items-start justify-center gap-7">
            {menuItems.map((item, id) => (
              <div
                key={item.id}
                className="flex flex-col items-start justify-start"
              >
                <Link
                  href={item.link ? item.link : "#"}
                  className="flex items-center justify-start gap-2 hover:cursor-pointer hover:text-red"
                  onClick={() => toggleSubMenu(id)}
                >
                  {item.title == "Mystery Box" && (
                    <div className="flex h-3 w-7 items-center ">
                      {item.icon}
                    </div>
                  )}
                  <p className="font-mulish text-2xl leading-7 ">
                    {item.title}
                  </p>
                  {item.title !== "Mystery Box" && (
                    <div className="flex h-2 w-6 items-center ">
                      {item.icon}
                    </div>
                  )}
                </Link>

                {item.subMenu && (
                  <div
                    className={clsx("flex-col gap-1 capitalize ", {
                      flex: isSubMenuOpen[id],
                      hidden: !isSubMenuOpen[id],
                    })}
                  >
                    {item.subMenu?.map((subitem, id) => (
                      <Link
                        key={id}
                        href={subitem.link}
                        className="pl-3 pt-3 font-mulish text-lg font-medium leading-7 hover:text-red"
                      >
                        {subitem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-5">
            <Language />

            <Link
              href="/"
              className="font-mulish text-lg hover:text-red lg:leading-6"
            >
              Blog
            </Link>

            <Link
              href={"/account"}
              className="font-mulish text-lg font-medium leading-6 hover:text-red lg:block"
            >
              My Account
            </Link>

            <Link href="/" className="flex items-center gap-2 hover:text-red ">
              <div className="h-4 w-5">
                <ChatBubbleIcon />
              </div>
              <p className="font-mulish text-lg leading-6">Help&nbsp;Me</p>
            </Link>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenMenu(false)}
        className="absolute top-0 h-full w-full bg-black/50"
      />
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex items-center justify-center gap-12 pb-1 pt-5 ">
      <div className="flex items-center justify-center gap-12">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col items-start justify-start"
          >
            <Link
              href={item.link ? item.link : "#"}
              className="flex items-center gap-2 hover:cursor-pointer hover:text-red"
            >
              <div className="h-3 w-4 ">
                {item.title == "Mystery Box" && item.icon}
              </div>
              <p className="font-mulish text-lg leading-7 ">{item.title}</p>
              <div className="h-1 w-3">
                {item.title !== "Mystery Box" && item.icon}
              </div>
            </Link>

            {item.subMenu && (
              <div className="absolute z-10 mt-7 hidden flex-col gap-1 rounded-lg bg-gray py-3 pl-3 pr-5 capitalize group-hover:flex">
                {item.subMenu?.map((subitem, id) => (
                  <Link
                    key={id}
                    href={subitem.link}
                    className="pt-1 font-mulish text-lg font-medium leading-7 tracking-wider hover:text-red"
                  >
                    {subitem.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
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
