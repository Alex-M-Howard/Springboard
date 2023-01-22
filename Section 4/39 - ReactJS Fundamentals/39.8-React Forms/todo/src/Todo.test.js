import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo.js";

it("should render", () => {
  render(<Todo />);
});

it("should render manual todo", () => {
  render(<Todo text='Testing' />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();
});
