import React from "react";

const FooterV1 = () => {
  return (
    <section className='Footer hds-container bg-white'>
      <footer className="hds-section-layout hds-section__h-spacing hds-text-color pt-md pb-0 md:pb-md ">
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between flex-wrap mb-sm md:mb-lg">
            <div className="hds-copy flex sm:justify-between md:justify-start flex-wrap">
              <ul className="pr-md lg:pr-lg mb-md md:mb-0 w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs font-bold">Catalog</li>
                <li className="mb-xs">
                  <a href="/">Catalog</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Popular</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Trending</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Features</a>
                </li>
              </ul>

              <ul className="pr-md lg:pr-lg mb-md md:mb-0 w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs font-bold">Customer</li>
                <li className="mb-xs">
                  <a href="/">Catalog</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Popular</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Trending</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Features</a>
                </li>
              </ul>

              <ul className="pr-md lg:pr-lg w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs font-bold">Catalog</li>
                <li className="mb-xs">
                  <a href="/">Catalog</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Popular</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Trending</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Features</a>
                </li>
              </ul>

              <ul className="md:mr-sm w-1/2 sm:w-auto">
                <li className="hds-title-color mb-xs font-bold">Customer</li>
                <li className="mb-xs">
                  <a href="/">Catalog</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Popular</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Trending</a>
                </li>
                <li className="mb-xs">
                  <a href="/">Features</a>
                </li>
              </ul>
            </div>

            <div className="hds-copy">
              <p className="mb-sm font-bold">Follow us</p>
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

          <div className="hds-legal hidden md:block text-center">
            <p>&copy; 2020. All rights reserved</p>
          </div>
        </div>

        <div className="hds-copy md:hidden p-sm md:p-0 border-t md:border-0">
          <p className="mb-xs">
            <a href="/">Privacy Policy</a>
          </p>
          <p>
            <a href="/">Terms & Conditions</a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FooterV1;
