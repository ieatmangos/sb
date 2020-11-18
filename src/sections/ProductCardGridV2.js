import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Product hds-container bg-white"
      },
      section: {
        label: "Section Styles",
        value:
          "hds-section-layout hds-text-color hds-section__v-spacing hds-section__h-spacing"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        value:
          "grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-sm max-w-screen-xl mx-auto"
      }
    }
  },
  all_cards: {
    data: {
      card_container: {
        label: "Card Container",
        value: "flex bg-white rounded-l-md shadow-lg "
      },
      image_container: {
        label: "Image Container",
        value: "w-1/2 lg:w-2/3"
      },
      text_container: {
        label: "Text Container",
        value: "w-1/2 lg:w-auto p-sm flex flex-col"
      },
      title_style: {
        label: "Title Style",
        value:
          "hds-title-color mb-xs md:mb-sm text-xs md:text-3xl lg:text-4xl font-bold md:leading-8 lg:leading-10 flex-1"
      },
      price_style: {
        label: "Price Style",
        value: "text-xs md:text-xl font-bold"
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn__small hds-btn__primary mb-xs"
      },
      link_style: {
        label: "Link Style",
        value: "block my-xs text-xs md:text-base md:underline"
      }
    }
  },
  card_1: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      price: {
        label: "Price",
        value: "$20"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },

      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      link_url: {
        label: "Link Url",
        value: "/"
      }
    }
  },
  card_2: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      price: {
        label: "Price",
        value: "$20"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },

      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      link_url: {
        label: "Link Url",
        value: "/"
      }
    }
  },
  card_3: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      price: {
        label: "Price",
        value: "$20"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },

      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      link_url: {
        label: "Link Url",
        value: "/"
      }
    }
  },
  card_4: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      price: {
        label: "Price",
        value: "$20"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },

      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      link_url: {
        label: "Link Url",
        value: "/"
      }
    }
  }
};

const ProductCardGridV2 = ({ id }) => {
  const _ = useEdit(defaults, id);
  useMyData(id, defaults);

  // let t =
  //   "link_style, button_style, price_style, title_style, text_container, image_container, card_container";
  
    return (
    <section className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className="">
          <div className={_.layout.data.layout.value}>
            {/* CARD */}
            <div className={_.all_cards.data.card_container.value}>
              <div className={_.all_cards.data.image_container.value}>
                <div className="relative h-full bg-primary rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                    src={_.card_1.data.image_src.value}
                    alt=""
                  />
                </div>
              </div>

              <div className={_.all_cards.data.text_container.value}>
                {/* Title */}
                <h4 className={_.all_cards.data.title_style.value}>
                  {_.card_1.data.title.value}
                </h4>
                {/* Price */}
                <p className={_.all_cards.data.price_style.value}>
                  {_.card_1.data.price.value}
                </p>
                {/* Reviews */}
                <div className="flex flex-wrap my-xs md:my-sm">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden md:block">12 Reviews</p>
                </div>
                {/* Add To Cart Button */}
                <button
                  className={_.all_cards.data.button_style.value}
                  type="button"
                >
                  {_.card_1.data.button.value}
                </button>
                {/* Link */}
                <a
                  href={_.card_1.data.link_url.value}
                  className={_.all_cards.data.link_style.value}
                >
                  {_.card_1.data.link.value}
                </a>
              </div>
            </div>
            {/* CARD */}
            <div className={_.all_cards.data.card_container.value}>
              <div className={_.all_cards.data.image_container.value}>
                <div className="relative h-full bg-primary rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                    src={_.card_2.data.image_src.value}
                    alt=""
                  />
                </div>
              </div>

              <div className={_.all_cards.data.text_container.value}>
                {/* Title */}
                <h4 className={_.all_cards.data.title_style.value}>
                  {_.card_2.data.title.value}
                </h4>
                {/* Price */}
                <p className={_.all_cards.data.price_style.value}>
                  {_.card_2.data.price.value}
                </p>
                {/* Reviews */}
                <div className="flex flex-wrap my-xs md:my-sm">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden md:block">12 Reviews</p>
                </div>
                {/* Add To Cart Button */}
                <button
                  className={_.all_cards.data.button_style.value}
                  type="button"
                >
                  {_.card_2.data.button.value}
                </button>
                {/* Link */}
                <a
                  href={_.card_2.data.link_url.value}
                  className={_.all_cards.data.link_style.value}
                >
                  {_.card_2.data.link.value}
                </a>
              </div>
            </div>
            {/* CARD */}
            <div className={_.all_cards.data.card_container.value}>
              <div className={_.all_cards.data.image_container.value}>
                <div className="relative h-full bg-primary rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                    src={_.card_3.data.image_src.value}
                    alt=""
                  />
                </div>
              </div>

              <div className={_.all_cards.data.text_container.value}>
                {/* Title */}
                <h4 className={_.all_cards.data.title_style.value}>
                  {_.card_3.data.title.value}
                </h4>
                {/* Price */}
                <p className={_.all_cards.data.price_style.value}>
                  {_.card_3.data.price.value}
                </p>
                {/* Reviews */}
                <div className="flex flex-wrap my-xs md:my-sm">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden md:block">12 Reviews</p>
                </div>
                {/* Add To Cart Button */}
                <button
                  className={_.all_cards.data.button_style.value}
                  type="button"
                >
                  {_.card_3.data.button.value}
                </button>
                {/* Link */}
                <a
                  href={_.card_3.data.link_url.value}
                  className={_.all_cards.data.link_style.value}
                >
                  {_.card_3.data.link.value}
                </a>
              </div>
            </div>
            {/* CARD */}
            <div className={_.all_cards.data.card_container.value}>
              <div className={_.all_cards.data.image_container.value}>
                <div className="relative h-full bg-primary rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                    src={_.card_4.data.image_src.value}
                    alt=""
                  />
                </div>
              </div>

              <div className={_.all_cards.data.text_container.value}>
                {/* Title */}
                <h4 className={_.all_cards.data.title_style.value}>
                  {_.card_4.data.title.value}
                </h4>
                {/* Price */}
                <p className={_.all_cards.data.price_style.value}>
                  {_.card_4.data.price.value}
                </p>
                {/* Reviews */}
                <div className="flex flex-wrap my-xs md:my-sm">
                  <div className="flex mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden md:block">12 Reviews</p>
                </div>
                {/* Add To Cart Button */}
                <button
                  className={_.all_cards.data.button_style.value}
                  type="button"
                >
                  {_.card_4.data.button.value}
                </button>
                {/* Link */}
                <a
                  href={_.card_4.data.link_url.value}
                  className={_.all_cards.data.link_style.value}
                >
                  {_.card_4.data.link.value}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardGridV2;
