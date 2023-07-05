import product from "@/data/product.json";
import { CrossIcon, TickIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { Typography } from "./Typography";

export const Products = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Typography varient="heading5" center className="py-10 leading-7">
        {children}
      </Typography>
      <div className="grid grid-flow-row grid-cols-2 items-center justify-center gap-x-5 px-20 md:grid-cols-4">
        {product?.slice(0, 4).map((post, id) => (
          <Link
            key={id}
            href={post.link}
            className="flex flex-col justify-center gap-5"
          >
            <div className="relative h-[200px] min-w-[220px] lg:h-[440px] lg:w-[480px] ">
              <Image
                src={post.src}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Typography varient="body1">{post.title}</Typography>
              <div className="flex justify-between">
                <div className="flex items-center justify-start gap-1">
                  <Typography varient="body">From:</Typography>
                  <Typography varient="heading4">€{post.price}</Typography>
                </div>
                <div className="flex items-center justify-center">
                  {post.stock ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="h-2 w-3 text-sky">
                        <TickIcon />
                      </div>
                      <Typography varient="body1" color="sky">
                        In Stock
                      </Typography>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-3 stroke-2 text-red">
                        <CrossIcon />
                      </div>
                      <Typography varient="body1" color="red">
                        Not In Stock
                      </Typography>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
