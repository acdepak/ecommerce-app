import { ArrowIcon } from "@/icons";
import clsx from "clsx";
import Link from "next/link";

export const ShopAllProd = ({
  url,
  varient = "hero",
}: {
  url: string;
  varient: string;
}) => {
  return (
    <div>
      <Link href={url} className="flex flex-wrap items-center gap-3">
        <p className="font-josefin text-sm font-bold leading-6 tracking-wider lg:leading-[60px]">
          SHOP ALL PRODUCTS
        </p>
        <div
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-full ",
            {
              "bg-yellow": varient === "hero",
              "bg-sky": varient === "featured",
            }
          )}
        >
          <div
            className={clsx("h-2 w-4 ", {
              "text-white": varient === "featured",
              "text-black": varient === "hero",
            })}
          >
            <ArrowIcon />
          </div>
        </div>
      </Link>
    </div>
  );
};
