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
      <CategorySEO />
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
            <div className="pb-10 pt-5">
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
      <Typography varient="heading5" center className="pb-5 pt-10">
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
            <div className="pb-10 pt-5">
              <Typography varient="body">{item.title}</Typography>
              <div className="flex justify-between">
                <Typography varient="heading4" center className="font-bold">
                  From <span className="text-red">€{item.price} </span>
                  <span className="font-normal line-through">
                    €{item.price}
                  </span>
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

const CategorySEO = () => {
  const Paragraph = () => (
    <p>{`We're parents too, and we know how overwhelming it can feel to shop
  for baby products. That's why Colugo was born--to create a no-brainer
  shopping experience for the next generation of parents where you can
  buy quality products at a price that actually makes sense.`}</p>
  );
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <Typography
        varient="social"
        width="3xl"
        className="font-bold tracking-wider"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit (Category SEO
        text here)
      </Typography>
      <Typography varient="body" width="3xl">
        <Paragraph />
        <Paragraph />
        <Paragraph />
        <br />
        <Paragraph />
        <Paragraph />
        <br />
        <Paragraph />
      </Typography>
    </div>
  );
};

{
  /* <Link href={`jobs/${job.id}`}>
  <Button>View Job</Button>
</Link>; */
}
