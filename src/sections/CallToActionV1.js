import React from "react";

const CallToActionV1 = () => {
  return (
    <section className="CallToAction hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing max-w-3xl m-auto text-center">
          <p className="hds-copy text-left md:text-center mb-xs md:mb-sm">
            Great updates
          </p>
          <h4 className="hds-title__large pb-sm md:pb-lg text-left md:text-center font-black">
            Try something totally different and cool right now.
          </h4>
          <div className="flex flex-wrap justify-center w-full mb-sm">
            <input
              className="flex-1 md:max-w-md bg-white py-xs px-sm border w-full md:w-auto mb-xs md:mb-0"
              type="email"
              placeholder="Username or email"
            />
            <button
              className="hds-btn hds-btn__primary w-full md:w-auto md:ml-xs"
              type="button"
            >
              Subscribe
            </button>
          </div>
          <p className="hds-legal text-center">
            Attentiion! Offer expires in 30 days. Make sure not to miss this
            opportunity
          </p>
        </div>
      </div>
    </section>
  );
};
export default CallToActionV1;
