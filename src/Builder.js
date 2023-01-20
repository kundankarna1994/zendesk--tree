import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Types from "./config/types";
import { v4 as uuidv4 } from "uuid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
const Builder = () => {
  const [results, setResults] = useState([]);

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
  const generateType = (type) => {
    return {
      ...Types[type],
      id: uuidv4(),
    };
  };
  const selectType = (e) => {
    const type = e.target.value;
    setResults((result) => [...result, generateType(type)]);
  };

  const findParent = (parent_id, trees, child) => {
    trees.map((tree) => {
      if (tree.id === parent_id) {
        tree.children = [...tree.children, child];
      } else {
        tree.children = findParent(parent_id, tree.children, child);
      }
    });
    return trees;
  };

  const addChild = (e, parent_id) => {
    const child = generateType(e.target.value);
    let trees = findParent(parent_id, results, child);
    setResults([...trees]);
  };

  const recursiveRemove = (id, trees) => {
    return trees
      .map((tree) => {
        return { ...tree };
      })
      .filter((tree) => {
        if ("children" in tree) {
          tree.children = recursiveRemove(id, tree.children);
        }
        return tree.id !== id;
      });
  };

  const findById = (id, trees) => {
    return trees
      .map((tree) => {
        return { ...tree };
      })
      .filter((tree) => {
        if ("children" in tree) {
          tree.children = recursiveRemove(id, tree.children);
        }
        return tree.id === id;
      });
  };

  const removeTree = (id) => {
    const trees = recursiveRemove(id, results);
    setResults([...trees]);
  };

  const handleDrop = (id, parentId) => {
    console.log(results);
    const child = findById(id, results);
    let trees = recursiveRemove(id, results);
    console.log(child);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <select value={item} onChange={selectType}>
          <option value="">Select Type</option>
          {renderTypes()}
        </select>

        <div>
          {results.map((result, idx) => {
            return (
              <div key={idx}>
                <p style={{ color: "blue" }}>Main Component </p>
                <button
                  onClick={() => removeTree(result.id)}
                  style={{ color: "red" }}
                >
                  Remove Component
                </button>
                <Loader key={idx} handleDrop={handleDrop} element={result} />
              </div>
            );
          })}
        </div>
      </div>
    </DndProvider>
  );
};

export default Builder;
