import React from "react";

const FormV1 = () => {
  return (
    <section className='Form hds-container'>
      <div className='absolute inset-y-0 w-1/2 bg-primary'/>
      <div className='hds-section-layout hds-text-color'>
      <div className='hds-section__v-spacing hds-section__h-spacing hds-copy w-full md:max-w-2xl bg-primary ' >
      <div className="grid max-w-md">
        <h4 className="hds-title__large font-black mb-sm md:mb-md mt-lg md:mt-0 text-center md:text-left">
          Sign in
        </h4>
        <input
          type="text"
          className="bg-primary mb-xs py-xs px-sm border border-gray-700 border-solid rounded-md"
          placeholder="Username or Email"
        />
        <div className="relative mb-sm border border-gray-700 border-solid rounded-md flex items-center justify-between">
          <input
            type="text"
            className="bg-primary py-xs px-sm w-full rounded-md"
            placeholder="Password"
          />
          <img className="absolute mr-sm right-0" src="/images/svg/lock.svg" alt='lock'/>
        </div>

        <div className="inline-flex items-center mb-xs justify-between">
          <p className="">Forgot password?</p>
          <button className="hds-btn hds-btn_light">Button</button>
        </div>

        <div className="flex w-full justify-between items-center mb-sm">
          <div className=" border border-solid h-px w-2/5 border-gray-700" />
          <p>or</p>
          <div className=" border border-solid h-px w-2/5 border-gray-700" />
        </div>

        <div className="inline-flex items-center md:mb-md justify-between">
          <button className="p-sm w-2/5 lg:w-5/12 rounded-md bg-gray-700 font-bold flex justify-center">
            <img className="" src="/images/svg/facebook-white.svg" alt='facebook'/>
          </button>
          <button className="p-sm w-2/5 lg:w-5/12 rounded-md bg-gray-700 font-bold flex justify-center">
            <img className="" src="/images/svg/google-white.svg" alt='google'/>
          </button>
        </div>

        <div className="visible lg:invisible mt-lg flex justify-between">
          <p>Don't have an account yet?</p>
          <p>Sign up</p>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};
export default FormV1;
