import React from "react";
import sections from "../../sections/allSections";
import CompiledPageItem from "./CompiledPageItem";
import { Draggable } from "react-beautiful-dnd";
import { Global } from "../../global";

const CompiledDraggable = React.memo(() => {
  const { items } = React.useContext(Global);
  return (items.map((item, index) => {
    return <Child key={index*99} item={item} index={index}/>
  }))
})
export default CompiledDraggable;


const Child = ({item, index}) => {
  const Component = sections.filter((x) => x.label === item.label)[0].c;

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
        >
          <CompiledPageItem
            id={item.id}
            label={item.label}
            Component={Component}
          />
        </div>
      )}
    </Draggable>
  );
};
