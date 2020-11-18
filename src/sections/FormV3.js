import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  title:{
    data: {
      title1: {
        label: "Title One",
        value: "A Default Title",
        input: true
      },
      title1_style: {
        label: "Title One Style",
        value: "hds-title__large font-black mb-sm md:mb-md",
  
      },
    }
  },
  section: {
    data:{
      section_style: {
        label:'Section Styles',
        value:"hds-section-layout hds-text-color",
      },
    }
  },
  links:{
    data: {
      link_one: {
        label: "Link One",
        value: "Sign In",
      },
      link_one_url: {
        label: "Link One Url",
        value: "/",
        input: true
      },
      link_one_style: {
        label: "Link One Style",
        value: "hds-copy float-right invisible md:visible font-normal mt-sm",
      
      },
      link_two: {
        label: "Link Two",
        value: "Forgot Password",
        input: true
      },
      link_two_url: {
        label: "Link Two Url",
        value: "/",
        input: true
      },
      link_two_style: {
        label: "Link two Style",
        value: "hds-copy float-right invisible md:visible font-normal mt-sm",
     
      },
    }
  },
  buttons :{
    data: {
      button: {
        label: "Button",
        value: "Sign up",
      },
      button_style: {
        label: "Button Style",
        value: "hds-btn hds-btn__primary",
        text_area: true
      },
    }
  },
  inputs: {
    data: {
      input_one: {
        label: "Input One",
        value: "Email"
      },
      input_two: {
        label: "Input Two",
        value: "Password"
      },
      input_style: {
        label: "Input Style",
        value: "hds-form-input mb-sm"
      },
    }
  }


};

const FormV3 = ({ id }) => {
  const edit = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section className="Form hds-container">
      <div className={edit.section.data.section_style.value}>
        <div className="hds-section__v-spacing hds-section__h-spacing">
          <div className="grid max-w-xl mx-auto">
            <h4 className={edit.title.data.title1_style.value}>
              {edit.title.data.title1.value}
              <a
                href={edit.links.data.link_one_url.value}
                className={edit.links.data.link_one_style.value}
              >
                {edit.links.data.link_one.value}
              </a>
            </h4>
            <input
              type="text"
              className={edit.inputs.data.input_style.value}
              placeholder={edit.inputs.data.input_one.value}
            />
            <input
              type="text"
              className={edit.inputs.data.input_style.value}
              placeholder={edit.inputs.data.input_two.value}
            />
            <a
              href={edit.links.data.link_two_url.value}
              className={edit.links.data.link_two_style.value}
            >
              <p className="inline-flex">{edit.links.data.link_two.value}</p>
            </a>
            <button className={edit.buttons.data.button_style.value}>
              {edit.buttons.data.button.value}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormV3;
