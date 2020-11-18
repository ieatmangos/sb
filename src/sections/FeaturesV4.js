import React from "react";

const FeaturesV4 = () => {
  return (
    <div className="max-w-5xl py-lg px-sm mx-auto bg-white text-primary">
      <div className="mb-sm md:mb-0 grid grid-cols-1 md:grid-cols-3 gap-lg justify-center">
        <div className="col-span-2">
          <p className="hds-title__medium font-black leading-10">
            It is difficult for designers to assess how closely the wireframe
            needs to depict actual screen layouts.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-5 gap-sm sm:gap-md md:gap-lg md:row-gap-0 md:grid-flow-col">
        <div className="max-w-xs md:row-start-3 md:row-end-5">
          <div>
            {/* <!--         <div className='h-88 bg-gray-900 rounded-md'></div> --> */}
            <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
              <img
                className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
            </div>
            <p className="mt-sm mb-xs font-bold hds-copy leading-8">Feature</p>
            <p className="hds-copy leading-8">
              Modern design incorporates various devices such panels, hover{" "}
            </p>
          </div>
        </div>
        <div className="max-w-xs md:row-start-2 md:row-end-4">
          <div>
            {/* <!--         <div className='h-88 bg-gray-900 rounded-md'></div> --> */}
            <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
              <img
                className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
            </div>
            <p className="mt-sm mb-xs font-bold hds-copy leading-8">Feature</p>
            <p className="hds-copy leading-8">
              Modern design incorporates various devices such panels, hover{" "}
            </p>
          </div>
        </div>
        <div className="max-w-xs md:row-start-1 md:row-end-3">
          <div>
            {/* <!--         <div className='h-88 bg-gray-900 rounded-md'></div> --> */}
            <div className="relative pb-3/4 bg-primary rounded-md overflow-hidden">
              <img
                className="top-0 w-full h-full min-h-2/3 object-cover absolute z-0"
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                alt=""
              />
            </div>
            <p className="mt-sm mb-xs font-bold hds-copy leading-8">Feature</p>
            <p className="hds-copy leading-8">
              Modern design incorporates various devices such panels, hover{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesV4;
