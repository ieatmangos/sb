import React from "react";
import { useSelectedLayout } from "../useSelectedLayout";
import EditLayer2 from "./EditLayer2";
import EditButton from "./EditButton";
import "./animation/EditAnimations.css";
import sections from "../sections/allSections";


const EditLayer1 = () => {
  const layout = useSelectedLayout();
  const [selectedInstance, setSelectedInstance] = React.useState(null);

  if(!layout){
    return null
  }

  return (
    <div className="flex h-full">
      <div className='h-full overflow-y-auto pb-24'>

        {/* Label */}
        <p className=" px-4 py-4 text-base font-sbHeading text-white">PAGE SECTIONS</p>

        {/* Buttons for each section which open up their input drawer */}
        { layout.map((instance) => (
            <div key={instance.label + instance.id + 'layer1'} className="text-sm">
                <EditButton
                  selectedInstance={selectedInstance}
                  setSelectedInstance={setSelectedInstance}
                  key={instance.id}
                  instance={instance}
                />
              
            </div>
          ))}
      </div>

      {/* Input Drawer */}
      { layout.map((instance,index) => {
          if (selectedInstance && selectedInstance.id === instance.id){
            return (
              <div key={index+instance.id+index} className={` animation duration-300 ease bg-white px-4 h-full overflow-y-auto`}
                style={{width: '20vw',maxWidth: '230px', }}
              >
                <EditLayer2  layout={layout} setSelectedInstance={setSelectedInstance} instance={instance} />
              </div>
            );}
            else return null
        })}


      {/* Hidden Component Map which configures our editable data */}
      <div className='hidden'>
      {   layout.map((instance) => {
            const Component = sections.filter(
              (x) => x.label === instance.label
            )[0].c;
            return(
            <div key={`hidden-parent-of-${instance.id}`} className="text-sm ">
           <Component key={`hidden-version-of-${instance.id}`} id={instance.id}/>
          {/* {console.log(instance)} */}
            </div>
          )})}
        </div>
        </div>
  );
};
export default EditLayer1;

