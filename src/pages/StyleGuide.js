import React from "react";
import { Typography, Spacing, FormElements, Colors } from "../styleguide";

const scrollTo = (section) => {
  const target = document.getElementById(section);
  if(!target){
    return
  }
  const y = target.getBoundingClientRect().top + window.pageYOffset;
  window.scrollTo({top: y, behavior: 'smooth'});
}

const StyleGuide = () => {
  const buttons = ['Typography','Colors','Logos','Button Styles', 'Form Elements', 'Product Elements', 'Spacing', 'Specimines'] 
  const [selected, setSelected] = React.useState('')

  return (
    <div className="flex max-w-full">
      {/* SideBar */}
      <div className="h-screen max-h-screen bg-sb-gray sticky top-0">
      <p className=" px-4 py-4 text-base font-sbHeading text-white whitespace-no-wrap">STYLE SETS</p>
        {buttons.map( i => <p onClick={()=>{
          scrollTo(i)
          setSelected(i)
        }} 
        className={`px-4 py-2 text-sm whitespace-no-wrap ${
          selected === i  
          ? " bg-white text-sb-gray "
          : " bg-sb-gray text-white "
        }`}
        >{i}</p>)}
      </div>
      <div>
        <Typography />
        <Spacing />
        <FormElements />
        <Colors />
      </div>
    </div>
  );
};

export default StyleGuide;
