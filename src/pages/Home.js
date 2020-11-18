/* eslint-disable no-unused-vars */
import React from "react";
import { sbLogoTextBlack, logoLight } from "../assets";
import { builder, styleguide } from "../builder/assets";
import { Link } from "react-router-dom";
import { useFirebaseData } from "../builder/assets/utils";

const selectALayout = e => {
  localStorage.setItem("selected", JSON.stringify(e));
};

// Child
const ApprovedLayouts = () => {
  const data = useFirebaseData();
  const hydrated = data.length > 0 && data !== null && data !== undefined;

  return (
    <div className="w-full text-md">
      <h3 className="font-sbHeading font-bold text-lg border-b border-gray-600 py-4 md:px-2 lg:px-8">
        APPROVED LAYOUTS
      </h3>
      {!hydrated
      ? <div className='py-4'>
        <p className='mb-8'>You currently don't have any pages built out.</p>
        <ol>
          <li className='py-2'>Build out your <span className='font-bold'> Style Guide </span></li>
          <li className='py-2'>Choose which sections you'd like to be in your project.</li>
          <li className='py-2'>Click <span className='font-bold'>'Build New Page'</span> to get started</li>
        </ol>
        </div>
      :  data.map(i => {
          return (
            <div key={i} className="flex w-full  justify-between border-b border-gray-600 py-4 md:px-2 lg:px-8">
              <Link to="/builder" onClick={() => selectALayout(i[0])}>
                {i[0]}
              </Link>
              <div>
                <Link
                  to="/full"
                  onClick={() => selectALayout(i[0])}
                  className="mr-2 p-2 hover:text-gray-600 text-sb-teal"
                >
                  VIEW
                </Link>
                <Link
                  to="/builder"
                  onClick={() => selectALayout(i[0])}
                  className=" p-2  hover:text-gray-600 text-sb-teal"
                >
                  EDIT
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};

// Parent
const Home = () => {
  return (
    <div style={{backgroundColor: '#f0f2f4'}} className="text-sb-textColor font-sbBody min-h-screen">

      {/* Top */}
      <div className='bg-white'>
        <img src={sbLogoTextBlack} alt="logo" className="mx-auto my-12 max-w-md" />
        <p className="font-sbHeading max-w-lg mx-auto text-center uppercase pb-8">
          Client and project name
        </p>
      </div>

      {/* Bottom */}
      <div className="py-4 mt-4 grid md:grid-cols-2">
        <div className="">
          
          {/* Big Square Buttons */}
          <div className="w-full px-8 md:px-0 md:w-10/12  lg:w-9/12 xl:w-8/12 mx-auto grid grid-cols-2 gap-4 mt-8">
            <Link
              to="/styleguide"
              className="py-8 px-2 min-w-xs bg-sb-blue items-center flex flex-col rounded-md"
            >
              <img width="89px" src={styleguide} alt="Builder" />
              <p className="mt-2 text-white uppercase text-xs">
                View Styleguide <span className="ml-1">&rarr;</span>
              </p>
            </Link>
            <Link
              to="/builder"
              onClick={() => selectALayout([])}
              className="py-8 px-2 min-w-xs bg-sb-blue items-center flex flex-col rounded-md"
            >
              <img width="89px" src={builder} alt="Builder" />
              <p className="mt-2 text-white uppercase text-xs">
                Build Pages <span className="ml-1">&rarr;</span>
              </p>
            </Link>
          </div>
        </div>

        <div className="md:mr-16 px-8 md:px-0 mt-8 md:mt-2 ">
          <ApprovedLayouts />
        </div>

      </div>
    </div>
  );
};

export default Home;
