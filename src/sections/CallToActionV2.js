import React from "react";

const CallToActionV2 = () => {
  return (
    <section className="CallToAction hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing w-full flex flex-wrap md:justify-center text-left md:text-center ">
          <div className="w-full max-w-xl m-auto">
            <h4 className="hds-title__large hds-title-color mb-sm font-black ">
              Blueprint Wireframe
            </h4>
            <p className="hds-copy mb-sm text-left md:text-center">
              Since wire-frame renderings are relatively simple and fast to
              calculate, they are often used in cases where.
            </p>
            <button className=" hds-btn hds-btn__primary mb-sm" type="button">
              Try
            </button>
            <p className="hds-legal">Since wire-frame renderings</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV2;
