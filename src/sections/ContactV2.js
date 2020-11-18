import React from "react";

const ContactV2 = () => {
  return (
    <section className="Contact hds-container">
      <div className="hds-section-layout  hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing">
            <div className="text-center">
              <h2 className="hds-title__large font-bold mb-xs sm:mb-sm">
                Got questions?
              </h2>
              <p className="mb-sm sm:mb-md">
                Contact one of our departments to solve your problem
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
              <div className="py-md px-sm bg-primary rounded-md text-center">
                <img
                  className="mb-sm mx-auto"
                  src="/images/svg/video.svg"
                  alt="video"
                />
                <h6 className="mb-xs font-bold">Design</h6>
                <p className="hds-copy mb-sm">
                  Aside from websites, wireframes are utilized for the
                  prototyping
                </p>
                <button className="hds-btn hds-btn__light " type="button">
                  Button
                </button>
              </div>

              <div className="py-md px-sm bg-primary rounded-md text-center">
                <img
                  className="mb-sm mx-auto"
                  src="/images/svg/checkmark.svg"
                  alt="checkmark"
                />
                <h6 className="mb-xs font-bold">Development</h6>
                <p className="hds-copy mb-sm">
                  Aside from websites, wireframes are utilized for the
                  prototyping
                </p>
                <button className="hds-btn hds-btn__light " type="button">
                  Button
                </button>
              </div>

              <div className="py-md px-sm bg-primary rounded-md text-center">
                <img
                  className="mb-sm mx-auto"
                  src="/images/svg/basket.svg"
                  alt="basket"
                />
                <h6 className="mb-xs font-bold">Marketing</h6>
                <p className="hds-copy mb-sm">
                  Aside from websites, wireframes are utilized for the
                  prototyping
                </p>
                <button className="hds-btn hds-btn__light" type="button">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
export default ContactV2;
