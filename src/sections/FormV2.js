import React from "react";

const FormV2 = () => {
  return (
    <section className="Form hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing hds-copy">
          <div className="grid max-w-xl mx-auto ">
            <h4 className="hds-title__large font-black mb-sm md:mb-md">
              Sign up
              <span className="hds-copy invisible md:visible float-right font-light mt-sm">
                Login
              </span>
            </h4>
            <input
              type="text"
              className="mb-xs md:mb-sm py-xs px-sm border border-gray-400 border-solid rounded-md"
              placeholder="Name"
            />
            <input
              type="text"
              className="mb-xs md:mb-sm py-xs px-sm border border-gray-400 border-solid rounded-md"
              placeholder="Email"
            />
            <input
              type="text"
              className="mb-xs md:mb-sm py-xs px-sm border border-gray-400 border-solid rounded-md"
              placeholder="Password"
            />
            <input
              type="text"
              className="mb-sm md:mb-sm py-xs px-sm border border-gray-400 border-solid rounded-md"
              placeholder="Repeat password"
            />
            <div className="inline-flex items-center mb-sm md:mb-md">
              <img
                className="mr-xs"
                src="/images/svg/checkbox-selected.svg"
                alt="check box selected"
              />
              <p className="inline-flex">I agree to the Wireframe terms</p>
            </div>
            <button className="hds-btn hds-btn__primary">Sign up</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FormV2;
