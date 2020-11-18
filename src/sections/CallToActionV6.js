import React from "react";

const CallToActionV6 = () => {
  return (
    <section className="CallToAction hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing w-full ">
          <div className="w-full flex justify-between flex-wrap items-center">
            {/* <!--     <div className="mb-xs md:mr-sm w-full h-80 sm:w-96 sm:h-96 md:w-112 md:h-112 bg-primary rounded-md"></div> --> */}
            <div className="mb-xs md:mr-sm w-full sm:w-96 md:w-112">
              <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
                <img
                  className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                  src="/images/products/product-image.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="max-w-md">
              <h4 className="hds-title__medium hds-title-color mb-sm md:mb-md font-black">
                Wireframes can be pencil drawings on a whiteboard.
              </h4>
              <button className="hds-btn hds-btn__primary-hollow" type="button">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV6;
