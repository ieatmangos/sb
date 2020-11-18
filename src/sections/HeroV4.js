import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults = {
  layout: {
    data: {
      layout: {
        label: "Layout",
        value: "flex md:justify-between items-center flex-wrap md:flex-no-wrap"
      }
    }
  },
  button: {
    data: {
      button: {
        label: "Button",
        value: "Button"
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__light-hollow block "
      }
    }
  },
  text: {
    data: {
      text_container: {
        label: "Text Container",
        value: "mb-md md:mb-0 md:max-w-md"
      },
      title: {
        label: "Title",
        value: "Wireframes are generally created"
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__large mb-sm font-black"
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-sm md:mb-md"
      },
      body: {
        label: "Body",
        value:
          "Wireframes are generally created by business analysts, user experience designers, developers, visual designers, and by those with expertise"
      }
    }
  },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Hero hds-container bg-white md:bg-primary"
      },
      section: {
        label: "Section Styles",
        value:
          "hds-text-color  hds-section-layout hds-section__v-spacing hds-section__h-spacing xl:pl-lg md:pr-0  md:py-lg  "
      }
    }
  },
  images: {
    data: {
      image_wrapper: {
        label: "Image Wrapper",
        value:
          "relative rounded overflow-hidden mt-sm md:m-sm w-full md:w-64 h-96 rounded-md md:inline-block"
      },
      image_style: {
        label: "Image Style",
        value:
          "block object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
      },
      image_1_src: {
        label: "Image 1 Source",
        value: "/images/products/product-image.jpeg"
      },
      image_2_src: {
        label: "Image 2 Source",
        value: "/images/products/product-image.jpeg"
      },
      image_3_src: {
        label: "Image 3 Source",
        value: "/images/products/product-image.jpeg"
      },
      image_1_alt: {
        label: "Image 1 Alt",
        value: ""
      },
      image_2_alt: {
        label: "Image 2 Alt",
        value: ""
      },
      image_3_alt: {
        label: "Image 3 Alt",
        value: ""
      }
    }
  },
  slider_buttons:{
    data:{
      style:{
        label: 'Slider Button Style',
        value: 'mx-xs'
      },
      left: {
        label: 'Left Image Source',
        value: '/images/svg/arrowLeft-light.svg'
      },
      right: {
        label: 'Right Image Source',
        value: '/images/svg/arrowRight-light.svg'
      }
    }
  }
};
const HeroV4 = ({ id }) => {
  const edit = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section className={edit.section_styles.data.container.value}>
      <div className={edit.section_styles.data.section.value}>
        <div className={edit.layout.data.layout.value}>
          <div className={edit.text.data.text_container.value}>
            <h4 className={edit.text.data.title_style.value}>
              {edit.text.data.title.value}
            </h4>
            <p className={edit.text.data.body_style.value}>
              {edit.text.data.body.value}
            </p>
            <button
              className={edit.button.data.button_style.value}
              type="button"
            >
              {edit.button.data.button.value}
            </button>
          </div>

          <div className="md:ml-md  overflow-hidden">
            <div className="md:mb-lg w-full ">
              {/* <!-- This container needs to be wider than the content inside, could not achieve with tailwind --> */}
              <div className="flex flex-wrap justify-evenly md:block md:overflow-x-auto md:whitespace-no-wrap">
                <div className={edit.images.data.image_wrapper.value}>
                  <div className="absolute inset-0" />
                  <img
                    className={edit.images.data.image_style.value}
                    src={edit.images.data.image_1_src.value}
                    alt={edit.images.data.image_1_alt.value}
                  />
                </div>

                <div className={edit.images.data.image_wrapper.value}>
                  <div className="absolute inset-0" />
                  <img
                    className={edit.images.data.image_style.value}
                    src={edit.images.data.image_2_src.value}
                    alt={edit.images.data.image_2_alt.value}
                  />
                </div>

                <div className={edit.images.data.image_wrapper.value}>
                  <div className="absolute inset-0" />
                  <img
                    className={edit.images.data.image_style.value}
                    src={edit.images.data.image_3_src.value}
                    alt={edit.images.data.image_3_alt.value}
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:flex ml-xs">
              <img
                className={edit.slider_buttons.data.style.value}
                src={edit.slider_buttons.data.left.value}
                alt="arrow left"
              />
              <img
                className={edit.slider_buttons.data.style.value}
                src={edit.slider_buttons.data.right.value}
                alt="arrow right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV4;
