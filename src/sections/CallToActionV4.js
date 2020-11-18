import React from "react";

const CallToActionV4 = () => {
  return (
    <section className="CallToAction hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing w-full max-w-3xl m-auto text-center">
          <h4 className="hds-title__large pb-sm font-black">
            Blueprint Wireframe
          </h4>
          <p className="hds-copy mb-md">
            Since wire-frame renderings are relatively simple and fast to
            calculate, they are often used in good cases where a high screen
            needed
          </p>
          <div className="flex justify-center w-full">
            <button
              className="hds-btn hds-btn__primary-hollow w-full md:w-auto"
              type="button"
            >
              Button
            </button>
            <button
              className="hds-btn hds-btn__primary w-full md:w-auto ml-xs md:ml-sm"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV4;
