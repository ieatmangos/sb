import React from "react";

const HeroV2 = () => {
  return (
    <section className="Hero hds-container">
      <div className="hds-text-color">
        <div className="px-sm pt-xl pb-sm md:py-lg bg-primary ">
          {/* w-full hds-section__v-spacing bg-primary text-white */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-lg max-w-6xl mx-auto">
            <div className="hidden md:block">
              <div className="relative rounded overflow-hidden mb-sm max-w-xl h-152 rounded-md">
                <div className="absolute inset-0 w-full h-full bg-white" />
                <img
              className="block object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
              src="/images/products/product-image.jpeg"
              alt=""
            />
              </div>
              <div className="flex justify-center">
                <img
                  className="mx-xs"
                  src="/images/svg/circleClosed.svg"
                  alt="dot"
                />
                <img className="mx-xs" src="/images/svg/circleOpen.svg" alt="dot" />
                <img className="mx-xs" src="/images/svg/circleOpen.svg" alt="dot" />
              </div>
            </div>
            <div>
              <div className="mt-md">
                <h4 className="hds-title__large mb-sm font-black">
                  Wireframes can be pencil drawings{" "}
                </h4>
                <p className="hds-copy mb-lg md:mb-md">
                  Wireframes are generally created by business analysts, user
                  experience designers, developers, visual designers, and by
                  those with expertise
                </p>
                <div className="flex justify-center mb-sm md:hidden">
                  <img
                    className="mx-xs"
                    src="/images/svg/circleClosed.svg"
                    alt="dot"
                  />
                  <img
                    className="mx-xs"
                    src="/images/svg/circleOpen.svg"
                    alt="dot"
                  />
                  <img
                    className="mx-xs"
                    src="/images/svg/circleOpen.svg"
                    alt="dot"
                  />
                </div>
                <div className="flex justify-center flex-wrap md:block">
                  <button
                    className="hds-btn hds-btn__light mr-xs md:mb-sm"
                    type="button"
                  >
                    Button
                  </button>
                  <button className="hds-btn hds-btn__light-hollow" type="button">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
