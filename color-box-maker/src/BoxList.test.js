import React from "react";
import BoxList from "./BoxList";
import { render, fireEvent, wait, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

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
  const { getByText, queryByText } = render(<BoxList />);
  const height = getByText("Height:");
  const width = getByText("Width:");
  const color = getByText("Color:");
  const btn = queryByText("Make a box!");
  userEvent.type(height, "50");
  userEvent.type(width, "50");
  userEvent.type(color, "red");
  userEvent.click(btn);
  await waitFor(() => {
    expect("x").toBeInTheDocument();
  });
});
