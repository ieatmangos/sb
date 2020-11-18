import React from "react";

const ProductCardGridV3 = () => {
  return (
    <section className="Product hds-container">
      <div className="hds-section-layout hds-text-color ">
        <div className="hds-section__v-spacing hds-section__h-spacing ">
          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-md md:gap-sm ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              {/* <!-- Product Image --> */}
              <div className="">
                <div className="relative pb-3/4 sm:pb-0 sm:h-full rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-1/2 object-contain absolute z-0"
                    src="/images/products/product-image-2.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                {/* <!-- Title --> */}
                <h4 className="hds-title__medium hds-title-color font-bold mb-xs">
                  Instrinct Boost
                </h4>
                {/* <!-- Price --> */}
                <p className="hds-copy mb-xs md:mb-sm font-bold">$1125</p>
                {/* <!-- Description --> */}
                <p className="hds-copy mb-sm">
                  High fidelity wireframes include more real content, specific
                  typography choices, and information on image.
                </p>
                {/* <!-- ATC --> */}
                <button className="hds-btn hds-btn__primary" type="button">
                  <div className="flex items-center">
                    <span>Button</span>
                    <img src="/images/svg/cart-light.svg" alt="cart" />
                  </div>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
              {/* <!-- Product Image --> */}
              <div className="">
                <div className="relative pb-3/4 sm:pb-0 sm:h-full rounded-md overflow-hidden">
                  <img
                    className="top-0 w-full h-full min-h-1/2 object-contain absolute z-0"
                    src="/images/products/product-image-2.jpeg"
                    alt=""
                  />
                </div>
              </div>
              <div className="">
                {/* <!-- Title --> */}
                <h4 className="hds-title__medium hds-title-color font-bold mb-xs">
                  Instrinct Boost
                </h4>
                {/* <!-- Price --> */}
                <p className="hds-copy mb-xs md:mb-sm font-bold">$1125</p>
                {/* <!-- Description --> */}
                <p className="hds-copy mb-sm">
                  High fidelity wireframes include more real content, specific
                  typography choices, and information on image.
                </p>
                {/* <!-- ATC --> */}
                <button className="hds-btn hds-btn__primary" type="button">
                  <div className="flex items-center">
                    <span>Button</span>
                    <img src="/images/svg/cart-light.svg" alt="cart" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCardGridV3;
