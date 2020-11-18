import React from "react";
import { Droppable } from "react-beautiful-dnd";
import CompiledDraggable from "./CompiledDraggable";
import Controls from "../controls";

function Compiled({  fullPage }) {

  // const [hovState, setHovState] = React.useState(false);

  return (
    <>
    {!fullPage && <Controls/>}
      {/* <ViewFirebase hovState={hovState} items={items} setItems={setItems} /> */}
      <Droppable droppableId="BAG">
        {(provided, snapshot) => {
          return (
            <div ref={provided.innerRef}
             className={`
              pt-0 min-h-screen mx-auto
              
             ${fullPage ? ' max-w-full ':' max-w-4xl  p-4 '} `}>
                  <div
            style={{ minHeight: "75vh" }}
            className="animation duration-300 ease trellis-shadow border border-sb-gray border-t-0 rounded-b-md overflow-hidden bg-transparent flex flex-col justify-center"
            id="get-layout-html"
          >
              <CompiledDraggable
                // fullPage={fullPage}
              />
              </div>
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </>
  );
}

export default Compiled;
