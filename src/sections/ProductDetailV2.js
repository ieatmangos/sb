import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "ProductDetail hds-container bg-white"
      },
      section: {
        label: "Section Styles",
        value:
          "hds-text-color hds-section-layout hds-section__v-spacing hds-section__h-spacing "
      }
    }
  },
  main_image: {
    data: {
      container_style: {
        label: "Container Style",
        value:
          "relative flex justify-between items-center mb-xs md:mb-sm w-full pb-3/4 bg-primary rounded-md overflow-hidden"
      },
      src: {
        label: "Image Path",
        value: "/images/products/product-image.jpeg"
      },
      alt: {
        label: "Alt Tag",
        value: ""
      },
      image_style: {
        label: "Image Style",
        value: "h-full top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
      }
    }
  },
  slider_buttons: {
    data: {
      left: {
        label: "Left Button",
        value: "absolute hidden md:block z-1 ml-xs top-1/2 left-0"
      },
      left_image: {
        label: "Left Image",
        value: "/images/svg/carrotLeft-circle.svg"
      },
      right_image: {
        label: "Right Image",
        value: "/images/svg/carrotRight-circle.svg"
      },
      right: {
        label: "Right Button",
        value: "absolute right-0 hidden md:block z-1 mr-xs"
      }
    }
  },
  text: {
    data: {
      title: {
        label: "Title",
        value: "Symbolic content Symbolic"
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__large font-black mb-sm"
      },
      price: {
        label: "Price",
        value: "$423"
      },
      price_style: {
        label: "Price Style",
        value: "mb-xs md:mb-sm text-4xl font-black"
      },
      body: {
        label: "Body",
        value:
          "High fidelity wireframes include more real content, specific typography choices, and information on image dimensions."
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-sm "
      }
    }
  },
  button: {
    data: {
      button: {
        label: "Button",
        value: "Add To Cart"
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary w-full mb-sm"
      }
    }
  },
  selects: {
    data: {
      container_style: {
        label: "Container Style",
        value: "flex justify-between mb-sm"
      },
      select_1_container_style: {
        label: "Select 1 Container Style",
        value: "mr-sm flex-grow border rounded-md"
      },
      select_2_container_style: {
        label: "Select 2 Container Style",
        value: "mr-sm flex-grow border rounded-md"
      },
      select_style: {
        label: "Select Style",
        value: "w-full py-xs pl-sm pr-md bg-white bg-no-repeat appearance-none"
      },
      select_1: {
        label: "Select 1",
        value: "Select Size"
      },
      select_2: {
        label: "Select 2",
        value: "Qty"
      }
    }
  },
  thumbnail_images: {
    data: {
      image_container_style: {
        label: "Image Container Style",
        value:
          "relative mr-2 md:mr-5 w-20 md:w-24 h-20 md:h-24 bg-primary rounded-md overflow-hidden"
      },
      image_style: {
        label: "Image Style",
        value: "top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
      },
      image_src_1: {
        label: "Image Path 1",
        value: "/images/products/product-image.jpeg"
      },
      image_src_2: {
        label: "Image Path 2",
        value: "/images/products/product-image.jpeg"
      },
      image_src_3: {
        label: "Image Path 3",
        value: "/images/products/product-image.jpeg"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout Grid",
        value: "grid grid-cols-1 md:grid-cols-10 md:gap-12 "
      },
      left: {
        label: "Left Side",
        value: "col-span-6 mb-sm md:mb-0"
      },
      right: {
        label: "Right Side",
        value: "col-span-4"
      }
    }
  },
  socials: {
    data: {
      layout: {
        label: "Layout",
        value: "flex"
      },
      label: {
        label: "Label",
        value: "Share This"
      },
      label_style: {
        label: "Label Style",
        value: "hds-copy mb-2"
      },
      icon_style: {
        label: "Icon Style",
        value: "pr-2"
      },
      icon_1_path: {
        label: "Icon 1",
        value: "/images/svg/instagram.svg"
      },
      icon_1_link: {
        label: "Icon 1 Link",
        value: "/"
      },
      icon_1_alt:{
        label: 'Icon 1 Alt',
        value:''
      },
      icon_2_path: {
        label: "Icon 2",
        value: "/images/svg/facebook.svg"
      },     
      icon_2_link: {
        label: "Icon 2 Link",
        value: "/"
      },
      icon_2_alt:{
        label: 'Icon 2 Alt',
        value:''
      },
      icon_3_path: {
        label: "Icon 3",
        value: "/images/svg/twitter.svg"
      },
           icon_3_link: {
        label: "Icon 3 Link",
        value: "/"
      },
      icon_3_alt:{
        label: 'Icon 3 Alt',
        value:''
      },
      icon_4_path: {
        label: "Icon 4",
        value: "/images/svg/google.svg"
      },
      icon_4_link: {
        label: "Icon 4 Link",
        value: "/"
      },
      icon_4_alt:{
        label: 'Icon 4 Alt',
        value:''
      },
    }
  }
};



const ProductDetailV2 = ({ id }) => {
  const edit = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section className={edit.section_styles.data.container.value}>
      <div className={edit.section_styles.data.section.value}>
        <div className="">
          <div className={edit.layout.data.layout.value}>
            <div className={edit.layout.data.left.value}>
              <div className="relative block">
                <div className={edit.main_image.data.container_style.value}>
                  <img
                    className={edit.main_image.data.image_style.value}
                    src={edit.main_image.data.src.value}
                    alt={edit.main_image.data.alt.value}
                  />
                </div>
                <button
                  className={edit.slider_buttons.data.left.value}
                  style={{ top: "calc(50% - 24px)" }}
                >
                  <img
                    src={edit.slider_buttons.data.left_image.value}
                    alt="left"
                  />
                </button>
                <button
                  className={edit.slider_buttons.data.right.value}
                  style={{ top: "calc(50% - 24px)" }}
                >
                  <img
                    src={edit.slider_buttons.data.right_image.value}
                    alt="right"
                  />
                </button>
              </div>
              <div className="flex ">
                <div
                  className={
                    edit.thumbnail_images.data.image_container_style.value
                  }
                >
                  <img
                    className={edit.thumbnail_images.data.image_style.value}
                    src={edit.thumbnail_images.data.image_src_1.value}
                    alt=""
                  />
                </div>

                <div
                  className={
                    edit.thumbnail_images.data.image_container_style.value
                  }
                >
                  <img
                    className={edit.thumbnail_images.data.image_style.value}
                    src={edit.thumbnail_images.data.image_src_2.value}
                    alt=""
                  />
                </div>

                <div
                  className={
                    edit.thumbnail_images.data.image_container_style.value
                  }
                >
                  <img
                    className={edit.thumbnail_images.data.image_style.value}
                    src={edit.thumbnail_images.data.image_src_3.value}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={edit.layout.data.right.value}>
              <h4 className={edit.text.data.title_style.value}>
                {edit.text.data.title.value}
              </h4>
              <div className="flex mb-xs">
                <div className="flex mr-xs">
                  <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                  <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                  <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                  <img src="/images/svg/reviewStar-fill.svg" alt="star" />
                  <img src="/images/svg/reviewStar-empty.svg" alt="star" />
                </div>
                <p className="hds-legal">12 Reviews</p>
              </div>
              <p className={edit.text.data.price_style.value}>
                {edit.text.data.price.value}
              </p>
              <p className={edit.text.data.body_style.value}>
                {edit.text.data.body.value}
              </p>

              <div className={edit.selects.data.container_style.value}>
                <div
                  className={edit.selects.data.select_1_container_style.value}
                >
                  <select
                    defaultValue={"DEFAULT"}
                    className={edit.selects.data.select_style.value}
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.0977%207.9152C16.4527%207.56017%2016.4527%206.98457%2016.0977%206.62955C15.7427%206.27453%2015.1671%206.27453%2014.8121%206.62955L10.0004%2011.4413L5.18864%206.62955C4.83361%206.27453%204.25801%206.27453%203.90299%206.62955C3.54796%206.98457%203.54796%207.56017%203.90299%207.9152L9.35753%2013.3697C9.71255%2013.7248%2010.2882%2013.7248%2010.6432%2013.3697L16.0977%207.9152Z%22%20fill%3D%22%231B202B%22%2F%3E%0A%3C%2Fsvg%3E%0A')",
                      backgroundPosition: "calc(100% - 1.5rem) center"
                    }}
                  >
                    <option value="DEFAULT" disabled>
                      {edit.selects.data.select_1.value}
                    </option>
                    <option>28</option>
                    <option>30</option>
                    <option>32</option>
                    <option>34</option>
                    <option>36</option>
                  </select>
                </div>

                <div
                  className={edit.selects.data.select_2_container_style.value}
                >
                  <select
                    defaultValue={"DEFAULT"}
                    className={edit.selects.data.select_style.value}
                    style={{
                      backgroundImage:
                        "url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M16.0977%207.9152C16.4527%207.56017%2016.4527%206.98457%2016.0977%206.62955C15.7427%206.27453%2015.1671%206.27453%2014.8121%206.62955L10.0004%2011.4413L5.18864%206.62955C4.83361%206.27453%204.25801%206.27453%203.90299%206.62955C3.54796%206.98457%203.54796%207.56017%203.90299%207.9152L9.35753%2013.3697C9.71255%2013.7248%2010.2882%2013.7248%2010.6432%2013.3697L16.0977%207.9152Z%22%20fill%3D%22%231B202B%22%2F%3E%0A%3C%2Fsvg%3E%0A')",
                      backgroundPosition: "calc(100% - 1.5rem) center"
                    }}
                  >
                    <option value="DEFAULT" disabled>
                      {edit.selects.data.select_2.value}
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>

              <button
                className={edit.button.data.button_style.value}
                type="button"
              >
                {edit.button.data.button.value}
              </button>

              <div className="">
                <p className={edit.socials.data.label_style.value}>{edit.socials.data.label.value}</p>
                <div className={edit.socials.data.layout.value}>
                  <a className={edit.socials.data.icon_style.value} href={edit.socials.data.icon_1_link.value}>
                    <img src={edit.socials.data.icon_1_path.value} alt={edit.socials.data.icon_1_alt.value} />
                  </a>
                  <a className={edit.socials.data.icon_style.value} href={edit.socials.data.icon_2_link.value}>
                    <img src={edit.socials.data.icon_2_path.value} alt={edit.socials.data.icon_2_alt.value} />
                  </a>
                  <a className={edit.socials.data.icon_style.value} href={edit.socials.data.icon_3_link.value}>
                    <img src={edit.socials.data.icon_3_path.value} alt={edit.socials.data.icon_3_alt.value} />
                  </a>
                  <a className={edit.socials.data.icon_style.value} href={edit.socials.data.icon_4_link.value}>
                    <img src={edit.socials.data.icon_4_path.value} alt={edit.socials.data.icon_4_alt.value} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailV2;
