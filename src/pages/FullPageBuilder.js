import React from "react";
import Builder from "./Builder";

const FullPageBuilder = ( ) => {
  // Full page View removes the library section
  return <Builder fullPage={true} />;
};

export default FullPageBuilder;
