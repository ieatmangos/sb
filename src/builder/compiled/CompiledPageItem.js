import React from "react";
import { HoverLinks } from "../assets";

const CompiledPageItem = React.memo(
  ({ id, label, Component, fullPage }) => {
    // const [localHovState, setLocalHovState] = React.useState(false)
    // const zoom = location.pathname !== "/full" ? "zoom" : "";
    return (
    
      <div
        className={`relative zoom group`}
      >
         <div className={`opacity-0 group-hover:opacity-100 ${fullPage ? 'hidden':''}`}><HoverLinks label={label}  id={id}/></div>
        <Component id={id}  />
      </div>
   
    );
  }
);

export default CompiledPageItem