import React from "react";
import "./Todo.css";

const Todo = ({ todo, deleteTodo }) => {
  const handleDelete = () => {
    deleteTodo(todo);
  };
  return (
    <>
      <div className="Todo">
        {todo}
        <button onClick={handleDelete}>X</button>
      </div>
    </>
  );
};

export default Todo;
