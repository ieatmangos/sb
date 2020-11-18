import React from "react";
import sections from "../sections/allSections";
import {useSelectedLayout}from '../useSelectedLayout'

// This is used to render the iframe of components seen in ReviewAndEdit.js
const IframeView = ( ) => {
  
const layout = useSelectedLayout()



  if (layout) {
  return (
    <div>
      {layout.map((item, index) => {
        const Component = sections.filter((x) => x.label === item.label)[0].c;
        return <Component comesFromIframe={true} id={item.id} key={item + index} />;
      })}
    </div>
  );
    }
  return null

};
export default IframeView;
