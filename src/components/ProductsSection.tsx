import product from "@/data/product.json";
import { CrossIcon, TickIcon } from "@/icons";
import Image from "next/image";
import { ReactNode } from "react";
import { Typography } from "./Typography";

export const ProductsSection = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center overflow-clip">
      <Typography varient="heading5" center className="py-10 leading-7">
        {children}
      </Typography>
      <div className="grid grid-flow-row grid-cols-2 items-center justify-center gap-x-5 gap-y-2 md:grid-cols-2 md:gap-x-5 md:gap-y-10 lg:grid-cols-4">
        {product?.slice(0, 4).map((post, id) => (
          <div
            key={id}
            className="flex w-[200px] flex-col items-start justify-center gap-5 md:w-fit "
          >
            <div className="relative h-[260px] w-[200px] md:h-[541px] md:w-[360px] ">
              <Image
                src={post.src}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw"
                className="object-cover"
                quality={100}
              />
            </div>

            <div className="flex flex-col gap-2 pr-3 md:pr-0">
              <Typography varient="body">{post.title}</Typography>
              <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex items-center justify-start gap-1">
                  <Typography varient="body">From:</Typography>
                  <Typography varient="heading4">€{post.price}</Typography>
                </div>
                <div className="flex items-center md:justify-center">
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
