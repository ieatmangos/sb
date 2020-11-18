import React from "react";

const CallToActionV5 = () => {
  return (
    <section className='CallToAction hds-container'>
    <div className="hds-section-layout hds-text-color">
      <div className="hds-section__v-spacing hds-section__h-spacing w-full flex flex-wrap md:justify-center ">
        <div className="w-full">
          <p className="hds-copy mb-xs md:mb-sm">Great updates</p>
          <div className="flex justify-between flex-wrap md:flex-no-wrap">
            <h4 className="hds-title__medium hds-title-color mb-sm md:mb-0 max-w-3xl font-black">
              Color choices are not included, different values in color can be
              represented in.
            </h4>
            <button type="button" className="md:ml-sm">
              <img
                className="ml-6 mr-3"
                src="/images/svg/arrowInCircle.svg"
                alt="person"
              />
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
export default CallToActionV5;
