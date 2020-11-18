import React from "react";

const GalleryV7 = () => {
  return (
    <section className="Gallery hds-container">
      <div className="hds-section-layout ">
        <div className="hds-section__v-spacing hds-section__h-spacing ">
          <div className="grid grid-cols-2 grid-rows-flow lg:grid-cols-3 lg:grid-row-4 min-h-160 gap-4">
            <div className="relative rounded grid-item col-span-2 row-span-auto md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-4 overflow-hidden">
              {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
              <img
                className="block object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image-4.jpeg"
                alt=""
              />
            </div>
            <div className="relative rounded grid-item lg:col-span-1 lg:row-span-2 overflow-hidden">
              {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
              <img
                className="object-cover min-w-full min-h-full transition ease-out duration-300 transform scale-100 hover:scale-105"
                src="/images/products/product-image-6.jpeg"
                alt=""
              />
            </div>
            <div className="relative rounded grid-item lg:col-span-1 lg:row-span-2 overflow-hidden">
              {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
              <img
                className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image-3.jpeg"
                alt=""
              />
            </div>
            <div className="relative rounded grid-item lg:col-span-1 lg:row-span-2 overflow-hidden">
              {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
              <img
                className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image-7.jpeg"
                alt=""
              />
            </div>
            <div className="relative rounded grid-item lg:col-span-1 lg:row-span-2 overflow-hidden">
              {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
              <img
                className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image-5.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryV7;
