import { SocialSection } from "@/components";
import { BreadCrumb } from "@/components/BreadCrumb";
import { ProductsSection } from "@/components/ProductsSection";

export default function page() {
  const cartItems = 3;
  return (
    <div>
      <BreadCrumb
        title={`Shopping Cart(${cartItems})`}
        desc="In our webshop you will find a complete collection of tipical Dutch ergonomic baby carriers. Whether you are looking for a Stretchy Wrap, Woven Wrap, Mei Tai, Ringsling or Click Carrier."
        path="Home / Wraps / Stretchy wrap"
      ></BreadCrumb>
      <ProductsSection>YOU MIGHT ALSO BE INTERESTED IN</ProductsSection>
      <SocialSection />
    </div>
  );
}
