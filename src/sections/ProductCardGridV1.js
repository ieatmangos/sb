import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Product hds-container bg-gray-100 "
      },
      section: {
        label: "Section Styles",
        value:
          "hds-text-color  hds-section-layout hds-section__v-spacing hds-section__h-spacing"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layouts",
        value:
          "grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-xs sm:gap-sm md:gap-md max-w-2xl lg:max-w-screen-xl mx-auto  "
      }
    }
  },
  all_cards: {
    data: {
      card_container: {
        label: "Card Container",
        value: "bg-white rounded-t-md shadow-lg"
      },
      image_container: {
        label: "Image Container",
        value: "relative pb-3/4 bg-primary rounded-md overflow-hidden"
      },
      image_style: {
        label: "Image Style",
        value: "top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
      },
      text_container: {
        label: "Text Container",
        value: "p-xs sm:px-sm text-center"
      },
      title_style: {
        label: "Title Style",
        value: "hds-copy hds-title-color font-bold "
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary"
      },
      link_style: {
        label: "Link Style",
        value: "block my-xs underline"
      },
      price_style: {
        label: "Price Style",
        value: "hds-copy font-bold"
      }
    }
  },
  card_1: {
    data: {
      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg"
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      link_url: {
        label: "Link Url",
        value: "/"
      },
      price: {
        label: "Price",
        value: "$20"
      }
    }
  },
  card_2: {
    data: {
      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg"
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      link_url: {
        label: "Link Url",
        value: "/"
      },
      price: {
        label: "Price",
        value: "$20"
      }
    }
  },
  card_3: {
    data: {
      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg"
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      link_url: {
        label: "Link Url",
        value: "/"
      },
      price: {
        label: "Price",
        value: "$20"
      }
    }
  },
  card_4: {
    data: {
      image_src: {
        label: "Image Source",
        value: "/images/products/product-image-2.jpeg"
      },
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      link: {
        label: "Link",
        value: "Quick View"
      },
      link_url: {
        label: "Link Url",
        value: "/"
      },
      price: {
        label: "Price",
        value: "$20"
      }
    }
  }
};
const ProductCardGridV1 = ({ id }) => {
  const _ = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className="">
          <div className={_.layout.data.layout.value}>
            {/* <!-- Card --> */}
            <div className={_.all_cards.data.card_container.value}>
              {/* <!-- Product Image --> */}
              <div className={_.all_cards.data.image_container.value}>
                <img
                  className={_.all_cards.data.image_style.value}
                  src={_.card_1.data.image_src.value}
                  alt=""
                />
              </div>
              {/* <!-- Card Main Content--> */}
              <div className={_.all_cards.data.text_container.value}>
                {/* <!-- Title --> */}
                <h4 className={_.all_cards.data.title_style.value}>
                  {_.card_1.data.title.value}
                </h4>
                {/* <!-- Reviews --> */}
                <div className="flex justify-center flex-wrap my-xs sm:my-sm">
                  <div className="flex mr-0 sm:mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden sm:block">12 Reviews</p>
                </div>
                {/* <!-- ATC --> */}
                <button
                  className={_.all_cards.data.button_style.value}
                  type="button"
                >
                  {_.card_1.data.button.value}
                </button>
                {/* <!-- Quickview --> */}
                <a
                  href={_.card_1.data.link_url.value}
                  className={_.all_cards.data.link_style.value}
                >
                  {_.card_1.data.link.value}
                </a>
                {/* <!-- Price --> */}
                <p className={_.all_cards.data.price_style.value}>
                  {" "}
                  {_.card_1.data.price.value}
                </p>
              </div>
            </div>

            {/* <!-- Card --> */}
            <div className={_.all_cards.data.card_container.value}>
              {/* <!-- Product Image --> */}
              <div className={_.all_cards.data.image_container.value}>
                <img
                  className={_.all_cards.data.image_style.value}
                  src={_.card_2.data.image_src.value}
                  alt=""
                />
              </div>
              {/* <!-- Card Main Content--> */}
              <div className={_.all_cards.data.text_container.value}>
                {/* <!-- Title --> */}
                <h4 className={_.all_cards.data.title_style.value}>
                  {_.card_2.data.title.value}
                </h4>
                {/* <!-- Reviews --> */}
                <div className="flex justify-center flex-wrap my-xs sm:my-sm">
                  <div className="flex mr-0 sm:mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden sm:block">12 Reviews</p>
                </div>
                {/* <!-- ATC --> */}
                <button
                  className={_.all_cards.data.button_style.value}
                  type="button"
                >
                  {_.card_2.data.button.value}
                </button>
                {/* <!-- Quickview --> */}
                <a
                  href={_.card_2.data.link_url.value}
                  className={_.all_cards.data.link_style.value}
                >
                  {_.card_2.data.link.value}
                </a>
                {/* <!-- Price --> */}
                <p className={_.all_cards.data.price_style.value}>
                  {" "}
                  {_.card_2.data.price.value}
                </p>
              </div>
            </div>

            {/* <!-- Card --> */}
            <div className={_.all_cards.data.card_container.value}>
              {/* <!-- Product Image --> */}
              <div className={_.all_cards.data.image_container.value}>
                <img
                  className={_.all_cards.data.image_style.value}
                  src={_.card_3.data.image_src.value}
                  alt=""
                />
              </div>
              {/* <!-- Card Main Content--> */}
              <div className={_.all_cards.data.text_container.value}>
                {/* <!-- Title --> */}
                <h4 className={_.all_cards.data.title_style.value}>
                  {_.card_3.data.title.value}
                </h4>
                {/* <!-- Reviews --> */}
                <div className="flex justify-center flex-wrap my-xs sm:my-sm">
                  <div className="flex mr-0 sm:mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden sm:block">12 Reviews</p>
                </div>
                {/* <!-- ATC --> */}
                <button
                  className={_.all_cards.data.button_style.value}
                  type="button"
                >
                  {_.card_3.data.button.value}
                </button>
                {/* <!-- Quickview --> */}
                <a
                  href={_.card_3.data.link_url.value}
                  className={_.all_cards.data.link_style.value}
                >
                  {_.card_3.data.link.value}
                </a>
                {/* <!-- Price --> */}
                <p className={_.all_cards.data.price_style.value}>
                  {_.card_3.data.price.value}
                </p>
              </div>
            </div>

            {/* <!-- Card --> */}
            <div className={_.all_cards.data.card_container.value}>
              {/* <!-- Product Image --> */}
              <div className={_.all_cards.data.image_container.value}>
                <img
                  className={_.all_cards.data.image_style.value}
                  src={_.card_4.data.image_src.value}
                  alt=""
                />
              </div>
              {/* <!-- Card Main Content--> */}
              <div className={_.all_cards.data.text_container.value}>
                {/* <!-- Title --> */}
                <h4 className={_.all_cards.data.title_style.value}>
                  {_.card_4.data.title.value}
                </h4>
                {/* <!-- Reviews --> */}
                <div className="flex justify-center flex-wrap my-xs sm:my-sm">
                  <div className="flex mr-0 sm:mr-xs">
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                    <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                  </div>
                  <p className="hds-legal hidden sm:block">12 Reviews</p>
                </div>
                {/* <!-- ATC --> */}
                <button
                  className={_.all_cards.data.button_style.value}
                  type="button"
                >
                  {_.card_4.data.button.value}
                </button>
                {/* <!-- Quickview --> */}
                <a
                  href={_.card_4.data.link_url.value}
                  className={_.all_cards.data.link_style.value}
                >
                  {_.card_4.data.link.value}
                </a>
                {/* <!-- Price --> */}
                <p className={_.all_cards.data.price_style.value}>
                  {_.card_4.data.price.value}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductCardGridV1;
