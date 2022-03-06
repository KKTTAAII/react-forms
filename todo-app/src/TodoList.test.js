import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders app w/o crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment).toMatchSnapshot();
});

it("should show form", () => {
  const { getByText } = render(<TodoList />);
  expect(getByText("Add todo")).toBeInTheDocument();
});

it("should show a new todo", async () => {
  const { queryByText, queryByTestId } = render(<TodoList />);
  const todoInput = queryByTestId("todo-input");
  const btn = queryByText("Add todo");
  fireEvent.change(todoInput, { target: { value: "walk the doggo" } });
  fireEvent.click(btn);
  await wait(() => {
    expect(queryByText("X")).toBeInTheDocument();
  });
});

it("shows error when fields are not filled", async () => {
  const { queryByText, queryByTestId } = render(<TodoList />);
  const todoInput = queryByTestId("todo-input");
  fireEvent.change(todoInput, { target: { value: "walk the doggo" } });
  fireEvent.change(todoInput, { target: { value: "" } });
  const btn = queryByText("Add todo");
  fireEvent.click(btn);
  await wait(() => {
    expect(queryByText("Todo is required")).toBeInTheDocument();
  });
});
