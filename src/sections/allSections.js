import CallToActionV1 from "./CallToActionV1";
import CallToActionV2 from "./CallToActionV2";
import CallToActionV3 from "./CallToActionV3";
import CallToActionV4 from "./CallToActionV4";
import CallToActionV5 from "./CallToActionV5";
import CallToActionV6 from "./CallToActionV6";
import CallToActionV7 from "./CallToActionV7";
import CallToActionV8 from "./CallToActionV8";
import HeroV1 from "./HeroV1";
import HeroV2 from "./HeroV2";
import HeroV3 from "./HeroV3";
import HeroV4 from "./HeroV4";
import HeroV5 from "./HeroV5";
import HeroV6 from "./HeroV6";
import FooterV1 from "./FooterV1";
import FooterV2 from "./FooterV2";
import ProductCardGridV1 from "./ProductCardGridV1";
import ProductCardGridV2 from "./ProductCardGridV2";
import ProductCardGridV3 from "./ProductCardGridV3";
import ProductCardGridV4 from "./ProductCardGridV4";
import GalleryV1 from "./GalleryV1";
import GalleryV2 from "./GalleryV2";
import GalleryV3 from "./GalleryV3";
import GalleryV4 from "./GalleryV4";
import GalleryV5 from "./GalleryV5";
import GalleryV6 from "./GalleryV6";
import GalleryV7 from "./GalleryV7";
import TextV1 from "./TextV1";
import TextV2 from "./TextV2";
import TextV3 from "./TextV3";
import ProductDetailV1 from "./ProductDetailV1";
import ProductDetailV2 from "./ProductDetailV2";
import ProductDetailV3 from "./ProductDetailV3";
import ProductDetailV4 from "./ProductDetailV4";
import FeaturesV10 from "./FeaturesV10";
import FeaturesV11 from "./FeaturesV11";
import FormV1 from "./FormV1";
import FormV2 from "./FormV2";
import FormV3 from "./FormV3";
import FormV4 from "./FormV4";
import ContactV1 from "./ContactV1";
import ContactV2 from "./ContactV2";
import CartV1 from "./CartV1";
import MenuV1 from "./MenuV1";

const data = [
  { id: "2", c: CallToActionV5, label: "CallToActionV5", tag: "CTA" },
  { id: "3", c: HeroV1, label: "HeroV1", tag: "Hero" },
  { id: "4", c: FooterV2, label: "FooterV2", tag: "Footer" },
  { id: "5", c: ProductCardGridV2, label: "ProductCardGridV2", tag: "Product" },
  { id: "6", c: GalleryV3, label: "GalleryV3", tag: "Gallery" },
  { id: "7", c: TextV1, label: "TextV1", tag: "Text" },
  { id: "8", c: ProductDetailV1, label: "ProductDetailV1", tag: "Product" },
  { id: "9", c: FeaturesV10, label: "FeaturesV10", tag: "Feature" },
  { id: "10", c: FeaturesV11, label: "FeaturesV11", tag: "Feature" },
  { id: "11", c: CallToActionV3, label: "CallToActionV3", tag: "CTA" },
  { id: "12", c: TextV3, label: "TextV3", tag: "Text" },
  { id: "13", c: FormV3, label: "FormV3", tag: "Form" },
  { id: "14", c: HeroV3, label: "HeroV3", tag: "Hero" },
  { id: "15", c: ContactV1, label: "ContactV1", tag: "Contact" },
  { id: "16", c: CartV1, label: "CartV1", tag: "Cart" },
  { id: "17", c: ProductCardGridV4, label: "ProductCardGridV4", tag: "Product" },
  { id: "18", c: ProductCardGridV1, label: "ProductCardGridV1", tag: "Product" },
  { id: "19", c: ProductCardGridV3, label: "ProductCardGridV3", tag: "Product"},
  { id: "20", c: MenuV1, label: "MenuV1", tag: "Menu" },
  { id: "21", c: GalleryV2, label: "GalleryV2", tag: "Gallery" },
  { id: "22", c: GalleryV4, label: "GalleryV4", tag: "Gallery" },
  { id: "23", c: GalleryV7, label: "GalleryV7", tag: "Gallery" },
  { id: "24", c: CallToActionV2, label: "CallToActionV2", tag: "CTA" },
  { id: "25", c: CallToActionV6, label: "CallToActionV6", tag: "CTA" },
  { id: "26", c: CallToActionV7, label: "CallToActionV7", tag: "CTA" },
  { id: "27", c: CallToActionV8, label: "CallToActionV8", tag: "CTA" },
  { id: "28", c: TextV2, label: "TextV2", tag: "Text" },
  { id: "29", c: FormV4, label: "FormV4", tag: "Form" },
  { id: "30", c: FooterV1, label: "FooterV1", tag: "Footer" },
  { id: "31", c: ContactV2, label: "ContactV2", tag: "Contact" },
  { id: "32", c: FormV2, label: "FormV2", tag: "Form" },
  { id: "33", c: FormV1, label: "FormV1", tag: "Form" },
  { id: "34", c: HeroV2, label: "HeroV2", tag: "Hero" },
  { id: "35", c: HeroV4, label: "HeroV4", tag: "Hero" },
  { id: "36", c: HeroV5, label: "HeroV5", tag: "Hero" },
  { id: "37", c: GalleryV6, label: "GalleryV6", tag: "Gallery" },
  { id: "38", c: GalleryV5, label: "GalleryV5", tag: "Gallery" },
  { id: "39", c: GalleryV1, label: "GalleryV1", tag: "Gallery" },
  { id: "40", c: ProductDetailV2, label: "ProductDetailV2", tag: "Product" },
  { id: "41", c: ProductDetailV3, label: "ProductDetailV3", tag: "Product" },
  { id: "42", c: ProductDetailV4, label: "ProductDetailV4", tag: "Product" },
  { id: "43", c: CallToActionV1, label: "CallToActionV1", tag: "CTA" },
  { id: "44", c: CallToActionV4, label: "CallToActionV4", tag: "CTA" },
  { id: "45", c: HeroV6, label: "HeroV6", tag: "Hero" }
];

let tagArray = Array.from(new Set(data.map(i => i.tag)));
tagArray.unshift("All");
export const tags = tagArray;

export default data;
