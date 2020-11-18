import React from "react";
import { EditLayer1 } from "../edit";
import Controls from "../builder/controls";

const widthOptions = [
  ["desktop", ["100%", "100%"]],
  ["tablet", ["768px", "1024px"]],
  ["mobile", ["375px", "640px"]]
];

const ReviewAndEdit = () => {
  const [frameWidth, setFrame] = React.useState(["100%", "100%"]);
  const [rotate, setRotate] = React.useState(false);
  const frameSizeData = {
    frameWidth,
    setFrame,
    setRotate,
    rotate,
    widthOptions
  };
  const [triggerIframe, setTrigger] = React.useState(false)
const [show, setShow] = React.useState(false)
React.useEffect(()=>{
  // Re render the iframe

  document.getElementById('iframe-id').src = document.getElementById('iframe-id').src
},[triggerIframe])
React.useEffect(()=>{
  // Re render the iframe

  const timer = setTimeout(()=> { 
    setShow(true)
  },1000)
return () => clearTimeout(timer)

},[triggerIframe])
  
// if(!show.current){
//   return <p>wait</p>
// }

  return (
    <div className="min-h-screen">
      <div className="flex w-full">
        
        {/* Side Bar / Drawers  */}
        <div className="h-screen max-h-screen overflow-hidden bg-sb-gray sticky top-0">
          <EditLayer1 />
        </div>


        {/* Iframe Group */}
        <div
          style={{ backgroundColor: "#D6D6D6" }}
          className="flex-1 min-h-screen w-full flex flex-col justify-center items-center p-4"
        >

          {/* Top Control Bar */}
          <div className="w-full">
            <Controls
              setTrigger={setTrigger}
              frameSizeData={frameSizeData}
              dynamicWidth={rotate ? frameWidth[1] : frameWidth[0]}
            />
          </div>

          {/* Iframe, renderes the page, 'IframeView.js*/}
          {!show && <div style={{minHeight: '75vh'}} className='shadow-xl border border-sb-gray border-t-0 rounded-b-md animation duration-500 ease bg-white w-full flex justify-center items-center'><span>...</span></div>}
          <iframe
            id="iframe-id"
            className={`${show ? "":"hidden "} shadow-xl border border-sb-gray border-t-0 rounded-b-md animation duration-500 ease `}
            width={rotate ? frameWidth[1] : frameWidth[0]}
            height={rotate ? frameWidth[0] : frameWidth[1]}
            title="iframe"
            src="https://o3xbo.sse.codesandbox.io/iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewAndEdit;
