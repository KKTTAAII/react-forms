import React from "react";
import BoxList from "./BoxList";
import { render, fireEvent, wait, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("renders app w/o crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment).toMatchSnapshot();
});

it("should show form", () => {
  const { getByText } = render(<BoxList />);
  expect(getByText("Make a box!")).toBeInTheDocument();
});

it("should show a new box", async () => {
  const { queryByText, queryByTestId } = render(<BoxList />);
  const heightInput = queryByTestId("height-input");
  const widthInput = queryByTestId("width-input");
  const colorInput = queryByTestId("color-input");
  const btn = queryByText("Make a box!");
  fireEvent.change(heightInput, { target: { value: "50" } });
  fireEvent.change(widthInput, { target: { value: "50" } });
  fireEvent.change(colorInput, { target: { value: "red" } });
  fireEvent.click(btn);
  await wait(() => {
    expect(queryByText("x")).toBeInTheDocument();
  });
});

it("shows error when fields are not filled", async () => {
  const { queryByText } = render(<BoxList />);
  const btn = queryByText("Make a box!");
  fireEvent.click(btn);
  await wait(() => {
    expect(queryByText("Width is required")).toBeInTheDocument();
  });
});
