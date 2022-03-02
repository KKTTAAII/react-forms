import React from "react";
import "./Box.css";

const Box = ({ width, height, color, deleteBox, id }) => {
  const handleDelete = id => {
    deleteBox(id);
  };
  return (
    <div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: color,
      }}
      className="Box"
      id={id}
    >
      <button
        className="Box-delete"
        onClick={e => handleDelete(e.target.parentNode.id)}
      >
        x
      </button>
    </div>
  );
};

export default Box;
