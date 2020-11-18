import React from "react";

const ProductCardGridV4 = () => {
  return (
    <section className="Product hds-container">
      <div className="hds-section-layout hds-text-color  hds-copy">
        <div className="hds-section__v-spacing hds-section__h-spacing">
          <div className="">
            <h4 className="hds-title-color mb-md font-bold">
              Our Popular Products
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm md:gap-xs">
              <div className="flex mr-sm max-w-xs">
                <div className="w-24">
                  <div className="relative h-full bg-primary rounded-md overflow-hidden">
                    <img
                      className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                      src="/images/products/product-image-2.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow ml-xs">
                  <p className="hds-title-color mb-xs">
                    Red new carpet with remote wifi
                  </p>
                  <p className="font-bold">$25</p>
                </div>
              </div>

              <div className="flex mr-sm max-w-xs">
                <div className="w-24">
                  <div className="relative h-full bg-primary rounded-md overflow-hidden">
                    <img
                      className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                      src="/images/products/product-image.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow ml-xs">
                  <p className="hds-title-color mb-xs">
                    Red new carpet with remote wifi
                  </p>
                  <p className=" font-bold">$25</p>
                </div>
              </div>

              <div className="flex mr-sm max-w-xs">
                <div className="w-24">
                  <div className="relative h-full bg-primary rounded-md overflow-hidden">
                    <img
                      className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                      src="/images/products/product-image.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow ml-xs">
                  <p className="hds-title-color mb-xs">
                    Red new carpet with remote wifi
                  </p>
                  <p className=" font-bold">$25</p>
                </div>
              </div>

              <div className="flex mr-sm max-w-xs">
                <div className="w-24">
                  <div className="relative h-full bg-primary rounded-md overflow-hidden">
                    <img
                      className="top-0 w-full h-full min-h-1/2 object-cover absolute z-0"
                      src="/images/products/product-image.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-grow ml-xs">
                  <p className="hds-title-color mb-xs">
                    Red new carpet with remote wifi
                  </p>
                  <p className=" font-bold">$25</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardGridV4;
