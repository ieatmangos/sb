import React from "react";

const CallToActionV8 = () => {
  return (
    <section className="CallToAction hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing">
          <div className="md:flex md:justify-between md:items-center">
            <div className="md:mr-lg max-w-lg">
              <h4 className="hds-title__medium hds-title-color mb-xs md:mb-sm font-black">
                Information elements should be arranged in
              </h4>
              <p className="mb-sm md:mb-0 hds-copy ">
                Wireframes can be pencil drawings or sketches on whiteboard, or
                they can be
              </p>
            </div>
            {/* <!--     <div className="w-full md:max-w-xl h-80 sm:h-112 md:h-152 bg-gray-900 rounded-md"></div> --> */}
            <div className="w-full md:max-w-xl">
              <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
                <img
                  className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                  src="/images/products/product-image.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV8;
