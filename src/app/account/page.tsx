import { BreadCrumb, Typography } from "@/components";
import { AddressIcon, FavouritesIcon, HistoryIcon, Information } from "@/icons";
import Link from "next/link";

export default function page() {
  const items = [
    { id: 1, svg: <Information />, src: "/information", title: "Information" },
    { id: 2, svg: <AddressIcon />, src: "/address", title: "Addresses" },
    { id: 3, svg: <FavouritesIcon />, src: "/favourites", title: "Favourites" },
    {
      id: 4,
      svg: <HistoryIcon />,
      src: "/orderhistory",
      title: "Order History",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <BreadCrumb title="Your Account" desc="" path="Home / My Account" />
      <div className="grid grid-flow-row grid-cols-2 items-center justify-center gap-10 py-10 md:grid-cols-4 lg:gap-20">
        {items.map((items, id) => (
          <Link href={items.src} key={id}>
            <div className="w-fit border border-grayhard">
              <div className="flex h-36 w-36 items-center justify-center px-7 hover:text-red">
                {items.svg}
              </div>
            </div>
            <Typography varient="body1" center className=" hover:text-red">
              {items.title}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
}
