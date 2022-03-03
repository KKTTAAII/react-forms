import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = todo => {
    setTodoList(todoList => [...todoList, todo]);
  };

  const deleteTodo = todo => {
    setTodoList(todoList.filter(todoItem => todoItem !== todo));
  };

  return (
    <div>
      <NewTodoForm addTodo={addTodo} />
      <div className="TodoList-list-container">
        {todoList.map((todo, ind) => (
          <Todo todo={todo} key={ind} deleteTodo={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
