import { BreadCrumb, StockCheck, Typography } from "@/components";
import product from "@/data/product.json";
import Image from "next/image";

// const Product: Product[] = product;

export default function page() {
  return (
    <div>
      <BreadCrumb
        title="Wraps"
        desc="In our webshop you will find a complete collection of tipical Dutch baby carriers. Whether you are looking for a Stretchy Wrap, Woven Wrap, Mai Tai, Ringsling or Click Carriers."
        path="Home / Wraps"
      />
      <WrapCategorries />
      <TopSelling />
      <TodaysDeal />
    </div>
  );
}

const WrapCategorries = () => {
  const categories = [
    {
      id: 1,
      name: "Wooven wrap",
      path: "",
      img: "/assets/images/image 104.png",
    },
    {
      id: 2,
      name: "Stretchy wrap",
      path: "/",
      img: "/assets/images/image 101.png",
    },
    {
      id: 3,
      name: "Ring Sling",
      path: "/",
      img: "/assets/images/image 103.png",
    },
    {
      id: 4,
      name: "Baby wrap",
      path: "/",
      img: "/assets/images/image 113.png",
    },
  ];
  return (
    <div className="flex justify-center gap-20 py-16">
      {categories.map((category, id) => (
        <div key={id}>
          <div className="relative h-28 w-28">
            <Image
              src={category.img}
              alt={category.name}
              fill
              sizes="(max-width: 768px) 100vh"
              quality={100}
            />
          </div>
          <p className="text-center">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

const TopSelling = () => {
  return (
    <div className="bg-cream">
      <Typography varient="heading5" center className="py-10">
        TOP SELLING PRODUCTS IN THIS CATEGORY
      </Typography>
      <div className="flex justify-center gap-10">
        {product.slice(2, 6).map((item, id) => (
          <div key={id}>
            <div className="relative h-[541px] w-[360px]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vh"
                quality={100}
              />
            </div>
            <div>
              <Typography varient="body">{item.title}</Typography>
              <div className="flex justify-between">
                <Typography varient="heading4" center className="font-bold">
                  From <span>€{item.price}</span>
                </Typography>
                <StockCheck option={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TodaysDeal = () => {
  return (
    <div>
      <Typography varient="heading5" center className="py-5">
        TODAY DEALS
      </Typography>
      <div className="flex justify-center gap-10">
        {product.slice(2, 6).map((item, id) => (
          <div key={id}>
            <div className="relative h-[541px] w-[360px]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vh"
                quality={100}
              />
            </div>
            <div>
              <Typography varient="body">{item.title}</Typography>
              <div className="flex justify-between">
                <Typography varient="heading4" center className="font-bold">
                  From <span>€{item.price}</span>
                </Typography>
                <StockCheck option={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <Link href={`jobs/${job.id}`}>
  <Button>View Job</Button>
</Link>; */
}
