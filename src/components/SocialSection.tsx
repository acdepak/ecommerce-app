import social from "@/data/social.json";
import { FacebookIcon } from "@/icons";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "./Typography";

export const SocialSection = () => {
  return (
    <div>
      <Typography varient="social" center className="py-10 ">
        Follow us on Facebook @SlingsForBabies
      </Typography>
      <div className="grid grid-flow-row grid-cols-2 items-center justify-center overflow-clip md:grid-cols-4">
        {social?.map((post, id) => (
          <>
            <div
              key={id}
              className="relative h-[200px] min-w-[220px] lg:h-[440px] lg:w-[480px] "
            >
              <Image
                src={post.link}
                alt={post.alt}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
              <div className="absolute top-0 h-[200px] min-w-full lg:h-[440px] lg:w-[480px] ">
                <div
                  className={clsx(
                    "flex h-full w-full flex-col items-center justify-center gap-3 text-white opacity-0 hover:opacity-100 lg:gap-6",
                    {
                      "hover:bg-red": post.color === "red",
                      "hover:bg-darkblue": post.color === "darkblue",
                    }
                  )}
                >
                  <div className="h-7 w-7 text-white lg:h-14 lg:w-14 ">
                    <FacebookIcon />
                  </div>
                  <div className="flex flex-col items-center gap-1 lg:gap-3">
                    <p className="lg:text:2xl font-josefin text-lg font-normal lg:text-2xl">
                      {post.likes}
                    </p>
                    <p className="font-mulish text-sm font-normal lg:text-base">
                      {post.text}
                    </p>
                  </div>
                  <Link
                    href="https://www.facebook.com/slingforbabies"
                    className="font-mulish text-xs font-normal lg:text-base"
                  >
                    {post.tag}
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
