import React from "react";

const GalleryV4 = () => {
  return (
    <section className='Gallery hds-container'>
    <div className='hds-section-layout'>
    <div className="hds-section__v-spacing hds-section__h-spacing">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-sm">
        <div className="relative rounded grid-item sm:row-span-2 overflow-hidden">
          {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
          <img
            className="block object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
            src="/images/products/product-image-4.jpeg"
            alt=""
          />
        </div>

        <div className="relative rounded grid-item overflow-hidden min-h-40">
          {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
          <img
            className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
            src="/images/products/product-image-3.jpeg"
            alt=""
          />
        </div>

        <div className="relative rounded grid-item overflow-hidden min-h-40">
          {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
          <img
            className="object-cover min-w-full min-h-full transition ease-out duration-300 transform hover:scale-105"
            src="/images/products/product-image-3.jpeg"
            alt=""
          />
        </div>

        <div className="relative rounded grid-item sm:col-span-2 lg:row-start-1 lg:col-start-2 overflow-hidden min-h-88">
          {/* <div className="absolute inset-0 w-full h-full bg-primary" /> */}
          <img
            className="block object-cover min-w-full min-h-12 md:min-h-full transition ease-out duration-300 transform hover:scale-105"
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

export default GalleryV4;
