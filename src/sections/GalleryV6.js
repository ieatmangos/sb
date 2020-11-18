import React from "react";

const GalleryV6 = () => {
  return (
    <section className="Gallery hds-container">
      <div className=" hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing bg-primary">
          <div className="hds-section-layout grid row-gap-md">
            <div className="relative rounded overflow-hidden min-h-40 px-lg">
              <div className="absolute inset-0 w-full h-full bg-white">
                <img
                  className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                  src="/images/products/product-image-3.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="cols-start-1 row-start-1 md:col-start-2 max-w-xs md:ml-md lg:ml-lg xl:ml-xl">
              <h4 className="hds-title__medium font-black mt-sm mb-xs lg:mb-sm">
                New editorial showcase '17
              </h4>
              <p className="hds-copy mb-sm">
                Since wire-frame renderings are relatively simple and fast to
                calculate
              </p>
              <button className="hds-btn hds-btn__light flex items-center mb-xs">
                View
                <span className="ml-xs">
                  <img src="/images/svg/arrowRight.svg" alt="arrow right" />
                </span>
              </button>
            </div>

            <div className="relative rounded col-start-1 overflow-hidden min-h-40">
              <div className="absolute inset-0 w-full h-full bg-white">
                <img
                  className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                  src="/images/products/product-image-5.jpeg"
                  alt=""
                />
              </div>
            </div>

            <div className="relative rounded col-start-1 overflow-hidden min-h-40">
              <div className="absolute inset-0 w-full h-full bg-white">
                <img
                  className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                  src="/images/products/product-image-7.jpeg"
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

export default GalleryV6;
