import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [isInvalid, setInvalid] = useState(true);
  const [isTouched, setIsTouched] = useState(false);
  const handleChange = e => {
    setIsTouched(true);
    if (e.target.value === "") {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
    setTodo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isInvalid) {
      addTodo(todo);
      setTodo("");
    }
  };

  return (
    <div className="NewTodoForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo:</label>
        <input
          data-testid="todo-input"
          id="todo"
          name="todo"
          type="text"
          placeholder="walk the dog"
          value={todo}
          onChange={handleChange}
        ></input>
        {isInvalid && isTouched && (
          <span className="NewTodoForm-err">Todo is required</span>
        )}
        <br></br>
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
