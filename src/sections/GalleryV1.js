import React from "react";

const GalleryV1 = () => {
  return (
    <section className="Gallery hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing">
          {/* <!-- Above --> */}
          <div className="max-w-2xl mx-auto mb-md ">
            <p className="hds-legal mb-xs">Our things</p>
            <h3 className="hds-title__medium font-black">
              The goal is to facilitate useability
            </h3>
          </div>
          {/* <!-- Slider --> */}
          <div className="hide-scrollbar overflow-scroll ">
            <div className="whitespace-no-wrap">
              <div className="relative rounded grid-item overflow-hidden min-h-40 inline-block w-9/12 md:w-1/2 xl:w-1/3 mx-xs ml-sm">
                <div className="absolute inset-0 w-full h-full ">
                  <img
                    className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                    src="/images/products/product-image-3.jpeg"
                    alt=""
                  />
                </div>
              </div>

              <div className="relative rounded grid-item overflow-hidden min-h-40 inline-block w-9/12 md:w-1/2 xl:w-1/3 mx-xs">
                <div className="absolute inset-0 w-full h-full ">
                  <img
                    className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                    src="/images/products/product-image-7.jpeg"
                    alt=""
                  />
                </div>
              </div>

              <div className="relative rounded grid-item overflow-hidden min-h-40 inline-block w-9/12 md:w-1/2 xl:w-1/3 mx-xs mr-sm">
                <div className="absolute inset-0 w-full h-full ">
                  <img
                    className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                    src="/images/products/product-image-5.jpeg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Below --> */}

          <div className="flex mt-xs mx-atuo">
            <img
              className="mx-xs"
              src="/images/svg/circleClosed.svg"
              alt="dot"
            />
            <img className="mx-xs" src="/images/svg/circleOpen.svg" alt="dot" />
            <img className="mx-xs" src="/images/svg/circleOpen.svg" alt="dot" />
          </div>
          {/* SVG DOTS */}

          <div className="max-w-2xl mx-auto mt-sm ">
            <div className="hds-copy mb-xs">
              The navigation design should communicate the relationship between
              the links it contains so that users understand the options they
              have for navigating the site.
            </div>
            <button className="hds-btn hds-btn__primary-hollow">
              View more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryV1;
