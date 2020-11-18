import React from "react";

const GalleryV5 = () => {
  return (
    <section className="Gallery hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing ">
          <div className="my-sm md:my-md lg:my-xl grid grid-cols-1 sm:grid-cols-2 gap-sm">
            <div className=" text-center ">
              <div className="relative rounded grid-item overflow-hidden min-h-40">
                 <div className="absolute inset-0 w-full h-full" >
              <img
            className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
            src="/images/products/product-image-5.jpeg"
            alt=""
          />
          </div>
              </div>
              <p className="mt-sm text-2xl font-bold">
                Focus on screen
              </p>
              <p className="leading-8 text-xl">The navigation design should</p>
            </div>
            <div className="sm:mt-md lg:mt-lg text-center ">
              <div className="relative rounded grid-item overflow-hidden min-h-40">
              <div className="absolute inset-0 w-full h-full bg-white" >
              <img
            className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
            src="/images/products/product-image-3.jpeg"
            alt=""
          />
          </div>
              </div>
              <p className="mt-sm text-2xl font-bold">
                Focus on screen
              </p>
              <p className="leading-8 text-xl">The navigation design should</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryV5;
