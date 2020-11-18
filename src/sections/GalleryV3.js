import React from "react";

const GalleryV3 = () => {
  return (
    <section className="Gallery hds-container">
      <div className="hds-section-layout">
        <div className="hds-section__v-spacing hds-section__h-spacing ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-sm">
            <div className="relative overflow-hidden bg-primary ">
              <img
                className="object-cover min-w-full h-88 transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image-3.jpeg"
                alt=""
              />
            </div>
            <div className="relative overflow-hidden bg-primary sm:col-span-2 row-start-1 md:col-start-2 ">
              <img
                className="object-cover min-w-full h-88 transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image-6.jpeg"
                alt=""
              />
            </div>
            <div className="relative overflow-hidden bg-primary sm:col-span-2 row-start-4 sm:row-start-3 md:row-start-2 ">
              <img
                className="object-cover min-w-full h-88 transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image-5.jpeg"
                alt=""
              />
            </div>
            <div className="relative overflow-hidden bg-primary ">
              <img
                className="object-cover min-w-full h-88 transition ease-out duration-300 transform hover:scale-105"
                src="/images/products/product-image-7.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryV3;
