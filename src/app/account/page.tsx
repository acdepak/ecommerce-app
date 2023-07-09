import { BreadCrumb, Typography } from "@/components";
import { AddressIcon, FavouritesIcon, HistoryIcon, Information } from "@/icons";
import clsx from "clsx";
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
      <div className="grid grid-flow-row grid-cols-2 items-center justify-center gap-20 py-10 md:grid-cols-4">
        {items.map((items, id) => (
          <Link href={items.src} key={id}>
            <div className="w-fit border border-grayhard">
              <div
                className={clsx(
                  "flex items-center justify-center hover:text-red",
                  {
                    "h-36 w-36 px-7 ": items.title === "Information",
                    "h-36 w-36 p-7 ": items.title === "Addresses",
                    "h-36 w-36 p-6": items.title === "Favourites",
                    "h-36 w-36 p-7": items.title === "Order History",
                  }
                )}
              >
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

{
  /* <div className="flex w-fit justify-center border-2 border-yellow">
<div className="h-36 w-16 border-2 border-grayhard">
  <Information />
</div>
</div>
<div className="flex w-fit justify-center border-2 border-yellow">
<div className="h-14 w-16 border-2 border-grayhard">
  <AddressIcon />
</div>
</div>
<div className="flex w-fit justify-center border-2 border-yellow">
<div className="h-20 w-16 border-2 border-grayhard">
  <FavouritesIcon />
</div>
</div>
<div className="flex w-fit justify-center border-2 border-yellow">
<div className="h-24 w-16 border-2 border-grayhard">
  <HistoryIcon />
</div>
</div> */
}
