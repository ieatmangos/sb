import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "CallToAction hds-container bg-yellow-500 animation duration-300"
      },
      section: {
        label: "Section Styles",
        value: "hds-section-layout hds-text-color hds-section__v-spacing hds-section__h-spacing w-full flex flex-wrap md:justify-center text-center "
      }
    }
  },
  small_text: {
    data: {
      text: {
        label: 'Text',
        value: 'Features',
      },
      style: {
        label: 'Style',
        value: 'hds-copy mb-xs md:mb-sm'
      }
    }
  },
  large_text: {
    data: {
      text: {
        label: 'Text',
        value: 'Since wire-frame renderings are relatively simple and super fast to calculate, high screen',
      },
      style: {
        label: 'Style',
        value: 'hds-title__medium hds-title-color mb-sm md:mb-md font-black'
      }
    }
  },
  button: {
    data: {
      text: {
        label: 'Button',
        value: 'Start'
      },
      style: {
        label: 'Style',
        value: 'hds-btn hds-btn__primary'
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: 'Layout Styles',
        value: 'w-full max-w-xl m-auto'
      }
    }
  }
}

const CallToActionV3 = ({id}) => {
  const _ = useEdit(defaults, id);
  useMyData(id, defaults);


  return (
    <section className={_.section_styles.data.container.value}>
        <div className={_.section_styles.data.section.value}>
          <div className={_.layout.data.layout.value}>
            <p className={_.small_text.data.style.value}>{_.small_text.data.text.value}</p>
            <h4 className={_.large_text.data.style.value}>
              {_.large_text.data.text.value}
            </h4>
            <button className={_.button.data.style.value} type="button">
              {_.button.data.text.value}
            </button>
          </div>
        </div>
    </section>
  );
};
export default CallToActionV3;
