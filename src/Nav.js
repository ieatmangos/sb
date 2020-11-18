/* eslint-disable no-unused-vars */
import React from "react";
import { sbLogoWhite,  LogoLight } from "./assets";
import { Link, withRouter } from "react-router-dom";
import { builder, home, styleguide, edit } from "./builder/assets";
import { useSelectedLayout } from "./useSelectedLayout";

import "./App.css";

const Nav = withRouter(({ location }) => {
  const links = ["home", "styleguide", "builder",'edit'];
  const images = { home, styleguide, builder, edit };
  const _path = location.pathname.slice(1);
  const path = _path.length < 1 ? 'home': _path
  if (path === "full" || path === 'iframe') {
    return null;
  }
  return (
    <div  className='font-sbHeading relative h-screen bg-sb-black sticky top-0  '>
      <div style={{fontSize: '10px'}} className="">
        <div className="py-4 px-2 flex justify-center">
        <Link to={`/home`}>
          <img className="w-12" src={sbLogoWhite} alt="logo" />
          </Link>
        </div>
        <ul className="text-center">
          {links.map(link => {
            return (
              <Link to={`/${link}`} key={link}>
                <li
                  className={`py-4 px-2  border-t border-sb-gray w-full text-white   uppercase ${
                    path === link
                      ? "opacity-100 bg-sb-gray"
                      : "opacity-75"
                  }`}
                >
                  <img  className="mx-auto w-6" src={images[link]} alt={link} />
                  {link}

                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div style={{writingMode: 'vertical-lr'}} className='transform rotate-180 ml-3 mb-3 absolute bottom-0  text-white text-md  uppercase whitespace-no-wrap	'>
        <p>Starting Block</p>
        <p >Project Name Here</p>
      </div>
    </div>
  );
});

export default Nav;
