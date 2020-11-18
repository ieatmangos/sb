import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "hds-container bg-white"
      },
      section: {
      
        label: "Section Styles",
        value:
          "hds-section-layout hds-section__v-spacing hds-section__h-spacing hds-text-color"
      }
    }
  },
  text: {
    data: {
      text_group: {
        label: "Text Group",
        value: "max-w-sm py-lg"
      },
      title: {

        label: "Title",
        value: "Simple Process For The Reproduction of Any Document"
      },
      title_style: {
        label: "Title Style",
        value: "hds-title__large font-black mb-4"
      },
      body: {
        label: "Body",
        value:
          "Since wire-frame renderings are relatively simple and fast to calculate, they are often used in cases"
      },
      body_style: {
        label: "Body Style",
        value: "hds-copy mb-6"
      }
    }
  },
  button: {
    data: {
      button: {
        label: "Button",
        value: "Button",
        input: true,
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__secondary"
      }
    }
  },
  image: {
    data: {
      src: {
        label: "Image Path",
        value: "/images/products/product-image.jpeg"
      },
      alt: {
        label: "Alt Tag",
        value: "",
        input: true,
      },
      image_style: {
        label: "Image Style",
        value: "object-cover min-w-full h-full relative inline-block"
      }
    }
  }
};
const HeroV5 = ({ id }) => {
  const edit = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section className={edit.section_styles.data.container.value}>
      <div className="absolute inset-0">
        <img
          className={edit.image.data.image_style.value}
          src={edit.image.data.src.value}
          alt={edit.image.data.alt.value}
        />
      </div>

      <div className={edit.section_styles.data.section.value}>
        <div className={edit.text.data.text_group.value}>
          <h4 className={edit.text.data.title_style.value}>
            {edit.text.data.title.value}
          </h4>
          <p className={edit.text.data.body_style.value}>
            {edit.text.data.body.value}
          </p>
          <button className={edit.button.data.button_style.value}>
            {edit.button.data.button.value}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroV5;
