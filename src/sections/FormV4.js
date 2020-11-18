import React from "react";
import { useEdit, useMyData } from "../edit";

// const defaults = {
//     title: {
//     label: "title",
//     value: "A default Title",
//   },
//    body: {
//     label: "Body",
//     value: "A default Body",
//     text_area: true
//   },
//   button: {
//     label: "Button Text",
//     value: "Register Now",
//     show: true
//   },
//   button_styles: {
//     label: "Button Styles",
//     value: "hds-btn hds-btn__primary max-w-full",
//     show: false,
//     text_area: true
//   }
// };


const defaults = {
  left_side: {
    data: {
      title: {
        label: "title",
        value: "A default Title",
        input: true
      },
      body: {
        label: "Body",
        value: "A default Body",
       
      }
    }
  },
  right_side: {
    data: {
      button: {
        label: "Button Text",
        value: "Register Now",
        input: true
      },
      button_styles: {
        label: "Button Styles",
        value: "hds-btn hds-btn__primary max-w-full",
     
      }
    }
  }
};

const FormV4 = ({ id }) => {
  const edit = useEdit(defaults, id);
  useMyData(id, defaults);

  return (
    <section className="Form hds-container group">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing  relative leading-8 ">
          <div className="z-10 max-w-sm md:max-w-full mx-auto flex flex-wrap md:flex-no-wrap relative items-center">
            <div className="py-sm pb-md max-w-lg md:mr-md lg:mr-lg  ">
              <h3
                id="title-1"
                className={`hds-title__medium hds-title-color font-bold mb-xs lg:mb-xs`}
              >
                {edit.left_side.data.title.value}
              </h3>
              <p id="body-1" className="hds-copy">
                {edit.left_side.data.body.value}
              </p>
            </div>
            <div className="grid p-sm bg-white rounded-md max-w-lg md:mr-0">
              <h4 className="hds-title__small hds-title-color font-bold mb-sm text-center">
                some text
              </h4>
              <p className="text-lg text-center mb-sm">some text</p>
              <div className="mb-xs text-lg border border-gray-400 border-solid rounded-md flex items-center justify-between">
                <img
                  className="ml-6 mr-3"
                  src="/images/svg/person.svg"
                  alt="person"
                />
                <input
                  type="text"
                  className="py-xs pr-sm w-full rounded-md"
                  placeholder="Name"
                />
              </div>
              <div className="mb-xs text-lg border border-gray-400 border-solid rounded-md flex items-center justify-between">
                <img
                  className="ml-6 mr-3"
                  src="/images/svg/email.svg"
                  alt="email"
                />
                <input
                  type="text"
                  className="py-xs pr-sm w-full rounded-md"
                  placeholder="Email"
                />
              </div>
              <div className="mb-sm text-lg border border-gray-400 border-solid rounded-md flex items-center justify-between">
                <img
                  className="ml-6 mr-3"
                  src="/images/svg/lock.svg"
                  alt="lock"
                />

                <input
                  type="text"
                  className="py-xs pr-sm w-full rounded-md"
                  placeholder="Password"
                />
              </div>
              <button className={`${edit.right_side.data.button_styles.value}`}>
                {edit.right_side.data.button.value}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute z-0 w-full md:w-4/6 h-screen md:h-full bg-primary inset-0" />
    </section>
  );
};
export default FormV4;
