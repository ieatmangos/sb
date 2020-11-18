import React from "react";

const FeatureV10 = () => {
  return (
    <section className="Feature hds-container">
      <div className="hds-section-layout hds-text-color">
        <div className="hds-section__v-spacing hds-section__h-spacing hds-copy flex flex-wrap xl:flex-no-wrap ">
          {/* <!--   <div style='min-height:22rem' className='bg-black w-full rounded-md mb-8 md:mb-16 xl:mb-0 max-w-lg xl:mr-32 min-h-full'> </div>  --> */}
          <div className="w-full mb-sm md:mb-md xl:mb-0 max-w-lg xl:mr-lg">
            <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
              <img
                className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                src="/images/products/product-image.jpeg"
                alt=""
              />
            </div>
          </div>
          <div className="max-w-2xl md:mx-auto xl:mx-0">
            <p className=" mb-xs lg:mb-sm">Actual images</p>
            <h3 className="hds-title__medium font-black mb-sm xl:mb-md">
              Unlike low wireframes, high fidelity wireframes can
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:col-gap-md xl:col-gap-lg ">
              <div className="mb-sm xl:mb-md">
                <h4 className=" font-bold mb-sm">Yellow</h4>
                <p className="">
                  The navigation design should communicate the relationship
                  between the links it contains{" "}
                </p>
              </div>
              <div className="mb-sm">
                <h4 className="font-bold  mb-sm">Yellow</h4>
                <p className="">
                  The navigation design should communicate the relationship
                  between the links it contains{" "}
                </p>
              </div>
              <div className="mb-sm">
                <h4 className="font-bold  mb-sm">Yellow</h4>
                <p className="">
                  The navigation design should communicate the relationship
                  between the links it contains{" "}
                </p>
              </div>
              <div className="mb-sm">
                <h4 className="font-bold  mb-sm">Yellow</h4>
                <p className="">
                  The navigation design should communicate the relationship
                  between the links it contains{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureV10;
