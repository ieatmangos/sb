import React from "react";
import { Draggable } from "react-beautiful-dnd";
import sections from "../../sections/allSections";
import LibraryPageItem from './LibraryPageItem'

const LibraryDraggable = ({ items, snapshot }) => {
  const [drag, setDrag] = React.useState(null);

  React.useEffect(() => {
    setDrag(
      items.map((item, index) => {

        const shouldRenderClone = item.id === snapshot.draggingFromThisWith;
        const Component = sections.filter((x) => x.label === item.label)[0].c;

        return (
          <React.Fragment key={`frag-${item.id}`}>
           
            {/* Copy which fills the library space of the component you grab and drag away */}
            {shouldRenderClone ? (
              <div>
                <p className="text-black text-xs py-2 ">{item.label}</p>
                <div
                  style={{ filter: "blur(2px)" }}
                  className="w-full library-zoom "
                >
                  <Component />
                </div>
              </div>
            ) : (
              // Regular Stationary Component
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`${snapshot.isDragging ? "" : "not-dragging"} `}
                  >
                    <LibraryPageItem label={item.label} Component={Component} />
                  </div>
                )}
              </Draggable>
            )}
          </React.Fragment>
        );
      })
    );
  }, [items, snapshot]);

  return drag;

};

export default LibraryDraggable;
