import {
  FeaturedSection,
  ItemDisplaySection,
  SocialSection,
} from "@/components";
import { ProductsSection } from "@/components/ProductsSection";

{
  /* const cartItems = 3;
      return(
        <BreadCrumb
        title={`Shopping Cart(${cartItems})`}
        desc="In our webshop you will find a complete collection of tipical Dutch ergonomic baby carriers. Whether you are looking for a Stretchy Wrap, Woven Wrap, Mei Tai, Ringsling or Click Carrier."
        path="Home / Wraps / Stretchy wrap"
      ></BreadCrumb>) */
}

export default function page() {
  return (
    <div>
      <ItemDisplaySection
        path="Home / Mystery Box"
        title="SFB Mystery box - diamond"
        price="300"
      />
      <FeaturedSection />
      <ProductsSection>YOU MIGHT ALSO BE INTERESTED IN</ProductsSection>
      <SocialSection />
    </div>
  );
}
