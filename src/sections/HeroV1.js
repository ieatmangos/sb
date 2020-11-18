import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Hero hds-container bg-primary"
      },
      section: {
        label: "Section Styles",
        value:
          "hds-section-layout hds-section__h-spacing py-lg hds-text-color  mx-auto"
      }
    }
  },
  text: {
    data: {
      container: {
        label: "Container",
        value: "max-w-md mx-auto lg:mx-0 text-center lg:text-left z-10"
      },
      title: {
        label: "Title",
        value: "<p>Simple Process For The Reproduction of Any Document</p>",
        rte: true,
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__large hds-title-color mb-xs font-black"
      },
      body: {
        label: "Body",
        value:
          "Wireframes can be pencil drawings or sketches on whiteboard, or they can be"
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-md"
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
        value: "hds-btn hds-btn__light mb-sm md:mb-md"
      }
    }
  },

  image: {
    data: {
      container: {
        label: "Image Container",
        value:
          "hidden lg:block w-1/2 absolute right-0 inset-y-0 overflow-hidden z-0"
      },
      image_style: {
        label: "Image Style",
        value: "top-0 w-full h-full min-h-full object-cover absolute z-0"
      },
      image_src: {
        label: "Image Source",
        value: "/images/products/product-image.jpeg"
      }
    }
  }
};
const HeroV1 = ({ id }) => {
  const _ = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        <div className={_.text.data.container.value}>
          <h4 className={_.text.data.title_style.value}
              dangerouslySetInnerHTML={{__html: _.text.data.title.value}}
          >
            {/* {_.text.data.title.value} */}
          </h4>
          <p className={_.text.data.body_style.value}>
            {_.text.data.body.value}
          </p>
          <button className={_.button.data.button_style.value} type="button">
            {_.button.data.button.value}
          </button>
          <div className="flex justify-center md:hidden">
            <img
              className="mx-xs"
              src="/images/svg/circleClosed.svg"
              alt="dpt"
            />
            <img className="mx-xs" src="/images/svg/circleOpen.svg" alt="dot" />
            <img className="mx-xs" src="/images/svg/circleOpen.svg" alt="dot" />
          </div>
          <div className="hidden md:flex">
            <img
              className="mr-5"
              src="/images/svg/arrowLeft-light.svg"
              alt="arrow left"
            />
            <img
              className="mr-5"
              src="/images/svg/arrowRight-light.svg"
              alt="arrow left"
            />
          </div>
        </div>
      </div>
      {/* <div className="hidden md:block bg-white" /> */}
      <div className={_.image.data.container.value}>
        <img
          className={_.image.data.image_style.value}
          src={_.image.data.image_src.value}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroV1;
