import product from "@/data/product.json";
import { CrossIcon, TickIcon } from "@/icons";
import Image from "next/image";
import { ReactNode } from "react";
import { Typography } from "./Typography";

export const ProductsSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <Typography varient="heading5" center className="py-10 leading-7">
        {children}
      </Typography>
      <div className="grid grid-flow-row grid-cols-1 items-center justify-center gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {product?.slice(0, 4).map((post, id) => (
          <div
            key={id}
            className="flex w-fit flex-col items-center justify-center gap-5 "
          >
            <div className="relative h-[541px] w-[360px] ">
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
              <Typography varient="body">{post.title}</Typography>
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
          </div>
        ))}
      </div>
    </div>
  );
};
