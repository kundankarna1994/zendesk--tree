import React, { useState, useRef, useEffect } from "react";
import { Tree } from "react-arborist";
import { v4 as uuidv4 } from "uuid";
import Types from "./config/types";

const FormBuilder = () => {
  const treeRef = useRef();
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(0);
  const renderTypes = () => {
    return Object.keys(Types).map(function (key) {
      return (
        <option key={key} value={key}>
          {Types[key]["name"]}
        </option>
      );
    });
  };
  const selectType = (e) => {
    const type = e.target.value;
    const generateType = {
      ...Types[type],
      id: uuidv4(),
      childrens: [],
      order: order,
    };
    setOrder(order + 1);
    console.log(generateType);
    setData((result) => [...result, generateType]);
  };
  const onMove = ({ dragIds, parentId, index }) => {
    console.log(dragIds, parentId, index);
    const fromIndex = data.findIndex((d) => {
      return d.id === dragIds[0];
    });

    const tmpOrder = data[index - 1]["order"];
    const newOrder = data[fromIndex]["order"];
    const newData = data;
    newData[fromIndex]["order"] = tmpOrder;
    newData[index - 1]["order"] = newOrder;
    const element = newData.splice(fromIndex, 1)[0];
    newData.splice(index - 1, 0, element);
    console.log(newData);
    setData(newData);
  };
  return (
    <div>
      <select onChange={selectType}>
        <option value="">Select Type</option>
        {renderTypes()}
      </select>
      <Tree
        initialData={data}
        width={600}
        height={1000}
        indent={24}
        rowHeight={36}
        paddingTop={30}
        paddingBottom={10}
        padding={25}
        // onMove={onMove}
      >
        {Node}
      </Tree>
    </div>
  );
};

function Node({ node, style, dragHandle }) {
  /* This node instance can do many things. See the API reference. */
  return (
    <div style={style} ref={dragHandle}>
      {node.data.component}
    </div>
  );
}
export default FormBuilder;
