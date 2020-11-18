import React from "react";

const CallToActionV7 = () => {
  return (
    <section className="CallToAction hds-container">
      <div className="absolute inset-y-0 left-0 w-full h-64 sm:h-full sm:w-1/2 bg-primary" />
      <div className="hds-section-layout hds-section__h-spacing hds-section__v-spacing hds-text-color">
        <div className="w-full grid grid-cols-1 gap-24 sm:grid-cols-2">
          <div className="md:flex md:flex-row md:justify-start ">
            <div className="md:max-w-sm">
              <h4 className="hds-title__medium hds-title-color mb-xs md:mb-sm font-black">
                Stragedy
              </h4>
              <p className="mb-sm md:mb-md hds-copy ">
                Wireframes can be pencil drawings or sketches on whiteboard, or
                they can be
              </p>
              <button className="hds-btn hds-btn__light" type="button">
                View
              </button>
            </div>
          </div>

          <div className="md:flex md:flex-row md:justify-end  bg-white">
            <div className="md:max-w-sm">
              <h4 className="hds-title__medium hds-title-color mb-xs md:mb-sm font-black">
                Stragedy
              </h4>
              <p className="hds-copy mb-sm md:mb-md">
                Wireframes can be pencil drawings or sketches on whiteboard, or
                they can be
              </p>
              <button className="hds-btn hds-btn__primary" type="button">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV7;
