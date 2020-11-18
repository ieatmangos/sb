import React, { useRef, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import sections from "../../sections/allSections";
import LibraryDraggable from "./LibraryDraggable";

//  Child
//  Pick up and drag this component.
const getRenderItem = (items, className) => (provided, snapshot, rubric) => {
  const item = items[rubric.source.index];
  const label = item.label;
  const Component = useRef(null);
  const Comp = Component.current;

  useEffect(() => {
    const filterByLabel = sections.filter((x) => x.label === label)[0].c;
    Component.current = filterByLabel;
  }, [label]);

  if (!Component.current) {
    return null;
  }
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={provided.draggableProps.style}
      id="dr"
      className={`${
        snapshot.isDragging ? "dragging animation duration-300 " : ""
      }`}
    >
      <Comp />
    </div>
  );
};

// Child
// container box around the tailwind component while stationary
function Copyable({ items, droppableId, className }) {
  return (
    <Droppable
      renderClone={getRenderItem(items, className)}
      droppableId={droppableId}
      isDropDisabled={true}
    >
      {(provided, snapshot) => (
        <div ref={provided.innerRef} className={className}>
          <LibraryDraggable
            items={items}
            snapshot={snapshot}
            provided={provided}
          />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

// Parent
function LibraryComponents({ items, setShowLibary, setFilter }) {
  const label = localStorage.getItem("tag-filter");
  return (
    <div className=" px-4 max-w-md  ">
      <div className="flex items-center uppercase justify-between font-sbHeading text-black ">
        <p className="py-4 text-base">{label}</p>

        <button
          onClick={() => {
            localStorage.setItem("tag-filter", "");
            setShowLibary((c) => !c);
            setFilter("");
          }}
          className="text-lg"
        >
          &#10005;
        </button>
      </div>
      <Copyable
        droppableId="LIBRARY"
        className="grid grid-cols-1 gap-4"
        items={items}
      />
    </div>
  );
}
export default LibraryComponents;
