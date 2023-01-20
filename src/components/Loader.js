import React, { useState } from "react";
import Types from "../config/types";
import { v4 as uuidv4 } from "uuid";
import DropZone from "./DropZone";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./DraggableItem";
const Loader = ({ element, handleDrop }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.Components,
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if ((item, dropResult)) {
        handleDrop(element.id, dropResult.id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;

  return (
    <div ref={drag}>
      {element.component}
      <div>
        {element.children.map((child, chidx) => {
          return (
            <div key={uuidv4()}>
              {/* <button
                onClick={() => removeTree(child.id)}
                style={{ color: "red" }}
              >
                Remove
              </button> */}
              <Loader key={chidx} handleDrop={handleDrop} element={child} />
            </div>
          );
        })}
      </div>
      <div>
        <DropZone id={element.id} />
      </div>
    </div>
  );
};

export default Loader;
