import React, { useState } from "react";
import Types from "../config/types";
import { v4 as uuidv4 } from "uuid";
const Loader = ({ ...props }) => {
  const { element, addChild, removeTree } = props;
  const [loaderType, setLoaderType] = useState("");
  const renderTypes = () => {
    return Object.keys(Types).map(function (key) {
      return (
        <option key={key} value={key}>
          {Types[key]["name"]}
        </option>
      );
    });
  };
  return (
    <div key={uuidv4()}>
      {element.component}
      <select value={loaderType} onChange={(e) => addChild(e, element.id)}>
        <option value="">Select Type</option>
        {renderTypes()}
      </select>

      <div>
        {element.children.map((child, chidx) => {
          return (
            <div key={uuidv4()}>
              <button
                onClick={() => removeTree(child.id)}
                style={{ color: "red" }}
              >
                Remove
              </button>
              <Loader
                key={chidx}
                idx={chidx}
                addChild={addChild}
                element={child}
                removeTree={removeTree}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Loader;
