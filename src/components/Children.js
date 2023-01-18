import React, { useState } from "react";
import Types from "../config/types";
const Children = ({ ...props }) => {
  const { element, onSelect, idx } = props;
  console.log(element);
  const [item, setItem] = useState("");
  const renderTypes = () => {
    return Object.keys(Types).map(function (key) {
      return (
        <option key={key} value={key}>
          {Types[key]["name"]}
        </option>
      );
    });
  };
  const selectType = (e, idx) => {
    const type = e.target.value;
    setItem(type);
    onSelect(e, idx);
  };
  return (
    <div>
      {element.component}
      <select
        value={item}
        onChange={(e) => {
          selectType(e, idx);
        }}
      >
        <option value="">Select Type</option>
        {renderTypes()}
      </select>
      <div>
        {element.childrens.map((children, chidx) => {
          console.log(chidx);
          return (
            <div key={chidx}>
              <h3>Children component : {idx}</h3>
              <Children
                key={idx}
                idx={`${idx}.${chidx}`}
                onSelect={onSelect}
                element={children}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Children;
