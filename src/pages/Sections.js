import React from "react";
import data from '../sections/allSections.js'

import { Link } from "react-router-dom";

const Sections = ({ match, location }) => {
  const componentId = match ? match.params.id : "";
  const componentObject = data.filter(i=> i.label === componentId);
  const SpecificComponent = componentObject[0] !== undefined ? componentObject[0].c : null
  if (SpecificComponent) {
    return (
      <div>
        <div className="m-4 flex items-center text-gray-600">
          <Link to="/builder" className="bg-transparent cursor-pointer">
            <span className="mr-2 no-underline">&larr;</span>
            <span className="underline">Builder</span>
          </Link>
          <p className="mx-4"> | </p>
          <p>
            Viewing: <span className="ml-1">{`${componentId}`}</span>
          </p>
        </div>
        <SpecificComponent />
      </div>
    );
  }
  return (
    <div className="relative w-full max-w-6xl m-auto bg-gray-200  å shadow-lg">
      <h1 className="ml-6 py-4 text-4xl">Sections</h1>
      <ul>
        {data.map(el => {
          return (
            <div key={el} className="p-6 border">
              <Link className="" to={`/sections/${el.label}`}>
                {el.label}
              </Link>
              <Preview component={el.c} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};
export default Sections;

const Preview = ({ component }) => {
  const Component = component;
  return <Component />;
};
