import React from "react";

const HeroV3 = () => {
  return (
    <section className="Hero hds-container">
    <div className="hds-text-color">
    <div className="py-md px-sm md:pl-xl md:pr-0 bg-primary ">
      <div className="flex justify-center md:justify-between items-center">
        <div className="max-w-md">
          <p className="hds-legal mb-sm">New edition</p>
          <h4 className="hds-title__large hds-title-color mb-sm font-black ">
            Help Project Team Collaborate More Effectively
          </h4>
          <p className="hds-copy mb-md">
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in cases{" "}
          </p>
          <form className="flex flex-wrap md:flex-no-wrap">
            <input
              className="hds-form-input flex-1"
              type="email"
              placeholder="Email"
            />
            <button
              className="hds-btn hds-btn__light mt-sm w-full md:w-auto md:mt-0 md:ml-sm"
              type="button"
            >
              Button
            </button>
          </form>
        </div>
        {/* <div className="hidden md:block ml-32 w-full max-w-2xl h-144 bg-white rounded-md" /> */}
        <div className="hidden md:block ml-lg w-full max-w-2xl relative pb-3/4 bg-primary rounded-md overflow-hidden">
          <img
            className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
            src="/images/products/product-image.jpeg"
            alt=""
          />
        </div>
      </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV3;
