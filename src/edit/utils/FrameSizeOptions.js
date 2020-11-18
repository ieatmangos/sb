import React from "react";
import {
  MobileSvg,
  TabletSvg,
  DesktopSvg,
  Rotate1,
  Rotate2
} from "../svgs";

const FrameSizeOptions = ({
  frameSizeData,
}) => {
  const {  frameWidth,
    setFrame,
    setRotate,
    rotate,
    widthOptions} = frameSizeData
  return (
    <div className='w-full flex items-center '>
    <div className="flex-1 flex justify-start items-center">
   
        <button
          onClick={() => setRotate(!rotate)}
          className={`px-2 py-3 flex justify-center transform scale-75
          ${frameWidth[0] !== '100%' ? " opacity-100" : " opacity-50 "}
          `}
        >
          {rotate ? <Rotate2 /> : <Rotate1 />}
        </button>
      
      {/* WINDOW SIZE BUTTONS */}
      {widthOptions.map((option) => {
        const image = (isSelected) => {
          if (option[0] === 'mobile'){
          return <MobileSvg fill={isSelected? 'white':'black'}/>
          } else if (option[0] === 'tablet'){
            return <TabletSvg fill={isSelected? 'white':'black'}/>
          } else return <DesktopSvg fill={isSelected? 'white':'black'}/>
        }
        const isSelected = option[1][0] === frameWidth[0]
        return (
          <button
            className={`p-2 ${
              isSelected ? " opacity-100 bg-sb-teal rounded-md" : ""
            }
              flex flex-col items-center
            `}
            key={option[0]}
            onClick={() => {
              setFrame(option[1]);
            }}
          >
            {image(isSelected)}
          </button>
        );
      })}
    </div>
    </div>
  );
};

export default FrameSizeOptions