import React from "react";

const FooterV2 = () => {
  return (
    <section className="Footer hds-container bg-white">
    <div className="hds-section-layout hds-section__h-spacing hds-text-color hds-copy">
      <footer className="pt-md pb-0 md:pb-md w-full">
        <div className="">
          <div className="flex flex-col lg:flex-row justify-between flex-wrap mb-md lg:mb-lg">
            <div className="mb-md xl:mb-0 xl:w-5/12 xl:order-2 ">
              <p className="hds-title-color mb-sm font-bold">Become a Thermacell Insider</p>
              <div className="flex flex-col sm:flex-row">
                <input
                  className="hds-form-input"
                  placeholder="Email"
                />
                <button className="hds-btn hds-btn__primary" type="button">
                  Send
                </button>
              </div>
            </div>

            <div className="flex sm:justify-between xl:justify-start flex-wrap xl:w-7/12 xl:order-1 ">
              <ul className="pr-md lg:pr-lg mb-md sm:mb-0 w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs md:mb-sm font-bold">Customer Service</li>
                <li className="mb-xs">
                  <a href="/builder">Account</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Shipping and Returns</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Product Directions</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Contact Us</a>
                </li>
              </ul>

              <ul className="pr-md lg:pr-lg mb-md sm:mb-0 w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs md:mb-sm font-bold">Where To Buy</li>
                <li className="mb-xs">
                  <a href="/builder">International</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Dealer Locations</a>
                </li>
              </ul>

              <ul className="md:mr-sm w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs md:mb-sm font-bold">Media</li>
                <li className="mb-xs">
                  <a href="/builder">New Products</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Catalogs</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Press Release</a>
                </li>
                <li className="mb-xs">
                  <a href="/builder">Affiliate Program</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="hds-legal mb-sm md:mb-0 flex justify-between items-center">
            <p className="hidden md:block">&copy; 2020. All rights reserved</p>
            <div className="flex">
                <a className='pr-2' href="/">
                  <img src="/images/svg/twitter.svg" alt='twitter'/>
                </a>
                <a className='pr-2' href="/">
                  <img src="/images/svg/facebook.svg" alt='facebook'/>
                </a>
                <a className='pr-2' href="/">
                  <img src="/images/svg/google.svg" alt='google'/>
                </a>
                <a className='pr-2' href="/">
                  <img src="/images/svg/instagram.svg" alt='instagram'/>
                </a>
            </div>
          </div>
        </div>

        <div className="hds-copy md:hidden p-sm md:p-0 border-t md:border-0">
          <p className="mb-xs">
            <a href="/builder">Privacy Policy</a>
          </p>
          <p>
            <a href="/builder">Terms & Conditions</a>
          </p>
        </div>
      </footer>
      </div>
    </section>
  );
};

export default FooterV2;
