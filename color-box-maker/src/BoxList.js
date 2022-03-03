import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";
import "./BoxList.css";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(boxes => [...boxes, newBox]);
  };

  const deleteBox = id => {
    setBoxes(boxes => {
      const copiedBoxes = [...boxes];
      const updatesBoxes = copiedBoxes.filter(box => box.id !== id);
      return updatesBoxes;
    });
  };

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}></NewBoxForm>
      <div className="BoxList-boxes-container">
        {boxes.map(({ width, height, color, id }) => (
          <Box
            width={width}
            height={height}
            color={color}
            key={id}
            id={id}
            deleteBox={deleteBox}
          ></Box>
        ))}
      </div>
    </div>
  );
};

export default BoxList;
