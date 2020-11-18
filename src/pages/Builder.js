import React, { useState, useCallback } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Library from "../builder/library/Library";
import Compiled from "../builder//compiled/Compiled";
import { copy, reorder } from "../builder/assets";
import { useFirebase } from "../firebase/FirebaseContext";
import { Global } from "../global";

function BuilderThree({  fullPage }) {
  const saveName = JSON.parse(localStorage.getItem("selected"));
  const firebase = useFirebase();

  // Items are our Global list of component instances.
  const { items, setItems } = React.useContext(Global);

  // Filtered list of component instances based on what filter is selected in child compoonent
  // We use this list in our Library and then 'copy a component' from it as we drop into the Compiled Side
  const [filteredItems, setFilteredItems] = useState([]);
  
  // Auto Save
  const autoSave = useCallback(() => {
    if (saveName === "select to load") {
      return;
    }
    // firebase cant take the functions on our objects so we remove them here and reassign later on
    const itemsWithoutComponents = items.map((i) => {
      return {
        id: i.id,
        label: i.label,
        tag: i.tag,
        data: i.data || {}
      };
    });
    firebase.items().update({ [saveName]: itemsWithoutComponents });
  }, [items, firebase, saveName]);

  // Drag End
  const onDragEnd = useCallback(
    (result) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }

      switch (source.droppableId) {
        case destination.droppableId: {
          // Component is already in the compiled side and needs to be reordered
          setItems((state) => reorder(state, source.index, destination.index));
          autoSave();
          break;
        }
        case "LIBRARY":{
          // Grabbed a new component from the Libary and dropped on the right side,
          // into the compiled side
          setItems((state) => copy(filteredItems, state, source, destination));
          autoSave();
          break;
}
        default:
          break;
      }
    },
    [setItems, filteredItems, autoSave]
  );

  return (
    <div className="builder-app text-primary">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex">
          {!fullPage && (
            <Library
              items={filteredItems}
              setFilteredItems={setFilteredItems}
            />
          )}
          <div
            style={{backgroundColor:'#D6D6D6'}}
            className={`${
              fullPage ? "w-full" : "flex-1"
            } h-screen overflow-y-scroll overflox-x-hidden  border-l border-gray-500`}
          >
            <Compiled
              // fullPage={fullPage}
            />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
export default BuilderThree;
